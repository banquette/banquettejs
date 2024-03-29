import { ensureString, isArray, isNumber, isNumeric, isObject, isString } from "@banquette/utils-type";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

type MaxValidatorOptionsInterface = ValidatorOptionsInterface & {treatAs?: 'string'|'number'|'auto'};

/**
 * Check that the number of elements counted in a value is greater or equal to a number.
 *
 * Works with strings, numbers, arrays and objects.
 * The type of comparison is determined by the type of the value to validate.
 *
 * To distinguish between a string containing only a number (e.g. '12')
 * and a number (e.g. 12) you can use the "treatAs" argument to force a cast.
 */
export function Max(count: number, options: MaxValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'auto', 'max');
    const treatAs = !isString(options) ? (options.treatAs || 'auto') : 'auto';
    return createValidator({
        validate: (context: ValidationContextInterface): ValidationResult => {
            let valid: boolean = true;
            let defaultMessage: string = 'Must be lesser or equal to %count%.';
            if ((isString(context.value) && treatAs === 'auto') || treatAs === 'string') {
                valid = (treatAs === 'string' ? ensureString(context.value) : context.value).length <= count;
                defaultMessage = `Must be at most %count% character${(count > 1 ? 's' : '')} long.`;
            } else if ((isNumeric(context.value) && treatAs === 'auto') || treatAs === 'number') {
                valid = (!isNumber(context.value) ? parseFloat(context.value) : context.value) <= count;
            } else if (isObject(context.value)) {
                valid = (isArray(context.value) ? context.value.length : Object.keys(context.value).length) <= count;
                defaultMessage = `Must contain at most %count% item${(count > 1 ? 's' : '')}.`;
            }
            if (!valid) {
                context.result.addViolation(finalOptions.type, finalOptions.message === 'auto' ? defaultMessage : finalOptions.message, {count});
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}
