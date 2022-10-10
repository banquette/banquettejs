import { Exception } from "@banquette/exception/exception";
export declare enum TransformResultStatus {
    Waiting = 0,
    Error = 1,
    Ready = 2
}
export declare class TransformResult<T = any> {
    readonly parent: TransformResult | null;
    readonly promise: Promise<TransformResult<T>> | null;
    readonly localPromise: Promise<any> | null;
    readonly status: TransformResultStatus;
    readonly ready: boolean;
    readonly error: boolean;
    readonly errorDetail: Exception | null;
    readonly waiting: boolean;
    readonly result: T;
    private previousPromise;
    private promiseResolve;
    private promiseReject;
    constructor(parent?: TransformResult | null);
    /**
     * Set the final result of the transform.
     */
    setResult(result: T): boolean;
    /**
     * Set a promise that will resolve when the transform result is ready.
     */
    delayResponse(promise: Promise<any>): void;
    /**
     * Utility method that always return a promise that will resolve when the transform is done.
     */
    onReady(): Promise<TransformResult<T>>;
    /**
     * Make the result on error and store the reason.
     */
    fail(reason: any): void;
    /**
     * Shorthand to update the status and the corresponding flags.
     */
    private setStatus;
    private cleanupAsync;
}
