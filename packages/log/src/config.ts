import { SharedConfiguration } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { LogLevel } from "./constants";
import { LogConfigurationInterface } from "./log-configuration.interface";

export const LogConfigurationSymbol = Symbol('log');
Injector.Get<SharedConfiguration>(SharedConfiguration).register<LogConfigurationInterface>(LogConfigurationSymbol, {
    level: LogLevel.ALL,
    storageKey: '_logs',
    maximumCount: 50
}, true);
