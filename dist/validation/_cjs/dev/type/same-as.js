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
 * Check that the value is the same as the value of another part of the validation tree.
 */
function SameAs(path, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'The value must be the same as "%path%".', 'same-as');
    return createValidator.createValidator({
        validate: function (context) {
            var otherValue = context.getOtherValue(path);
            if (context.value !== otherValue) {
                context.result.addViolation(finalOptions.type, finalOptions.message, { path: path });
            }
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.SameAs = SameAs;
