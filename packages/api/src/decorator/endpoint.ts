import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { HttpMethod } from "@banquette/http/constants";
import { isConstructor } from "@banquette/utils-type/is-constructor";
import { Constructor, StringEnum } from "@banquette/utils-type/types";
import { ApiEndpointStorageService } from "../api-endpoint-storage.service";
import { ApiEndpointOptionsWithIdentifiers, ApiEndpointParameterOptions } from "../api-endpoint.options";

const metadata = Injector.Get(ApiEndpointStorageService);

type EndpointDecoratorOptions = Omit<ApiEndpointOptionsWithIdentifiers, 'ctor'> & {group?: string|string[]};

export function Endpoint(endpoint: EndpointDecoratorOptions): any;
export function Endpoint(name: string, url: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>): any;
export function Endpoint(optionsOrName: EndpointDecoratorOptions|string, url?: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>): any {
    return (ctor: Constructor) => {
        if (!isConstructor(ctor)) {
            throw new UsageException('You can only place "@Endpoint()" on a class.');
        }
        metadata.registerEndpoint(optionsOrName as any, url as any, method, params, ctor);
    };
}
