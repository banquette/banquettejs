import { HttpMethod } from "@banquette/http/constants";
import { Constructor, StringEnum } from "@banquette/utils-type/types";
import { ApiEndpoint } from "./api-endpoint";
import { ApiEndpointOptionsWithIdentifiers, ApiEndpointParameterOptions } from "./api-endpoint.options";
export declare class ApiEndpointStorageService {
    /**
     * Mapping between a constructor and a collection of endpoints.
     *
     * The constructor is meant to be a model to which attach the collection.
     *
     * If no constructor is defined when registering an endpoint, the constructor of
     * the service itself is used to act as a global storage.
     */
    private collectionsMap;
    constructor();
    /**
     * Register an api endpoint.
     */
    registerEndpoint(endpoint: ApiEndpointOptionsWithIdentifiers): void;
    registerEndpoint(name: string, endpoint: ApiEndpoint, ctor?: Constructor | null): void;
    registerEndpoint(name: string, url: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>, ctor?: Constructor | null): void;
    /**
     * Try to get an ApiEndpoint.
     *
     * @throws EndpointNotFoundException
     */
    getEndpoint(name: string, ctor?: Constructor | null): ApiEndpoint;
    /**
     * Test if an endpoint has been registered.
     */
    hasEndpoint(name: string, ctor?: Constructor | null): boolean;
    /**
     * Remove an endpoint.
     */
    removeEndpoint(name: string, ctor?: Constructor | null): void;
    /**
     * Remove all known endpoints.
     */
    clear(ctor?: Constructor | null): void;
    /**
     * Ensure a value for ctor.
     */
    private resolveCtor;
}
