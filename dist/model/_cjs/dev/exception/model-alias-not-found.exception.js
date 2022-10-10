/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');

/**
 * Exception thrown when the alias of a model cannot be found.
 */
var ModelAliasNotFoundException = /** @class */ (function (_super) {
    _tslib.__extends(ModelAliasNotFoundException, _super);
    function ModelAliasNotFoundException(alias, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.alias = alias;
        _this.slug = 'model-alias-not-found';
        return _this;
    }
    return ModelAliasNotFoundException;
}(system_exception.SystemException));

exports.ModelAliasNotFoundException = ModelAliasNotFoundException;
