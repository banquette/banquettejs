/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { areEqual } from '@banquette/utils-misc/are-equal';
import { isObject } from '@banquette/utils-type/is-object';
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

/**
 * Check that the value is in a list of predefined choices.
 */
function Choice(choices, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'The value is not part of the expected choices.', 'choice');
    return createValidator({
        validate: function (context) {
            if (isObject(context.value)) {
                var i = void 0;
                for (i = 0; i < choices.length; ++i) {
                    if (isObject(choices[i]) && areEqual(choices[i], context.value)) {
                        break;
                    }
                }
                if (i >= choices.length) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            }
            else if (choices.indexOf(context.value) < 0) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { Choice };
