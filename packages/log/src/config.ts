import { Injector } from "@banquette/core";
import { SharedConfiguration, SharedConfigurationSymbol } from "@banquette/core";
import { LogLevel } from "./constants";
import { LogConfigurationInterface } from "./log-configuration.interface";

export const LogConfigurationSymbol = Symbol('log');
Injector.Get<SharedConfiguration>(SharedConfigurationSymbol).registerConfig<LogConfigurationInterface>(LogConfigurationSymbol, {
    level: LogLevel.ALL,
    storageKey: '_logs',
    maximumCount: 50
}, true);
