/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var BeforeResponseEvent = /** @class */ (function (_super) {
    _tslib.__extends(BeforeResponseEvent, _super);
    function BeforeResponseEvent(response, request) {
        var _this = _super.call(this) || this;
        _this.response = response;
        _this.request = request;
        return _this;
    }
    return BeforeResponseEvent;
}(eventArg.EventArg));

exports.BeforeResponseEvent = BeforeResponseEvent;
