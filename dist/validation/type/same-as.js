/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

/**
 * Check that the value is the same as the value of another part of the validation tree.
 */
function SameAs(path, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'The value must be the same as "%path%".', 'same-as');
    return createValidator({
        validate: function (context) {
            var otherValue = context.getOtherValue(path);
            if (context.value !== otherValue) {
                context.result.addViolation(finalOptions.type, finalOptions.message, { path: path });
            }
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { SameAs };
