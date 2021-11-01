import { Not } from "@banquette/utils-misc";
import { ensureArray, isNullOrUndefined, isType, isUndefined } from "@banquette/utils-type";
import { EventArg } from './event-arg';
import { EventDispatcherInterface } from "./event-dispatcher.interface";
import { SubscriberInterface } from "./subscriber.interface";
import { UnsubscribeFunction } from "./type";
import { DispatchResult } from "./dispatch-result";

export class EventDispatcher implements EventDispatcherInterface {
    private static DEFAULT_TAG = Symbol('default');

    /**
     * Object holding an array of callbacks for each event name.
     */
    private subscribers: Record<symbol, SubscriberInterface[]>;

    /**
     * Queue of events that are waiting for a subscriber to register.
     */
    private queue: Record<symbol, Array<{arg?: EventArg}>>;

    public constructor() {
        this.subscribers = {};
        this.queue = {};
    }

    /**
     * Subscribe to an event.
     *
     * @param type     symbol   The type of event.
     * @param callback function The function to call when the event is triggered.
     * @param priority number   (optional, default: 0) The level of priority, the higher the first.
     * @param tags     symbol[] (optional, default: []) The tags to associate with the subscriber.
     *
     * @return A function to call to unsubscribe.
     */
    public subscribe<T extends EventArg>(type: symbol, callback: (event: T) => void, priority: number = 0, tags: symbol[] = []): UnsubscribeFunction {
        const subscribers: SubscriberInterface[] = this.getSubscribersForType(type);
        if (!tags.length) {
            tags.push(EventDispatcher.DEFAULT_TAG);
        }
        subscribers.push({callback: callback as (event: EventArg) => void, priority, tags});
        subscribers.sort((a: SubscriberInterface, b: SubscriberInterface) => {
            return b.priority - a.priority;
        });
        this.subscribers[type] = subscribers;
        let events: any;
        // If we have events waiting for a subscriber, trigger them.
        if (!isUndefined((events = this.queue[type]))) {
            // Now that events are copied into a local variable, we can remove them from the class property.
            delete (this.queue as any)[type];
            //
            // Then wait for an event loop cycle to have a better chance that all subscribers have time to register.
            // If we would have triggered the event immediately only the first subscriber would have been notified.
            // This of course doesn't ensure all subscribers have time to register but still gives a better chance.
            //
            window.setTimeout(() => {
                for (const event of events) {
                    this.dispatch(type, event.arg);
                }
            });
        }
        return () => {
            this.subscribers[type] = this.getSubscribersForType(type).filter((subscriber: SubscriberInterface) => {
                return subscriber.callback !== callback;
            });
        };
    }

    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    public dispatch<T = any>(type: symbol, event?: EventArg|null, sequential: boolean = false): DispatchResult<T> {
        const e = !isType<EventArg>(event, Not(isNullOrUndefined)) ? new EventArg() : event;
        const propagationStoppedTags: symbol[] = [];
        const subscribers: SubscriberInterface[] = this.getSubscribersForType(type);
        const result = new DispatchResult<T>();
        let index = -1;

        const next = () => {
            if (++index >= subscribers.length) {
                return ;
            }
            const subscriber = subscribers[index];
            if (index > 0 && e.isPropagationStopped()) {
                // We could add duplicates this way but it doesn't matter.
                // The cost of removing them exceed the benefit imho.
                Array.prototype.push.apply(propagationStoppedTags, subscribers[index - 1].tags);
                e.restorePropagation();
            }
            if (subscriber.tags.filter((tag: symbol) => propagationStoppedTags.indexOf(tag) < 0).length > 0) {
                try {
                    const subResult: any = subscriber.callback(e);
                    result.registerCall({
                        subscriber,
                        result: subResult,
                        event: e
                    });
                    if (sequential && result.localPromise !== null) {
                        // Don't catch because localPromise is already caught internally
                        // and we don't want to continue if one of the subscriber fails.
                        // If the promise rejects, the result will fail and nothing else will happen.
                        result.localPromise.then(next);
                    } else {
                        next();
                    }
                } catch (e) {
                    // dispatch() must never throw, so if an exception is thrown,
                    // we capture it and set the result on error.
                    // The end user can then decide to throw the error stored in "errorDetails" if they want to.
                    result.fail(e);
                }
            } else {
                next();
            }
        };
        next();
        return result;
    }

    /**
     * Try to trigger and event but keep the call in a queue if no subscribers have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    public dispatchSafe(type: symbol, event?: EventArg|null): void {
        event = isNullOrUndefined(event) ? new EventArg() : event;
        const subscribers: SubscriberInterface[] = this.getSubscribersForType(type);
        if (subscribers.length > 0) {
            return void this.dispatch(type, event);
        }
        const queue = ensureArray(this.queue[type]);
        queue.push({event});
        Object.assign(this.queue, {[type]: queue});
    }

    /**
     * Remove all registered subscribers.
     */
    public clear(type?: symbol): void {
        if (isNullOrUndefined(type)) {
            this.subscribers = {};
        } else {
            this.subscribers[type] = [];
        }
    }

    /**
     * Get the list of subscribers for a type of event.
     */
    private getSubscribersForType(type: symbol): SubscriberInterface[] {
        return !isUndefined(this.subscribers[type]) ? this.subscribers[type] : [];
    }
}
