/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { areEqual } from '@banquette/utils-misc/are-equal';
import { ensureSameType } from '@banquette/utils-type/ensure-same-type';
import { isObject } from '@banquette/utils-type/is-object';
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

/**
 * Check that the value is NOT equal to a static value.
 */
function NotEqual(value, strict, options) {
    if (strict === void 0) { strict = true; }
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'The value is not what is expected.', 'not-equal');
    return createValidator({
        validate: function (context) {
            if (isObject(value)) {
                if (context.value !== null && isObject(context.value) && areEqual(value, context.value)) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            }
            else if ((strict && value === context.value) || (!strict && ensureSameType(context.value, value) === value)) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { NotEqual };
