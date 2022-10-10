/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');

var UiConfigurationSymbol = Symbol('ui');
injector.Injector.Get(configuration_service.ConfigurationService).register(UiConfigurationSymbol, {
    table: {
        pagination: {
            pageParameterName: 'page',
            itemsPerPageParameterName: 'itemsPerPage',
            strategyParameterName: 'strategy'
        },
        filtering: {
            flattenConcatenator: '.'
        },
        apiEventsPriorities: {
            beforeRequest: 1,
            beforeResponse: 1
        }
    }
}, true);

exports.UiConfigurationSymbol = UiConfigurationSymbol;
