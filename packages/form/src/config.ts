import { ConfigurationService } from "@banquette/config/config/configuration.service";
import { Injector } from "@banquette/dependency-injection/injector";
import { FormConfigurationInterface } from "./form-configuration.interface";

export const FormConfigurationSymbol = Symbol('form');
Injector.Get(ConfigurationService).register<FormConfigurationInterface>(FormConfigurationSymbol, {
    factory: {
        extendedNamePrefix: null,
        extendedNameSuffix: '$'
    }
}, true);
