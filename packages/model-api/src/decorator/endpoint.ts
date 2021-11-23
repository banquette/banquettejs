import { ApiEndpointOptionsWithName, ApiEndpointParameterOptions } from "@banquette/api";
import { Injector } from "@banquette/dependency-injection";
import { HttpMethod } from "@banquette/http";
import { Constructor } from "@banquette/utils-type/types";
import { ModelApiMetadataService } from "../model-api-metadata.service";

const metadata = Injector.Get(ModelApiMetadataService);

type EndpointDecoratorOptions = ApiEndpointOptionsWithName & {group?: string|string[]};

export function Endpoint(endpoint: EndpointDecoratorOptions): any;
export function Endpoint(name: string, url: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): any;
export function Endpoint(optionsOrName: EndpointDecoratorOptions|string, url?: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): any {
    return (ctor: Constructor) => {
        metadata.registerEndpoint(ctor, optionsOrName as any, url as any, method, params);
    };
}
