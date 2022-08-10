import { isObject } from "@banquette/utils-type/is-object";
import { AnyObject } from "@banquette/utils-type/types";

/**
 * Remove all the keys from {obj} that are not defined in {mask};
 */
export function filterWithMask(obj: AnyObject, mask: AnyObject): AnyObject {
    for (const key of Object.keys(obj)) {
        if (!(key in mask)) {
            delete obj[key];
            continue ;
        }
        if (isObject(obj[key]) && isObject(mask[key])) {
            obj[key] = filterWithMask(obj[key], mask[key]);
        }
    }
    return obj;
}
