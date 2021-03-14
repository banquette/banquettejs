import { ThenableInterface } from "./thenable.interface";

/**
 * Executor callbacks types.
 */
export type ResolveCallback<T> = (value: T | ThenableInterface<T>) => void;
export type RejectCallback = (reason?: any) => void;
export type ProgressCallback = (value: any) => void;

/**
 * Promise callbacks types.
 */
export type onResolveCallback<CompleteT, ResultT> = ((value: CompleteT) => ResultT | ThenableInterface<ResultT>);
export type onRejectCallback<RejectT> = ((reason: any) => RejectT | ThenableInterface<RejectT>);
export type onProgressCallback<T> = (value: T) => void;
export type onFinallyCallback<T> = () => T | ThenableInterface<T>;

/**
 * Define the function passed to the constructor of the Promise.
 */
export type ExecutorFunction<CompleteT> = (resolve: ResolveCallback<CompleteT>, reject: RejectCallback, progress: ProgressCallback, id?: any) => void;
