/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var transform_service = require('@banquette/model/_cjs/dev/transformer/transform.service');
var pojo = require('@banquette/model/_cjs/dev/transformer/type/root/pojo');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var constant = require('../constant.js');

var transformService = injector.Injector.Get(transform_service.TransformService);
var modelMetadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeResponse(event) {
    if (event.state.remote.model === null || !isArray.isArray(event.result.items)) {
        return;
    }
    var ctor = modelMetadata.resolveAlias(event.state.remote.model);
    var transformResult = transformService.transformInverse(event.result.items, ctor, pojo.PojoTransformerSymbol);
    var assignResult = function () {
        event.result.items = transformResult.result;
    };
    if (transformResult.promise !== null) {
        return transformResult.promise.then(assignResult);
    }
    else {
        assignResult();
    }
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constant.TableApiEvents.BeforeResponse, onBeforeResponse, 0, null, [constant.TableProcessorTag]);
