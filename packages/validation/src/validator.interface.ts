import { ValidationContext } from "./validation-context";
import { ValidationResult } from "./validation-result";
import { ValidateOptionsInterface } from "./validate-options.interface";

export interface ValidatorInterface {
    /**
     * A list of strings giving additional information about the validator.
     *
     * Used internally to differentiate synchronous and asynchronous validators (using the tag 'sync' or 'async').
     *
     * But you can add any custom tag you want.
     *
     * You can then filter your validators using a mask.
     * Example:
     *
     * `validator.validate('a value', '/name:sync')`
     * or
     * `validator.validate('a value', '/name:sync:custom-tag')`
     */
    readonly tags?: string[];

    /**
     * A list of groups to filter the validation with.
     */
    readonly groups?: string[];

    /**
     * Validate a value.
     *
     * The ValidationResult object is return synchronously BUT can contain an ObservablePromise
     * if asynchronous validators have been triggered in the validation process.
     */
    validate(value: any, maskOrOptions?: ValidateOptionsInterface|ValidationContext): ValidationResult;
}
