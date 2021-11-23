import { isString } from "@banquette/utils-type/is-string";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { SimplifiedValidatorInterface } from "../simplified-validator.interface";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorFactory } from "../validator.factory";

/**
 * Check that the value matches a pattern.
 */
export const Pattern: ValidatorFactory = (pattern: RegExp, message: string = 'Invalid value.', type: string = 'pattern', tags: string[] = []): SimplifiedValidatorInterface => {
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (context.value && (!isString(context.value) || !pattern.test(context.value))) {
                context.result.addViolation(type, message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(tags));
};
