import { SimplifiedValidatorInterface } from "./simplified-validator.interface";
import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";
import { ValidatorInterface } from "./validator.interface";

/**
 * Abstract the context creation when building validators.
 */
export function simplifyValidator(validator: SimplifiedValidatorInterface, tags?: string[]): ValidatorInterface {
    return {
        tags,
        validate(value: any, maskOrContext?: ValidationContext|string|string[]): ValidationResult {
            return validator.validate(ValidationContext.EnsureValidationContext(value, maskOrContext, tags));
        }
    };
}
