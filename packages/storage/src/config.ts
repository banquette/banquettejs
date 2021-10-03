import { SharedConfiguration } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { StorageConfigurationInterface } from "./storage-configuration.interface";

export const StorageConfigurationSymbol = Symbol('storage');
Injector.Get<SharedConfiguration>(SharedConfiguration).register<StorageConfigurationInterface>(StorageConfigurationSymbol, {
    defaultAdapter: 'auto',
    cookieAdapter: {
        prefix: ''
    }
}, true);
