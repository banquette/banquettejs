import { EventArg, EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { MatchType, match } from "@banquette/utils-glob";
import { proxy } from "@banquette/utils-misc";
import { isObject, isUndefined } from "@banquette/utils-type";
import { ObserverEvents, MutationType, ObserverInstance } from "../constant";
import { MutationEvent } from "../event/mutation.event";
import { MutationsCollectionEvent } from "../event/mutations-collection.event";
import { Mutation } from "../mutation";
import { extractObserver } from "../utils";
import {ObserverFactory} from "../observer.factory";

let maxId = 0;

/**
 * Because an observed value can be assigned to multiple observed objects,
 * any observer can have multiple parents.
 *
 * But the name of the property being observed can differ for each parent, that's why there is this interface.
 */
interface ParentInterface {
    /**
     * A reference on the parent observer.
     */
    parent: AbstractObserver<any>;

    /**
     * The name of the current observer for its parent.
     */
    name: string;
}

export abstract class AbstractObserver<T extends object> {
    public id = ++maxId;

    /**
     * The proxified target.
     */
    public readonly proxy: T;

    /**
     * The dispatcher responsible for emitting the events to the outside.
     * Only created when `subscribe()` is called.
     */
    private eventDispatcher: EventDispatcher|null = null;
    private subscribeCounts: Record<symbol, number> = {};

    /**
     * List of mutations waiting to be dispatched asynchronously.
     */
    private mutationsQueue: Mutation[] = [];

    /**
     * Array of parent observers.
     */
    private parents: ParentInterface[] = [];

    public constructor(name: string,
                       protected target: T,
                       parent: AbstractObserver<any>|null = null) {
        if (parent !== null) {
            this.parents.push({name, parent});
        }
        this.proxy = new Proxy(target, {
            get: proxy(this.get, this),
            set: proxy(this.set, this),
            deleteProperty: proxy(this.deleteProperty, this)
        });
        this.observe(target);
    }

    /**
     * Defines the priority of the observer.
     * The higher the priority the sooner the observer will be tested when a new object is to be observed.
     */
    public static GetPriority(): number {
        return 0;
    }

    /**
     * @inheritDoc
     */
    public static Supports(target: any): boolean {
        throw new UsageException('`AbstractObserver::Supports()` must be overridden.');
    }

    /**
     * Subscribe to changes notifications in a synchronous way.
     * The callback will be called synchronously for each change.
     */
    public subscribe(cb: (event: MutationEvent) => void, type: MutationType|null = null, mask: string|null = null): UnsubscribeFunction {
        return this.doSubscribe<MutationEvent>(ObserverEvents.ChangedSync, (event: MutationEvent) => {
            if (this.matchMutation(event.mutation, type, mask)) {
                cb(event);
            }
        });
    }

    /**
     * Subscribe to change notifications in batch.
     * The callback will only be called once per cycle, so it receives an array of events.
     */
    public subscribeAsync(cb: (events: MutationsCollectionEvent) => void, type: MutationType|null = null, mask: string|null = null): UnsubscribeFunction {
        return this.doSubscribe<MutationsCollectionEvent>(ObserverEvents.ChangedAsync, (event: MutationsCollectionEvent) => {
            const relevantMutations = this.filterMutations(event.mutations, type, mask);
            if (relevantMutations.length) {
                cb(new MutationsCollectionEvent(relevantMutations));
            }
        });
    }

    /**
     * Called once on initialization, so child observers can be setup.
     */
    protected observe(target: T): void {

    }

    /**
     * Generic `get` handler doing nothing special.
     */
    protected get(target: any, key: string): any {
        if (key === ObserverInstance) {
            return this;
        }
        return target[key];
    }

    /**
     * Generic `set` handler.
     */
    protected set(target: any, key: string|symbol, value: any): boolean {
        const oldValue = target[key];
        const newValue = this.observeProperty(String(key), value);
        if (value !== oldValue) {
            this.detachValue(oldValue);
            target[key] = newValue;

            this.notify(new Mutation(
                isUndefined(oldValue) ? MutationType.Insert : MutationType.Update,
                [String(key)],
                oldValue,
                newValue,
                this.target
            ));
        }
        return true;
    }

    /**
     * Generic `deleteProperty` handler.
     */
    protected deleteProperty(target: any, key: string|symbol): boolean {
        const oldValue = target[key];

        this.detachValue(oldValue);
        delete target[key];
        this.notify(new Mutation(
            MutationType.Delete,
            [String(key)],
            oldValue,
            undefined,
            this.target
        ));
        return true;
    }

    /**
     * Register a new parent observer.
     */
    protected addParent(parent: AbstractObserver<any>, name: string): void {
        this.parents.push({parent, name});
    }

    /**
     * Update the name of the observer for a given parent.
     */
    protected updateName(name: string, parent: AbstractObserver<any>): void {
        for (const item of this.parents) {
            if (item.parent === parent) {
                item.name = name;
            }
        }
    }

    /**
     * Detach the observer from a parent.
     */
    protected detach(parent: AbstractObserver<any>): void {
        for (let i = 0; i < this.parents.length; ++i) {
            if (this.parents[i].parent === parent) {
                this.parents.splice(i--, 1);
            }
        }
    }

    /**
     * Notify that a mutation has occurred.
     */
    protected notify(mutation: Mutation): void {
        if (this.parents.length > 0) {
            for (const parent of this.parents) {
                // Forced to create a clone because the path may differ for each parent.
                parent.parent.notify(new Mutation(
                    mutation.type,
                    [parent.name].concat(mutation.pathParts),
                    mutation.oldValue,
                    mutation.newValue,
                    mutation.target
                ));
            }
        }
        if (this.eventDispatcher === null) {
            return ;
        }
        if (this.subscribeCounts[ObserverEvents.ChangedSync]) {
            this.eventDispatcher.dispatchWithErrorHandling(ObserverEvents.ChangedSync, new MutationEvent(mutation));
        }
        if (this.subscribeCounts[ObserverEvents.ChangedAsync]) {
            this.queueNotify(mutation);
        }
    }

    /**
     * Try to create a sub observer for a property.
     * If the value is not observable, it is returned unchanged.
     */
    protected observeProperty(key: string, value: any): any {
        if (isObject(value)) {
            const existingObserver = extractObserver(value);
            if (existingObserver instanceof AbstractObserver) {
                if (existingObserver.id !== this.id) {
                    existingObserver.addParent(this, key);
                }
                return value;
            }
        }
        if (ObserverFactory.Supports(value)) {
            const observer = ObserverFactory.Create(value, this, key);
            return observer.proxy;
        }
        return value;
    }

    /**
     * Maybe detach the observer of a value, if applicable.
     */
    protected detachValue(value: any): void {
        if (isObject(value)) {
            const existingObserver = extractObserver(value);
            if (existingObserver instanceof AbstractObserver) {
                if (existingObserver !== this) {
                    existingObserver.detach(this);
                }
            }
        }
    }

    /**
     * Test if a mutation matches a type of change and (optionally a path mask).
     */
    private matchMutation(mutation: Mutation, type: MutationType|null, mask: string|null): boolean {
        if (type !== null && (type & mutation.type) !== mutation.type) {
            return false;
        }
        if (mask !== null) {
            const matchResult = match(mask, mutation.path);
            if (matchResult.pattern !== MatchType.Full) {
                return false;
            }
        }
        return true;
    }

    /**
     * Filter an array of mutations to only keep those that match a type of change and (optionally a path mask).
     */
    private filterMutations(mutations: Mutation[], type: MutationType|null, mask: string|null): Mutation[] {
        return mutations.filter((mutation: Mutation) => {
            return this.matchMutation(mutation, type, mask);
        });
    }

    /**
     * Queue a mutation for asynchronous dispatch.
     */
    private queueNotify = (() => {
        let queued = false;
        return (mutation: Mutation): void => {
            this.mutationsQueue.push(mutation);
            if (!queued) {
                queued = true;
                queueMicrotask(() => {
                    if (this.eventDispatcher !== null) {
                        this.eventDispatcher.dispatchWithErrorHandling(ObserverEvents.ChangedAsync, new MutationsCollectionEvent(this.mutationsQueue));
                    }
                    this.mutationsQueue = [];
                    queued = false;
                });
            }
        };
    })();

    /**
     * Wrap the common logic of all subscriptions.
     */
    private doSubscribe<T extends EventArg>(eventType: symbol, cb: (event: T) => void): UnsubscribeFunction {
        if (this.eventDispatcher === null) {
            this.eventDispatcher = new EventDispatcher();
            this.subscribeCounts = {
                [ObserverEvents.ChangedSync]: 0,
                [ObserverEvents.ChangedAsync]: 0
            };
        }
        let unsubscribed = false;
        const unsubscribe = this.eventDispatcher.subscribe(eventType, cb);
        this.subscribeCounts[eventType]++;
        return () => {
            if (!unsubscribed) {
                this.subscribeCounts[eventType]--;
                unsubscribe();
            }
            unsubscribed = true;
        };
    }
}
