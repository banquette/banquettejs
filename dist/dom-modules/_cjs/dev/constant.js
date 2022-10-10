/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Name of the property holding the name of the module in the object's constructor.
 */
var MODULE_NAME_CTOR_ATTR = '__dom-module-name';
/**
 * Tag used to mark dom modules in the container.
 */
var ModuleInjectorTag = Symbol('DomModule');

exports.MODULE_NAME_CTOR_ATTR = MODULE_NAME_CTOR_ATTR;
exports.ModuleInjectorTag = ModuleInjectorTag;
