import { Exception, SystemException } from "@banquette/exception";

/**
 * Exception thrown when an endpoint parameter fails to validate.
 */
export class InvalidParameterException extends SystemException {
    public readonly id: string = 'invalid-parameter';

    public constructor(public parameterName: string, message: string, previous?: Exception|null, extra?: any) {
        super(message, previous, extra);
    }
}
