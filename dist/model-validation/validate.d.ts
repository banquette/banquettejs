import { ValidateOptionsInterface } from "@banquette/validation/validate-options.interface";
import { ValidationResult } from "@banquette/validation/validation-result";
/**
 * Validate a model instance.
 *
 * Shortcut for `V.Model(userCtor).validate(user)`.
 */
export declare function validate(model: any, options?: ValidateOptionsInterface): ValidationResult;
