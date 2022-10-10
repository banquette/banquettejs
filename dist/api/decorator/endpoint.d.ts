import { HttpMethod } from "@banquette/http/constants";
import { StringEnum } from "@banquette/utils-type/types";
import { ApiEndpointOptionsWithIdentifiers, ApiEndpointParameterOptions } from "../api-endpoint.options";
declare type EndpointDecoratorOptions = Omit<ApiEndpointOptionsWithIdentifiers, 'ctor'> & {
    group?: string | string[];
};
export declare function Endpoint(endpoint: EndpointDecoratorOptions): any;
export declare function Endpoint(name: string, url: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>): any;
export {};
