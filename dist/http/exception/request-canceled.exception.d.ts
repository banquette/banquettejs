import { Exception } from "@banquette/exception/exception";
import { NetworkException } from "./network.exception";
/**
 * Error thrown when a request is canceled before its completion.
 */
export declare class RequestCanceledException extends NetworkException {
    constructor(message?: string, previous?: Exception | null, extra?: any);
}
