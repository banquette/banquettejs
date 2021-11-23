import { Service, Inject } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { ModelExtendedIdentifier, ModelMetadataService } from "@banquette/model";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { ValidatorInterface, Container } from "@banquette/validation";

@Service()
export class ModelValidationMetadataService {
    private validatorsMap: WeakMap<Constructor, Record<string, ValidatorInterface>>;

    public constructor(@Inject(ModelMetadataService) private aliasResolver: ModelMetadataService) {
        this.validatorsMap = new WeakMap<Constructor, Record<string, ValidatorInterface>>();
    }

    /**
     * Register a validator for a given model property.
     * Will throw an error if another validator is already set.
     */
    public register(identifier: ModelExtendedIdentifier, property: string, validator: ValidatorInterface): void {
        const ctor: Constructor = this.aliasResolver.resolveAlias(identifier);
        let properties = this.validatorsMap.get(ctor);
        if (isNullOrUndefined(properties)) {
            properties = {};
        }
        if (!isUndefined(properties[property])) {
            throw new UsageException(
                `Another validator is already registered for "${ctor.name}::${property}".
                Please call "replace()" instead if you want to override it.`
            );
        }
        properties[property] = validator;
        this.validatorsMap.set(ctor, properties);
    }

    /**
     * Register a validator for a given model property, replacing the existing one.
     */
    public replace(identifier: ModelExtendedIdentifier, property: string, validator: ValidatorInterface): void {
        const ctor: Constructor = this.aliasResolver.resolveAlias(identifier);
        this.remove(ctor, property);
        this.register(ctor, property, validator);
    }

    /**
     * Remove the validator of a model property.
     */
    public remove(identifier: ModelExtendedIdentifier, property: string): void {
        const ctor: Constructor = this.aliasResolver.resolveAlias(identifier);
        const properties = this.validatorsMap.get(ctor);
        if (!isNullOrUndefined(properties)) {
            delete properties[property];
            this.validatorsMap.set(ctor, properties);
        }
    }

    /**
     * Get the validator of a model property.
     */
    public get(identifier: ModelExtendedIdentifier, property: string): ValidatorInterface|null {
        const ctor: Constructor = this.aliasResolver.resolveAlias(identifier);
        const properties = this.validatorsMap.get(ctor);
        if (!isNullOrUndefined(properties)) {
            return properties[property] || null;
        }
        return null;
    }

    /**
     * Test if a validator has been registered for a model property.
     */
    public has(identifier: ModelExtendedIdentifier, property: string): boolean {
        const ctor: Constructor = this.aliasResolver.resolveAlias(identifier);
        return this.get(ctor, property) !== null;
    }

    /**
     * Remove all registered metadata.
     */
    public clear(): void {
        this.validatorsMap = new WeakMap<Constructor, Record<string, ValidatorInterface>>();
    }

    /**
     * Get the validator corresponding to a model.
     */
    public getValidator(identifier: ModelExtendedIdentifier): ValidatorInterface|null {
        const ctor: Constructor = this.aliasResolver.resolveAlias(identifier);
        const properties = this.validatorsMap.get(ctor);
        return !isNullOrUndefined(properties) ? Container(properties) : null;
    }
}
