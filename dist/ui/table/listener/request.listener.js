/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { flattenObject } from '@banquette/utils-object/flatten-object';
import { UiConfigurationSymbol } from '../../config.js';
import { TableApiEvents, TableProcessorTag } from '../constant.js';

// Lazy load the config.
var config = null;
function getConfig() {
    if (config === null) {
        config = Injector.Get(ConfigurationService).get(UiConfigurationSymbol).table;
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
    var flattened = flattenObject(event.state.filters, config.filtering.flattenConcatenator);
    for (var _i = 0, _a = Object.keys(flattened); _i < _a.length; _i++) {
        var key = _a[_i];
        request.setParam(key, flattened[key]);
    }
}
Injector.Get(EventDispatcherService).subscribe(TableApiEvents.BeforeRequest, onBeforeRequest, 0, null, [TableProcessorTag]);
