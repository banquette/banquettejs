/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var varHolder = require('@banquette/utils-misc/_cjs/dev/var-holder');

var TiptapConfigurationService = /** @class */ (function (_super) {
    _tslib.__extends(TiptapConfigurationService, _super);
    function TiptapConfigurationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TiptapConfigurationService = _tslib.__decorate([
        service_decorator.Service()
    ], TiptapConfigurationService);
    return TiptapConfigurationService;
}(varHolder.VarHolder));

exports.TiptapConfigurationService = TiptapConfigurationService;
