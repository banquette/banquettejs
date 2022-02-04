import { Constructor } from "@banquette/utils-type/types";
import { DECORATORS_OPTIONS_HOLDER_NAME } from "../constants";
import { DecoratedConstructor } from "../type";

/**
 * Test if a constructor is decorated.
 */
export function isDecorated(ctor: Constructor<any>): ctor is DecoratedConstructor {
    return ctor.prototype.hasOwnProperty(DECORATORS_OPTIONS_HOLDER_NAME);
}
