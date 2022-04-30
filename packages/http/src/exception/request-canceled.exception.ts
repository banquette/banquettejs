import { Exception } from "@banquette/exception/exception";
import { NetworkException } from "./network.exception";

/**
 * Error thrown when a request is canceled before its completion.
 */
export class RequestCanceledException extends NetworkException {
    public constructor(message: string = 'Canceled.', previous?: Exception|null, extra?: any) {
        super(false, message, previous, extra);
    }
}
