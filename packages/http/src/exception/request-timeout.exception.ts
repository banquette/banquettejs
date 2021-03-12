import { Exception } from "@banquette/core";
import { NetworkException } from "./network.exception";

/**
 * Exception thrown when a request doesn't complete before the timeout.
 */
export class RequestTimeoutException extends NetworkException {
    public constructor(public timeout: number,
                       message: string = `Timeout reached (${timeout})`,
                       previous?: Exception|null,
                       extra?: any) {
        super(message, previous, extra);
    }
}
