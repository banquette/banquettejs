import { SystemException } from "@banquette/exception";

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
export class CancelException extends SystemException {
    public constructor(message: string = 'Canceled.') {
        super(message);
    }
}
