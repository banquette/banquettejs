import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * Check that the value is NOT equal to a static value.
 */
export declare function NotEqual(value: any, strict?: boolean, options?: ValidatorOptionsInterface | string): ValidatorInterface;
