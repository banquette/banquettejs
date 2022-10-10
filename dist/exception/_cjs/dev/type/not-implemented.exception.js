/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var exception = require('../exception.js');

/**
 * Exception thrown to clearly notify an implementation is missing.
 */
var NotImplementedException = /** @class */ (function (_super) {
    _tslib.__extends(NotImplementedException, _super);
    function NotImplementedException(message) {
        if (message === void 0) { message = 'Not implemented.'; }
        var _this = _super.call(this, message) || this;
        _this.slug = 'not-implemented';
        return _this;
    }
    return NotImplementedException;
}(exception.Exception));

exports.NotImplementedException = NotImplementedException;
