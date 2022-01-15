import { isConstructor } from "@banquette/utils-type/is-constructor";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { DECORATORS_CTOR_NAME } from "../constants";

/**
 * Ensure the constructor a vue-typescript component is returned, or null if the component is not a class component.
 */
export function getCtorFromVccOption(input: any): Constructor|null {
    let ctor = isConstructor(input) ? input : null;
    if (ctor === null && isObject(input) && !isUndefined(input[DECORATORS_CTOR_NAME])) {
        ctor = input[DECORATORS_CTOR_NAME];
    }
    return ctor;
}
