import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { DECORATORS_CTOR_NAME } from "../constants";

/**
 * Ensure the constructor is returned in case the input is the export of a SFC.
 */
export function c(input: any): any {
    return isObject(input) && !isUndefined(input[DECORATORS_CTOR_NAME]) ? input[DECORATORS_CTOR_NAME] : input;
}
