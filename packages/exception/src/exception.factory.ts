import { isObject, isString } from "@banquette/utils-type";
import { Exception } from "./exception";
import { UsageException } from "./usage.exception";

export class ExceptionFactory {
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
    public static EnsureException(input: any, defaultMessage: string = 'Unknown error', previous?: Exception|null): Exception {
        if (input instanceof Exception) {
            return input;
        }
        if (isString(input)) {
            return new UsageException(input, previous);
        }
        if (input instanceof Error) {
            return new UsageException(input.toString(), previous, {originalError: input, stack: input.stack});
        }
        if (isObject(input) && isString(input.message)) {
            return new UsageException(input.message, previous, {originalError: input});
        }
        return new UsageException(defaultMessage, previous);
    }
}
