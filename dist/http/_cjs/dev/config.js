/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var xhr_adapter = require('./adapter/xhr.adapter.js');

var HttpConfigurationSymbol = Symbol('http');
injector.Injector.Get(configuration_service.ConfigurationService).register(HttpConfigurationSymbol, {
    adapter: xhr_adapter.XhrAdapter,
    maxSimultaneousRequests: 3,
    requestRetryDelay: 'auto',
    requestRetryCount: 5,
    requestTimeout: 10000,
    queryString: {
        arrayFormat: 'brackets',
        indices: true,
        format: 'RFC3986',
        encodeValuesOnly: false,
        allowDots: false,
        charset: 'utf-8'
    }
}, true);

exports.HttpConfigurationSymbol = HttpConfigurationSymbol;
