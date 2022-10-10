/*!
 * Banquette Storage v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';

var StorageConfigurationSymbol = Symbol('storage');
Injector.Get(ConfigurationService).register(StorageConfigurationSymbol, {
    defaultAdapter: 'auto',
    cookieAdapter: {
        prefix: ''
    }
}, true);

export { StorageConfigurationSymbol };
