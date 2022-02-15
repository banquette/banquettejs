import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { UiConfigurationInterface } from "./ui-configuration.interface";

export const UiConfigurationSymbol = Symbol('ui');
Injector.Get(SharedConfiguration).register<UiConfigurationInterface>(UiConfigurationSymbol, {
    table: {
        pagination: {
            pageParameterName: 'page',
            itemsPerPageParameterName: 'itemsPerPage',
            strategyParameterName: 'strategy'
        },

        apiEventsPriorities: {
            beforeRequest: 1,
            beforeResponse: 1
        }
    }
}, true);
