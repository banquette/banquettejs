import { ValidateOptionsInterface } from "@banquette/validation/validate-options.interface";
import { ValidationResult } from "@banquette/validation/validation-result";
import { V } from "./v";

/**
 * Validate a model instance.
 *
 * Shortcut for `V.Model(userCtor).validate(user)`.
 */
export function validate(model: any, options?: ValidateOptionsInterface): ValidationResult {
    return V.Model(model.constructor).validate(model, options);
}
