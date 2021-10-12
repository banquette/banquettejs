import { SimplifiedValidatorInterface } from "./simplified-validator.interface";
import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";

/**
 * An utility method that ensure te ValidationContext is always set when the validator is used.
 * You should use this method anytime you want to create a custom validator.
 */
export function createValidator(validator: SimplifiedValidatorInterface, tags?: string[]): ValidatorInterface {
    return {
        tags,
        validate(value: any, maskOrContext?: ValidationContext|string|string[]): ValidationResult {
            return validator.validate(ValidationContext.EnsureValidationContext(value, maskOrContext, tags));
        }
    };
}
