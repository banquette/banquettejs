import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { StorageConfigurationInterface } from "./storage-configuration.interface";

export const StorageConfigurationSymbol = Symbol('storage');
Injector.Get(ConfigurationService).register<StorageConfigurationInterface>(StorageConfigurationSymbol, {
    defaultAdapter: 'auto',
    cookieAdapter: {
        prefix: ''
    }
}, true);
