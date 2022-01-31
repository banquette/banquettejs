import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";

/**
 * Exception thrown an api endpoint fails to generate an url because a required parameter is missing.
 */
export class MissingRequiredParameterException extends SystemException {
    public slug: string = 'missing-required-parameter';

    public constructor(public parameterName: string, message?: string, previous?: Exception|null, extra?: any) {
        super(message || `The parameter "${parameterName}" is required.`, previous, extra);
    }
}
