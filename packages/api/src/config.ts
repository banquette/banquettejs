import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { ApiConfigurationInterface } from "./api-configuration.interface";

export const ApiConfigurationSymbol = Symbol('api');
Injector.Get(SharedConfiguration).register<ApiConfigurationInterface>(ApiConfigurationSymbol, {
    eventsPriorities: {
        // Higher priority that 0 (the default of encoders) to be called before them.
        beforeRequest: 100,
        // Lower priority that 0 (the default of decoders) to be called after them.
        beforeResponse: -100,
        // Default priority for others.
        requestSuccess: 0,
        requestFailure: 0
    }
}, true);
