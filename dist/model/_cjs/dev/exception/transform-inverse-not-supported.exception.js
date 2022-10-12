/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when the "transformInverse" method is called on a transformer that doesn't implement it.
 */
var TransformInverseNotSupportedException = /** @class */ (function (_super) {
    _tslib.__extends(TransformInverseNotSupportedException, _super);
    function TransformInverseNotSupportedException(message, previous, extra) {
        if (message === void 0) { message = 'The "transformInverse" method is not available for this transformer.'; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.slug = 'transform-inverse-not-supported';
        return _this;
    }
    return TransformInverseNotSupportedException;
}(system_exception.SystemException));

exports.TransformInverseNotSupportedException = TransformInverseNotSupportedException;