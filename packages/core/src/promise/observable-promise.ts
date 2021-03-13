import { isObject, isUndefined } from "../utils";
import { isType } from "../utils/types/is-type";
import { PromiseCanceledException } from "./exception/authentication.exception";
import { ExecutorCallbacksInterface, } from "./executor-callbacks.interface";
import { PromiseEventType } from "./promise-event-type";
import { PromiseEventInterface } from "./promise-event.interface";
import { PromiseObserver } from "./promise-observer";
import { ExecutorFunction } from "./types";

/**
 * A Promise wrapper that you can subscribe to, adding progress events capabilities.
 * It works exactly like a classic promise and is compatible with the async/await syntax.
 *
 * This wrapper is used instead of rxjs observables for its simplicity and to avoid an external dependency.
 */
export class ObservablePromise<N, C = any> {
    /**
     * The actual promise object.
     */
    private readonly promise: Promise<C>;

    /**
     * A flag to remember if the promise has been resolved/rejected.
     */
    private completed: boolean = false;

    /**
     * List of registered observers.
     */
    private observers: Array<Partial<PromiseObserver<N, C>>> = [];

    /**
     * The stack of events in the order received by the observer.
     */
    private eventsStack: PromiseEventInterface[] = [];

    /**
     * Object holding the wrapper callbacks for resolve, reject and progress.
     */
    private executorCallbacks!: ExecutorCallbacksInterface<N, C>;

    public constructor(executor: ExecutorFunction<N, C>, private replayEvents: boolean = true) {
        this.promise = new Promise<C>((resolve, reject) => {
            this.executorCallbacks = {
                resolve: (result: C | PromiseLike<C>) => {
                    this.dispatch(PromiseEventType.resolve, result);
                    resolve(result);
                    this.completed = true;
                },
                reject: (reason: any) => {
                    this.dispatch(PromiseEventType.reject, reason);
                    reject(reason);
                    this.completed = true;
                },
                progress: (progress: N) => void this.dispatch(PromiseEventType.progress, progress)
            };
            executor(this.executorCallbacks.resolve, this.executorCallbacks.reject, this.executorCallbacks.progress);
        });
    }

    /**
     * Check if the observable has been completed.
     */
    public isCompleted(): boolean {
        return this.completed;
    }

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     */
    public then<T1 = C, T2 = never>(onResolve?: ((value: C) => T1 | PromiseLike<T1>) | undefined | null,
                                    onReject?: ((reason: any) => T2 | PromiseLike<T2>) | undefined | null): Promise<T1|T2> {
        return this.promise.then(onResolve, onReject);
    }

    /**
     * Attaches a callback for only the rejection of the Promise.
     */
    public catch<T = never>(onReject?: ((reason: any) => T | PromiseLike<T>) | undefined | null): Promise<C|T> {
        return this.promise.catch(onReject);
    }

    /**
     * Cancel the
     */
    public cancel(): void {
        if (!this.isCompleted()) {
            this.executorCallbacks.reject(new PromiseCanceledException('Canceled.'));
        }
    }

    /**
     * Subscribe to the observer.
     * All the events already triggered until now will be replayed immediately.
     */
    public subscribe(progress: Partial<PromiseObserver<N, C>>|((progress: N) => void),
                     resolve?: (result: C) => void,
                     reject?: (reason: any) => void): void {
        // local variable only here to have better naming ("observer" in local and "progress" as parameter).
        let observer: Partial<PromiseObserver<N, C>>|((progress: N) => void) = progress;
        if (!isType<Partial<PromiseObserver<N, C>>>(observer, isObject)) {
            observer = {progress: observer, resolve, reject};
        }
        this.observers.push(observer);
        if (this.replayEvents) {
            for (const event of this.eventsStack) {
                ObservablePromise.DispatchToObserver(observer, event.type, event.value);
            }
        }
    }

    /**
     * Dispatch an event to all observers and save it to the stack.
     */
    private dispatch(type: PromiseEventType, value: any): void {
        if (this.completed) {
            return void console.warn('The promise is already completed, you cannot send new events.');
        }
        this.eventsStack.push({type, value});
        for (const observer of this.observers) {
            ObservablePromise.DispatchToObserver(observer, type, value);
        }
    }

    /**
     * Dispatch an event to an observer (if subscribed).
     */
    private static DispatchToObserver(observer: Partial<PromiseObserver<any>>, type: PromiseEventType, value: any): void {
        const callback: any = observer[type];
        if (!isUndefined(callback)) {
            callback(value);
        }
    }
}
