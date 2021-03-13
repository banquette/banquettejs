/**
 * An observer that can be used to subscribe to an observable.
 * It resembles rxjs observer except the "complete" function which takes a result.
 */
export interface SimpleObserver<N, C = any> {
    next: (value: N) => void;
    error: (err: any) => void;
    complete: (value: C) => void;
}
