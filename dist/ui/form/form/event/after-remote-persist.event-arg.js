/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../../_virtual/_tslib.js';
import { AfterPersistEventArg } from './after-persist.event-arg.js';

var AfterRemotePersistEventArg = /** @class */ (function (_super) {
    __extends(AfterRemotePersistEventArg, _super);
    function AfterRemotePersistEventArg(response, payload) {
        var _this = _super.call(this, payload) || this;
        _this.response = response;
        _this.payload = payload;
        return _this;
    }
    return AfterRemotePersistEventArg;
}(AfterPersistEventArg));

export { AfterRemotePersistEventArg };
