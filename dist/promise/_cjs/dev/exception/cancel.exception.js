/*!
 * Banquette Promise v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
var CancelException = /** @class */ (function (_super) {
    _tslib.__extends(CancelException, _super);
    function CancelException(message) {
        if (message === void 0) { message = 'Canceled.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'cancel';
        return _this;
    }
    return CancelException;
}(system_exception.SystemException));

exports.CancelException = CancelException;
