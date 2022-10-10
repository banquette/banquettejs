import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
declare type MaxValidatorOptionsInterface = ValidatorOptionsInterface & {
    treatAs?: 'string' | 'number' | 'auto';
};
/**
 * Check that the number of elements counted in a value is greater or equal to a number.
 *
 * Works with strings, numbers, arrays and objects.
 * The type of comparison is determined by the type of the value to validate.
 *
 * To distinguish between a string containing only a number (e.g. '12')
 * and a number (e.g. 12) you can use the "treatAs" argument to force a cast.
 */
export declare function Max(count: number, options?: MaxValidatorOptionsInterface | string): ValidatorInterface;
export {};
