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
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('../constants.js');
var invalidResponseType_exception = require('../exception/invalid-response-type.exception.js');
var autoDetect_decoder = require('./auto-detect.decoder.js');

var XSSIPrefix = ")]}'\n";
var ResponseTypeJson = Symbol('json');
/**
 * Remove the XSSI prefix (if present).
 */
function stripXSSIPrefix(input) {
    if (input.substring(0, XSSIPrefix.length) === XSSIPrefix) {
        return input.substring(XSSIPrefix.length);
    }
    return input;
}
function expectJson(event) {
    if (event.request.responseType === ResponseTypeJson) {
        return true;
    }
    if (event.request.responseType !== autoDetect_decoder.ResponseTypeAutoDetect || !isString.isString(event.response.response)) {
        return false;
    }
    if (event.response.responseType === 'json' || event.response.headers['content-type'] === 'application/json') {
        return true;
    }
    // If we have no information on the type of body, try to detect if it looks like JSON.
    if (!event.response.responseType && isUndefined.isUndefined(event.response.headers['content-type'])) {
        var body = trim.trim(stripXSSIPrefix(event.response.response));
        return body[0] === '[' || body[0] === '{';
    }
    return false;
}
/**
 * Maybe decode the JSON response into an object.
 */
function onBeforeResponse(event) {
    if (!expectJson(event)) {
        return;
    }
    // JSON is expected, so before doing anything, prevent other decoders from executing.
    event.stopPropagation();
    // An empty string or null results in an empty object.
    if (event.response.response === null || event.response.response === '') {
        event.response.response = {};
        return;
    }
    if (!isString.isString(event.response.response)) {
        throw new invalidResponseType_exception.InvalidResponseTypeException(event.request.response, 'A string is expected for a JSON response.');
    }
    try {
        event.response.response = JSON.parse(trim.trim(stripXSSIPrefix(event.response.response)));
    }
    catch (e) {
        throw new invalidResponseType_exception.InvalidResponseTypeException(event.request.response, 'The response is not a valid JSON string.', exception_factory.ExceptionFactory.EnsureException(e));
    }
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constants.HttpEvents.BeforeResponse, onBeforeResponse, 0, null, [constants.DecoderTag]);

exports.ResponseTypeJson = ResponseTypeJson;
exports.XSSIPrefix = XSSIPrefix;
