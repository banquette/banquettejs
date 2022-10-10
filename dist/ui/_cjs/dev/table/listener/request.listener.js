/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var flattenObject = require('@banquette/utils-object/_cjs/dev/flatten-object');
var config$1 = require('../../config.js');
var constant = require('../constant.js');

// Lazy load the config.
var config = null;
function getConfig() {
    if (config === null) {
        config = injector.Injector.Get(configuration_service.ConfigurationService).get(config$1.UiConfigurationSymbol).table;
    }
    return config;
}
/**
 * Add configuration parameters (pagination, filtering) to the request.
 */
function onBeforeRequest(event) {
    var config = getConfig();
    var request = event.httpEvent.request;
    if (event.state.pagination.enabled) {
        request.setParam(config.pagination.pageParameterName, event.state.pagination.page);
        request.setParam(config.pagination.itemsPerPageParameterName, event.state.pagination.itemsPerPage);
        if (config.pagination.strategyParameterName !== null) {
            request.setParam(config.pagination.strategyParameterName, event.state.pagination.strategy);
        }
    }
    if (event.state.ordering.columnName !== null && event.state.ordering.direction !== null) {
        request.setParam("order[".concat(event.state.ordering.columnName, "]"), event.state.ordering.direction);
    }
    var flattened = flattenObject.flattenObject(event.state.filters, config.filtering.flattenConcatenator);
    for (var _i = 0, _a = Object.keys(flattened); _i < _a.length; _i++) {
        var key = _a[_i];
        request.setParam(key, flattened[key]);
    }
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constant.TableApiEvents.BeforeRequest, onBeforeRequest, 0, null, [constant.TableProcessorTag]);
