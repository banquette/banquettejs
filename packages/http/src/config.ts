import { Injector } from "@banquette/core";
import { SharedConfiguration, SharedConfigurationSymbol } from "@banquette/core";
import { XhrAdapter } from "./adapter/xhr.adapter";
import { HttpConfigurationInterface } from "./http-configuration.interface";

export const HttpConfigurationSymbol = Symbol('http');
Injector.Get<SharedConfiguration>(SharedConfigurationSymbol).registerConfig<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    requestErrorRetryCount: 3,
    requestTimeout: 10000,
    connectionErrorRetryDelay: 10000,
    reloadOnAuthenticationError: true,
    adapter: XhrAdapter
}, true);
