import { DispatchResult } from "./dispatch-result";
import { EventArg } from './event-arg';
import { EventDispatcherInterface } from "./event-dispatcher.interface";
import { UnsubscribeFunction } from "./type";
export declare class EventDispatcher implements EventDispatcherInterface {
    /**
     * Object holding an array of callbacks for each event name.
     */
    private subscribers;
    /**
     * Queue of events that are waiting for a subscriber to register.
     */
    private queue;
    constructor();
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
    subscribe<T extends EventArg>(type: symbol, callback: (event: T) => void, priority?: number, filteringTags?: symbol[] | null, propagationTags?: symbol[]): UnsubscribeFunction;
    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    dispatch<T = any>(type: symbol, event?: EventArg | null, sequential?: boolean, tags?: symbol[]): DispatchResult<T>;
    /**
     * Same as `dispatch()` but with additional error log in case something goes wrong.
     */
    dispatchWithErrorHandling<T = any>(type: symbol, event?: EventArg | null, sequential?: boolean, tags?: symbol[]): DispatchResult<T>;
    /**
     * Try to trigger and event but keep the call in a queue if no subscribers have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    dispatchSafe(type: symbol, event?: EventArg | null): void;
    /**
     * Remove all registered subscribers.
     */
    clear(type?: symbol): void;
}
