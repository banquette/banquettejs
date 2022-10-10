import { Constructor } from "@banquette/utils-type/types";
import { ObservablePromiseInterface } from "./observable-promise.interface";
import { ThenableInterface } from "./thenable.interface";
import { ExecutorFunction, onFinallyCallback, onRejectCallback, onResolveCallback } from "./types";
/**
 * A enhanced Promise that you can subscribe to, adding progress events capabilities.
 * It works exactly like a classic promise and is compatible with the async/await syntax.
 *
 * The base promise implementation is based on the work of Maciej Cieślar, thanks to him.
 * @see https://www.freecodecamp.org/news/how-to-implement-promises-in-javascript-1ce2680a7f51/
 */
export declare class ObservablePromise<CompleteT = any> implements ObservablePromiseInterface<CompleteT> {
    private parent?;
    [Symbol.toStringTag]: string;
    /**
     * A flag to remember if the promise has been resolved/rejected.
     */
    private status;
    /**
     * The resolution value of the promise.
     */
    private result;
    /**
     * List of registered observers.
     */
    private observers;
    /**
     * History of progress calls. Used to replay progression events when subscribing to the progress event.
     */
    private progressHistory;
    /**
     * Only true if a catchOf() follows.
     */
    private canForwardReject;
    private doForwardReject;
    constructor(executor: ExecutorFunction<CompleteT>, parent?: ObservablePromise<any> | undefined);
    /**
     * Attaches callbacks for the resolution, rejection and/or progress events of the promise.
     */
    then<ResultT = CompleteT, RejectT = never, ProgressT = never>(onResolve?: onResolveCallback<CompleteT, ResultT> | null, onReject?: onRejectCallback<RejectT> | null, onProgress?: (progress: ProgressT) => void, progressTypes?: Array<Constructor>): ObservablePromiseInterface<ResultT | RejectT>;
    /**
     * Attaches a callback that will be called if the promise rejects.
     */
    catch<RejectT = never>(onReject?: onRejectCallback<RejectT> | null): ObservablePromiseInterface<CompleteT | RejectT>;
    /**
     * Like catch() but only calling the callback if the rejection reason is an object matching of the the type defined in parameter.
     */
    catchOf<RejectT = never>(type: Constructor | Array<Constructor>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT | RejectT>;
    /**
     * Like catchOf() but requires the type NOT to match for the callback to fire.
     */
    catchNotOf<RejectT = never>(type: Constructor | Array<Constructor>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT | RejectT>;
    /**
     * Subscribe to the promise progression events.
     */
    progress<ProgressT = any>(onProgress: (progress: ProgressT) => void, types?: Array<Constructor>): ObservablePromiseInterface<CompleteT>;
    /**
     * Attaches a callback that will be called when the promise is settled, no matter if it resolves or rejects.
     */
    finally<ResultT = CompleteT, RejectT = never>(onSettle: onFinallyCallback<ResultT> | null): ObservablePromiseInterface<ResultT | RejectT>;
    /**
     * Forces the rejection of the promise with a CancelException.
     */
    cancel(): void;
    /**
     * Rejects the callback with a "TimeoutException" if not settled in the given delay.
     */
    timeout(delay: number): ObservablePromiseInterface<CompleteT>;
    /**
     * Check if the promise is still pending.
     */
    isPending(): boolean;
    /**
     * Check if the promise has been resolved.
     */
    isFulfilled(): boolean;
    /**
     * Check if the promise has been rejected.
     */
    isRejected(): boolean;
    toString(): string;
    forwardReject(): void;
    /**
     * Resolve the promise.
     */
    private resolve;
    /**
     * Reject the promise.
     */
    private reject;
    /**
     * Notify of the progress.
     */
    private notify;
    /**
     * Register one or multiple callbacks.
     */
    private subscribe;
    /**
     * Set the result value of the promise, and its definitive status.
     */
    private settle;
    /**
     * Dispatch an event to all registered observers.
     */
    private dispatch;
    /**
     * Centralize the catchOf() logic so we can inverse the condition.
     */
    private catchBasedOnType;
    /**
     * Create a resolved promise.
     */
    static Resolve<T>(value?: T | ThenableInterface<T>): ObservablePromise<T>;
    /**
     * Create a rejected promise.
     */
    static Reject<T>(value: any): ObservablePromise<T>;
    /**
     * Create a resolved promise.
     *
     * This method is only here to comply to the Promises/A+ specification.
     * All static methods normally start with an uppercase letter in Banquette.
     */
    static resolve<T>(value: T | ThenableInterface<T>): ObservablePromise<T>;
    /**
     * Create a rejected promise.
     *
     * This method is only here to comply to the Promises/A+ specification.
     * All static methods normally start with an uppercase letter in Banquette.
     */
    static reject<T>(reason: any): ObservablePromise<T>;
    /**
     * Wait for all entries of the collection to resolve and resolve with an array of the results.
     * The items of the collection are not forced to be promises, any value can be given.
     */
    static All<T>(collection: Array<T | ThenableInterface<T>>): ObservablePromiseInterface<T[]>;
    /**
     * Wait for the first promise to resolve or reject and forward the result to the promise returned by the function.
     * The items of the collection are not forced to be promises, any value can be given, non promise items will resolve immediately.
     */
    static Any<T = any>(collection: Array<T | ThenableInterface<T>>): ObservablePromiseInterface<T>;
    /**
     * Resolve with a given value after a delay in milliseconds.
     */
    static ResolveAfterDelay<T = any>(delay: number, value?: T): ObservablePromise<T>;
    /**
     * Ensure the promise is resolved after a minimum amount of time.
     * If the promise resolves sooner, a timer will wait for the remaining time.
     */
    static MinDelay<T = any>(delay: number, executor: ExecutorFunction<T>): ObservablePromise<T>;
    /**
     * Convert a status into the corresponding event type.
     */
    private static EventTypeFromStatus;
    /**
     * Bind a function to a context, optionally partially applying any arguments.
     */
    private static Proxy;
}
