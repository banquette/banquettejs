/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';

var ApiConfigurationSymbol = Symbol('api');
Injector.Get(ConfigurationService).register(ApiConfigurationSymbol, {
    eventsPriorities: {
        // Higher priority to be called before encoders.
        beforeRequest: 100,
        // Lower priority to be called after decoders.
        beforeResponse: -100,
        // Default priority for others.
        requestSuccess: 0,
        requestFailure: 0
    }
}, true);

export { ApiConfigurationSymbol };
