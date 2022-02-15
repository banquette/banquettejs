import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
import { ltrim } from "@banquette/utils-string/format/ltrim";
import { isNonEmptyString } from "@banquette/utils-string/is-non-empty-string";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { ViolationInterface } from "@banquette/validation/violation.interface";

/**
 * Exception expected by the `form-generic` component to map server validation errors with the form.
 * You can use a request hook to modify your server response and create this object.
 */
export class RemoteValidationException extends SystemException {
    public slug: string = 'server-validation';

    public constructor(public violations: ViolationInterface[] = [],
                       message?: string,
                       previous?: Exception | null | undefined,
                       extra?: any) {
        super(message, previous, extra);
    }

    /**
     * Try to create a RemoteValidationException instance from the input.
     * Expect the input to be an object containing a `violations` property which is an array of `ViolationInterface`.
     *
     * Returns `null` on failure.
     */
    public static CreateFromUnknownInput(input: any): RemoteValidationException|null {
        if (input instanceof RemoteValidationException) {
            return input;
        }
        if (isObject(input) && isArray(input.violations)) {
            for (const violation of input.violations) {
                if (!isObject(violation) || !isNonEmptyString(violation.type) || !isNonEmptyString(violation.path)) {
                    return null;
                }
                violation.path = '/' + ltrim(violation.path, '/');
            }
            return new RemoteValidationException(input.violations as ViolationInterface[]);
        }
        return null;
    }
}
