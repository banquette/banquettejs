/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';
import { XhrAdapter } from './adapter/xhr.adapter.js';

var HttpConfigurationSymbol = Symbol('http');
Injector.Get(ConfigurationService).register(HttpConfigurationSymbol, {
    adapter: XhrAdapter,
    maxSimultaneousRequests: 3,
    requestRetryDelay: 'auto',
    requestRetryCount: 5,
    requestTimeout: 10000,
    queryString: {
        arrayFormat: 'brackets',
        indices: true,
        format: 'RFC3986',
        encodeValuesOnly: false,
        allowDots: false,
        charset: 'utf-8'
    }
}, true);

export { HttpConfigurationSymbol };
