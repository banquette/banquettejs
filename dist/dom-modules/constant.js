/*!
 * Banquette DomModules v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Name of the property holding the name of the module in the object's constructor.
 */
var MODULE_NAME_CTOR_ATTR = '__dom-module-name';
/**
 * Tag used to mark dom modules in the container.
 */
var ModuleInjectorTag = Symbol('DomModule');

export { MODULE_NAME_CTOR_ATTR, ModuleInjectorTag };
