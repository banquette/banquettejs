import { SharedConfiguration } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { FormConfigurationInterface } from "./form-configuration.interface";

export const FormConfigurationSymbol = Symbol('form');
Injector.Get<SharedConfiguration>(SharedConfiguration).register<FormConfigurationInterface>(FormConfigurationSymbol, {
    factory: {
        extendedNamePrefix: null,
        extendedNameSuffix: '$'
    }
}, true);
