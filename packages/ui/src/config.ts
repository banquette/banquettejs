import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { Injector } from "@banquette/dependency-injection/injector";
import { UiConfigurationInterface } from "./ui-configuration.interface";

export const UiConfigurationSymbol = Symbol('ui');
Injector.Get(ConfigurationService).register<UiConfigurationInterface>(UiConfigurationSymbol, {
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
