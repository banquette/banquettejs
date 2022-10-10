import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
export declare class ModelValidationMetadataService {
    private aliasResolver;
    private validatorsMap;
    constructor(aliasResolver: ModelMetadataService);
    /**
     * Register a validator for a given model property.
     * Will throw an error if another validator is already set.
     */
    register(identifier: ModelExtendedIdentifier, property: string, validator: ValidatorInterface): void;
    /**
     * Register a validator for a given model property, replacing the existing one.
     */
    replace(identifier: ModelExtendedIdentifier, property: string, validator: ValidatorInterface): void;
    /**
     * Remove the validator of a model property.
     */
    remove(identifier: ModelExtendedIdentifier, property: string): void;
    /**
     * Get the validator of a model property.
     */
    get(identifier: ModelExtendedIdentifier, property: string): ValidatorInterface | null;
    /**
     * Test if a validator has been registered for a model property.
     */
    has(identifier: ModelExtendedIdentifier, property: string): boolean;
    /**
     * Remove all registered metadata.
     */
    clear(): void;
    /**
     * Get the validator corresponding to a model.
     */
    getValidator(identifier: ModelExtendedIdentifier): ValidatorInterface | null;
}
