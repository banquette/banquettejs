import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import {EventDispatcherService, UnsubscribeFunction} from "@banquette/event";
import { flattenObject } from "@banquette/utils-object";
import { UiConfigurationSymbol } from "../../config";
import { UiConfigurationInterface } from "../../ui-configuration.interface";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableRequestEvent } from "../event/table-request.event";
import { TableConfigurationInterface } from "../table-configuration.interface";

// Lazy load the config.
let config: TableConfigurationInterface|null = null;
function getConfig(): TableConfigurationInterface {
    if (config === null) {
        config = Injector.Get(ConfigurationService).get<UiConfigurationInterface>(UiConfigurationSymbol).table;
    }
    return config;
}

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useBuiltInRequestListener = /**!PURE*/ (() => {
    return (tableInstanceTag: symbol): UnsubscribeFunction => {
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
            const flattened = flattenObject(event.state.filters, config.filtering.flattenConcatenator);
            for (const key of Object.keys(flattened)) {
                request.setParam(key, flattened[key]);
            }
        }

        return Injector.Get(EventDispatcherService).subscribe<TableRequestEvent>(
            TableApiEvents.BeforeRequest,
            onBeforeRequest,
            0,
            [tableInstanceTag],
            [TableProcessorTag]
        );
    };
})();
