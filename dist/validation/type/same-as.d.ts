import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * Check that the value is the same as the value of another part of the validation tree.
 */
export declare function SameAs(path: string, options?: ValidatorOptionsInterface | string): ValidatorInterface;
