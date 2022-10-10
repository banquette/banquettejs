import { Constructor } from "@banquette/utils-type/types";
import { ModelAlias, ModelExtendedIdentifier, ModelFactory } from "./type";
export declare class ModelMetadataService {
    /**
     * Map between string or symbol aliases and their model constructor.
     */
    private aliases;
    /**
     * Map between string or symbol aliases and their model constructor.
     */
    private factories;
    /**
     * Holds relations between models.
     */
    private relations;
    /**
     * Define a custom factory that should be used any time a new instance of the model is created.
     */
    registerFactory(ctor: Constructor, factory: ModelFactory<any>): void;
    /**
     * Get the factory to use to create a new instance of a model.
     */
    getFactory<T>(ctor: Constructor<T>): ModelFactory<T>;
    /**
     * Register one or multiple aliases for a model constructor.
     */
    registerAlias(ctor: Constructor, alias: ModelAlias | ModelAlias[]): void;
    /**
     * Get the model constructor corresponding to an alias identifier.
     */
    resolveAlias(identifier: ModelExtendedIdentifier): Constructor;
    /**
     * Register a relation between to types of models through a property.
     */
    registerRelation(from: ModelExtendedIdentifier, property: string, to: ModelExtendedIdentifier): void;
    /**
     * Try to get the related model constructor for a property.
     * If the property is not a relation, null is returned.
     */
    getRelation(identifier: ModelExtendedIdentifier, property: string): Constructor | null;
    clear(): void;
    /**
     * Remove all known aliases.
     */
    clearAliases(): void;
    /**
     * Remove all known factories.
     */
    clearFactories(): void;
    /**
     * Remove all known relations.
     */
    clearRelations(): void;
    /**
     * Test if the input is a model alias.
     */
    private static IsAlias;
}
