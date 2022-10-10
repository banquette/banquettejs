/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

/**
 * A validator that always fails.
 */
function Invalid(options) {
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'The value is invalid', 'invalid');
    return createValidator.createValidator({
        validate: function (context) {
            context.result.addViolation(finalOptions.type, finalOptions.message);
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.Invalid = Invalid;
