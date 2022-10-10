/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var v = require('./v.js');

/**
 * Validate a model instance.
 *
 * Shortcut for `V.Model(userCtor).validate(user)`.
 */
function validate(model, options) {
    return v.V.Model(model.constructor).validate(model, options);
}

exports.validate = validate;
