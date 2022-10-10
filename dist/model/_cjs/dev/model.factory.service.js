/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var service_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/service.decorator');
var modelMetadata_service = require('./model-metadata.service.js');

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
    ModelFactoryService = _tslib.__decorate([
        service_decorator.Service(),
        _tslib.__param(0, inject_decorator.Inject(modelMetadata_service.ModelMetadataService)),
        _tslib.__metadata("design:paramtypes", [modelMetadata_service.ModelMetadataService])
    ], ModelFactoryService);
    return ModelFactoryService;
}());

exports.ModelFactoryService = ModelFactoryService;
