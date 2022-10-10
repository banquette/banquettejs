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
var TimeoutException = /** @class */ (function (_super) {
    _tslib.__extends(TimeoutException, _super);
    function TimeoutException(message) {
        if (message === void 0) { message = 'Timeout reached.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'timeout';
        return _this;
    }
    return TimeoutException;
}(system_exception.SystemException));

exports.TimeoutException = TimeoutException;
