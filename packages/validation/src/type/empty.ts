import { isNullOrUndefined, isObject } from "@banquette/utils";
import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is empty.
 */
export const Empty = (message: string = 'This value must be empty.', type: string = 'empty'): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (!isNullOrUndefined(context.value) && context.value !== '' && (!isObject(context.value) || Object.keys(context.value).length > 0)) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    });
};
