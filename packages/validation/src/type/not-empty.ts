import { isNullOrUndefined, isObject } from "@banquette/utils";
import { simplifyValidator } from "../utils";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is not empty.
 */
export const NotEmpty = (message: string = 'This is mandatory.', type: string = 'not-empty'): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (isNullOrUndefined(context.value) || context.value === '' || (isObject(context.value) && !Object.keys(context.value).length)) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    });
};
