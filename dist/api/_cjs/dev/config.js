/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');

var ApiConfigurationSymbol = Symbol('api');
injector.Injector.Get(configuration_service.ConfigurationService).register(ApiConfigurationSymbol, {
    eventsPriorities: {
        // Higher priority to be called before encoders.
        beforeRequest: 100,
        // Lower priority to be called after decoders.
        beforeResponse: -100,
        // Default priority for others.
        requestSuccess: 0,
        requestFailure: 0
    }
}, true);

exports.ApiConfigurationSymbol = ApiConfigurationSymbol;
