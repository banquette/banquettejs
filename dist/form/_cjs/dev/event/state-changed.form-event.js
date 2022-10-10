/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var formEvent = require('./form-event.js');

var StateChangedFormEvent = /** @class */ (function (_super) {
    _tslib.__extends(StateChangedFormEvent, _super);
    function StateChangedFormEvent(source, state, newValue) {
        var _this = _super.call(this, source) || this;
        _this.state = state;
        _this.newValue = newValue;
        return _this;
    }
    return StateChangedFormEvent;
}(formEvent.FormEvent));

exports.StateChangedFormEvent = StateChangedFormEvent;
