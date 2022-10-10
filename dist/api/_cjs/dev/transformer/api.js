/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var constants = require('@banquette/model/_cjs/dev/constants');
var pojo = require('@banquette/model/_cjs/dev/transformer/type/root/pojo');

var ApiTransformerSymbol = Symbol('api');
var ApiTransformer = /** @class */ (function (_super) {
    _tslib.__extends(ApiTransformer, _super);
    function ApiTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ApiTransformer.prototype.getTransformerSymbol = function () {
        return ApiTransformerSymbol;
    };
    ApiTransformer = _tslib.__decorate([
        module_decorator.Module(constants.ModelTransformerTag)
    ], ApiTransformer);
    return ApiTransformer;
}(pojo.PojoTransformer));

exports.ApiTransformer = ApiTransformer;
exports.ApiTransformerSymbol = ApiTransformerSymbol;
