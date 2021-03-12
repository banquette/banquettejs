import { Exception } from "./exception";

/**
 * Exception to use for any error impossible to avoid.
 *
 * The class is abstract because you must create a custom type for the error so it can be caught
 * specifically to maybe execute some recovery logic.
 *
 * This kind of error should represent 10-20% of the exceptions thrown in your app.
 *
 * @see Exception for more details
 */
export abstract class SystemException extends Exception {

}
