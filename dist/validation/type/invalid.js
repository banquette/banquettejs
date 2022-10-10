/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

/**
 * A validator that always fails.
 */
function Invalid(options) {
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'The value is invalid', 'invalid');
    return createValidator({
        validate: function (context) {
            context.result.addViolation(finalOptions.type, finalOptions.message);
            return context.result;
        }
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { Invalid };
