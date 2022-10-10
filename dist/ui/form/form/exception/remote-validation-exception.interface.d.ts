import { ViolationInterface } from "@banquette/validation/violation.interface";
/**
 * The data expected from the server when validation errors are found.
 * The form will automatically create a RemoteValidationException if the response status is an error code and matches this interface.
 */
export interface RemoteValidationExceptionInterface {
    violations: ViolationInterface[];
}
