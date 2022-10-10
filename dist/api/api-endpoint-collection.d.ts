import { HttpMethod } from "@banquette/http/constants";
import { ApiEndpoint } from "./api-endpoint";
import { ApiEndpointParameterOptions, ApiEndpointOptionsWithIdentifiers } from "./api-endpoint.options";
export declare class ApiEndpointCollection {
    /**
     * Known endpoints, indexed by name.
     */
    private endpoints;
    /**
     * Register a new endpoint.
     */
    registerEndpoint(endpoint: ApiEndpointOptionsWithIdentifiers): void;
    registerEndpoint(name: string, endpoint: ApiEndpoint): void;
    registerEndpoint(name: string, url: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): void;
    /**
     * Get the configuration of an endpoint.
     */
    getEndpoint(name: string): ApiEndpoint;
    /**
     * Test if an endpoint has been registered.
     */
    hasEndpoint(name: string): boolean;
    /**
     * Remove an endpoint.
     */
    removeEndpoint(name: string): void;
    /**
     * Remove all known endpoints.
     */
    clear(): void;
}
