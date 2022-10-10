/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

/**
 * Check that the value matches a pattern.
 */
function Pattern(pattern, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'Invalid value.', 'pattern');
    return createValidator.createValidator({
        validate: function (context) {
            if (context.value && (!isString.isString(context.value) || !pattern.test(context.value))) {
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
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.Pattern = Pattern;
