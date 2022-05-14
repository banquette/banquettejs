import { UsageException } from "@banquette/exception/usage.exception";
import { isIterable } from "@banquette/utils-type/is-iterable";
import { isObject } from "@banquette/utils-type/is-object";
import { isValidatorContainer } from "../utils";
import { ValidateOptionsInterface } from "../validate-options.interface";
import { ValidationContext } from "../validation-context";
import { ValidationContextInterface } from "../validation-context.interface";
import { ValidationResult } from "../validation-result";
import { ValidatorContainerInterface } from "../validator-container.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Execute a validator for each item in the validated value.
 */
export function Foreach(validator: ValidatorInterface): ValidatorContainerInterface {
    const ensureContainer = (path: string): ValidatorContainerInterface => {
        if (!isValidatorContainer(validator)) {
            throw new UsageException(`A ValidatorContainerInterface is expected for "${path}".`);
        }
        return validator;
    };
    return {
        length: 0,

        /**
         * Register a new validator into the container or one of its children.
         */
        set(path: string, validator: ValidatorInterface): void {
            ensureContainer(path).set(path, validator);
        },

        /**
         * Test if a validator has been registered for a given path.
         */
        has(path: string): boolean {
            return ensureContainer(path).has(path);
        },

        /**
         * Remove a validator from the container or one of its children.
         */
        remove(path: string): void {
            ensureContainer(path).remove(path);
        },

        /**
         * Validate a value.
         */
        validate(value: any, contextOrOptions?: ValidateOptionsInterface|ValidationContextInterface): ValidationResult {
            const context: ValidationContextInterface = ValidationContext.EnsureValidationContext(value, contextOrOptions);
            if (isIterable(value) || (value !== null && isObject(value))) {
                for (const [k, v] of Object.entries(value)) {
                    const subContext = context.createSubContext(k, v, [], context.groups);
                    if (subContext.shouldValidate(validator)) {
                        validator.validate(v, subContext);
                    }
                }
            }
            return context.result;
        }
    };
}
