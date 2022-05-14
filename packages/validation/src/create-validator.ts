import { ensureArray } from "@banquette/utils-type/ensure-array";
import { SimplifiedValidatorInterface } from "./simplified-validator.interface";
import { ValidateOptionsInterface } from "./validate-options.interface";
import { ValidationContext } from "./validation-context";
import { ValidationContextInterface } from "./validation-context.interface";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";

/**
 * A utility method that ensure te ValidationContext is always set when the validator is used.
 * You should use this method anytime you want to create a custom validator.
 */
export function createValidator(validator: SimplifiedValidatorInterface, tags?: string|string[], groups?: string|string[]): ValidatorInterface {
    return {
        tags: ensureArray(tags),
        groups: ensureArray(groups),
        validate(value: any, contextOrOptions?: ValidateOptionsInterface|ValidationContextInterface): ValidationResult {
            return validator.validate(ValidationContext.EnsureValidationContext(value, contextOrOptions));
        }
    };
}
