/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';
import { ltrim } from '@banquette/utils-string/format/ltrim';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';

/**
 * Exception expected by the `form-generic` component to map server validation errors with the form.
 * You can use a request hook to modify your server response and create this object.
 */
var RemoteValidationException = /** @class */ (function (_super) {
    __extends(RemoteValidationException, _super);
    function RemoteValidationException(violations, message, previous, extra) {
        if (violations === void 0) { violations = []; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.violations = violations;
        _this.slug = 'server-validation';
        return _this;
    }
    /**
     * Try to create a RemoteValidationException instance from the input.
     * Expect the input to be an object containing a `violations` property which is an array of `ViolationInterface`.
     *
     * Returns `null` on failure.
     */
    RemoteValidationException.CreateFromUnknownInput = function (input) {
        if (input instanceof RemoteValidationException) {
            return input;
        }
        if (isObject(input) && isArray(input.violations)) {
            for (var _i = 0, _a = input.violations; _i < _a.length; _i++) {
                var violation = _a[_i];
                if (!isObject(violation) || !isNonEmptyString(violation.type) || !isNonEmptyString(violation.path)) {
                    return null;
                }
                violation.path = '/' + ltrim(violation.path, '/');
            }
            return new RemoteValidationException(input.violations);
        }
        return null;
    };
    return RemoteValidationException;
}(SystemException));

export { RemoteValidationException };
