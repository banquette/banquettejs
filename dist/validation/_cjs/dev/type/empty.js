/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

/**
 * Check that the value is empty.
 */
function Empty(options) {
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'This value must be empty.', 'empty');
    return createValidator.createValidator({
        validate: function (context) {
            if (!isNullOrUndefined.isNullOrUndefined(context.value) && context.value !== '' && (!isObject.isObject(context.value) || Object.keys(context.value).length > 0)) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.Empty = Empty;
