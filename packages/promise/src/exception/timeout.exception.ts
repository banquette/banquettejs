import { SystemException } from "@banquette/exception";

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
export class TimeoutException extends SystemException {
    public slug: string = 'timeout';

    public constructor(message: string = 'Timeout reached.') {
        super(message);
    }
}
