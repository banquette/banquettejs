import { ProgressObserverInterface } from "./progress-observer.interface";
import { onRejectCallback, onResolveCallback } from "./types";

/**
 * Object holding subscriptions to one or multiple events.
 */
export interface PromiseObserverInterface<CompleteT> {
    /**
     * Function to call when the promise is resolved.
     */
    onResolve: onResolveCallback<CompleteT, any>;

    /**
     * Function to call when the promise is rejected.
     */
    onReject: onRejectCallback<any>;

    /**
     * Trigger a progress event that will nor resolve or reject the promise.
     * progress() can be called any number of times.
     */
    onProgress: ProgressObserverInterface<any>;
}
