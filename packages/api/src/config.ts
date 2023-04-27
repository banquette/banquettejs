import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { ApiConfigurationInterface } from "./api-configuration.interface";

export const ApiConfigurationSymbol = Symbol('api');
Injector.Get(ConfigurationService).register<ApiConfigurationInterface>(ApiConfigurationSymbol, {
    eventsPriorities: {
        // Higher priority to be called before encoders.
        beforeRequest: 100,
        // Lower priority to be called after decoders.
        beforeResponse: -100,
        // Default priority for others.
        requestSuccess: 0,
        requestFailure: 0
    }
}, true);
