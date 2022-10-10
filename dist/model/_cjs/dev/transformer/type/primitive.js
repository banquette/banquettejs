/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var ensureBoolean = require('@banquette/utils-type/_cjs/dev/ensure-boolean');
var ensureInteger = require('@banquette/utils-type/_cjs/dev/ensure-integer');
var ensureNumber = require('@banquette/utils-type/_cjs/dev/ensure-number');
var ensureScalarOrCompound = require('@banquette/utils-type/_cjs/dev/ensure-scalar-or-compound');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');

exports.Type = void 0;
(function (Type) {
    /**
     * Ensure the output is a scalar or compound type.
     * If not, converts it to string.
     */
    Type[Type["Any"] = 0] = "Any";
    /**
     * Convert the input into a string.
     */
    Type[Type["String"] = 1] = "String";
    /**
     * Convert the input into a number.
     */
    Type[Type["Number"] = 2] = "Number";
    /**
     * Convert the input into a number and round it.
     */
    Type[Type["Integer"] = 4] = "Integer";
    /**
     * Convert the input into a boolean.
     */
    Type[Type["Boolean"] = 8] = "Boolean";
    /**
     * Allow the "null" value as input.
     *
     * For example, setting this in conjunction with "Type.String" (Type.String | Type.Null) means that
     * if "null" is given as input, it will not be converted to an empty string.
     */
    Type[Type["Null"] = 16] = "Null";
})(exports.Type || (exports.Type = {}));
/**
 * Ensure the output type matches the ones given as parameters.
 */
function Primitive(transformType, inverseType) {
    if (transformType === void 0) { transformType = exports.Type.Any; }
    if (inverseType === void 0) { inverseType = exports.Type.Any; }
    var ensureType = function (type, value) {
        if ((type & exports.Type.Null) === exports.Type.Null && value === null) {
            return null;
        }
        if (type === exports.Type.Any) {
            return ensureScalarOrCompound.ensureScalarOrCompound(value);
        }
        if ((type & exports.Type.Integer) === exports.Type.Integer) {
            return ensureInteger.ensureInteger(value);
        }
        if ((type & exports.Type.Number) === exports.Type.Number) {
            return ensureNumber.ensureNumber(value);
        }
        if ((type & exports.Type.String) === exports.Type.String) {
            return ensureString.ensureString(value);
        }
        if ((type & exports.Type.Boolean) === exports.Type.Boolean) {
            return ensureBoolean.ensureBoolean(value);
        }
        throw new usage_exception.UsageException("Invalid type \"".concat(String(type), "\"."));
    };
    return {
        /**
         * @inheritDoc
         */
        transform: function (context) {
            context.result.setResult(ensureType(transformType, context.value));
            return context.result;
        },
        /**
         * @inheritDoc
         */
        transformInverse: function (context) {
            context.result.setResult(ensureType(inverseType, context.value));
            return context.result;
        }
    };
}

exports.Primitive = Primitive;
