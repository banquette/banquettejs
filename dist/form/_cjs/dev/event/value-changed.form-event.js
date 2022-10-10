/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var formEvent = require('./form-event.js');

var ValueChangedFormEvent = /** @class */ (function (_super) {
    _tslib.__extends(ValueChangedFormEvent, _super);
    function ValueChangedFormEvent(source, oldValue, newValue) {
        var _this = _super.call(this, source) || this;
        _this.oldValue = oldValue;
        _this.newValue = newValue;
        return _this;
    }
    return ValueChangedFormEvent;
}(formEvent.FormEvent));

exports.ValueChangedFormEvent = ValueChangedFormEvent;
