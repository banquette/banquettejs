/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';

/**
 * A validator doing nothing.
 * It will never create a violation.
 */
var Valid = function (tags) {
    if (tags === void 0) { tags = []; }
    return createValidator({
        validate: function (context) { return context.result; }
    }, [SYNC_TAG].concat(tags));
};

export { Valid };
