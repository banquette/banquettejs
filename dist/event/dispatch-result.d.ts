import { Exception } from "@banquette/exception/exception";
import { DispatchCallInterface } from "./dispatch-call.interface";
export declare enum DispatchResultStatus {
    Waiting = 0,
    Error = 1,
    Ready = 2
}
export declare class DispatchResult<T = any> {
    readonly parent: DispatchResult | null;
    readonly promise: Promise<DispatchResult<T>> | null;
    readonly localPromise: Promise<any> | null;
    readonly status: DispatchResultStatus;
    readonly ready: boolean;
    readonly error: boolean;
    readonly errorDetail: Exception | null;
    readonly waiting: boolean;
    readonly results: T[];
    readonly defaultPrevented: boolean;
    private previousPromise;
    private promiseResolve;
    constructor(parent?: DispatchResult | null);
    /**
     * Add a dispatcher call to the result, handling the asynchronous aspect if necessary.
     */
    registerCall(call: DispatchCallInterface): void;
    /**
     * Set the final result of the transform.
     */
    addResult(result: T): boolean;
    /**
     * Utility method that always return a promise that will resolve when the transform is done.
     */
    onReady(): Promise<DispatchResult<T>>;
    /**
     * Mark the result as "default prevented", meaning the caller will know
     * that if an optional action was to be performed after this event, it should not anymore.
     */
    preventDefault(): void;
    /**
     * Set a promise that will resolve when all the subscriber have been called and finished their processing.
     */
    delayResponse(promise: Promise<DispatchResult>): void;
    /**
     * Make the result on error and store the reason.
     */
    fail(reason: any): void;
    /**
     * Shorthand to update the status and the corresponding flags.
     */
    setStatus(status: DispatchResultStatus): void;
    private cleanupAsync;
}
