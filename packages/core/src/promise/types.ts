/**
 * Resolve callbacks types.
 */
export type ResolveCallback<T> = (value: T | PromiseLike<T>) => void;
export type RejectCallback = (reason?: any) => void;
export type ProgressCallback<T> = (value: T) => void;

/**
 * Define the function passed to the constructor of the Promise.
 */
export type ExecutorFunction<N, C> = (resolve: ResolveCallback<C>, reject: RejectCallback, progress: ProgressCallback<N>) => void;
