import { ValidatorOptionsInterface } from "../validator-options.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * Check that the value is in a list of predefined choices.
 */
export declare function Choice(choices: any[], options?: ValidatorOptionsInterface | string): ValidatorInterface;
