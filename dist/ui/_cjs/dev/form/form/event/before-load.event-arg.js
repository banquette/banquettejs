/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.js');
var eventArg = require('@banquette/event/_cjs/dev/event-arg');

var BeforeLoadEventArg = /** @class */ (function (_super) {
    _tslib.__extends(BeforeLoadEventArg, _super);
    function BeforeLoadEventArg(vm) {
        var _this = _super.call(this) || this;
        _this.vm = vm;
        return _this;
    }
    return BeforeLoadEventArg;
}(eventArg.EventArg));

exports.BeforeLoadEventArg = BeforeLoadEventArg;
