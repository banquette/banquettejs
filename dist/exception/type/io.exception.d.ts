import { SystemException } from "../system.exception";
/**
 * Exception thrown when an error relative to reading/writing files occurs.
 */
export declare class IOException extends SystemException {
    slug: string;
}
