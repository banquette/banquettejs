import { SharedConfiguration } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { ApiConfigurationInterface } from "./api-configuration.interface";

export const ApiConfigurationSymbol = Symbol('api');
Injector.Get<SharedConfiguration>(SharedConfiguration).register<ApiConfigurationInterface>(ApiConfigurationSymbol, {
    endpoints: {
        queryString: {
            arrayFormat: 'brackets',
            indices: true,
            format: 'RFC3986',
            encodeValuesOnly: false,
            allowDots: false,
            charset: 'utf-8'
        }
    }
}, true);
