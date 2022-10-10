/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var formEvent = require('./form-event.js');

var ErrorsChangedFormEvent = /** @class */ (function (_super) {
    _tslib.__extends(ErrorsChangedFormEvent, _super);
    function ErrorsChangedFormEvent(source, errors) {
        var _this = _super.call(this, source) || this;
        _this.errors = errors;
        return _this;
    }
    return ErrorsChangedFormEvent;
}(formEvent.FormEvent));

exports.ErrorsChangedFormEvent = ErrorsChangedFormEvent;
