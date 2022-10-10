import { Exception } from "@banquette/exception/exception";
import { SystemException } from "@banquette/exception/system.exception";
import { ViolationInterface } from "@banquette/validation/violation.interface";
/**
 * Exception expected by the `form-generic` component to map server validation errors with the form.
 * You can use a request hook to modify your server response and create this object.
 */
export declare class RemoteValidationException extends SystemException {
    violations: ViolationInterface[];
    slug: string;
    constructor(violations?: ViolationInterface[], message?: string, previous?: Exception | null | undefined, extra?: any);
    /**
     * Try to create a RemoteValidationException instance from the input.
     * Expect the input to be an object containing a `violations` property which is an array of `ViolationInterface`.
     *
     * Returns `null` on failure.
     */
    static CreateFromUnknownInput(input: any): RemoteValidationException | null;
}
