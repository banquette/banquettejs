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
 * Exception thrown when any type of transform failed as the transform service level.
 */
var TransformFailedException = /** @class */ (function (_super) {
    _tslib.__extends(TransformFailedException, _super);
    function TransformFailedException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'transform-failed';
        return _this;
    }
    return TransformFailedException;
}(system_exception.SystemException));

exports.TransformFailedException = TransformFailedException;
