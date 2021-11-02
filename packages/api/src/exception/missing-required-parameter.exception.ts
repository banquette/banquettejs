import { Exception, SystemException } from "@banquette/exception";

/**
 * Exception thrown an api endpoint fails to generate an url because a required parameter is missing.
 */
export class MissingRequiredParameterException extends SystemException {
    public constructor(public parameterName: string, message?: string, previous?: Exception|null, extra?: any) {
        super(message || `The parameter "${parameterName}" is required.`, previous, extra);
    }
}
