import { DECORATORS_OPTIONS_HOLDER_NAME } from "../constants";
import { DecoratedConstructor } from "../type";

/**
 * Test if a constructor is decorated.
 */
export function isDecorated(prototype: any): prototype is DecoratedConstructor {
    return prototype.hasOwnProperty(DECORATORS_OPTIONS_HOLDER_NAME);
}
