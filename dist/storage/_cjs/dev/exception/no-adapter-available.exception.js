/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when the browser doesn't support any of the registered adapters.
 */
var NoAdapterAvailableException = /** @class */ (function (_super) {
    _tslib.__extends(NoAdapterAvailableException, _super);
    function NoAdapterAvailableException(message) {
        if (message === void 0) { message = 'None of the available storage adapters is supported by the current browser.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'no-adapter-available';
        return _this;
    }
    return NoAdapterAvailableException;
}(system_exception.SystemException));

exports.NoAdapterAvailableException = NoAdapterAvailableException;
