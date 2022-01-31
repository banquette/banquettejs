import { ApiEndpoint } from "@banquette/api/api-endpoint";
import { ApiEndpointCollection } from "@banquette/api/api-endpoint-collection";
import { ApiEndpointOptionsWithName, ApiEndpointParameterOptions } from "@banquette/api/api-endpoint.options";
import { EndpointNotFoundException } from "@banquette/api/exception/endpoint-not-found.exception";
import { Inject } from "@banquette/dependency-injection/decorator/inject.decorator";
import { Service } from "@banquette/dependency-injection/decorator/service.decorator";
import { UsageException } from "@banquette/exception/usage.exception";
import { HttpMethod } from "@banquette/http/constants";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { ModelPropertyMetadataInterface } from "./model-property-metadata.interface";

@Service()
export class ModelApiMetadataService {
    private collectionsMap: WeakMap<Constructor, ApiEndpointCollection>;
    private propertiesMap: WeakMap<Constructor, Record<string, ModelPropertyMetadataInterface>>;

    public constructor(@Inject(ModelMetadataService) private modelMetadata: ModelMetadataService) {
        this.collectionsMap = new WeakMap<Constructor, ApiEndpointCollection>();
        this.propertiesMap = new WeakMap<Constructor, Record<string, ModelPropertyMetadataInterface>>();
    }

    /**
     * Register an api endpoint for a model.
     */
    public registerEndpoint(identifier: ModelExtendedIdentifier, endpoint: ApiEndpointOptionsWithName): void;
    public registerEndpoint(identifier: ModelExtendedIdentifier, name: string, url: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): void;
    public registerEndpoint(identifier: ModelExtendedIdentifier, optionsOrName: ApiEndpointOptionsWithName|string, url?: string, method?: HttpMethod, params?: Record<string, ApiEndpointParameterOptions>): void {
        const ctor = this.modelMetadata.resolveAlias(identifier);
        let collection = this.collectionsMap.get(ctor);
        if (isUndefined(collection)) {
            collection = new ApiEndpointCollection();
            this.collectionsMap.set(ctor, collection);
        }
        collection.registerEndpoint(optionsOrName as any, url as any, method, params);
    }

    /**
     * Try to get an ApiEndpoint.
     *
     * @throws EndpointNotFoundException
     */
    public getEndpoint(identifier: ModelExtendedIdentifier, name: string): ApiEndpoint {
        const ctor = this.modelMetadata.resolveAlias(identifier);
        const collection = this.collectionsMap.get(ctor);
        if (isUndefined(collection) || !collection.hasEndpoint(name)) {
            throw new EndpointNotFoundException(name, `No endpoint "${name}" has been defined for model "${ctor.name}".`);
        }
        return collection.getEndpoint(name);
    }

    /**
     * Register a property as part of the api.
     */
    public registerProperty(identifier: ModelExtendedIdentifier, name: string, options: ModelPropertyMetadataInterface): void {
        const ctor = this.modelMetadata.resolveAlias(identifier);
        let map = this.propertiesMap.get(ctor);
        if (isUndefined(map)) {
            map = {};
        }
        if (!isUndefined(map[name])) {
            throw new UsageException(`The property "${name}" of model "${ctor.name}" has already been configured.`);
        }
        map[name] = options;
        this.propertiesMap.set(ctor, map);
    }
}
