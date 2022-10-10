import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when parameters not defined in the endpoint's configuration have been given as input.
 */
export declare class UnsupportedParametersException extends SystemException {
    parameters: string[];
    slug: string;
    constructor(parameters: string[], message: string, previous?: Exception | null, extra?: any);
}
