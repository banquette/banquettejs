/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var constant = require('../constant.js');

/**
 * Register a module into the container.
 */
function DomModule(name) {
    return function (ctor) {
        Object.defineProperty(ctor, constant.MODULE_NAME_CTOR_ATTR, {
            configurable: false,
            enumerable: false,
            writable: false,
            value: name
        });
        module_decorator.Module(constant.ModuleInjectorTag)(ctor);
    };
}

exports.DomModule = DomModule;
