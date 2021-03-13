import { isObject, isUndefined } from "../utils";
import { isType } from "../utils/types/is-type";
import { CompletableWithResultObserver } from "./completable-with-result-observer";
import { ObserverEventType } from "./observer-event-type";
import { ObserverEventInterface } from "./observer-event.interface";

/**
 * A basic yet powerful observable meant to act more like a "Promise with progression" than like rxjs observables.
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
 * in place of a simple Promise but where being able to trigger multiple events is useful (like an HTTP request).
 *
 * It also remove the rxjs dependency from the tools which is a good saving on the bundle size.
 */
export class SimpleObservable<N, C = any> {
    /**
     * A flag to remember if the observable has been completed.
     */
    private completed: boolean = false;

    /**
     * List of registered observers.
     */
    private observers: Array<Partial<CompletableWithResultObserver<N, C>>>  = [];

    /**
     * The stack of events in the order received by the observer.
     */
    private eventsStack: ObserverEventInterface[] = [];

    public constructor(executor: (observer: CompletableWithResultObserver<N, C>) => void) {
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
    public subscribe(next: Partial<CompletableWithResultObserver<N, C>>|((progress: N) => void),
                     error?: (reason: any) => void,
                     complete?: (result: C) => void): void {
        // local variable only here to have better naming ("observer" in local and "next" as parameter).
        let observer: Partial<CompletableWithResultObserver<N, C>>|((progress: N) => void) = next;
        if (!isType<Partial<CompletableWithResultObserver<N, C>>>(observer, isObject)) {
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
    private execute(executor: (observer: CompletableWithResultObserver<N, C>) => void): void {
        executor({
            error: (reason: any) => void this.dispatch(ObserverEventType.error, reason),
            next: (progress: N) => void this.dispatch(ObserverEventType.next, progress),
            complete: (result: C) => {
                this.dispatch(ObserverEventType.complete, result);
                this.completed = true;
            }
        });
    }

    /**
     * Dispatch an event to all observers and save it to the stack.
     */
    private dispatch(type: ObserverEventType, value: any): void {
        this.eventsStack.push({type, value});
        for (const observer of this.observers) {
            SimpleObservable.DispatchToObserver(observer, type, value);
        }
    }

    /**
     * Dispatch an event to an observer (if subscribed).
     */
    private static DispatchToObserver(observer: Partial<CompletableWithResultObserver<any>>, type: ObserverEventType, value: any): void {
        const callback: any = observer[type];
        if (!isUndefined(callback)) {
            callback(value);
        }
    }
}
