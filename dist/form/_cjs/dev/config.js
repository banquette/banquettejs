/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');

var FormConfigurationSymbol = Symbol('form');
injector.Injector.Get(configuration_service.ConfigurationService).register(FormConfigurationSymbol, {
    factory: {
        extendedNamePrefix: null,
        extendedNameSuffix: '$'
    }
}, true);

exports.FormConfigurationSymbol = FormConfigurationSymbol;
