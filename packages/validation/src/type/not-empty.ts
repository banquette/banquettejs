import { isNullOrUndefined, isObject } from "@banquette/utils-type";
import { SYNC_TAG } from "../constant";
import { simplifyValidator } from "../simplify-validator";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is not empty.
 */
export const NotEmpty = (message: string = 'This is mandatory.', type: string = 'not-empty', tags: string[] = []): ValidatorInterface => {
    return simplifyValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (isNullOrUndefined(context.value) || context.value === '' || (isObject(context.value) && !Object.keys(context.value).length)) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(tags));
};
