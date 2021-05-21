import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * A validator doing nothing.
 * It will never create a violation.
 */
export const Valid = (): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => context.result
    });
};
