/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when an endpoint name cannot be found.
 */
var EndpointNotFoundException = /** @class */ (function (_super) {
    _tslib.__extends(EndpointNotFoundException, _super);
    function EndpointNotFoundException(name, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.name = name;
        _this.slug = 'endpoint-not-found';
        return _this;
    }
    return EndpointNotFoundException;
}(system_exception.SystemException));

exports.EndpointNotFoundException = EndpointNotFoundException;
