import { Exception } from "./exception";
/**
 * Exception to use for any error impossible to avoid.
 *
 * The class is abstract because you must create a custom type for the error so it can be caught
 * specifically to maybe execute some recovery logic.
 *
 * This kind of error should represent 10-20% of the exceptions thrown in your app.
 *
 * The message is not mandatory here because the type may be enough in most cases.
 * If the error should give a message to the end user you should use the `id` attribute as a key
 * in a map of messages (translated or not).
 *
 * @see Exception for more details
 */
export declare abstract class SystemException extends Exception {
    readonly previous?: Exception | null | undefined;
    readonly extra?: any;
    constructor(message?: string, previous?: Exception | null | undefined, extra?: any);
}
