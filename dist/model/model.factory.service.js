/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __param, __metadata } from './_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { ModelMetadataService } from './model-metadata.service.js';

var ModelFactoryService = /** @class */ (function () {
    function ModelFactoryService(metadata) {
        this.metadata = metadata;
    }
    /**
     * Create an instance of a model.
     */
    ModelFactoryService.prototype.create = function (identifier, context) {
        return this.metadata.getFactory(this.metadata.resolveAlias(identifier))(context);
    };
    ModelFactoryService = __decorate([
        Service(),
        __param(0, Inject(ModelMetadataService)),
        __metadata("design:paramtypes", [ModelMetadataService])
    ], ModelFactoryService);
    return ModelFactoryService;
}());

export { ModelFactoryService };
