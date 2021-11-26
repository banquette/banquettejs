import { SystemException } from "@banquette/exception";

/**
 * Exception thrown when a request doesn't respond with a 2xx HTTP status code.
 *
 * This type of exception will only trigger if the transaction has been successful.
 * An error in the HTTP transaction will trigger a NetworkException instead.
 */
export class RequestException extends SystemException {
    public readonly id: string = 'request';
}
