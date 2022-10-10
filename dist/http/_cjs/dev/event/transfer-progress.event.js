/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var requestProgress_event = require('./request-progress.event.js');

var TransferProgressEvent = /** @class */ (function (_super) {
    _tslib.__extends(TransferProgressEvent, _super);
    function TransferProgressEvent(request, status, loaded, total, percent) {
        var _this = _super.call(this, request, status) || this;
        _this.request = request;
        _this.status = status;
        _this.loaded = loaded;
        _this.total = total;
        _this.percent = percent;
        return _this;
    }
    return TransferProgressEvent;
}(requestProgress_event.RequestProgressEvent));

exports.TransferProgressEvent = TransferProgressEvent;
