/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var ApiResponseEvent = /** @class */ (function (_super) {
    _tslib.__extends(ApiResponseEvent, _super);
    function ApiResponseEvent(apiRequest, httpEvent) {
        var _this = _super.call(this) || this;
        _this.apiRequest = apiRequest;
        _this.httpEvent = httpEvent;
        return _this;
    }
    return ApiResponseEvent;
}(eventArg.EventArg));

exports.ApiResponseEvent = ApiResponseEvent;
