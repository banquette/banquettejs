/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var constants = require('@banquette/http/_cjs/dev/constants');
var modelMetadata_service = require('@banquette/model/_cjs/dev/model-metadata.service');
var transform_service = require('@banquette/model/_cjs/dev/transformer/transform.service');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constant = require('../constant.js');
var api = require('../transformer/api.js');

/**
 * The role of this event listener is to check if the ApiRequest is configured to handle models
 * and if so, transform the response into models.
 *
 * This will only work if the response only contains the model or an array of models.
 *
 * If you have a more specific use case this listener cannot handle, simply subscribe to the event
 * yourself with a higher priority and stop the propagation.
 */
var transformService = injector.Injector.Get(transform_service.TransformService);
var modelMetadata = injector.Injector.Get(modelMetadata_service.ModelMetadataService);
/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onRequestSuccess(event) {
    var responseBody = event.httpEvent.response.result;
    if (event.apiRequest.model === null || !isObject.isObject(responseBody) || !Object.keys(responseBody).length) {
        return;
    }
    var handleResult = function () {
        if (transformResult.error) {
            event.httpEvent.response.setStatus(constants.HttpResponseStatus.Error);
            event.httpEvent.response.error = transformResult.errorDetail;
        }
        else {
            event.httpEvent.response.result = transformResult.result;
        }
    };
    var ctor = modelMetadata.resolveAlias(isArray.isArray(event.apiRequest.model) ? event.apiRequest.model[1] : event.apiRequest.model);
    var transformResult = transformService.transformInverse(responseBody, ctor, api.ApiTransformerSymbol);
    if (transformResult.promise !== null) {
        return transformResult.promise.then(handleResult);
    }
    else {
        handleResult();
    }
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constant.ApiEvents.RequestSuccess, onRequestSuccess, 0, null, [constant.ApiProcessorTag]);
