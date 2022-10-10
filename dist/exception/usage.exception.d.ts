import { Exception } from "./exception";
/**
 * Exception to use for any error that could have been avoided by modifying the code.
 * You can see this kind of exception as a "bug error".
 *
 * You cannot extend this because there is no point in creating a custom type for this type of error.
 *
 * This kind of error should represent 80-90% of the exceptions thrown in your app.
 *
 * @see Exception for more details
 *
 * You MUST NOT create a sub type for this exception.
 * Typescript not supporting the "final" keyword is the only reason this class can be inherited from.
 *
 * Adding a private constructor is not a solution as it generates a linter error when instantiating the exception.
 *
 * @see https://github.com/microsoft/TypeScript/issues/8306
 */
export declare class UsageException extends Exception {
    slug: string;
}
