import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when a form component is not found in a group.
 */
export declare class ComponentNotFoundException extends SystemException {
    identifier: string | number;
    slug: string;
    constructor(identifier: string | number, message: string, previous?: Exception | null, extra?: any);
}
