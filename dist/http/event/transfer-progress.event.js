/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { RequestProgressEvent } from './request-progress.event.js';

var TransferProgressEvent = /** @class */ (function (_super) {
    __extends(TransferProgressEvent, _super);
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
}(RequestProgressEvent));

export { TransferProgressEvent };
