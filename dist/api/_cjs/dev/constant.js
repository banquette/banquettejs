/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Events emitted by the api service.
 */
var ApiEvents = {
    /**
     * Emitted right before an HTTP request is executed, and before the payload is encoded.
     */
    BeforeRequest: Symbol('api:before-request'),
    /**
     * Emitted after the response of an HTTP request has been decoded, no matter it it succeeded or not.
     */
    BeforeResponse: Symbol('api:before-response'),
    /**
     * Emitted after a request has been successfully executed and after the response has been decoded.
     */
    RequestSuccess: Symbol('api:request-success'),
    /**
     * Emitted after a request failed to execute for an error on the network level.
     * Any error returned from the server in the body of the request, but with a 200 Http code, will not trigger this event.
     */
    RequestFailure: Symbol('api:request-failure')
};
/**
 * Filtering tag set by the `ApiService` so it can listen to events of its own requests.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
var ApiTag = Symbol('api:tag');
/**
 * Propagation tag set by built-in processors.
 *
 * @see EventDispatcher documentation for more details on tags.
 */
var ApiProcessorTag = Symbol('api:processor');

exports.ApiEvents = ApiEvents;
exports.ApiProcessorTag = ApiProcessorTag;
exports.ApiTag = ApiTag;
