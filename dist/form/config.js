/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';

var FormConfigurationSymbol = Symbol('form');
Injector.Get(ConfigurationService).register(FormConfigurationSymbol, {
    factory: {
        extendedNamePrefix: null,
        extendedNameSuffix: '$'
    }
}, true);

export { FormConfigurationSymbol };
