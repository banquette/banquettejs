/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when a form component is not found in a group.
 */
var ComponentNotFoundException = /** @class */ (function (_super) {
    _tslib.__extends(ComponentNotFoundException, _super);
    function ComponentNotFoundException(identifier, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.identifier = identifier;
        _this.slug = 'component-not-found';
        return _this;
    }
    return ComponentNotFoundException;
}(system_exception.SystemException));

exports.ComponentNotFoundException = ComponentNotFoundException;
