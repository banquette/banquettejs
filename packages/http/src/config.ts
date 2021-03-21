import { Injector } from "@banquette/core";
import { SharedConfiguration, SharedConfigurationSymbol } from "@banquette/core";
import { XhrAdapter } from "./adapter/xhr.adapter";
import { HttpConfigurationInterface } from "./http-configuration.interface";

export const HttpConfigurationSymbol = Symbol('http');
Injector.Get<SharedConfiguration>(SharedConfigurationSymbol).register<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    adapter: XhrAdapter,
    maxSimultaneousRequests: 3,
    requestRetryDelay: 'auto',
    requestRetryCount: 5,
    requestTimeout: 10000
}, true);
