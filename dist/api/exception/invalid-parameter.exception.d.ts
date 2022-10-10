import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when an endpoint parameter fails to validate.
 */
export declare class InvalidParameterException extends SystemException {
    parameterName: string;
    slug: string;
    constructor(parameterName: string, message: string, previous?: Exception | null, extra?: any);
}
