/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_virtual/_tslib.js"),t=require("@banquette/dependency-injection/_cjs/prod/decorator/inject.decorator"),r=require("@banquette/dependency-injection/_cjs/prod/decorator/service.decorator"),a=require("./model-metadata.service.js"),o=function(){function ModelFactoryService(e){this.metadata=e}return ModelFactoryService.prototype.create=function(e,t){return this.metadata.getFactory(this.metadata.resolveAlias(e))(t)},ModelFactoryService=e.__decorate([r.Service(),e.__param(0,t.Inject(a.ModelMetadataService)),e.__metadata("design:paramtypes",[a.ModelMetadataService])],ModelFactoryService)}();exports.ModelFactoryService=o;
