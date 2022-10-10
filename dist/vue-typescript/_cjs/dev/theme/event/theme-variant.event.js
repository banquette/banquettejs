/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ThemeVariantEvent = /** @class */ (function (_super) {
    _tslib.__extends(ThemeVariantEvent, _super);
    function ThemeVariantEvent(variant) {
        var _this = _super.call(this) || this;
        _this.variant = variant;
        return _this;
    }
    return ThemeVariantEvent;
}(eventArg.EventArg));

exports.ThemeVariantEvent = ThemeVariantEvent;
