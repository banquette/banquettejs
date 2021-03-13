/**
 * The observer is given to the executor function of the promise.
 * The following methods trigger events that will be dispatched to all subscribers.
 */
export interface PromiseObserver<N, C = any> {
    /**
     * Reject the promise, like any classical promise.
     */
    reject: (err: any) => void;

    /**
     * Resolve the promise, like any classical promise.
     */
    resolve: (value: C) => void;

    /**
     * Trigger a progress event that will nor resolve or reject the promise.
     * progress() can be called any number of times.
     */
    progress: (value: N) => void;
}
