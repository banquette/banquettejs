import { ObservablePromise } from "@banquette/promise";
import { EventArg } from './event-arg';
import { UnsubscribeFunction } from "./type";

export interface EventDispatcherInterface {
    /**
     * Subscribe to an event.
     */
    subscribe<T extends EventArg>(type: symbol, callback: (event: T) => void, priority?: number, tags?: symbol[]): UnsubscribeFunction;

    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    dispatch<T = any>(type: symbol, event?: EventArg|null, sync?: boolean): ObservablePromise<T[]>;

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
