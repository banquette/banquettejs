/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Thrown whenever a fetch fails for another reason than a cancellation.
 */
var FetchFailedException = /** @class */ (function (_super) {
    _tslib.__extends(FetchFailedException, _super);
    function FetchFailedException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'fetch-failed';
        return _this;
    }
    return FetchFailedException;
}(system_exception.SystemException));

exports.FetchFailedException = FetchFailedException;
