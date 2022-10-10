/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('../utils.js');
var pattern = require('./pattern.js');

/**
 * Check that the value is a valid email address.
 */
function Email(options) {
    if (options === void 0) { options = {}; }
    /**
     * @source https://stackoverflow.com/a/46181/1110635
     */
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.Pattern(reg, utils.assignOptionsDefaults(options, 'Must be a valid email.', 'email'));
}

exports.Email = Email;
