import { UsageException } from "@banquette/exception/usage.exception";
import { HttpMethod } from "@banquette/http/constants";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ApiEndpoint } from "./api-endpoint";
import { ApiEndpointParameterOptions, ApiEndpointOptionsWithIdentifiers } from "./api-endpoint.options";
import { EndpointNotFoundException } from "./exception/endpoint-not-found.exception";

export class ApiEndpointCollection {
    /**
     * Known endpoints, indexed by name.
     */
    private endpoints: Record<string, ApiEndpoint> = {};

    /**
     * Register a new endpoint.
     */
    public registerEndpoint(endpoint: ApiEndpointOptionsWithIdentifiers): void;
    public registerEndpoint(name: string, endpoint: ApiEndpoint): void;
    public registerEndpoint(name: string, url: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): void;
    public registerEndpoint(optionsOrName: ApiEndpointOptionsWithIdentifiers|string,
                            urlOrEndpoint?: string|ApiEndpoint,
                            method?: HttpMethod,
                            params?: Record<string, ApiEndpointParameterOptions>): void {
        let endpointName: string;
        let endpoint: ApiEndpoint|null = null;
        if (isString(optionsOrName)) {
            endpointName = optionsOrName;
            if (urlOrEndpoint instanceof ApiEndpoint) {
                endpoint = urlOrEndpoint;
            } else {
                optionsOrName = {
                    name: optionsOrName,
                    url: String(urlOrEndpoint),
                    method: method || HttpMethod.GET,
                    params: params || {}
                } as ApiEndpointOptionsWithIdentifiers;
            }
        } else {
            endpointName = optionsOrName.name;
        }
        endpoint = endpoint ? endpoint : new ApiEndpoint(optionsOrName);
        if (!isUndefined(this.endpoints[endpointName])) {
            throw new UsageException(`Another endpoint named "${endpointName}" has already been registered.`);
        }
        this.endpoints[endpointName] = endpoint;
    }

    /**
     * Get the configuration of an endpoint.
     */
    public getEndpoint(name: string): ApiEndpoint {
        if (isUndefined(this.endpoints[name])) {
            throw new EndpointNotFoundException(name, `No endpoint name "${name}" has been found.`);
        }
        return this.endpoints[name];
    }

    /**
     * Test if an endpoint has been registered.
     */
    public hasEndpoint(name: string): boolean {
        return !isUndefined(this.endpoints[name]);
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
