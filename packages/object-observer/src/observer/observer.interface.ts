import { UnsubscribeFunction } from "@banquette/event/type";
import { MutationType } from "../constant";
import { MutationEvent } from "../event/mutation.event";
import { MutationsCollectionEvent } from "../event/mutations-collection.event";

export interface ObserverInterface<T extends object> {
    readonly proxy: T;

    /**
     * Subscribe to changes notifications in a synchronous way.
     * The callback will be called synchronously for each change.
     */
    subscribe(cb: (event: MutationEvent) => void, type: MutationType|null, mask: string|null): UnsubscribeFunction;

    /**
     * Subscribe to change notifications in batch.
     * The callback will only be called once per cycle, so it receives an array of events.
     */
    subscribeAsync(cb: (events: MutationsCollectionEvent) => void, type: MutationType|null, mask: string|null): UnsubscribeFunction;
}
