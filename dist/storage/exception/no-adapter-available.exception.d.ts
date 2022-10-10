import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when the browser doesn't support any of the registered adapters.
 */
export declare class NoAdapterAvailableException extends SystemException {
    slug: string;
    constructor(message?: string);
}
