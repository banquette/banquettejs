/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var afterPersist_eventArg = require('./after-persist.event-arg.js');

var AfterRemotePersistEventArg = /** @class */ (function (_super) {
    _tslib.__extends(AfterRemotePersistEventArg, _super);
    function AfterRemotePersistEventArg(response, payload) {
        var _this = _super.call(this, payload) || this;
        _this.response = response;
        _this.payload = payload;
        return _this;
    }
    return AfterRemotePersistEventArg;
}(afterPersist_eventArg.AfterPersistEventArg));

exports.AfterRemotePersistEventArg = AfterRemotePersistEventArg;
