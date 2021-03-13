import {
    ensureArray,
    ExceptionFactory,
    getFromSymbolIndex,
    isNullOrUndefined,
    isPromiseLike, Not, ObservablePromise, PromiseObserver
} from "@banquette/core";
import { injectable } from "inversify";
import { isType } from "../../core/src/utils/types/is-type";
import { DispatchCallInterface } from "./dispatch-call.interface";
import { EventArg } from './event-arg';
import { EventDispatcherInterface } from "./event-dispatcher.interface";
import { SubscriberInterface } from "./subscriber.interface";

@injectable()
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
    public subscribe<T extends EventArg>(type: symbol, callback: (event: T) => void, priority: number = 0, tags: symbol[] = []): () => void {
        const subscribers: SubscriberInterface[] = this.getSubscribersForType(type);
        if (!tags.length) {
            tags.push(EventDispatcher.DEFAULT_TAG);
        }
        subscribers.push({callback: callback as (event: EventArg) => void, priority, tags});
        subscribers.sort((a: SubscriberInterface, b: SubscriberInterface) => {
            return b.priority - a.priority;
        });
        this.setSubscribersForType(type, subscribers);
        let events: any;
        // If we have events waiting for a subscriber, trigger them.
        if ((events = getFromSymbolIndex(this.queue, type)) !== null) {
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
            const subscribers: SubscriberInterface[] = this.getSubscribersForType(type).filter((subscriber: SubscriberInterface) => {
                return subscriber.callback !== callback;
            });
            this.setSubscribersForType(type, subscribers);
        };
    }

    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    public dispatch<T = any>(type: symbol, event?: EventArg|null, sync: boolean = false): ObservablePromise<DispatchCallInterface<T>, T[]> {
        // Forced to assign a new variable because if reassigning "event" the compiler still thinks it can be of type "null" or "undefined".
        const e = !isType<EventArg>(event, Not(isNullOrUndefined)) ? new EventArg() : event;
        return new ObservablePromise<DispatchCallInterface<T>, T[]>((resolve, reject, progress) => {
            const propagationStoppedTags: symbol[] = [];
            const subscribers: SubscriberInterface[] = this.getSubscribersForType(type);
            const results: T[] = [];
            let doneCount = 0;
            let skippedCount = 0;
            let index = -1;
            const next = () => {
                if (++index >= subscribers.length) {
                    return void resolve(results);
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
                        const result: any = subscriber.callback(e);
                        const call: DispatchCallInterface<T> = {
                            doneCount,
                            skippedCount,
                            subscriber,
                            result,
                            event: e
                        };
                        if (!sync && isPromiseLike(result)) {
                            (result as Promise<any>).then((result) => {
                                results.push(result);
                                call.result = result;
                                progress(call);
                                next();
                            }).catch((reason: any) => {
                                reject(ExceptionFactory.EnsureException(reason));
                            });
                        } else {
                            results.push(result);
                            progress(call);
                            next();
                        }
                        ++doneCount;
                    } catch (e) {
                        reject(ExceptionFactory.EnsureException(e));
                    }
                } else {
                    ++skippedCount;
                    next();
                }
            };
            next();
        });
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
        const queue = ensureArray(getFromSymbolIndex(this.queue, type));
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
            this.setSubscribersForType(type, []);
        }
    }

    /**
     * Get the list of subscribers for a type of event.
     *
     * Workaround until TypeScript allow for symbols as object indexes.
     * @see https://github.com/microsoft/TypeScript/issues/1863
     */
    private getSubscribersForType(type: symbol): SubscriberInterface[] {
        const subscribers: SubscriberInterface[]|null = getFromSymbolIndex(this.subscribers, type) as SubscriberInterface[]|null;
        return subscribers !== null ? subscribers : [];
    }

    /**
     * Update the list of subscribers for a type of event.
     *
     * Workaround until TypeScript allow for symbols as object indexes.
     * @see https://github.com/microsoft/TypeScript/issues/1863
     */
    private setSubscribersForType(type: symbol, subscribers: SubscriberInterface[]): void {
        Object.assign(this.subscribers, {[type]: subscribers});
    }
}
