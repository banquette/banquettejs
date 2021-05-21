import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";

export interface ValidatorInterface {
    /**
     * Define if the validator is asynchronous or not.
     * If the property is not defined, the validator is considered synchronous.
     */
    readonly asynchronous?: boolean;

    /**
     * Validate a value.
     *
     * The ValidationResult object is return synchronously BUT can contain an ObservablePromise
     * if asynchronous validators have been triggered in the validation process.
     */
    validate(value: any, maskOrContext?: ValidationContext|string|string[]): ValidationResult;
}
