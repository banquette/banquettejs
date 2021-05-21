import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";

/**
 * A ValidatorInterface where the context is always guaranteed to be fully set and
 * the "validateSync" method is optional.
 *
 * This interface is not meant to be exposed to the "user land" because it involves
 * writing some logic before calling "validate" or "validateSync (to create the ValidationContext and
 * check that "validateSync" is defined).
 *
 * The idea here is to allow this simplified interface only as a parameter of the "createValidatorFactory" function so it
 * only usable when the validator is created.
 */
export interface SimplifiedValidatorInterface {
    /**
     * Validate a value.
     *
     * The ValidationResult object is return synchronously BUT can contain an ObservablePromise
     * if asynchronous validators have been triggered in the validation process.
     */
    validate(context: ValidationContext): ValidationResult;
}
