import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when an endpoint name cannot be found.
 */
export declare class EndpointNotFoundException extends SystemException {
    name: string;
    slug: string;
    constructor(name: string, message: string, previous?: Exception | null, extra?: any);
}
