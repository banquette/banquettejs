import { UsageException } from "@banquette/exception/usage.exception";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { isValidatorContainer, splitPath } from "../utils";
import { ValidateOptionsInterface } from "../validate-options.interface";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorContainerInterface } from "../validator-container.interface";
import { ValidatorInterface } from "../validator.interface";

export type ValidatorsCollection = Record<string, ValidatorInterface>|ValidatorInterface[];

/**
 * Validate an object or an array.
 */
export class ContainerValidator implements ValidatorContainerInterface {
    public readonly tags: string[] = [];
    public readonly groups: string[] = [];

    public constructor(protected validators: ValidatorsCollection) {
    }

    /**
     * Get the whole collection of validators.
     */
    public getAll(): ValidatorsCollection {
        return this.validators;
    }

    /**
     * The the whole collection of validators.
     */
    public set(path: string, validator: ValidatorInterface): void {
        const parts: string[] = splitPath(path);
        if (parts.length === 1) {
            this.setValidator(parts[0], validator);
            return ;
        }
        const current = this.getValidator(parts[0]);
        if (!isValidatorContainer(current)) {
            throw new UsageException(`A ValidatorContainerInterface is expected for the "${parts[0]}" component of "${path}".`);
        }
        current.set(parts.slice(1).join('/'), validator);
    }

    /**
     * Test if a validator has been registered for a given path.
     */
    public has(path: string): boolean {
        const parts: string[] = splitPath(path);
        if (parts.length === 1) {
            return !isUndefined(this.getValidator(parts[0]));
        }
        const current = this.getValidator(parts[0]);
        return isValidatorContainer(current) && current.has(parts.slice(1).join('/'));
    }

    /**
     * Remove a validator from the container or one of its children.
     */
    public remove(path: string): void {
        const parts: string[] = splitPath(path);
        if (parts.length === 1) {
            this.removeValidator(parts[0]);
            return ;
        }
        const current = this.getValidator(parts[0]);
        if (isValidatorContainer(current)) {
            current.remove(parts.slice(1).join('/'));
        }
    }

    /**
     * Validate a value.
     */
    public validate(value: any, maskOrOptions?: ValidateOptionsInterface|ValidationContext): ValidationResult {
        const context: ValidationContext = ValidationContext.EnsureValidationContext(value, maskOrOptions);
        if (!isObject(value) || !context.shouldValidate(this)) {
            return context.result;
        }
        for (const key of Object.keys(this.validators)) {
            const subValidator: ValidatorInterface = this.getValidator(key);
            const subContext = new ValidationContext(context, key, value[key], undefined, context.groups);
            if (subContext.shouldValidate(subValidator)) {
                subValidator.validate(value[key], subContext);
            }
        }
        return context.result;
    }

    /**
     * Get a validator from the collection.
     */
    protected getValidator(position: string): ValidatorInterface {
        return this.isArray(this.validators) ? this.validators[parseInt(position, 10)] : this.validators[position];
    }

    /**
     * Set a validator in the collection.
     */
    protected setValidator(position: string, validator: ValidatorInterface): void {
        if (this.isArray(this.validators)) {
            this.validators[parseInt(position, 10)] = validator;
        } else {
            this.validators[position] = validator;
        }
    }

    /**
     * Remove a validator from the collection.
     */
    protected removeValidator(position: string): void {
        if (this.isArray(this.validators)) {
            this.validators.splice(parseInt(position, 10), 1);
        } else {
            delete this.validators[position];
        }
    }

    /**
     * Type guard to test if we are working on an array or object.
     */
    private isArray(value: any): value is ValidatorInterface[] {
        return isArray(value);
    }
}

export const Container = (validators: ValidatorsCollection): ValidatorContainerInterface => {
    if (!isArray(validators)) {
        // Make a copy to ensure the object cannot be modified from outside.
        validators = Object.assign({}, validators);
    }
    return new ContainerValidator(validators);
};
