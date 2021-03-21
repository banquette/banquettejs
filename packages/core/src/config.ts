import { CoreConfigurationInterface } from "./config/core-configuration.interface";
import { SharedConfiguration, SharedConfigurationSymbol } from "./config/shared-configuration";
import { Injector } from "./injector";

export const CoreConfigurationSymbol = Symbol("core");
Injector.Get<SharedConfiguration>(SharedConfigurationSymbol).register<CoreConfigurationInterface>(CoreConfigurationSymbol, {
    env: 'prod',
    version: '0.0.1'
}, true);
