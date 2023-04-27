import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { FormConfigurationInterface } from "./form-configuration.interface";

export const FormConfigurationSymbol = Symbol('form');
Injector.Get(ConfigurationService).register<FormConfigurationInterface>(FormConfigurationSymbol, {
    factory: {
        extendedNamePrefix: null,
        extendedNameSuffix: '$'
    }
}, true);
