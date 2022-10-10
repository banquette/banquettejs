/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

/**
 * Check that the value is in a list of predefined choices.
 */
function Choice(choices, options) {
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'The value is not part of the expected choices.', 'choice');
    return createValidator.createValidator({
        validate: function (context) {
            if (isObject.isObject(context.value)) {
                var i = void 0;
                for (i = 0; i < choices.length; ++i) {
                    if (isObject.isObject(choices[i]) && areEqual.areEqual(choices[i], context.value)) {
                        break;
                    }
                }
                if (i >= choices.length) {
                    context.result.addViolation(finalOptions.type, finalOptions.message);
                }
            }
            else if (choices.indexOf(context.value) < 0) {
                context.result.addViolation(finalOptions.type, finalOptions.message);
            }
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.Choice = Choice;
