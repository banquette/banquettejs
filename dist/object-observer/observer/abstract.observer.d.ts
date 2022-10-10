import { UnsubscribeFunction } from "@banquette/event/type";
import { MutationType } from "../constant";
import { MutationEvent } from "../event/mutation.event";
import { MutationsCollectionEvent } from "../event/mutations-collection.event";
import { Mutation } from "../mutation";
export declare abstract class AbstractObserver<T extends object> {
    protected target: T;
    id: number;
    /**
     * The proxified target.
     */
    readonly proxy: T;
    /**
     * The dispatcher responsible of emitting the events to the outside.
     * Only created when `subscribe()` is called.
     */
    private eventDispatcher;
    private subscribeCounts;
    /**
     * List of mutations waiting to be dispatched asynchronously.
     */
    private mutationsQueue;
    /**
     * Array of parent observers.
     */
    private parents;
    constructor(name: string, target: T, parent?: AbstractObserver<any> | null);
    /**
     * Defines the priority of the observer.
     * The higher the priority the sooner the observer will be tested when a new object is to be observed.
     */
    static GetPriority(): number;
    /**
     * @inheritDoc
     */
    static Supports(target: any): boolean;
    /**
     * Subscribe to changes notifications in a synchronous way.
     * The callback will be called synchronously for each change.
     */
    subscribe(cb: (event: MutationEvent) => void, type?: MutationType | null, mask?: string | null): UnsubscribeFunction;
    /**
     * Subscribe to change notifications in batch.
     * The callback will only be called once per cycle, so it receives an array of events.
     */
    subscribeAsync(cb: (events: MutationsCollectionEvent) => void, type?: MutationType | null, mask?: string | null): UnsubscribeFunction;
    /**
     * Called once on initialization, so child observers can be setup.
     */
    protected observe(target: T): void;
    /**
     * Generic `get` handler doing nothing special.
     */
    protected get(target: any, key: string): any;
    /**
     * Generic `set` handler.
     */
    protected set(target: any, key: string | symbol, value: any): boolean;
    /**
     * Generic `deleteProperty` handler.
     */
    protected deleteProperty(target: any, key: string | symbol): boolean;
    /**
     * Register a new parent observer.
     */
    protected addParent(parent: AbstractObserver<any>, name: string): void;
    /**
     * Update the name of the observer for a given parent.
     */
    protected updateName(name: string, parent: AbstractObserver<any>): void;
    /**
     * Detach the observer from a parent.
     */
    protected detach(parent: AbstractObserver<any>): void;
    /**
     * Notify that a mutation has occurred.
     */
    protected notify(mutation: Mutation): void;
    /**
     * Try to create a sub observer for a property.
     * If the value is not observable, it is returned unchanged.
     */
    protected observeProperty(key: string, value: any): any;
    /**
     * Maybe detach the observer of a value, if applicable.
     */
    protected detachValue(value: any): void;
    /**
     * Test if a mutation matches a type of change and (optionally a path mask).
     */
    private matchMutation;
    /**
     * Filter an array of mutations to only keep those that match a type of change and (optionally a path mask).
     */
    private filterMutations;
    /**
     * Queue a mutation for asynchronous dispatch.
     */
    private queueNotify;
    /**
     * Wrap the common logic of all subscriptions.
     */
    private doSubscribe;
}
