import { EventArg } from './event-arg';

export interface EventDispatcherInterface {
    /**
     * Subscribe to an event.
     */
    subscribe<T extends EventArg>(type: symbol, callback: (event: T) => void, priority?: number, tags?: symbol[]): () => void;

    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    dispatch(type: symbol, arg?: EventArg): Promise<void>;

    /**
     * Trigger an event synchronously.
     * This method will not wait for asynchronous subscribers to finish.
     */
    dispatchSync(type: symbol, arg?: EventArg): void;

    /**
     * Try to trigger and event but keep the call in a queue if no listeners have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    dispatchSafe(type: symbol, arg?: EventArg): void;

    /**
     * Trigger an event and return responses of callbacks.
     * This method will wait for promises to resolve.
     */
    dispatchForResponse<R>(type: symbol, arg: EventArg): Promise<R[]>;

    /**
     * Trigger an event and return responses of callbacks.
     * This method will not wait for asynchronous subscribers to finish before returning.
     */
    dispatchForResponseSync<R>(type: symbol, arg: EventArg): R[];

    /**
     * Trigger an event and return responses of callbacks.
     * This method will wait for promises to resolve.
     */
    dispatchForSingleResponse<R>(type: symbol, arg: EventArg, strategy: 'first' | 'last' | number): Promise<R|null>;

    /**
     * Trigger an event and return responses of callbacks.
     * This method will not wait for asynchronous subscribers to finish before returning.
     */
    dispatchForSingleResponseSync<R>(type: symbol, arg: EventArg, strategy: 'first' | 'last' | number): R|null;

    /**
     * Remove listeners of a certain type.
     * If no type is given, all subscribers will be removed.
     */
    clear(type?: symbol): void;
}
