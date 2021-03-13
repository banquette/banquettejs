import { EventArg } from "./event-arg";
import { SubscriberInterface } from "./subscriber.interface";

/**
 * Represent a call to a subscriber by the event dispatcher.
 */
export interface DispatchCallInterface<T = any> {
    /**
     * Number of subscribers called until the current one.
     */
    doneCount: number;

    /**
     * Number of subscribers skipped until the current one.
     */
    skippedCount: number;

    /**
     * The event the subscriber has been called with.
     * You can use it to stop the propagation if needed.
     */
    event: EventArg;

    /**
     * The subscriber being called.
     */
    subscriber: SubscriberInterface;

    /**
     * The result returned by the subscriber (if any).
     */
    result: T;
}
