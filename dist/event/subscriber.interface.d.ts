import { EventArg } from "./event-arg";
export interface SubscriberInterface {
    /**
     * The level of priority, the higher the first.
     */
    priority: number;
    /**
     * A list of tags used to filter the dispatches.
     * If `null` the subscriber will be called for every dispatch, even if it contains tags.
     */
    filteringTags: symbol[] | null;
    /**
     * Any subscriber matching a tag on this list will not be
     * called when the propagation is stopped from this subscriber.
     */
    propagationTags: symbol[];
    /**
     * The function to call when the event is triggered.
     */
    callback: (event: EventArg) => any;
}
