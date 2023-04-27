import { SystemException } from "@banquette/exception";

/**
 * Exception thrown when a JSON string failed to decode.
 */
export class InvalidJsonException extends SystemException {
    public slug: string = 'invalid-json';
}
