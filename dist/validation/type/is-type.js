/*!
 * Banquette Validation v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { ensureNumber } from '@banquette/utils-type/ensure-number';
import { isArray } from '@banquette/utils-type/is-array';
import { isBoolean } from '@banquette/utils-type/is-boolean';
import { isNumeric } from '@banquette/utils-type/is-numeric';
import { isObject } from '@banquette/utils-type/is-object';
import { isString } from '@banquette/utils-type/is-string';
import { isSymbol } from '@banquette/utils-type/is-symbol';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { isValidNumber } from '@banquette/utils-type/is-valid-number';
import { SYNC_TAG } from '../constant.js';
import { createValidator } from '../create-validator.js';
import { assignOptionsDefaults } from '../utils.js';

var Type;
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
})(Type || (Type = {}));
/**
 * A validator checking the value matches a type.
 */
function IsType(target, options) {
    var _a;
    if (options === void 0) { options = {}; }
    var finalOptions = assignOptionsDefaults(options, 'Invalid type of value. Expecting one of: %types%', 'is-type');
    var tests = (_a = {},
        _a[Type.String] = ['String', isString],
        _a[Type.Number] = ['Number', isValidNumber],
        _a[Type.Numeric] = ['Numeric', isNumeric],
        _a[Type.Boolean] = ['Boolean', isBoolean],
        _a[Type.Object] = ['Object', isObject],
        _a[Type.Array] = ['Array', isArray],
        _a[Type.Symbol] = ['Symbol', isSymbol],
        _a[Type.Undefined] = ['Undefined', isUndefined],
        _a[Type.Null] = ['Null', function (value) { return value === null; }],
        _a);
    return createValidator({
        validate: function (context) {
            var testsCount = 0;
            var invalidTypes = [];
            for (var _i = 0, _a = getObjectKeys(tests); _i < _a.length; _i++) {
                var key = _a[_i];
                key = ensureNumber(key);
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
    }, [SYNC_TAG].concat(finalOptions.tags), finalOptions.groups);
}

export { IsType, Type };
