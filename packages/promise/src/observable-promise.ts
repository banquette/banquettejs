import { UsageException } from "@banquette/exception/usage.exception";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { isType } from "@banquette/utils-type/is-type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor, GenericCallback } from "@banquette/utils-type/types";
import { CancelException } from "./exception/cancel.exception";
import { TimeoutException } from "./exception/timeout.exception";
import { ObservablePromiseInterface } from "./observable-promise.interface";
import { ProgressObserverInterface } from "./progress-observer.interface";
import { PromiseEventType } from "./promise-event-type";
import { PromiseObserverInterface } from "./promise-observer.interface";
import { PromiseStatus } from "./promise-status";
import { ThenableInterface } from "./thenable.interface";
import {
    ExecutorFunction,
    onFinallyCallback,
    onRejectCallback,
    onResolveCallback,
    ProgressCallback,
    RejectCallback,
    ResolveCallback
} from "./types";

/**
 * A enhanced Promise that you can subscribe to, adding progress events capabilities.
 * It works exactly like a classic promise and is compatible with the async/await syntax.
 *
 * The base promise implementation is based on the work of Maciej Cieślar, thanks to him.
 * @see https://www.freecodecamp.org/news/how-to-implement-promises-in-javascript-1ce2680a7f51/
 */
export class ObservablePromise<CompleteT = any> implements ObservablePromiseInterface<CompleteT> {
    public [Symbol.toStringTag]: string = 'ObservablePromise';

    /**
     * A flag to remember if the promise has been resolved/rejected.
     */
    private status: PromiseStatus = PromiseStatus.Pending;

    /**
     * The resolution value of the promise.
     */
    private result!: CompleteT;

    /**
     * List of registered observers.
     */
    private observers: Array<PromiseObserverInterface<CompleteT>> = [];

    /**
     * History of progress calls. Used to replay progression events when subscribing to the progress event.
     */
    private progressHistory: any[] = [];

    /**
     * Only true if a catchOf() follows.
     */
    private canForwardReject: boolean = false;
    private doForwardReject: boolean = false;

    public constructor(executor: ExecutorFunction<CompleteT>, private parent?: ObservablePromise) {
        try {
            executor(
                ObservablePromise.Proxy(this.resolve, this),
                ObservablePromise.Proxy(this.reject, this),
                ObservablePromise.Proxy(this.notify, this)
            );
        } catch (e) {
            this.reject(e);
        }
    }

    /**
     * Attaches callbacks for the resolution, rejection and/or progress events of the promise.
     */
    public then<ResultT = CompleteT, RejectT = never, ProgressT = never>(
        onResolve?: onResolveCallback<CompleteT, ResultT> | null,
        onReject?: onRejectCallback<RejectT> | null,
        onProgress?: (progress: ProgressT) => void,
        progressTypes: Array<Constructor> = []): ObservablePromiseInterface<ResultT|RejectT> {
        return new ObservablePromise<ResultT>((resolve: ResolveCallback<ResultT>, reject: RejectCallback, progress: ProgressCallback) => {
            const subscriber = {
                onResolve: (result: CompleteT) => {
                    if (!onResolve) {
                        return void resolve(result as any);
                    }
                    try {
                        resolve(onResolve(result));
                    } catch (e) {
                        subscriber.onReject(e);
                    }
                }, onReject: (reason: any) => {
                    if (!onReject) {
                        return reject(reason);
                    }
                    try {
                        const subResult = onReject(reason) as any;
                        if (this.doForwardReject) {
                            reject(subResult);
                        } else {
                            resolve(subResult);
                        }
                    } catch (e) {
                        reject(e);
                    } finally {
                        this.doForwardReject = false;
                    }
                }, onProgress: {
                    types: progressTypes,
                    callback: (value: any) => {
                        if (!onProgress) {
                            return progress(value);
                        }
                        try {
                            onProgress(value);
                        } catch (e) {
                            subscriber.onReject(e);
                        }
                    }
                }
            };
            this.subscribe(subscriber);
        }, this);
    }

