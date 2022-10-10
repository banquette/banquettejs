import { Exception } from "@banquette/exception/exception";
import { NetworkException } from "./network.exception";
/**
 * Exception thrown when a request doesn't complete before the timeout.
 */
export declare class RequestTimeoutException extends NetworkException {
    timeout: number;
    constructor(timeout: number, message?: string, previous?: Exception | null, extra?: any);
}
