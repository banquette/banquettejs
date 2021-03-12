import { Exception } from "@banquette/core";
import { RequestException } from "./request.exception";

/**
 * Error thrown when a request is canceled before its completion.
 */
export class RequestCanceledException extends RequestException {
    public constructor(message: string = 'Canceled.', previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
