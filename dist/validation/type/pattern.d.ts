import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * Check that the value matches a pattern.
 */
export declare function Pattern(pattern: RegExp, options?: ValidatorOptionsInterface | string): ValidatorInterface;
