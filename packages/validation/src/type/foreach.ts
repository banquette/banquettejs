import { UsageException } from "@banquette/core";
import { isIterable, isObject } from "@banquette/utils";
import { ensureValidationContext, isValidatorContainer } from "../utils";
import { ValidationContext } from "../validation-context";
import { ValidationResult } from "../validation-result";
import { ValidatorContainerInterface } from "../validator-container.interface";
import { ValidatorInterface } from "../validator.interface";

/**
 * Execute a validator for each item in the validated value.
 */
export const Foreach = (validator: ValidatorInterface): ValidatorContainerInterface => {
    const ensureContainer = (path: string): ValidatorContainerInterface => {
        if (!isValidatorContainer(validator)) {
            throw new UsageException(`A ValidatorContainerInterface is expected for "${path}".`);
        }
        return validator;
    };
    return {
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
        validate(value: any, maskOrContext: ValidationContext|string|string[]): ValidationResult {
            const context: ValidationContext = ensureValidationContext(value, maskOrContext);
            if (isIterable(value) || (value !== null && isObject(value))) {
                for (const [k, v] of Object.entries(value)) {
                    const subContext = new ValidationContext(context, k, v);
                    if (subContext.shouldValidate(validator)) {
                        validator.validate(v, subContext);
                    }
                }
            }
            return context.result;
        }
    };
};
