import { Exception } from "./exception";
export declare class ExceptionFactory {
    /**
     * Create a AppError instance from a mixed input.
     * Input can be:
     *   - a string
     *   - an Error object
     *   - an Exception object
     *   - a plain object containing a "message" key
     *
     * If the input is not an exception, we will consider it a UsageException by default
     * because Exception and SystemException are abstract.
     */
    static EnsureException(input: any, defaultMessage?: string, previous?: Exception | null): Exception;
}
