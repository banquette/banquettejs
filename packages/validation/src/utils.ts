import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ValidatorContainerInterface } from "./validator-container.interface";
import { ValidatorOptionsInterface } from "./validator-options.interface";

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

/**
 * Shorthand function to ensure all attributes of a `ValidatorOptionsInterface` are defined.
 */
export function assignOptionsDefaults(options: ValidatorOptionsInterface|string,
                                      message: string,
                                      type: string,
                                      tags: string|string[] = [],
                                      groups: string|string[] = []): Required<ValidatorOptionsInterface> {
    if (isString(options)) {
        options = {message: options};
    }
    return {
        message: !isUndefined(options.message) ? options.message : message,
        type: options.type || type,
        tags: ensureArray(options.tags || tags),
        groups: ensureArray(options.groups || groups)
    };
}
