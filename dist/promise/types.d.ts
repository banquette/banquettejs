import { ThenableInterface } from "./thenable.interface";
/**
 * Executor callbacks types.
 */
export declare type ResolveCallback<T> = (value?: T | ThenableInterface<T>) => void;
export declare type RejectCallback = (reason?: any) => void;
export declare type ProgressCallback = (value: any) => void;
/**
 * Promise callbacks types.
 */
export declare type onResolveCallback<CompleteT, ResultT> = (value: CompleteT) => ResultT | ThenableInterface<ResultT>;
export declare type onRejectCallback<RejectT> = (reason: any) => RejectT | ThenableInterface<RejectT>;
export declare type onProgressCallback<T> = (value: T) => void;
export declare type onFinallyCallback<T> = () => void;
/**
 * Define the function passed to the constructor of the Promise.
 */
export declare type ExecutorFunction<CompleteT> = (resolve: ResolveCallback<CompleteT>, reject: RejectCallback, progress: ProgressCallback, id?: any) => void;
