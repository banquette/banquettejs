import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * A validator that always fails.
 */
export declare function Invalid(options?: ValidatorOptionsInterface | string): ValidatorInterface;
