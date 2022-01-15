import { isObject } from "@banquette/utils-type/is-object";
import { COMPONENT_INSTANCE_ATTR_NAME } from "../constants";

/**
 * Try to get the actual class behind a component.
 */
export function getComponentInstance(input: any): any {
    if (!isObject(input)) {
        return null;
    }
    if (isObject(input[COMPONENT_INSTANCE_ATTR_NAME])) {
        return input[COMPONENT_INSTANCE_ATTR_NAME];
    }
    if (isObject(input.$) && isObject(input.$[COMPONENT_INSTANCE_ATTR_NAME])) {
        return input.$[COMPONENT_INSTANCE_ATTR_NAME];
    }
    return input;
}
