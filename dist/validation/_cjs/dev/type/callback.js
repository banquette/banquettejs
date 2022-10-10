/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isPromiseLike = require('@banquette/utils-type/_cjs/dev/is-promise-like');
var createValidator = require('../create-validator.js');

/**
 * Delegate the validation to a custom callback given as parameter of the factory.
 */
var Callback = function (callback, tags, groups) {
    return createValidator.createValidator({
        validate: function (context) {
            try {
                var res = callback(context);
                if (isPromiseLike.isPromiseLike(res)) {
                    context.result.delayResponse(res);
                }
            }
            catch (e) {
                context.result.fail(e);
            }
            return context.result;
        }
    }, tags, groups);
};

exports.Callback = Callback;
