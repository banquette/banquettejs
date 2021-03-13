import { UsageException } from "../error";
import { isObject, isUndefined } from "../utils";
import { isType } from "../utils/types/is-type";
import { PromiseEventType } from "./promise-event-type";
import { PromiseEventInterface } from "./promise-event.interface";
import { PromiseObserver } from "./promise-observer";

/**
 * A Promise wrapper that you can subscribe to, adding progress events capabilities.
 *
 * The API is analog to an observable, with several key differences:
 *
 *   - "subscribe()" doesn't have to be called for the executor to be called, the process starts immediately,
 *
 *   - each time "subscribe()" is called the whole stack of events previously dispatched (calls to next()) will be replayed
 *     and the executor will NOT be executed again,
 *
 *   - the "complete" callback can receive a completion result.
 *
 *   - a "isCompleted()" method is available to easily test the completion of the observable.
 *
 * And most of all, this simple class is not designed to replace rxjs at all. It is mainly used internally
 * in place of a simple Promise where being able to trigger multiple events is useful (like an HTTP request).
 *
 * It also remove the rxjs dependency from the tools which is a good saving on bundle size.
 */
export class ObservablePromise<N, C = any> {
    /**
     * The actual promise object.
     */
    public readonly promise: Promise<C>;

    /**
     * Promise's callbacks.
     */
    private promiseResolve!: (result: C) => void;
    private promiseReject!: (reason: any) => void;

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

    public constructor(executor: (observer: PromiseObserver<N, C>) => void) {
        this.promise = new Promise<C>((resolve, reject) => {
            this.promiseResolve = resolve;
            this.promiseReject = reject;
        });
        this.execute(executor);
    }

    /**
     * Check if the observable has been completed.
     */
    public isCompleted(): boolean {
        return this.completed;
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
        for (const event of this.eventsStack) {
            ObservablePromise.DispatchToObserver(observer, event.type, event.value);
        }
    }

    /**
     * Wrap the original executor to stack the events to they can be played back for each new subscribe.
     * Also add the capability to send a result when calling "complete()".
     */
    private execute(executor: (observer: PromiseObserver<N, C>) => void): void {
        executor({
            progress: (progress: N) => void this.dispatch(PromiseEventType.progress, progress),
            reject: (reason: any) => {
                this.dispatch(PromiseEventType.reject, reason);
                this.promiseReject(reason);
                this.completed = true;
            },
            resolve: (result: C) => {
                this.dispatch(PromiseEventType.resolve, result);
                this.promiseResolve(result);
                this.completed = true;
            }
        });
    }

    /**
     * Dispatch an event to all observers and save it to the stack.
     */
    private dispatch(type: PromiseEventType, value: any): void {
        if (this.completed) {
            throw new UsageException('The promise is already completed, you cannot send new events.');
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
