/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var RequestProgressEvent = /** @class */ (function () {
    function RequestProgressEvent(request, status) {
        this.request = request;
        this.status = status;
    }
    return RequestProgressEvent;
}());

exports.RequestProgressEvent = RequestProgressEvent;
