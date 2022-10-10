/*!
 * Banquette ModelValidation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/validation/_cjs/prod/create-validator"),a=require("../model-validation-metadata.service.js"),r=e.Injector.Get(a.ModelValidationMetadataService);exports.Model=function(e){return t.createValidator({validate:function(t){var a=r.getValidator(e);return null!==a&&a.validate(t.value,t),t.result}})};
