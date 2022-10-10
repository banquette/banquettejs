/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { ensureBoolean } from '@banquette/utils-type/ensure-boolean';
import { ensureInteger } from '@banquette/utils-type/ensure-integer';
import { ensureNumber } from '@banquette/utils-type/ensure-number';
import { ensureScalarOrCompound } from '@banquette/utils-type/ensure-scalar-or-compound';
import { ensureString } from '@banquette/utils-type/ensure-string';

var Type;
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
})(Type || (Type = {}));
/**
 * Ensure the output type matches the ones given as parameters.
 */
function Primitive(transformType, inverseType) {
    if (transformType === void 0) { transformType = Type.Any; }
    if (inverseType === void 0) { inverseType = Type.Any; }
    var ensureType = function (type, value) {
        if ((type & Type.Null) === Type.Null && value === null) {
            return null;
        }
        if (type === Type.Any) {
            return ensureScalarOrCompound(value);
        }
        if ((type & Type.Integer) === Type.Integer) {
            return ensureInteger(value);
        }
        if ((type & Type.Number) === Type.Number) {
            return ensureNumber(value);
        }
        if ((type & Type.String) === Type.String) {
            return ensureString(value);
        }
        if ((type & Type.Boolean) === Type.Boolean) {
            return ensureBoolean(value);
        }
        throw new UsageException("Invalid type \"".concat(String(type), "\"."));
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

export { Primitive, Type };
