import { ValidatorContainerInterface } from "../validator-container.interface";
import { ValidatorInterface } from "../validator.interface";
/**
 * Execute a validator for each item in the validated value.
 */
export declare function Foreach(validator: ValidatorInterface): ValidatorContainerInterface;
