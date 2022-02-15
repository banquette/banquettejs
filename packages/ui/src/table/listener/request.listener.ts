import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { UiConfigurationSymbol } from "../../config";
import { UiConfigurationInterface } from "../../ui-configuration.interface";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableRequestEvent } from "../event/table-request.event";
import { TableConfigurationInterface } from "../table-configuration.interface";

// Lazy load the config.
let config: TableConfigurationInterface|null = null;
function getConfig(): TableConfigurationInterface {
    if (config === null) {
        config = Injector.Get(SharedConfiguration).get<UiConfigurationInterface>(UiConfigurationSymbol).table;
    }
    return config;
}

/**
 * Add configuration parameters (pagination, filtering) to the request.
 */
function onBeforeRequest(event: TableRequestEvent) {
    const config = getConfig();
    const request = event.httpEvent.request;
    if (event.state.pagination.enabled) {
        request.setParam(config.pagination.pageParameterName, event.state.pagination.page);
        request.setParam(config.pagination.itemsPerPageParameterName, event.state.pagination.itemsPerPage);

        if (config.pagination.strategyParameterName !== null) {
            request.setParam(config.pagination.strategyParameterName, event.state.pagination.strategy);
        }
    }
    if (event.state.ordering.columnName !== null && event.state.ordering.direction !== null) {
        request.setParam(`order[${event.state.ordering.columnName}]`, event.state.ordering.direction);
    }
}
Injector.Get(EventDispatcherService).subscribe<TableRequestEvent>(
    TableApiEvents.BeforeRequest,
    onBeforeRequest,
    0,
    null,
    [TableProcessorTag]
);
