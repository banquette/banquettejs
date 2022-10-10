import { ValidationContextInterface } from "./validation-context.interface";
import { ValidatorContainerInterface } from "./validator-container.interface";
import { ValidatorOptionsInterface } from "./validator-options.interface";
/**
 * Test if a validator is a container.
 */
export declare function isValidatorContainer(input: any): input is ValidatorContainerInterface;
/**
 * Test if a validator is a container.
 */
export declare function isValidationContext(input: any): input is ValidationContextInterface;
/**
 * Split a path into an array.
 */
export declare function splitPath(path: string): string[];
/**
 * Shorthand function to ensure all attributes of a `ValidatorOptionsInterface` are defined.
 */
export declare function assignOptionsDefaults(options: ValidatorOptionsInterface | string, message: string, type: string, tags?: string | string[], groups?: string | string[]): Required<ValidatorOptionsInterface>;
