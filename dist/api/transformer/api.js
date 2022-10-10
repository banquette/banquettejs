/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../_virtual/_tslib.js';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { ModelTransformerTag } from '@banquette/model/constants';
import { PojoTransformer } from '@banquette/model/transformer/type/root/pojo';

var ApiTransformerSymbol = Symbol('api');
var ApiTransformer = /** @class */ (function (_super) {
    __extends(ApiTransformer, _super);
    function ApiTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ApiTransformer.prototype.getTransformerSymbol = function () {
        return ApiTransformerSymbol;
    };
    ApiTransformer = __decorate([
        Module(ModelTransformerTag)
    ], ApiTransformer);
    return ApiTransformer;
}(PojoTransformer));

export { ApiTransformer, ApiTransformerSymbol };
