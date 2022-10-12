import { ExceptionFactory } from "@banquette/exception/exception.factory";
import { arrayIntersect } from "@banquette/utils-array/array-intersect";
import { Not } from "@banquette/utils-misc/not";
import { getSymbolDescription } from "@banquette/utils-object/get-symbol-description";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { DispatchResult } from "./dispatch-result";
import { EventArg } from './event-arg';
import { EventDispatcherInterface } from "./event-dispatcher.interface";
import { SubscriberInterface } from "./subscriber.interface";
import { UnsubscribeFunction } from "./type";

const DEFAULT_TAG = Symbol();

export class EventDispatcher implements EventDispatcherInterface {
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
     * @param type              symbol   The type of event.
     * @param callback          function The function to call when the event is triggered.
     * @param priority          number   (optional, default: 0) The level of priority, the higher the first.
     * @param filteringTags     symbol[] (optional, default: []) A list of tags used to filter the dispatches.
     * @param propagationTags   symbol[] (optional, default: []) Any subscriber matching a tag on this list will not be
     *                                                           called when the propagation is stopped from this subscriber.
     *
     * @return A function to call to unsubscribe.
     */
    public subscribe<T extends EventArg>(type: symbol,
                                         callback: (event: T) => void,
                                         priority: number = 0,
                                         filteringTags: symbol[]|null = null,
                                         propagationTags: symbol[] = []): UnsubscribeFunction {
        let subscribers: SubscriberInterface[]|undefined = this.subscribers[type], i;
        if (isUndefined(subscribers)) {
            this.subscribers[type] = subscribers = [];
        }
        if (!propagationTags.length) {
            propagationTags.push(DEFAULT_TAG);
        }
        let l = subscribers.length;
        const newSubscriber = {
            callback: callback as (event: EventArg) => void,
            priority,
            filteringTags,
            propagationTags
        };
        for (i = 0; i < l && subscribers[i].priority >= priority; ++i);
        if (i >= l) {
            subscribers.push(newSubscriber);
        } else {
            subscribers.splice(i, 0, newSubscriber);
        }
        let events: any;
        // If we have events waiting for a subscriber, trigger them.
        if (!isUndefined((events = this.queue[type]))) {
            // Now that events are copied into a local variable, we can remove them from the class property.
            delete (this.queue as any)[type];
            //
            // Then wait for an event loop cycle to have a better chance that all subscribers have time to register.
            // If we had triggered the event immediately only the first subscriber would have been notified.
            // This of course doesn't ensure all subscribers have time to register but still gives a better chance.
            //
            setTimeout(() => {
                for (const event of events) {
                    this.dispatchWithErrorHandling(type, event.arg);
                }
            });
        }
        return () => {
            for (let i = 0; i < subscribers!.length; ++i) {
                if (subscribers![i].callback === callback) {
                    subscribers!.splice(i, 1);
                    break ;
                }
            }
        };
    }

    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    public dispatch<T = any>(type: symbol, event?: EventArg|null, sequential: boolean = false, tags: symbol[] = []): DispatchResult<T> {
        const e = !isType<EventArg>(event, Not(isNullOrUndefined)) ? new EventArg() : event;
        const propagationStoppedTags: symbol[] = [];
        let propagationStopped: boolean = false;
        const subscribers: SubscriberInterface[] = ([] as SubscriberInterface[]).concat(this.subscribers[type] || []);
        const result = new DispatchResult<T>();
        let index = -1;

        const next = (): boolean => {
            if (++index >= subscribers.length) {
                return false;
            }
            const subscriber = subscribers[index];
            if (index > 0 && e.propagationStopped) {
                // We could add duplicates this way but it doesn't matter.
                // The cost of removing them exceed the benefit imho.
                Array.prototype.push.apply(propagationStoppedTags, subscribers[index - 1].propagationTags);
                e.restorePropagation();
                propagationStopped = true;
            }
            if (!arrayIntersect(propagationStoppedTags, subscriber.propagationTags).length &&
                (subscriber.filteringTags === null || (!tags.length && !subscriber.filteringTags.length) || arrayIntersect(tags, subscriber.filteringTags).length > 0)) {
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
                        return false;
                    }
                    return true;
                } catch (e) {
                    // dispatch() must never throw, so if an exception is thrown,
                    // we capture it and set the result on error.
                    // The end user can then decide to throw the error stored in "errorDetails" if they want to.
                    result.fail(e);
                    return false;
                }
            }
            return true;
        };
        let cont = subscribers.length > 0;
        while (cont) {
            cont = next();
        }
        if (event && event.defaultPrevented) {
            result.preventDefault();
        }
        return result;
    }

    /**
     * Same as `dispatch()` but with additional error log in case something goes wrong.
     */
    public dispatchWithErrorHandling<T = any>(type: symbol, event?: EventArg|null, sequential: boolean = false, tags: symbol[] = []): DispatchResult<T> {
        const result = this.dispatch(type, event, sequential, tags);
        const handleError = (error: any) => {
            const message = `Dispatch failed for Symbol("${getSymbolDescription(type)}"). Reason: ${ExceptionFactory.EnsureException(error).message}`;
            console.error(message, error);
        };
        if (result.promise) {
            result.promise.catch(handleError);
        } else if (result.error) {
            handleError(result.errorDetail);
        }
        return result;
    }

    /**
     * Try to trigger and event but keep the call in a queue if no subscribers have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    public dispatchSafe(type: symbol, event?: EventArg|null): void {
        event = isNullOrUndefined(event) ? new EventArg() : event;
        const subscribers: SubscriberInterface[] = this.subscribers[type] || [];
        if (subscribers.length > 0) {
            return void this.dispatchWithErrorHandling(type, event);
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
}
