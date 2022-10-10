/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/model/_cjs/prod/decorator/utils"),r=require("../model-validation-metadata.service.js"),o=e.Injector.Get(r.ModelValidationMetadataService);exports.Assert=function Assert(e){return t.propertyDecorator((function(t,r){o.register(t,r,e)}),"You can only use @Assert() on properties.")};
