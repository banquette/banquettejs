/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { UsageException } from '@banquette/exception/usage.exception';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { TransformResult } from '../transform-result.js';

var TransformContext = /** @class */ (function () {
    function TransformContext(parent, type, ctor, value, property, extra) {
        this.parent = parent;
        this.type = type;
        this.ctor = ctor;
        this.value = value;
        this.property = property || null;
        this.extra = extra || {};
        this.result = new TransformResult(parent !== null ? parent.result : null);
    }
    /**
     * Get an extra value.
     */
    TransformContext.prototype.getExtra = function (name, defaultValue) {
        if (!isUndefined(this.extra[name])) {
            return this.extra[name];
        }
        if (this.parent !== null) {
            return this.parent.getExtra(name, defaultValue);
        }
        return defaultValue;
    };
    /**
     * Get the highest context of the hierarchy that has the same constructor and a property name./
     */
    TransformContext.prototype.getHighestContextWithProperty = function () {
        var result = this;
        var currentContext = this;
        while (currentContext.parent !== null && currentContext.ctor === currentContext.parent.ctor) {
            if (currentContext.property) {
                result = currentContext;
            }
            else {
                break;
            }
            currentContext = currentContext.parent;
        }
        if (currentContext.property) {
            result = currentContext;
        }
        return result;
    };
    /**
     * Get one or multiple extra value with an additional validation check.
     */
    TransformContext.prototype.getValidatedExtra = function (targets) {
        var output = {};
        for (var _i = 0, _a = Object.keys(targets); _i < _a.length; _i++) {
            var key = _a[_i];
            var config = targets[key];
            var value = this.getExtra(key, config[1]);
            var validator = config[0];
            if (validator !== null) {
                var validationResult = validator.validate(value);
                if (validationResult.waiting) {
                    throw new UsageException('Asynchronous validators are not supported in "TransformContext::getValidatedExtra".');
                }
                if (validationResult.invalid) {
                    throw new UsageException(validationResult.getViolationsStringsArray().join(', '));
                }
            }
            output[key] = value;
        }
        return output;
    };
    return TransformContext;
}());

export { TransformContext };
