import { Service } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { ensureArray, ensureString, isFunction, isNullOrUndefined, isString, isSymbol, isUndefined, Constructor } from "@banquette/utils-type";
import { ObjectCtor } from "./constants";
import { ModelAliasNotFoundException } from "./exception/model-alias-not-found.exception";
import { ModelAlias, ModelExtendedIdentifier, ModelFactory } from "./type";

/**
 * Test if the input is a model alias.
 */
function IsAlias(identifier: ModelExtendedIdentifier): identifier is ModelAlias {
    return isString(identifier) || isSymbol(identifier);
}

@Service()
export class ModelMetadataService {
    /**
     * Map between string or symbol aliases and their model constructor.
     */
    private aliases: Record<ModelAlias, Constructor> = {};

    /**
     * Map between string or symbol aliases and their model constructor.
     */
    private factories: WeakMap<Constructor, ModelFactory<any>> = new WeakMap<Constructor, ModelFactory<any>>();

    /**
     * Holds relations between models.
     */
    private relations: WeakMap<Constructor, Record<string, ModelExtendedIdentifier>> = new WeakMap<Constructor, Record<string, ModelExtendedIdentifier>>();

    /**
     * Define a custom factory that should be used any time a new instance of the model is created.
     */
    public registerFactory(ctor: Constructor, factory: ModelFactory<any>): void {
        console.warn('#ModelMetadataService');
        this.factories.set(ctor, factory);
    }

    /**
     * Get the factory to use to create a new instance of a model.
     */
    public getFactory<T>(ctor: Constructor<T>): ModelFactory<T> {
        let factory = this.factories.get(ctor);
        if (!isFunction(factory)) {
            return () => new ctor();
        }
        return factory as ModelFactory<T>;
    }

    /**
     * Register one or multiple aliases for a model constructor.
     */
    public registerAlias(ctor: Constructor, alias: ModelAlias|ModelAlias[]): void {
        const aliases = ensureArray(alias);
        for (const item of aliases) {
            if (!isUndefined(this.aliases[item]) && this.aliases[item] !== ctor) {
                throw new UsageException(`The alias "${item}" is already in used by "${this.aliases[item].name}".`);
            }
            this.aliases[item] = ctor;
        }
    }

    /**
     * Get the model constructor corresponding to an alias identifier.
     */
    public resolveAlias(identifier: ModelExtendedIdentifier): Constructor {
        if (!IsAlias(identifier)) {
            return identifier;
        }
        if (isUndefined(this.aliases[identifier])) {
            throw new ModelAliasNotFoundException(identifier, `The model alias "${ensureString(identifier)}" doesn't exist.`);
        }
        return this.aliases[identifier];
    }

    /**
     * Register a relation between to types of models through a property.
     */
    public registerRelation(from: ModelExtendedIdentifier, property: string, to: ModelExtendedIdentifier): void {
        const fromCtor = this.resolveAlias(from);
        if (isUndefined(to)) {
            throw new UsageException(
                `Unable to register relation of property "${property}" of model "${fromCtor.name}". ` +
                `You may have a circular dependency. Try to register a string alias instead.`
            );
        }
        if (!this.relations.has(fromCtor)) {
            this.relations.set(fromCtor, {});
        }
        const relations = this.relations.get(fromCtor) as Record<string, ModelExtendedIdentifier>;
        if (!isUndefined(relations[property]) && this.resolveAlias(to) !== this.resolveAlias(relations[property])) {
            throw new UsageException(`Two conflicting relations have been defined for "${property}" of model "${fromCtor.name}".`);
        }
        relations[property] = to;
        this.relations.set(fromCtor, relations);
    }

    /**
     * Try to get the related model constructor for a property.
     * If the property is not a relation, null is returned.
     */
    public getRelation(identifier: ModelExtendedIdentifier, property: string): Constructor|null {
        let ctor = this.resolveAlias(identifier);
        do {
            const relations = this.relations.get(ctor);
            if (!isNullOrUndefined(relations) && !isUndefined(relations[property])) {
                return this.resolveAlias(relations[property]);
            }
            ctor = Object.getPrototypeOf(ctor);
        } while (ctor && ctor !== ObjectCtor);
        return null;
    }

    public clear(): void {
        this.clearAliases();
        this.clearFactories();
        this.clearRelations();
    }

    /**
     * Remove all known aliases.
     */
    public clearAliases(): void {
        this.aliases = {};
    }

    /**
     * Remove all known factories.
     */
    public clearFactories(): void {
        this.factories = new WeakMap<Constructor, ModelFactory<any>>();
    }

    /**
     * Remove all known relations.
     */
    public clearRelations(): void {
        this.relations = new WeakMap<Constructor, Record<string, ModelExtendedIdentifier>>();
    }
}
