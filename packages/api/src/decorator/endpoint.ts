import {Injector} from "@banquette/dependency-injection";
import {UsageException} from "@banquette/exception";
import {HttpMethod} from "@banquette/http";
import {Constructor, isConstructor, isString, StringEnum} from "@banquette/utils-type";
import {ApiEndpointStorageService} from "../api-endpoint-storage.service";
import {ApiEndpointOptionsWithIdentifiers, ApiEndpointParameterOptions} from "../api-endpoint.options";

type EndpointDecoratorOptions = Omit<ApiEndpointOptionsWithIdentifiers, 'ctor'> & {group?: string|string[]};

let metadata: ApiEndpointStorageService|null = null;

export function Endpoint(endpoint: EndpointDecoratorOptions): any;
export function Endpoint(name: string, url: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>): any;
export function Endpoint(optionsOrName: EndpointDecoratorOptions|string, url?: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>): any {
    return (ctor: Constructor) => {
        if (!isConstructor(ctor)) {
            throw new UsageException('You can only place "@Endpoint()" on a class.');
        }
        if (metadata === null) {
            metadata = Injector.Get(ApiEndpointStorageService);
        }
        if (isString(optionsOrName)) {
            metadata.registerEndpoint(optionsOrName, url as string, method, params, ctor);
            return;
        }
        metadata.registerEndpoint(optionsOrName, ctor);
    };
}
