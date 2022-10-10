/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ResponseEvent = /** @class */ (function (_super) {
    _tslib.__extends(ResponseEvent, _super);
    function ResponseEvent(request, response) {
        var _this = _super.call(this) || this;
        _this.request = request;
        _this.response = response;
        return _this;
    }
    return ResponseEvent;
}(eventArg.EventArg));

exports.ResponseEvent = ResponseEvent;
