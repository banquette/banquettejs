import { ensureArray, ExceptionFactory, getFromSymbolIndex, isNullOrUndefined, isUndefined } from "@banquette/core";
import { injectable } from "inversify";
import { EventArg } from './event-arg';
import { EventDispatcherInterface } from "./event-dispatcher.interface";

interface Subscriber {
    priority: number;
    tags: symbol[];
    callback: (event: EventArg) => void;
}

@injectable()
export class EventDispatcher implements EventDispatcherInterface {
    private static DEFAULT_TAG = Symbol('default');

    /**
     * Object holding an array of callbacks for each event name.
     */
    private subscribers: Record<symbol, Subscriber[]>;

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
        const subscribers: Subscriber[] = this.getSubscribersForType(type);
        if (!tags.length) {
            tags.push(EventDispatcher.DEFAULT_TAG);
        }
        subscribers.push({callback: callback as (event: EventArg) => void, priority, tags});
        subscribers.sort((a: Subscriber, b: Subscriber) => {
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
            const subscribers: Subscriber[] = this.getSubscribersForType(type).filter((subscriber: Subscriber) => {
                return subscriber.callback !== callback;
            });
            this.setSubscribersForType(type, subscribers);
        };
    }

    /**
     * Trigger an event.
     * The promise will resolve when all subscribers have been executed.
     */
    public async dispatch(type: symbol, arg: EventArg = new EventArg()): Promise<void> {
        // We don't care about the result here, calling dispatchFromResponse is only to avoid repeating the same logic.
        await this.dispatchForResponse(type, arg);
    }

    /**
     * Trigger an event synchronously.
     * This method will not wait for asynchronous subscribers to finish.
     */
    public dispatchSync(type: symbol, arg?: EventArg): void {
        this.dispatchForResponseSync(type, arg);
    }

    /**
     * Try to trigger and event but keep the call in a queue if no subscribers have been registered yet.
     * The dispatch will run again when a subscriber is registered.
     */
    public dispatchSafe(type: symbol, arg?: EventArg): void {
        const subscribers: Subscriber[] = this.getSubscribersForType(type);
        if (subscribers.length > 0) {
            return void this.dispatch(type, arg);
        }
        const queue = ensureArray(getFromSymbolIndex(this.queue, type));
        queue.push({arg});
        Object.assign(this.queue, {[type]: queue});
    }

    /**
     * Trigger an event and return responses of callbacks.
     * This method will wait for promises to resolve.
     */
    public async dispatchForResponse<R>(type: symbol, arg: EventArg = new EventArg()): Promise<R[]> {
        const responses: any[] = [];
        const propagationStoppedTags: symbol[] = [];
        const subscribers: Subscriber[] = this.getSubscribersForType(type);
        for (const subscriber of subscribers) {
            if (subscriber.tags.filter((tag: symbol) => propagationStoppedTags.indexOf(tag) < 0).length > 0) {
                try {
                    const response: any = await subscriber.callback(arg);
                    if (!isUndefined(response)) {
                        responses.push(response);
                    }
                    if (arg.isPropagationStopped()) {
                        // We could add duplicates this way but it doesn't matter.
                        // The cost of removing them exceed the benefit imho.
                        Array.prototype.push.apply(propagationStoppedTags, subscriber.tags);
                        arg.restorePropagation();
                    }
                } catch (e) {
                    throw ExceptionFactory.EnsureException(e);
                }
            }
        }
        return responses;
    }

    /**
     * Trigger an event and return responses of callbacks.
     * This method will not wait for asynchronous subscribers to finish before returning.
     */
    public dispatchForResponseSync<R>(type: symbol, arg: EventArg = new EventArg()): R[] {
        const responses: any[] = [];
        const propagationStoppedTags: symbol[] = [];
        const subscribers: Subscriber[] = this.getSubscribersForType(type);
        for (const subscriber of subscribers) {
            if (subscriber.tags.filter((tag: symbol) => propagationStoppedTags.indexOf(tag) < 0).length > 0) {
                try {
                    const response: any = subscriber.callback(arg);
                    if (!isUndefined(response)) {
                        responses.push(response);
                    }
                    if (arg.isPropagationStopped()) {
                        // We could add duplicates this way but it doesn't matter.
                        // The cost of removing them exceed the benefit imho.
                        Array.prototype.push.apply(propagationStoppedTags, subscriber.tags);
                        arg.restorePropagation();
                    }
                } catch (e) {
                    throw ExceptionFactory.EnsureException(e);
                }
            }
        }
        return responses;
    }

    /**
     * Trigger an event and return responses of callbacks.
     * This method will wait for promises to resolve.
     */
    public async dispatchForSingleResponse<R>(type: symbol, arg?: EventArg, strategy: 'first' | 'last' | number = 'last'): Promise<R|null> {
        const responses = await this.dispatchForResponse<R>(type, arg);
        if (responses.length > 0) {
            if (strategy === 'last') {
                return responses.pop() as R;
            } else if (strategy === 'first') {
                return responses.shift() as R;
            }
            if (responses.length > strategy) {
                return responses[strategy];
            }
        }
        return null;
    }

    /**
     * Trigger an event and return responses of callbacks.
     * This method will not wait for asynchronous subscribers to finish before returning.
     */
    public dispatchForSingleResponseSync<R>(type: symbol, arg: EventArg, strategy: 'first' | 'last' | number): R|null {
        const responses = this.dispatchForResponseSync<R>(type, arg);
        if (responses.length > 0) {
            if (strategy === 'last') {
                return responses.pop() as R;
            } else if (strategy === 'first') {
                return responses.shift() as R;
            }
            if (responses.length > strategy) {
                return responses[strategy];
            }
        }
        return null;
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
    private getSubscribersForType(type: symbol): Subscriber[] {
        const subscribers: Subscriber[]|null = getFromSymbolIndex(this.subscribers, type) as Subscriber[]|null;
        return subscribers !== null ? subscribers : [];
    }

    /**
     * Update the list of subscribers for a type of event.
     *
     * Workaround until TypeScript allow for symbols as object indexes.
     * @see https://github.com/microsoft/TypeScript/issues/1863
     */
    private setSubscribersForType(type: symbol, subscribers: Subscriber[]): void {
        Object.assign(this.subscribers, {[type]: subscribers});
    }
}
