/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ShowDialogEventArg = /** @class */ (function (_super) {
    _tslib.__extends(ShowDialogEventArg, _super);
    function ShowDialogEventArg(id, args) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.args = args;
        return _this;
    }
    return ShowDialogEventArg;
}(eventArg.EventArg));

exports.ShowDialogEventArg = ShowDialogEventArg;
