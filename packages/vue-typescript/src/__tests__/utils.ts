import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { Constructor } from "@banquette/utils-type/types";
import { VueWrapper } from "@vue/test-utils";
import { VUE_CLASS_COMPONENT_OPTIONS, COMPONENT_TS_INSTANCE } from "../constants";
import { isDecoratedComponentConstructor } from "../utils/guards";

/**
 * Try to get a child component from a VueWrapper.
 */
export function getChildComponentInstance<T extends Constructor & {[VUE_CLASS_COMPONENT_OPTIONS]?: any}>(wrapper: VueWrapper<any>, ctor: T): InstanceType<T> {
    const opts = ctor[VUE_CLASS_COMPONENT_OPTIONS];
    if (isUndefined(opts)) {
        throw `"${ctor.name}" is not a vue-typescript component.`;
    }
    const component: any = wrapper.findComponent(opts);
    if (isObject(component) && isObject(component.vm) && isObject(component.vm.$) && isObject(component.vm.$[COMPONENT_TS_INSTANCE])) {
        return component.vm.$[COMPONENT_TS_INSTANCE];
    }
    throw `Unable to get the instance of "${ctor.name}".`;
}

/**
 * Try to get vue class component options from a constructor function.
 */
export function getMountOptions(ctor: Constructor<any>): any {
    if (isDecoratedComponentConstructor(ctor)) {
        return ctor[VUE_CLASS_COMPONENT_OPTIONS];
    }
    throw 'The constructor must be decorated.';
}
