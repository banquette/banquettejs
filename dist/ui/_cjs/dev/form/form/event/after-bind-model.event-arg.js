/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var AfterBindModelEventArg = /** @class */ (function (_super) {
    _tslib.__extends(AfterBindModelEventArg, _super);
    function AfterBindModelEventArg(model, binder) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.binder = binder;
        return _this;
    }
    return AfterBindModelEventArg;
}(eventArg.EventArg));

exports.AfterBindModelEventArg = AfterBindModelEventArg;
