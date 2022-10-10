import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when the "transformInverse" method is called on a transformer that doesn't implement it.
 */
export declare class TransformInverseNotSupportedException extends SystemException {
    slug: string;
    constructor(message?: string, previous?: Exception | null, extra?: any);
}
