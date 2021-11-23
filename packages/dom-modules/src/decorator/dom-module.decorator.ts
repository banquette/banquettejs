import { Module } from "@banquette/dependency-injection";
import { Constructor } from "@banquette/utils-type/types";
import { ModuleInjectorTag, MODULE_NAME_CTOR_ATTR } from "../constant";

/**
 * Register a module into the container.
 */
export function DomModule(name: string): Function {
    return (ctor: Constructor) => {
        Object.defineProperty(ctor, MODULE_NAME_CTOR_ATTR, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: name
        });
        Module(ModuleInjectorTag)(ctor);
    };
}
