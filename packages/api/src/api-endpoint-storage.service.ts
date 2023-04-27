import { Service } from "@banquette/dependency-injection";
import { HttpMethod } from "@banquette/http";
import { isFunction, isNullOrUndefined, isString, isUndefined, Constructor, StringEnum } from "@banquette/utils-type";
import { ApiEndpoint } from "./api-endpoint";
import { ApiEndpointCollection } from "./api-endpoint-collection";
import { ApiEndpointOptionsWithIdentifiers, ApiEndpointParameterOptions } from "./api-endpoint.options";
import { EndpointNotFoundException } from "./exception/endpoint-not-found.exception";

@Service()
export class ApiEndpointStorageService {
    /**
     * Mapping between a constructor and a collection of endpoints.
     *
     * The constructor is meant to be a model to which attach the collection.
     *
     * If no constructor is defined when registering an endpoint, the constructor of
     * the service itself is used to act as a global storage.
     */
    private collectionsMap: WeakMap<Constructor, ApiEndpointCollection>;

    public constructor() {
        this.collectionsMap = new WeakMap<Constructor, ApiEndpointCollection>();
    }

    /**
     * Register an api endpoint.
     */
    public registerEndpoint(endpoint: ApiEndpointOptionsWithIdentifiers): void;
    public registerEndpoint(name: string, endpoint: ApiEndpoint, ctor?: Constructor|null): void;
    public registerEndpoint(name: string, url: string, method?: StringEnum<HttpMethod>, params?: Record<string, ApiEndpointParameterOptions>, ctor?: Constructor|null): void;
    public registerEndpoint(optionsOrName: ApiEndpointOptionsWithIdentifiers|string,
                            urlOrEndpoint?: string|ApiEndpoint,
                            methodOrCtor?: StringEnum<HttpMethod>|Constructor|null,
                            params?: Record<string, ApiEndpointParameterOptions>,
                            ctor?: Constructor|null): void {
        ctor = this.resolveCtor(!isString(optionsOrName) ? optionsOrName.ctor : (isFunction(methodOrCtor) ? methodOrCtor : ctor));
        let collection = this.collectionsMap.get(ctor);
        if (isUndefined(collection)) {
            collection = new ApiEndpointCollection();
            this.collectionsMap.set(ctor, collection);
        }
        collection.registerEndpoint(optionsOrName as any, urlOrEndpoint as any, methodOrCtor as any, params);
    }

    /**
     * Try to get an ApiEndpoint.
     *
     * @throws EndpointNotFoundException
     */
    public getEndpoint(name: string, ctor?: Constructor|null): ApiEndpoint {
        ctor = this.resolveCtor(ctor);
        const collection = this.collectionsMap.get(ctor);
        if (isUndefined(collection) || !collection.hasEndpoint(name)) {
            const additionalMessage = ctor !== ApiEndpoint ? ` for constructor "${ctor.name}".` : '';
            throw new EndpointNotFoundException(name, `No endpoint "${name}" has been found${additionalMessage}.`);
        }
        return collection.getEndpoint(name);
    }

    /**
     * Test if an endpoint has been registered.
     */
    public hasEndpoint(name: string, ctor?: Constructor|null): boolean {
        ctor = this.resolveCtor(ctor);
        const collection = this.collectionsMap.get(ctor);
        return !isUndefined(collection) && collection.hasEndpoint(name);
    }

    /**
     * Remove an endpoint.
     */
    public removeEndpoint(name: string, ctor?: Constructor|null): void {
        ctor = this.resolveCtor(ctor);
        const collection = this.collectionsMap.get(ctor);
        if (!isUndefined(collection)) {
            collection.removeEndpoint(name);
        }
    }

    /**
     * Remove all known endpoints.
     */
    public clear(ctor?: Constructor|null): void {
        if (ctor === null) {
            this.collectionsMap = new WeakMap<Constructor, ApiEndpointCollection>();
            return ;
        }
        ctor = this.resolveCtor(ctor);
        const collection = this.collectionsMap.get(ctor);
        if (!isUndefined(collection)) {
            collection.clear();
        }
    }

    /**
     * Ensure a value for ctor.
     */
    private resolveCtor(ctor?: Constructor|null): Constructor {
        return isNullOrUndefined(ctor) ? ApiEndpointStorageService : ctor;
    }
}
