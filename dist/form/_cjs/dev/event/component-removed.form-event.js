/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var formEvent = require('./form-event.js');

var ComponentRemovedFormEvent = /** @class */ (function (_super) {
    _tslib.__extends(ComponentRemovedFormEvent, _super);
    function ComponentRemovedFormEvent(source, removed, identifier) {
        var _this = _super.call(this, source) || this;
        _this.removed = removed;
        _this.identifier = identifier;
        return _this;
    }
    return ComponentRemovedFormEvent;
}(formEvent.FormEvent));

exports.ComponentRemovedFormEvent = ComponentRemovedFormEvent;
