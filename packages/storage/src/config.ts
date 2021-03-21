import { Injector, SharedConfiguration, SharedConfigurationSymbol } from "@banquette/core";
import { StorageConfigurationInterface } from "./storage-configuration.interface";

export const StorageConfigurationSymbol = Symbol('storage');
Injector.Get<SharedConfiguration>(SharedConfigurationSymbol).register<StorageConfigurationInterface>(StorageConfigurationSymbol, {
    defaultAdapter: 'auto',
    cookieAdapter: {
        prefix: ''
    }
}, true);
