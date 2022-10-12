import { SystemException } from "@banquette/exception/system.exception";
/**
 * Exception thrown when a request doesn't respond with a 2xx HTTP status code.
 *
 * This type of exception will only trigger if the transaction has been successful.
 * An error in the HTTP transaction will trigger a NetworkException instead.
 */
export declare class RequestException extends SystemException {
    slug: string;
}