import { SystemException } from "@banquette/core";

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
export class TimeoutException extends SystemException {
    public constructor(message: string = 'Timeout reached.') {
        super(message);
    }
}
