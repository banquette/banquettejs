import { ValidationResult } from "@banquette/validation/validation-result";
import { V } from "./v";

/**
 * Validate a model instance.
 *
 * Shortcut for `V.Model(userCtor).validate(user)`.
 */
export function validate(model: any): ValidationResult {
    return V.Model(model.constructor).validate(model);
}
