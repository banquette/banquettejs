import { ensureString } from "@banquette/utils-type/ensure-string";
import { isArray } from "@banquette/utils-type/is-array";
import { isNumber } from "@banquette/utils-type/is-number";
import { isNumeric } from "@banquette/utils-type/is-numeric";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { SYNC_TAG } from "../constant";
import { createValidator } from "../create-validator";
import { assignOptionsDefaults } from "../utils";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Check that the value's "count value" is greater or equal to a number.
 *
 * Works with strings, numbers, arrays and objects.
 * The type of comparison is determined by the type of the value to validate.
 *
 * To distinguish between a string containing only a number (e.g. '12')
 * and a number (e.g. 12) you can use the "treatAs" argument to force a cast.
 */
export function Min(count: number,
                    treatAs: 'string'|'number'|'auto' = 'auto',
                    options: ValidatorOptionsInterface|string = {}): ValidatorInterface {
    const finalOptions = assignOptionsDefaults(options, 'auto', 'min');
    return createValidator({
        validate: (context: ValidationContext): ValidationResult => {
            let valid: boolean = true;
            let defaultMessage: string = 'Must be greater or equal to %count%.';
            if ((isString(context.value) && treatAs === 'auto') || treatAs === 'string') {
                valid = (treatAs === 'string' ? ensureString(context.value) : context.value).length >= count;
                defaultMessage = `Must be at least %count% character${(count > 1 ? 's' : '')} long.`;
            } else if ((isNumeric(context.value) && treatAs === 'auto') || treatAs === 'number') {
                valid = (!isNumber(context.value) ? parseFloat(context.value) : context.value) >= count;
            } else if (isObject(context.value)) {
                valid = (isArray(context.value) ? context.value.length : Object.keys(context.value).length) >= count;
                defaultMessage = `Must contain at least %count% item${(count > 1 ? 's' : '')}.`;
            }
            if (!valid) {
                context.result.addViolation(finalOptions.type, finalOptions.message === 'auto' ? defaultMessage : finalOptions.message, {count});
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
};
