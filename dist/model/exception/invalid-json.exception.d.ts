import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when a JSON string failed to decode.
 */
export declare class InvalidJsonException extends SystemException {
    slug: string;
}
