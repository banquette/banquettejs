/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isNumber } from '@banquette/utils-type/is-number';
import { isNumeric } from '@banquette/utils-type/is-numeric';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

/**
 * Check that the number of elements counted in a value is greater or equal to a number.
 *
 * Works with strings, numbers, arrays and objects.
 * The type of comparison is determined by the type of the value to validate.
 *
 * To distinguish between a string containing only a number (e.g. '12')
 * and a number (e.g. 12) you can use the "treatAs" argument to force a cast.
 */
function Max(count, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'auto', 'max');
    var treatAs = !isString(options) ? (options.treatAs || 'auto') : 'auto';
    return createValidator({
        validate: function (context) {
            var valid = true;
            var defaultMessage = 'Must be lesser or equal to %count%.';
            if ((isString(context.value) && treatAs === 'auto') || treatAs === 'string') {
                valid = (treatAs === 'string' ? ensureString(context.value) : context.value).length <= count;
                defaultMessage = "Must be at most %count% character".concat((count > 1 ? 's' : ''), " long.");
            }
            else if ((isNumeric(context.value) && treatAs === 'auto') || treatAs === 'number') {
                valid = (!isNumber(context.value) ? parseFloat(context.value) : context.value) <= count;
            }
            else if (isObject(context.value)) {
                valid = (isArray(context.value) ? context.value.length : Object.keys(context.value).length) <= count;
                defaultMessage = "Must contain at most %count% item".concat((count > 1 ? 's' : ''), ".");
            }
            if (!valid) {
                context.result.addViolation(finalOptions.type, finalOptions.message === 'auto' ? defaultMessage : finalOptions.message, { count: count });
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { Max };
