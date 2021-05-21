import { isObject } from "@banquette/utils";
import { ValidatorContainerInterface } from "./validator-container.interface";

/**
 * Test if a validator is a container.
 */
export function isValidatorContainer(input: any): input is ValidatorContainerInterface {
    return isObject(input) && 'validate' in input && 'set' in input && 'remove' in input && 'has' in input;
}

/**
 * Split a path into an array.
 */
export function splitPath(path: string): string[] {
    return (path.length > 0 && path[0] === '/' ? path.substring(1) : path).split('/');
}
