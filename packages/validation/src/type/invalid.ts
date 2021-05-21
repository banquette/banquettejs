import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * A validator that always fails.
 */
export const Invalid = (message?: string, type: string = 'invalid'): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            context.result.addViolation(type, message);
            return context.result;
        }
    });
};
