import { Constructor, Complete } from "@banquette/utils-type/types";
import { ModelMetadataService } from "./model-metadata.service";
import { TransformerInterface } from "./transformer/transformer.interface";
import { ModelExtendedIdentifier } from "./type";
export declare class ModelTransformMetadataService {
    private modelMetadata;
    /**
     * A map indexed by models' constructors and holding the type of transform and
     * the respective transformers or each properties of the model.
     */
    protected transformersMap: WeakMap<Constructor, Record<symbol, Record<string, Complete<TransformerInterface>>>>;
    constructor(modelMetadata: ModelMetadataService);
    /**
     * Get a map of all transformable properties of a model and their respective transformer.
     */
    getAll(identifier: ModelExtendedIdentifier, type: symbol): Record<string, Complete<TransformerInterface>>;
    /**
     * Try to get a wildcard transformer.
     */
    getWildcard(identifier: ModelExtendedIdentifier, type: symbol): Complete<TransformerInterface> | null;
    /**
     * Register a validator for a given model property.
     * Will throw an error if another validator is already set.
     */
    register(identifier: ModelExtendedIdentifier, type: symbol, property: string, transformer: TransformerInterface): void;
    /**
     * Register a transformer that will match all properties that don't have a transformer
     * specifically register for this type of transform.
     *
     * Warning, but doing this every property of the object you will transform will be included, all the time.
     */
    registerWildcard(identifier: ModelExtendedIdentifier, type: symbol, transformer: TransformerInterface): void;
    /**
     * Register a validator for a given model property, replacing the existing one.
     */
    replace(identifier: ModelExtendedIdentifier, type: symbol, property: string, transformer: TransformerInterface): void;
    /**
     * Remove the validator of a model property.
     */
    remove(identifier: ModelExtendedIdentifier, type: symbol, property: string): void;
    /**
     * Remove a wildcard transformer.
     */
    removeWildcard(identifier: ModelExtendedIdentifier, type: symbol): void;
    /**
     * Get the validator of a model property.
     */
    get(identifier: ModelExtendedIdentifier, type: symbol, property: string): Complete<TransformerInterface> | null;
    /**
     * Test if a validator has been registered for a model property.
     */
    has(identifier: ModelExtendedIdentifier, type: symbol, property: string): boolean;
    /**
     * Remove all registered metadata.
     */
    clear(): void;
}
