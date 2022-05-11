import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value is empty.
 */
export function Empty(options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'This value must be empty.', 'empty');
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            if (!isNullOrUndefined(context.value) && context.value !== '' && (!isObject(context.value) || Object.keys(context.value).length > 0)) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
