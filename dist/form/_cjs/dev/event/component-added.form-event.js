/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var formEvent = require('./form-event.js');

var ComponentAddedFormEvent = /** @class */ (function (_super) {
    _tslib.__extends(ComponentAddedFormEvent, _super);
    function ComponentAddedFormEvent(source, added, identifier) {
        var _this = _super.call(this, source) || this;
        _this.added = added;
        _this.identifier = identifier;
        return _this;
    }
    return ComponentAddedFormEvent;
}(formEvent.FormEvent));

exports.ComponentAddedFormEvent = ComponentAddedFormEvent;
