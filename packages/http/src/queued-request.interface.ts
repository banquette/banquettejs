import { HttpRequest } from "./http-request";
import { HttpResponse } from "./http-response";

/**
 * Define a request that have failed to execute and that is queued for retry.
 */
export interface QueuedRequestInterface<T> {
    /**
     * Timestamp at which the retry should be executed.
     */
    executeAt: number;

    /**
     * Holds if the request is currently on execution.
     */
    isExecuting: boolean;

    /**
     * Holds if the request is currently on error.
     */
    isError: boolean;

    /**
     * Maximum time to wait for a request to finish before it is considered a failure.
     */
    timeout: number;

    /**
     * Number of times the request tried to execute.
     */
    tryCount: number;

    /**
     * Holds the number of tries left before considering the request has failed.
     * Can be < 0. If so, the number of tries is infinite.
     */
    triesLeft: number;

    /**
     * Resolve callback of the original promise.
     */
    resolve: (response: HttpResponse<T>) => void;

    /**
     * Reject callback of the original promise.
     */
    reject: (response: HttpResponse<T>) => void;

    /**
     * The original HttpRequest object.
     */
    request: HttpRequest;

    /**
     * The response object associated with the request.
     */
    response: HttpResponse<T>;
}
