import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { XhrAdapter } from "./adapter/xhr.adapter";
import { HttpConfigurationInterface } from "./http-configuration.interface";

export const HttpConfigurationSymbol = Symbol('http');
Injector.Get<SharedConfiguration>(SharedConfiguration).register<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    adapter: XhrAdapter,
    maxSimultaneousRequests: 3,
    requestRetryDelay: 'auto',
    requestRetryCount: 5,
    requestTimeout: 10000,
    queryString: {
        arrayFormat: 'brackets',
        indices: true,
        format: 'RFC3986',
        encodeValuesOnly: false,
        allowDots: false,
        charset: 'utf-8'
    }
}, true);
