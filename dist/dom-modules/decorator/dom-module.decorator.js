/*!
 * Banquette DomModules v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { MODULE_NAME_CTOR_ATTR, ModuleInjectorTag } from '../constant.js';

/**
 * Register a module into the container.
 */
function DomModule(name) {
    return function (ctor) {
        Object.defineProperty(ctor, MODULE_NAME_CTOR_ATTR, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: name
        });
        Module(ModuleInjectorTag)(ctor);
    };
}

export { DomModule };
