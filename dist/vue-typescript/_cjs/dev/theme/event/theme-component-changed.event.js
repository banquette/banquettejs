/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ThemeComponentChangedEvent = /** @class */ (function (_super) {
    _tslib.__extends(ThemeComponentChangedEvent, _super);
    function ThemeComponentChangedEvent(theme, componentName) {
        var _this = _super.call(this) || this;
        _this.theme = theme;
        _this.componentName = componentName;
        return _this;
    }
    return ThemeComponentChangedEvent;
}(eventArg.EventArg));

exports.ThemeComponentChangedEvent = ThemeComponentChangedEvent;
