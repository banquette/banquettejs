import { Exception } from "../exception";

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
export class NotImplementedException extends Exception {
    public readonly id: string = 'not-implemented';

    public constructor(message: string = 'Not implemented.') {
        super(message);
    }
}
