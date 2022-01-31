import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";

/**
 * Exception thrown when an endpoint parameter fails to validate.
 */
export class InvalidParameterException extends SystemException {
    public slug: string = 'invalid-parameter';

    public constructor(public parameterName: string, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
