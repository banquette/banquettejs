import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown to clearly notify an implementation is missing.
 */
export declare class TimeoutException extends SystemException {
    slug: string;
    constructor(message?: string);
}
