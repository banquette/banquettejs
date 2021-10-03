import { SharedConfiguration } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { XhrAdapter } from "./adapter/xhr.adapter";
import { HttpConfigurationInterface } from "./http-configuration.interface";

export const HttpConfigurationSymbol = Symbol('http');
Injector.Get<SharedConfiguration>(SharedConfiguration).register<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    adapter: XhrAdapter,
    maxSimultaneousRequests: 3,
    requestRetryDelay: 'auto',
    requestRetryCount: 5,
    requestTimeout: 10000
}, true);
