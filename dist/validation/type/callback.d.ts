import { ValidationContextInterface } from "../validation-context.interface";
import { ValidatorInterface } from "../validator.interface";
declare type ValidationCallback = ((context: ValidationContextInterface) => Promise<void> | void);
/**
 * Delegate the validation to a custom callback given as parameter of the factory.
 */
export declare const Callback: (callback: ValidationCallback, tags?: string | string[], groups?: string | string[]) => ValidatorInterface;
export {};
