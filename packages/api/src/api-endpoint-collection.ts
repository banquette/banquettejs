import { isUndefined, isString } from "@banquette/utils-type";
import { UsageException } from "@banquette/exception";
import { EndpointNotFoundException } from "./exception/endpoint-not-found.exception";
import { HttpMethod } from "@banquette/http";
import { ApiEndpoint } from "./api-endpoint";
import { ApiEndpointOptions, ApiEndpointParameterOptions } from "./api-endpoint.options";

type ApiEndpointOptionsWithName = ApiEndpointOptions & {name: string};

export class ApiEndpointCollection {
    /**
     * Known endpoints, indexed by name.
     */
    private endpoints: Record<string, ApiEndpoint> = {};

    /**
     * Register a new endpoint.
     */
    public registerEndpoint(endpoint: ApiEndpointOptionsWithName): void;
    public registerEndpoint(name: string, url: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): void;
    public registerEndpoint(optionsOrName: ApiEndpointOptionsWithName|string, url?: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): void {
        if (isString(optionsOrName)) {
            optionsOrName = {
                name: optionsOrName,
                url: String(url),
                method: method || HttpMethod.GET,
                parameters: params || {}
            } as ApiEndpointOptionsWithName;
        }
        const endpoint = new ApiEndpoint(optionsOrName);
        if (!isUndefined(this.endpoints[optionsOrName.name])) {
            throw new UsageException(`Another endpoint named "${optionsOrName.name}" has already been registered.`);
        }
        this.endpoints[optionsOrName.name] = endpoint;
    }

    /**
     * Get the configuration of an endpoint.
     */
    public getEndpoint(name: string): ApiEndpoint {
        if (isUndefined(this.endpoints[name])) {
            throw new EndpointNotFoundException(name, `No endpoint name ${name} has been found.`);
        }
        return this.endpoints[name];
    }

    /**
     * Remove an endpoint.
     */
    public removeEndpoint(name: string): void {
        delete this.endpoints[name];
    }

    /**
     * Remove all known endpoints.
     */
    public clear(): void {
        this.endpoints = {};
    }
}
