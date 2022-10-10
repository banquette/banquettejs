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
 * Exception thrown when no transformer have been found for a transform context.
 */
var NoCompatibleTransformerFoundException = /** @class */ (function (_super) {
    _tslib.__extends(NoCompatibleTransformerFoundException, _super);
    function NoCompatibleTransformerFoundException(context, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.context = context;
        _this.slug = 'no-compatible-transformer-found';
        return _this;
    }
    return NoCompatibleTransformerFoundException;
}(system_exception.SystemException));

exports.NoCompatibleTransformerFoundException = NoCompatibleTransformerFoundException;
