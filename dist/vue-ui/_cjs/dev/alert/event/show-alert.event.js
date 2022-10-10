/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ShowAlertEvent = /** @class */ (function (_super) {
    _tslib.__extends(ShowAlertEvent, _super);
    function ShowAlertEvent(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        return _this;
    }
    return ShowAlertEvent;
}(eventArg.EventArg));

exports.ShowAlertEvent = ShowAlertEvent;
