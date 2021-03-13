import { UsageException } from "../error";
import { isObject, isUndefined } from "../utils";
import { isType } from "../utils/types/is-type";
import { SimpleObserver } from "./simple-observer";
import { ObserverEventType } from "./observer-event-type";
import { ObserverEventInterface } from "./observer-event.interface";

/**
 * A basic yet powerful observable meant to act more like a "Promise with progression" than like real observable like in rxjs.
 * Even it the public API looks a bit like rxjs, there are several key differences:
 *
 *   - "subscribe()" doesn't have to be called for the executor to be called, the process starts immediately (like a Promise),
 *
 *   - each time "subscribe()" is called the whole stack of events previously dispatched (calls to next()) will be replayed
 *     and the executor WILL NOT be executed again,
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
export class SimpleObservable<N, C = any> {
    /**
     * A promise is always created in parallel to be as easy to use as possible.
     */
    public readonly promise: Promise<C>;

    /**
     * Promise's callbacks.
     */
    private promiseResolve!: (result: C) => void;
    private promiseReject!: (reason: any) => void;

    /**
     * A flag to remember if the observable has been completed.
     */
    private completed: boolean = false;

    /**
     * List of registered observers.
     */
    private observers: Array<Partial<SimpleObserver<N, C>>> = [];

    /**
     * The stack of events in the order received by the observer.
     */
    private eventsStack: ObserverEventInterface[] = [];

    public constructor(executor: (observer: SimpleObserver<N, C>) => void) {
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
    public subscribe(next: Partial<SimpleObserver<N, C>>|((progress: N) => void),
                     error?: (reason: any) => void,
                     complete?: (result: C) => void): void {
        // local variable only here to have better naming ("observer" in local and "next" as parameter).
        let observer: Partial<SimpleObserver<N, C>>|((progress: N) => void) = next;
        if (!isType<Partial<SimpleObserver<N, C>>>(observer, isObject)) {
            observer = {next: observer, error, complete};
        }
        this.observers.push(observer);
        for (const event of this.eventsStack) {
            SimpleObservable.DispatchToObserver(observer, event.type, event.value);
        }
    }

    /**
     * Wrap the original executor to stack the events to they can be played back for each new subscribe.
     * Also add the capability to send a result when calling "complete()".
     */
    private execute(executor: (observer: SimpleObserver<N, C>) => void): void {
        executor({
            next: (progress: N) => void this.dispatch(ObserverEventType.next, progress),
            error: (reason: any) => {
                this.dispatch(ObserverEventType.error, reason);
                this.promiseReject(reason);
                this.completed = true;
            },
            complete: (result: C) => {
                this.dispatch(ObserverEventType.complete, result);
                this.promiseResolve(result);
                this.completed = true;
            }
        });
    }

    /**
     * Dispatch an event to all observers and save it to the stack.
     */
    private dispatch(type: ObserverEventType, value: any): void {
        if (this.completed) {
            throw new UsageException('The observable is already completed, you cannot send new events.');
        }
        this.eventsStack.push({type, value});
        for (const observer of this.observers) {
            SimpleObservable.DispatchToObserver(observer, type, value);
        }
    }

    /**
     * Dispatch an event to an observer (if subscribed).
     */
    private static DispatchToObserver(observer: Partial<SimpleObserver<any>>, type: ObserverEventType, value: any): void {
        const callback: any = observer[type];
        if (!isUndefined(callback)) {
            callback(value);
        }
    }
}
