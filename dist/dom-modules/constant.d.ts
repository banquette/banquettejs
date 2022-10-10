import { Constructor } from "@banquette/utils-type/types";
/**
 * Name of the property holding the name of the module in the object's constructor.
 */
export declare const MODULE_NAME_CTOR_ATTR = "__dom-module-name";
/**
 * Dom modules constructor type.
 */
export declare type DomModuleConstructor = Constructor & {
    [MODULE_NAME_CTOR_ATTR]: string;
};
/**
 * Tag used to mark dom modules in the container.
 */
export declare const ModuleInjectorTag: unique symbol;
