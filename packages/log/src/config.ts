import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { LogLevel } from "./constants";
import { LogConfigurationInterface } from "./log-configuration.interface";

export const LogConfigurationSymbol = Symbol('log');
Injector.Get(SharedConfiguration).register<LogConfigurationInterface>(LogConfigurationSymbol, {
    level: LogLevel.ALL,
    storageKey: '_logs',
    maximumCount: 50
}, true);
