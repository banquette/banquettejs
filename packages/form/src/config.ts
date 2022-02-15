import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { FormConfigurationInterface } from "./form-configuration.interface";

export const FormConfigurationSymbol = Symbol('form');
Injector.Get(SharedConfiguration).register<FormConfigurationInterface>(FormConfigurationSymbol, {
    factory: {
        extendedNamePrefix: null,
        extendedNameSuffix: '$'
    }
}, true);
