import { SimplifiedValidatorInterface } from "./simplified-validator.interface";
import { ValidatorInterface } from "./validator.interface";
/**
 * A utility method that ensure te ValidationContext is always set when the validator is used.
 * You should use this method anytime you want to create a custom validator.
 */
export declare function createValidator(validator: SimplifiedValidatorInterface, tags?: string | string[], groups?: string | string[]): ValidatorInterface;
