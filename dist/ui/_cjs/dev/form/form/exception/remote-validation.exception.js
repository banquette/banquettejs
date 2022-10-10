/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');
var ltrim = require('@banquette/utils-string/_cjs/dev/format/ltrim');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');

/**
 * Exception expected by the `form-generic` component to map server validation errors with the form.
 * You can use a request hook to modify your server response and create this object.
 */
var RemoteValidationException = /** @class */ (function (_super) {
    _tslib.__extends(RemoteValidationException, _super);
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
        if (isObject.isObject(input) && isArray.isArray(input.violations)) {
            for (var _i = 0, _a = input.violations; _i < _a.length; _i++) {
                var violation = _a[_i];
                if (!isObject.isObject(violation) || !isNonEmptyString.isNonEmptyString(violation.type) || !isNonEmptyString.isNonEmptyString(violation.path)) {
                    return null;
                }
                violation.path = '/' + ltrim.ltrim(violation.path, '/');
            }
            return new RemoteValidationException(input.violations);
        }
        return null;
    };
    return RemoteValidationException;
}(system_exception.SystemException));

exports.RemoteValidationException = RemoteValidationException;
