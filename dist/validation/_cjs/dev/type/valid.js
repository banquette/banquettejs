/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constant = require('../constant.js');
var createValidator = require('../create-validator.js');

/**
 * A validator doing nothing.
 * It will never create a violation.
 */
var Valid = function (tags) {
    if (tags === void 0) { tags = []; }
    return createValidator.createValidator({
        validate: function (context) { return context.result; }
    }, [constant.SYNC_TAG].concat(tags));
};

exports.Valid = Valid;
