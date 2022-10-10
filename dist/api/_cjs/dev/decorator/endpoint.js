/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isConstructor = require('@banquette/utils-type/_cjs/dev/is-constructor');
var apiEndpointStorage_service = require('../api-endpoint-storage.service.js');

var metadata = injector.Injector.Get(apiEndpointStorage_service.ApiEndpointStorageService);
function Endpoint(optionsOrName, url, method, params) {
    return function (ctor) {
        if (!isConstructor.isConstructor(ctor)) {
            throw new usage_exception.UsageException('You can only place "@Endpoint()" on a class.');
        }
        metadata.registerEndpoint(optionsOrName, url, method, params, ctor);
    };
}

exports.Endpoint = Endpoint;
