import { ValidateOptionsInterface } from "../validate-options.interface";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorContainerInterface } from "../validator-container.interface";
import { ValidatorInterface } from "../validator.interface";
export declare type ValidatorsCollection = Record<string, ValidatorInterface> | ValidatorInterface[];
/**
 * Validate an object or an array.
 */
export declare class ContainerValidator implements ValidatorContainerInterface {
    protected validators: ValidatorsCollection;
    readonly tags: string[];
    readonly groups: string[];
    /**
     * Return the number of child validators.
     */
    get length(): number;
    constructor(validators: ValidatorsCollection);
    /**
     * Get the whole collection of validators.
     */
    getAll(): ValidatorsCollection;
    /**
     * The the whole collection of validators.
     */
    set(path: string, validator: ValidatorInterface): void;
    /**
     * Test if a validator has been registered for a given path.
     */
    has(path: string): boolean;
    /**
     * Remove a validator from the container or one of its children.
     */
    remove(path: string): void;
    /**
     * Validate a value.
     */
    validate(value: any, contextOrOptions?: ValidateOptionsInterface | ValidationContextInterface): ValidationResult;
    /**
     * Get a validator from the collection.
     */
    protected getValidator(position: string): ValidatorInterface;
    /**
     * Set a validator in the collection.
     */
    protected setValidator(position: string, validator: ValidatorInterface): void;
    /**
     * Remove a validator from the collection.
     */
    protected removeValidator(position: string): void;
    /**
     * Type guard to test if we are working on an array or object.
     */
    private isArray;
}
export declare const Container: (validators: ValidatorsCollection) => ValidatorContainerInterface;
