/*!
 * Banquette DomModules v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/decorator/module.decorator"),o=require("../constant.js");exports.DomModule=function DomModule(r){return function(t){Object.defineProperty(t,o.MODULE_NAME_CTOR_ATTR,{configurable:!1,enumerable:!1,writable:!1,value:r}),e.Module(o.ModuleInjectorTag)(t)}};
