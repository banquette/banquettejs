import { Constructor } from "@banquette/utils-type/types";

/**
 * Name of the property holding the name of the module in the object's constructor.
 */
export const MODULE_NAME_CTOR_ATTR = '__dom-module-name';

/**
 * Dom modules constructor type.
 */
export type DomModuleConstructor = Constructor & {[MODULE_NAME_CTOR_ATTR]: string};

/**
 * Tag used to mark dom modules in the container.
 */
export const ModuleInjectorTag = Symbol('DomModule');
