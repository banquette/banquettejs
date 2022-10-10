/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ApiBeforeResponseEvent = /** @class */ (function (_super) {
    _tslib.__extends(ApiBeforeResponseEvent, _super);
    function ApiBeforeResponseEvent(apiRequest, httpEvent) {
        var _this = _super.call(this) || this;
        _this.apiRequest = apiRequest;
        _this.httpEvent = httpEvent;
        return _this;
    }
    return ApiBeforeResponseEvent;
}(eventArg.EventArg));

exports.ApiBeforeResponseEvent = ApiBeforeResponseEvent;