    /**
     * Attaches a callback that will be called if the promise rejects.
     */
    public catch<RejectT = never>(onReject?: onRejectCallback<RejectT> | null): ObservablePromiseInterface<CompleteT|RejectT> {
        if (this.parent) {
            this.parent.forwardReject();
        }
        return this.then((value: CompleteT) => value, onReject);
    }

    /**
     * Like catch() but only calling the callback if the rejection reason is an object matching of the the type defined in parameter.
     */
    public catchOf<RejectT = never>(type: Constructor|Array<Constructor>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT> {
        return this.catchBasedOnType(ensureArray(type), true, onReject);
    }

    /**
     * Like catchOf() but requires the type NOT to match for the callback to fire.
     */
    public catchNotOf<RejectT = never>(type: Constructor|Array<Constructor>, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT> {
        return this.catchBasedOnType(ensureArray(type), false, onReject);
    }

    /**
     * Subscribe to the promise progression events.
     */
    public progress<ProgressT = any>(onProgress: (progress: ProgressT) => void,
                                     types: Array<Constructor> = []): ObservablePromiseInterface<CompleteT> {
        return this.then((value: CompleteT) => value, undefined, onProgress, types);
    }

    /**
     * Attaches a callback that will be called when the promise is settled, no matter if it resolves or rejects.
     */
    public finally<ResultT = CompleteT, RejectT = never>(onSettle: onFinallyCallback<ResultT> | null): ObservablePromiseInterface<ResultT|RejectT> {
        return new ObservablePromise<ResultT>((resolve: ResolveCallback<ResultT>, reject: RejectCallback) => {
            let rejected = false;
            let result: any;
            return this.then(
                (value: CompleteT) => {
                    result = value;
                    if (onSettle) {
                        onSettle();
                    }
                },
                (reason: any) => {
                    result = reason;
                    rejected = true;
                    if (onSettle) {
                        onSettle();
                    }
                }
            ).then(() => {
                if (rejected) {
                    return reject(result);
                }
                return resolve(result);
            });
        });
    }

    /**
     * Forces the rejection of the promise with a CancelException.
     */
    public cancel(): void {
        this.reject(new CancelException());
    }

    /**
     * Rejects the callback with a "TimeoutException" if not settled in the given delay.
     */
    public timeout(delay: number): ObservablePromiseInterface<CompleteT> {
        return new ObservablePromise((resolve: ResolveCallback<any>, reject: RejectCallback, progress: ProgressCallback) => {
            setTimeout(() => {
                if (this.isPending()) {
                    this.reject(new TimeoutException());
                }
            }, delay);
            return this.then(resolve, reject, progress);
        });
    }

    /**
     * Check if the promise is still pending.
     */
    public isPending(): boolean {
        return this.status === PromiseStatus.Pending;
    }

    /**
     * Check if the promise has been resolved.
     */
    public isFulfilled(): boolean {
        return this.status === PromiseStatus.Fulfilled;
    }

    /**
     * Check if the promise has been rejected.
     */
    public isRejected(): boolean {
        return this.status === PromiseStatus.Rejected;
    }

    public toString() {
        return '[object ObservablePromise]';
    }

    public forwardReject(): void {
        this.canForwardReject = true;
    }

    /**
     * Resolve the promise.
     */
    private resolve(result: CompleteT | ObservablePromiseInterface<CompleteT>): void {
        return this.settle(result, PromiseStatus.Fulfilled);
    }

    /**
     * Reject the promise.
     */
    private reject(reason: any): void {
        return this.settle(reason, PromiseStatus.Rejected);
    }

    /**
     * Notify of the progress.
     */
    private notify(value: any): void {
        this.progressHistory.push(value);
        this.dispatch(PromiseEventType.progress, value);
    }

    /**
     * Register one or multiple callbacks.
     */
    private subscribe<ResultT = CompleteT, RejectT = any, ProgressT = any>(
        handlers: {onResolve?: onResolveCallback<CompleteT, ResultT>,
        onReject?: onRejectCallback<RejectT>,
        onProgress?: ProgressObserverInterface<ProgressT>}): void {
        this.observers.push({
            onResolve: handlers.onResolve || ((value: CompleteT) => value),
            onReject: handlers.onReject || (() => {}),
            onProgress: handlers.onProgress || {
                callback: () => {},
                types: []
            }
        });
        if (this.status !== PromiseStatus.Pending) {
            this.dispatch(ObservablePromise.EventTypeFromStatus(this.status), this.result, this.observers.length - 1);
        }
        for (const value of this.progressHistory) {
            this.dispatch(PromiseEventType.progress, value, this.observers.length - 1);
        }
    }

    /**
     * Set the result value of the promise, and its definitive status.
     */
    private settle(result: any, status: PromiseStatus): void {
        setTimeout(() => {
            if (status === PromiseStatus.Pending) {
                throw new UsageException('You can\'t set the pending status.');
            }
            if (this.status !== PromiseStatus.Pending) {
                return ;
            }
            if (result instanceof ObservablePromise) {
                return void result.then(
                    ObservablePromise.Proxy(this.resolve, this),
                    ObservablePromise.Proxy(this.reject, this),
                    ObservablePromise.Proxy(this.notify, this)
                );
            }
            if (isType<Promise<any>>(result, isPromiseLike)) {
                return void result.then(
                    ObservablePromise.Proxy(this.resolve, this),
                    ObservablePromise.Proxy(this.reject, this)
                );
            }
            this.result = result;
            this.status = status;
            this.dispatch(ObservablePromise.EventTypeFromStatus(this.status), result);
            this.observers = [];
        });
    }

    /**
     * Dispatch an event to all registered observers.
     */
    private dispatch(type: PromiseEventType, value: any, observerIndex?: number): void {
        const doDispatch = (observer: PromiseObserverInterface<any>) => {
            switch (type) {
                case PromiseEventType.resolve: {
                    observer.onResolve(value);
                } break ;

                case PromiseEventType.reject: {
                    observer.onReject(value);
                } break ;

                case PromiseEventType.progress: {
                    if (!observer.onProgress.types.length) {
                        observer.onProgress.callback(value);
                    }
                } break ;
            }
        }
        if (isUndefined(observerIndex)) {
            for (const observer of this.observers) {
                doDispatch(observer);
            }
        } else if (this.observers.length > observerIndex) {
            doDispatch(this.observers[observerIndex]);
        } else {
            throw new UsageException(`Out of bounds observer index (${observerIndex}), ${this.observers.length} observers in array.`);
        }
    }

    /**
     * Centralize the catchOf() logic so we can inverse the condition.
     */
    private catchBasedOnType<RejectT>(types: Array<Constructor>, shouldMatch: boolean, onReject: onRejectCallback<RejectT>): ObservablePromiseInterface<CompleteT|RejectT> {
        if (this.parent) {
            this.parent.forwardReject();
        }
        return this.then((value: CompleteT) => value, (reason: any): RejectT | ThenableInterface<RejectT> => {
            const pos: number|null = isObject(reason) ? types.indexOf(reason.constructor) : null;
            if ((!shouldMatch && pos === null) || (pos !== null && ((shouldMatch && pos > -1) || (!shouldMatch && pos < 0)))) {
                onReject(reason);
                return reason;
            }
            if (this.canForwardReject) {
                this.doForwardReject = true;
                throw reason;
            }
            return reason;
        });
    }

    /**
     * Create a resolved promise.
     */
    public static Resolve<T>(value?: T | ThenableInterface<T>): ObservablePromise<T> {
        return new ObservablePromise<T>((resolve: ResolveCallback<T>) => {
            resolve(value);
        });
    }

    /**
     * Create a rejected promise.
     */
    public static Reject<T>(value: any): ObservablePromise<T> {
        return new ObservablePromise<T>((resolve: ResolveCallback<T>, reject: RejectCallback) => {
            reject(value);
        });
    }

    /**
     * Create a resolved promise.
     *
     * This method is only here to comply to the Promises/A+ specification.
     * All static methods normally start with an uppercase letter in Banquette.
     */
    public static resolve<T>(value: T | ThenableInterface<T>): ObservablePromise<T> {
        return ObservablePromise.Resolve(value);
    }

    /**
     * Create a rejected promise.
     *
     * This method is only here to comply to the Promises/A+ specification.
     * All static methods normally start with an uppercase letter in Banquette.
     */
    public static reject<T>(reason: any): ObservablePromise<T> {
        return ObservablePromise.Reject(reason);
    }

    /**
     * Wait for all entries of the collection to resolve and resolve with an array of the results.
     * The items of the collection are not forced to be promises, any value can be given.
     */
    public static All<T>(collection: Array<T | ThenableInterface<T>>): ObservablePromiseInterface<T[]> {
        return new ObservablePromise<T[]>((resolve: ResolveCallback<T[]>, reject: RejectCallback) => {
            collection = ensureArray(collection);
            let done = 0;
            const results: T[] = new Array(collection.length);
            for (let i = 0; i < collection.length; ++i) {
                ObservablePromise.Resolve(collection[i]).then(((_i: number) => {
                    return (result: T) => {
                        results[_i] = result;
                        if (++done === collection.length) {
                            resolve(results);
                        }
                    };
                })(i)).catch(reject);
            }
        });
    }

    /**
     * Wait for the first promise to resolve or reject and forward the result to the promise returned by the function.
     * The items of the collection are not forced to be promises, any value can be given, non promise items will resolve immediately.
     */
    public static Any<T = any>(collection: Array<T | ThenableInterface<T>>): ObservablePromiseInterface<T> {
        return new ObservablePromise<T>((resolve: ResolveCallback<T>, reject: RejectCallback) => {
            let settled = false;
            for (const item of collection) {
                ObservablePromise.Resolve(item).then((result: T) => {
                    if (!settled) {
                        resolve(result);
                    }
                }).catch((reason: any) => {
                    if (!settled) {
                        reject(reason);
                    }
                }).finally(() => {
                    settled = true;
                });
            }
        });
    }

    /**
     * Resolve with a given value after a delay in milliseconds.
     */
    public static ResolveAfterDelay<T = any>(delay: number, value?: T): ObservablePromise<T> {
        return new ObservablePromise<T>((resolve: ResolveCallback<T>) => {
            setTimeout(() => {
                resolve(value as T);
            }, delay);
        });
    }

    /**
     * Ensure the promise is resolved after a minimum amount of time.
     * If the promise resolves sooner, a timer will wait for the remaining time.
     */
    public static MinDelay<T = any>(delay: number, executor: ExecutorFunction<T>): ObservablePromise<T> {
        const startTime = (new Date()).getTime();
        return new ObservablePromise<T>((resolve: ResolveCallback<T>, reject: RejectCallback) => {
            const forward = (type: PromiseEventType, result?: any) => {
                if (type === PromiseEventType.resolve) {
                    resolve(result);
                } else if (type === PromiseEventType.reject) {
                    reject(result);
                }
            };
            const forwardIfDelay = (type: PromiseEventType, result?: any) => {
                const delta = (new Date()).getTime() - startTime;
                if (delta >= delay) {
                    forward(type, result);
                } else {
                    setTimeout(() => {
                        forward(type, result);
                    }, delay - delta);
                }
            };
            const sub = new ObservablePromise(executor);
            sub.then((result: T) => {
                forwardIfDelay(PromiseEventType.resolve, result);
            }).catch((reason: any) => {
                forwardIfDelay(PromiseEventType.reject, reason);
            });
        });
    }

    /**
     * Convert a status into the corresponding event type.
     */
    private static EventTypeFromStatus(status: PromiseStatus): PromiseEventType {
        switch (status) {
            case PromiseStatus.Fulfilled: return PromiseEventType.resolve;
            case PromiseStatus.Rejected: return PromiseEventType.reject;
            default: return PromiseEventType.progress;
        }
    }

    /**
     * Bind a function to a context, optionally partially applying any arguments.
     */
    private static Proxy(fn: GenericCallback, context: any): GenericCallback {
        const args: any = Array.prototype.slice.call(arguments, 2);
        return function() {
            // @ts-ignore
            return fn.apply(context || this, args.concat(Array.prototype.slice.call(arguments)));
        };
    }
}
