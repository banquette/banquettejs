/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var constants = require('./constants.js');
var t = require('./t.js');
var model_factory_service = require('./model.factory.service.js');
var modelMetadata_service = require('./model-metadata.service.js');
var modelTransformMetadata_service = require('./model-transform-metadata.service.js');
var modelWatcher_service = require('./model-watcher.service.js');
var transformResult = require('./transform-result.js');
var utils = require('./utils.js');
var alias = require('./decorator/alias.js');
var factory = require('./decorator/factory.js');
var json = require('./decorator/json.js');
var pojo = require('./decorator/pojo.js');
var relation = require('./decorator/relation.js');
var transformable = require('./decorator/transformable.js');
var utils$1 = require('./decorator/utils.js');
var invalidJson_exception = require('./exception/invalid-json.exception.js');
var modelAliasNotFound_exception = require('./exception/model-alias-not-found.exception.js');
var noCompatibleTransformerFound_exception = require('./exception/no-compatible-transformer-found.exception.js');
var transformFailed_exception = require('./exception/transform-failed.exception.js');
var transformInverseNotSupported_exception = require('./exception/transform-inverse-not-supported.exception.js');
var transformNotSupported_exception = require('./exception/transform-not-supported.exception.js');
var abstractRootTransformer = require('./transformer/type/root/abstract-root-transformer.js');
var pojo$1 = require('./transformer/type/root/pojo.js');
var json$1 = require('./transformer/type/root/json.js');
var collection = require('./transformer/type/collection.js');
var model = require('./transformer/type/model.js');
var primitive = require('./transformer/type/primitive.js');
var raw = require('./transformer/type/raw.js');
var transform_service = require('./transformer/transform.service.js');
var transformContext = require('./transformer/transform-context.js');
var transformPipeline = require('./transformer/transform-pipeline.js');



exports.ModelEvents = constants.ModelEvents;
exports.ModelTransformerTag = constants.ModelTransformerTag;
exports.ObjectCtor = constants.ObjectCtor;
exports.Wildcard = constants.Wildcard;
exports.T = t.T;
exports.TExtend = t.TExtend;
exports.ModelFactoryService = model_factory_service.ModelFactoryService;
exports.ModelMetadataService = modelMetadata_service.ModelMetadataService;
exports.ModelTransformMetadataService = modelTransformMetadata_service.ModelTransformMetadataService;
exports.ModelWatcherService = modelWatcher_service.ModelWatcherService;
exports.TransformResult = transformResult.TransformResult;
Object.defineProperty(exports, 'TransformResultStatus', {
	enumerable: true,
	get: function () { return transformResult.TransformResultStatus; }
});
exports.ensureCompleteModelTransformer = utils.ensureCompleteModelTransformer;
exports.ensureCompleteTransformer = utils.ensureCompleteTransformer;
exports.Alias = alias.Alias;
exports.Factory = factory.Factory;
exports.Json = json.Json;
exports.Pojo = pojo.Pojo;
exports.Relation = relation.Relation;
exports.Transformable = transformable.Transformable;
exports.createRelationAwareTransformableDecorator = utils$1.createRelationAwareTransformableDecorator;
exports.createTransformableDecorator = utils$1.createTransformableDecorator;
exports.propertyDecorator = utils$1.propertyDecorator;
exports.InvalidJsonException = invalidJson_exception.InvalidJsonException;
exports.ModelAliasNotFoundException = modelAliasNotFound_exception.ModelAliasNotFoundException;
exports.NoCompatibleTransformerFoundException = noCompatibleTransformerFound_exception.NoCompatibleTransformerFoundException;
exports.TransformFailedException = transformFailed_exception.TransformFailedException;
exports.TransformInverseNotSupportedException = transformInverseNotSupported_exception.TransformInverseNotSupportedException;
exports.TransformNotSupportedException = transformNotSupported_exception.TransformNotSupportedException;
exports.AbstractRootTransformer = abstractRootTransformer.AbstractRootTransformer;
exports.PojoTransformer = pojo$1.PojoTransformer;
exports.PojoTransformerSymbol = pojo$1.PojoTransformerSymbol;
exports.JsonTransformer = json$1.JsonTransformer;
exports.JsonTransformerSymbol = json$1.JsonTransformerSymbol;
exports.Collection = collection.Collection;
exports.Model = model.Model;
exports.Primitive = primitive.Primitive;
Object.defineProperty(exports, 'Type', {
	enumerable: true,
	get: function () { return primitive.Type; }
});
exports.Raw = raw.Raw;
exports.TransformService = transform_service.TransformService;
exports.TransformContext = transformContext.TransformContext;
exports.TransformPipeline = transformPipeline.TransformPipeline;
