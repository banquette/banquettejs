/*!
 * Banquette Log v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var constants = require('./constants.js');

var LogConfigurationSymbol = Symbol('log');
injector.Injector.Get(configuration_service.ConfigurationService).register(LogConfigurationSymbol, {
    level: constants.LogLevel.ALL,
    storageKey: '_logs',
    maximumCount: 50
}, true);

exports.LogConfigurationSymbol = LogConfigurationSymbol;
