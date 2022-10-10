import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown an api endpoint fails to generate an url because a required parameter is missing.
 */
export declare class MissingRequiredParameterException extends SystemException {
    parameterName: string;
    slug: string;
    constructor(parameterName: string, message?: string, previous?: Exception | null, extra?: any);
}
