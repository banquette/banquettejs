import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when a request fails at the network level
 * (like if the timeout is reached or if the request is canceled).
 *
 * More specific error types may extend this exception.
 */
export declare class NetworkException extends SystemException {
    readonly retryable: boolean;
    slug: string;
    constructor(retryable: boolean, message?: string, previous?: Exception | null, extra?: any);
}
