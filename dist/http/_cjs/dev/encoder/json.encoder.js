/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var exception_factory = require('@banquette/exception/_cjs/dev/exception.factory');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constants = require('../constants.js');

var PayloadTypeJson = Symbol('json');
/**
 * Maybe encode the request payload into a JSON string.
 */
function onBeforeRequest(event) {
    if (event.request.payloadType !== PayloadTypeJson || event.request.tryCount) {
        return;
    }
    event.stopPropagation();
    if (!isNullOrUndefined.isNullOrUndefined(event.request.payload)) {
        if (!isArray.isArray(event.request.payload) && !isObject.isObject(event.request.payload)) {
            throw new usage_exception.UsageException('Invalid payload for JSON encoding. An object or array is expected.');
        }
        try {
            event.request.payload = JSON.stringify(event.request.payload);
        }
        catch (e) {
            throw new usage_exception.UsageException('Failed to encode request payload to JSON.', exception_factory.ExceptionFactory.EnsureException(e));
        }
    }
    else {
        event.request.payload = '{}';
    }
    event.request.headers.set('Content-Type', 'application/json');
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constants.HttpEvents.BeforeRequest, onBeforeRequest, 0, null, [constants.EncoderTag]);

exports.PayloadTypeJson = PayloadTypeJson;
