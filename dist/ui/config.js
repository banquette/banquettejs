/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';

var UiConfigurationSymbol = Symbol('ui');
Injector.Get(ConfigurationService).register(UiConfigurationSymbol, {
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

export { UiConfigurationSymbol };
