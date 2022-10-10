import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * Check that the value is equal to a static value.
 */
export declare function Equal(value: any, strict?: boolean, options?: ValidatorOptionsInterface | string): ValidatorInterface;
