/*!
 * Banquette Exception v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('../system.exception.js');

/**
 * Exception thrown when an error relative to reading/writing files occurs.
 */
var IOException = /** @class */ (function (_super) {
    _tslib.__extends(IOException, _super);
    function IOException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'io';
        return _this;
    }
    return IOException;
}(system_exception.SystemException));

exports.IOException = IOException;
