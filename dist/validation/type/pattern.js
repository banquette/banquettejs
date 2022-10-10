/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isString } from '@banquette/utils-type/is-string';
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

/**
 * Check that the value matches a pattern.
 */
function Pattern(pattern, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'Invalid value.', 'pattern');
    return createValidator({
        validate: function (context) {
            if (context.value && (!isString(context.value) || !pattern.test(context.value))) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            /**
             * Must reset the last index in case the pattern uses the global flag.
             * @see https://stackoverflow.com/a/11477448/1110635
             * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test#using_test_on_a_regex_with_the_global_flag
             */
            pattern.lastIndex = 0;
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { Pattern };
