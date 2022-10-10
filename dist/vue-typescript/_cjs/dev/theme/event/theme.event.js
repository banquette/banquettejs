/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ThemeEvent = /** @class */ (function (_super) {
    _tslib.__extends(ThemeEvent, _super);
    function ThemeEvent(theme) {
        var _this = _super.call(this) || this;
        _this.theme = theme;
        return _this;
    }
    return ThemeEvent;
}(eventArg.EventArg));

exports.ThemeEvent = ThemeEvent;
