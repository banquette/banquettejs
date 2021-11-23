import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { VueWrapper } from "@vue/test-utils";
import { VUE_CLASS_COMPONENT_OPTIONS_NAME, COMPONENT_INSTANCE_ATTR_NAME } from "../constants";

/**
 * Try to get a child component from a VueWrapper.
 */
export function getChildComponentInstance<T extends Constructor>(wrapper: VueWrapper<any>, ctor: T): InstanceType<T> {
    const opts = (ctor as any)[VUE_CLASS_COMPONENT_OPTIONS_NAME];
    if (isUndefined(opts)) {
        throw `"${ctor.name}" is not a vue-typescript component.`;
    }
    const component: any = wrapper.findComponent(opts);
    if (isObject(component) && isObject(component.vm) && isObject(component.vm[COMPONENT_INSTANCE_ATTR_NAME])) {
        return component.vm[COMPONENT_INSTANCE_ATTR_NAME];
    }
    throw `Unable to get the instance of "${ctor.name}".`;
}
