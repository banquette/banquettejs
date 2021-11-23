import { Inject, Service } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { getSymbolDescription } from "@banquette/utils-object/get-symbol-description";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor, Complete } from "@banquette/utils-type/types";
import { ModelMetadataService } from "./model-metadata.service";
import { TransformerInterface } from "./transformer/transformer.interface";
import { ModelExtendedIdentifier } from "./type";
import { ensureCompleteTransformer } from "./utils";

const WILDCARD = '*';

@Service()
export class ModelTransformMetadataService {
    /**
     * A map indexed by models' constructors and holding the type of transform and
     * the respective transformers or each properties of the model.
     */
    protected transformersMap: WeakMap<Constructor, Record<symbol, Record<string, Complete<TransformerInterface>>>>;

    public constructor(@Inject(ModelMetadataService) private modelMetadata: ModelMetadataService) {
        this.transformersMap = new WeakMap<Constructor, Record<symbol, Record<string, Complete<TransformerInterface>>>>();
    }

    /**
     * Get a map of all transformable properties of a model and their respective transformer.
     */
    public getAll(identifier: ModelExtendedIdentifier, type: symbol): Record<string, Complete<TransformerInterface>> {
        const ctor: Constructor = this.modelMetadata.resolveAlias(identifier);
        let transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
            return Object.assign({}, transforms[type]);
        }
        return {};
    }

    /**
     * Try to get a wildcard transformer.
     */
    public getWildcard(identifier: ModelExtendedIdentifier, type: symbol): Complete<TransformerInterface>|null {
        const ctor: Constructor = this.modelMetadata.resolveAlias(identifier);
        const transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
            return transforms[type][WILDCARD] || null;
        }
        return null;
    }

    /**
     * Register a validator for a given model property.
     * Will throw an error if another validator is already set.
     */
    public register(identifier: ModelExtendedIdentifier, type: symbol, property: string, transformer: TransformerInterface): void {
        const ctor: Constructor = this.modelMetadata.resolveAlias(identifier);
        let transforms = this.transformersMap.get(ctor);
        if (isNullOrUndefined(transforms)) {
            transforms = {};
        }
        if (isUndefined(transforms[type])) {
            transforms[type] = {};
        }
        const properties = transforms[type];
        if (!isUndefined(properties[property]) && property !== WILDCARD) {
            throw new UsageException(
                `Another transformer for "${getSymbolDescription(type)}" is already registered for "${ctor.name}::${property}".
                Please call "replace()" instead if you want to override it.`
            );
        }
        properties[property] = ensureCompleteTransformer(transformer);
        this.transformersMap.set(ctor, transforms);
    }

    /**
     * Register a transformer that will match all properties that don't have a transformer
     * specifically register for this type of transform.
     *
     * Warning, but doing this every property of the object you will transform will be included, all the time.
     */
    public registerWildcard(identifier: ModelExtendedIdentifier, type: symbol, transformer: TransformerInterface): void {
        this.register(identifier, type, WILDCARD, transformer);
    }

    /**
     * Register a validator for a given model property, replacing the existing one.
     */
    public replace(identifier: ModelExtendedIdentifier, type: symbol, property: string, transformer: TransformerInterface): void {
        const ctor: Constructor = this.modelMetadata.resolveAlias(identifier);
        this.remove(ctor, type, property);
        this.register(ctor, type, property, transformer);
    }

    /**
     * Remove the validator of a model property.
     */
    public remove(identifier: ModelExtendedIdentifier, type: symbol, property: string): void {
        const ctor: Constructor = this.modelMetadata.resolveAlias(identifier);
        const transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
            delete transforms[type][property];
            this.transformersMap.set(ctor, transforms);
        }
    }

    /**
     * Remove a wildcard transformer.
     */
    public removeWildcard(identifier: ModelExtendedIdentifier, type: symbol): void {
        this.remove(identifier, type, WILDCARD);
    }

    /**
     * Get the validator of a model property.
     */
    public get(identifier: ModelExtendedIdentifier, type: symbol, property: string): Complete<TransformerInterface>|null {
        const ctor: Constructor = this.modelMetadata.resolveAlias(identifier);
        const transforms = this.transformersMap.get(ctor);
        if (!isNullOrUndefined(transforms) && !isUndefined(transforms[type])) {
            return transforms[type][property] || this.getWildcard(ctor, type);
        }
        return null;
    }

    /**
     * Test if a validator has been registered for a model property.
     */
    public has(identifier: ModelExtendedIdentifier, type: symbol, property: string): boolean {
        return this.get(identifier, type, property) !== null;
    }

    /**
     * Remove all registered metadata.
     */
    public clear(): void {
        this.transformersMap = new WeakMap<Constructor, Record<symbol, Record<string, Complete<TransformerInterface>>>>();
    }
}
