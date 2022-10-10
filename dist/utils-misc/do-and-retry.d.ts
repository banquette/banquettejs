import { ObservablePromise } from "@banquette/promise/observable-promise";
import { GenericCallback, ReplaceReturnType } from "@banquette/utils-type/types";
export interface RetryOptionsInterface {
    /**
     * Maximum number of time the function will retry to do the task.
     * If <= 0, the number of tries is infinite.
     */
    maxTry?: number;
    /**
     * Minimum amount of time to wait between two tries.
     */
    minRetryDelay?: number;
    /**
     * Maximum amount of time to wait between two tries.
     */
    maxRetryDelay?: number;
}
/**
 * Execute a callback repeatedly until it either succeeds or reaches a maximum number of tries.
 */
export declare function doAndRetry<T>(options: RetryOptionsInterface, cb: () => T | Promise<T>): ObservablePromise<T>;
/**
 * Creates a function that will call `doAndRetry()` when invoked but that hides it from the outside
 * so it can be used like any other function.
 */
export declare function doAndRetryFactory<T, C extends Function = GenericCallback>(options: RetryOptionsInterface, context: any, cb: C): ReplaceReturnType<C, ObservablePromise<T>>;
