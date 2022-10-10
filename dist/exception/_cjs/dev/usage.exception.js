/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var exception = require('./exception.js');

/**
 * Exception to use for any error that could have been avoided by modifying the code.
 * You can see this kind of exception as a "bug error".
 *
 * You cannot extend this because there is no point in creating a custom type for this type of error.
 *
 * This kind of error should represent 80-90% of the exceptions thrown in your app.
 *
 * @see Exception for more details
 *
 * You MUST NOT create a sub type for this exception.
 * Typescript not supporting the "final" keyword is the only reason this class can be inherited from.
 *
 * Adding a private constructor is not a solution as it generates a linter error when instantiating the exception.
 *
 * @see https://github.com/microsoft/TypeScript/issues/8306
 */
/* final */ var UsageException = /** @class */ (function (_super) {
    _tslib.__extends(UsageException, _super);
    function UsageException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'usage';
        return _this;
    }
    return UsageException;
}(exception.Exception));

exports.UsageException = UsageException;
