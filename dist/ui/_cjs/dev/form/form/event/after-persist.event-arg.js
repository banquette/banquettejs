/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var AfterPersistEventArg = /** @class */ (function (_super) {
    _tslib.__extends(AfterPersistEventArg, _super);
    function AfterPersistEventArg(payload) {
        var _this = _super.call(this) || this;
        _this.payload = payload;
        return _this;
    }
    return AfterPersistEventArg;
}(eventArg.EventArg));

exports.AfterPersistEventArg = AfterPersistEventArg;
