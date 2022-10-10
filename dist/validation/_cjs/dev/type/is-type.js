/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var ensureNumber = require('@banquette/utils-type/_cjs/dev/ensure-number');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isBoolean = require('@banquette/utils-type/_cjs/dev/is-boolean');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isSymbol = require('@banquette/utils-type/_cjs/dev/is-symbol');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var isValidNumber = require('@banquette/utils-type/_cjs/dev/is-valid-number');
var constant = require('../constant.js');
var createValidator = require('../create-validator.js');
var utils = require('../utils.js');

exports.Type = void 0;
(function (Type) {
    Type[Type["String"] = 1] = "String";
    Type[Type["Number"] = 2] = "Number";
    Type[Type["Numeric"] = 4] = "Numeric";
    Type[Type["Boolean"] = 8] = "Boolean";
    Type[Type["Object"] = 16] = "Object";
    Type[Type["Array"] = 32] = "Array";
    Type[Type["Symbol"] = 64] = "Symbol";
    Type[Type["Undefined"] = 128] = "Undefined";
    Type[Type["Null"] = 256] = "Null";
})(exports.Type || (exports.Type = {}));
/**
 * A validator checking the value matches a type.
 */
function IsType(target, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var finalOptions = utils.assignOptionsDefaults(options, 'Invalid type of value. Expecting one of: %types%', 'is-type');
    var tests = (_a = {},
        _a[exports.Type.String] = ['String', isString.isString],
        _a[exports.Type.Number] = ['Number', isValidNumber.isValidNumber],
        _a[exports.Type.Numeric] = ['Numeric', isNumeric.isNumeric],
        _a[exports.Type.Boolean] = ['Boolean', isBoolean.isBoolean],
        _a[exports.Type.Object] = ['Object', isObject.isObject],
        _a[exports.Type.Array] = ['Array', isArray.isArray],
        _a[exports.Type.Symbol] = ['Symbol', isSymbol.isSymbol],
        _a[exports.Type.Undefined] = ['Undefined', isUndefined.isUndefined],
        _a[exports.Type.Null] = ['Null', function (value) { return value === null; }],
        _a);
    return createValidator.createValidator({
        validate: function (context) {
            var testsCount = 0;
            var invalidTypes = [];
            for (var _i = 0, _a = getObjectKeys.getObjectKeys(tests); _i < _a.length; _i++) {
                var key = _a[_i];
                key = ensureNumber.ensureNumber(key);
                if ((target & key) === key) {
                    ++testsCount;
                    if (!tests[key][1](context.value)) {
                        invalidTypes.push(tests[key][0]);
                    }
                }
            }
            if (invalidTypes.length > 0 && invalidTypes.length === testsCount) {
                context.result.addViolation(finalOptions.type, finalOptions.message, { types: invalidTypes.join(',') });
            }
            return context.result;
        }
    }, [constant.SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

exports.IsType = IsType;
