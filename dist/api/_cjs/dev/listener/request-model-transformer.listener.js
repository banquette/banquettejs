/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var constants = require('@banquette/http/_cjs/dev/constants');
var transform_service = require('@banquette/model/_cjs/dev/transformer/transform.service');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constant = require('../constant.js');
var api = require('../transformer/api.js');

/**
 * The role of this event listener is to check if the ApiRequest is configured to handle models
 * and if so, transform to pojo every model found in the payload.
 *
 * This will only work if the payload only contains the model or an array of models.
 *
 * If you have a more specific use case this listener cannot handle, simply subscribe to the event
 * yourself with a higher priority and stop the propagation.
 */
var transformService = injector.Injector.Get(transform_service.TransformService);
/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeRequest(event) {
    var payload = event.httpEvent.request.payload;
    if (event.apiRequest.method === constants.HttpMethod.GET || event.apiRequest.model === null || !isObject.isObject(payload)) {
        return;
    }
    var transformResult = transformService.transform(payload, api.ApiTransformerSymbol);
    if (transformResult.promise !== null) {
        return transformResult.promise.then(function () {
            event.httpEvent.request.payload = transformResult.result;
        });
    }
    else {
        event.httpEvent.request.payload = transformResult.result;
    }
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constant.ApiEvents.BeforeRequest, onBeforeRequest, 0, null, [constant.ApiProcessorTag]);
