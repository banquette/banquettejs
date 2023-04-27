import { ObservablePromise, ProgressCallback, RejectCallback, ResolveCallback, } from '@banquette/promise';
import { isPromiseLike, isValidNumber, GenericCallback, ReplaceReturnType, } from '@banquette/utils-type';

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
export function doAndRetry<T>(
    options: RetryOptionsInterface,
    cb: () => T | Promise<T>
): ObservablePromise<T> {
    const maxRetryDelay = isValidNumber(options.maxRetryDelay)
        ? options.maxRetryDelay
        : 10000;
    const maxTry = isValidNumber(options.maxTry) ? options.maxTry : 3;
    let retryDelay = isValidNumber(options.minRetryDelay)
        ? options.minRetryDelay
        : 500;
    let tries = 1;

    const doTry = (
        resolve: ResolveCallback<any>,
        reject: RejectCallback,
        progress: ProgressCallback
    ) => {
        const onFailure = (reason: any) => {
            progress(reason);

            if (maxTry <= 0 || tries++ < maxTry) {
                retryDelay = Math.min(maxRetryDelay, retryDelay * 2);
                setTimeout(() => {
                    doTry(resolve, reject, progress);
                }, retryDelay);
            } else {
                reject(reason);
            }
        };
        try {
            const res = cb();
            if (isPromiseLike(res)) {
                res.then(resolve).catch(onFailure);
            } else {
                return resolve(res);
            }
        } catch (e) {
            onFailure(e);
        }
    };
    return new ObservablePromise<T>((resolve, reject, progress) => {
        doTry(resolve, reject, progress);
    });
}

/**
 * Creates a function that will call `doAndRetry()` when invoked but that hides it from the outside
 * so it can be used like any other function.
 */
export function doAndRetryFactory<T, C extends Function = GenericCallback>(
    options: RetryOptionsInterface,
    context: any,
    cb: C
): ReplaceReturnType<C, ObservablePromise<T>> {
    return (...args: any[]): ObservablePromise<T> => {
        return doAndRetry(options, () => {
            return cb.apply(context, args);
        });
    };
}
