/*!
 * Banquette Log v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';
import { LogLevel } from './constants.js';

var LogConfigurationSymbol = Symbol('log');
Injector.Get(ConfigurationService).register(LogConfigurationSymbol, {
    level: LogLevel.ALL,
    storageKey: '_logs',
    maximumCount: 50
}, true);

export { LogConfigurationSymbol };
