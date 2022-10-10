/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNumber = require('@banquette/utils-type/_cjs/dev/is-number');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

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
    var finalOptions = utils.assignOptionsDefaults(options, 'auto', 'max');
    var treatAs = !isString.isString(options) ? (options.treatAs || 'auto') : 'auto';
    return createValidator.createValidator({
        validate: function (context) {
            var valid = true;
            var defaultMessage = 'Must be lesser or equal to %count%.';
            if ((isString.isString(context.value) && treatAs === 'auto') || treatAs === 'string') {
                valid = (treatAs === 'string' ? ensureString.ensureString(context.value) : context.value).length <= count;
                defaultMessage = "Must be at most %count% character".concat((count > 1 ? 's' : ''), " long.");
            }
            else if ((isNumeric.isNumeric(context.value) && treatAs === 'auto') || treatAs === 'number') {
                valid = (!isNumber.isNumber(context.value) ? parseFloat(context.value) : context.value) <= count;
            }
            else if (isObject.isObject(context.value)) {
                valid = (isArray.isArray(context.value) ? context.value.length : Object.keys(context.value).length) <= count;
                defaultMessage = "Must contain at most %count% item".concat((count > 1 ? 's' : ''), ".");
            }
            if (!valid) {
                context.result.addViolation(finalOptions.type, finalOptions.message === 'auto' ? defaultMessage : finalOptions.message, { count: count });
            }
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.Max = Max;
