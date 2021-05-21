import { isString } from "@banquette/utils";
import { SimplifiedValidatorInterface } from "../simplified-validator.interface";
import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorFactory } from "../validator.factory";

/**
 * Check that the value matches a pattern.
 */
export const Pattern: ValidatorFactory = (pattern: RegExp, message: string = 'Invalid value.', type: string = 'pattern'): SimplifiedValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (context.value && (!isString(context.value) || !pattern.test(context.value))) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    });
};
