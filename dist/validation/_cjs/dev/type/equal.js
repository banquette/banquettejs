/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var ensureSameType = require('@banquette/utils-type/_cjs/dev/ensure-same-type');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

/**
 * Check that the value is equal to a static value.
 */
function Equal(value, strict, options) {
    if (strict === void 0) { strict = true; }
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'The value is not what is expected.', 'equal');
    return createValidator.createValidator({
        validate: function (context) {
            if (isObject.isObject(value)) {
                if (context.value === null || !isObject.isObject(context.value) || !areEqual.areEqual(value, context.value)) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            }
            else if ((strict && value !== context.value) || (!strict && ensureSameType.ensureSameType(context.value, value) !== value)) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.Equal = Equal;
