import { SystemException } from "@banquette/exception/system.exception";
/**
 * Thrown when the response from the server doesn't match what is expected by the list in the current configuration.
 */
export declare class InvalidServerResponseException extends SystemException {
    slug: string;
}
