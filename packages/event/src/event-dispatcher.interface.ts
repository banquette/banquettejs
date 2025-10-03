import { DispatchResult } from "./dispatch-result";
import { EventArg } from './event-arg';
import { UnsubscribeFunction } from "./type";

export interface EventDispatcherInterface {
    /**
     * Subscribe to an event.
     */
    subscribe<T extends EventArg>(type: symbol,
                                  callback: (event: T) => void,
                                  priority?: number,
                                  filteringTags?: symbol[],
                                  propagationTags?: symbol[]): UnsubscribeFunction;

    /**
     * Trigger an event.
     * The promise will always resolve, when all subscribers have been executed.
     * If an error occurs, it is stored in DispatchResult. The promise will never reject.
     */
    dispatch<T = any>(type: symbol, event?: EventArg|null, sequential?: boolean, tags?: symbol[]): DispatchResult<T>;

    /**
     * Same as `dispatch()` but with additional error log in case something goes wrong.
     */
    dispatchWithErrorHandling<T = any>(type: symbol, event?: EventArg|null, sequential?: boolean, tags?: symbol[]): DispatchResult<T>;

    /**
     * Same as `dispatch()` but will throw if an error happens in one of the subscribers.
     */
    dispatchStrict<T = any>(type: symbol, event?: EventArg|null, sequential?: boolean, tags?: symbol[]): DispatchResult<T>;

    /**
     * Try to trigger and event but keep the call in a queue if no listeners have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    dispatchSafe(type: symbol, event?: EventArg|null): void;

    /**
     * Remove listeners of a certain type.
     * If no type is given, all subscribers will be removed.
     */
    clear(type?: symbol): void;
}
