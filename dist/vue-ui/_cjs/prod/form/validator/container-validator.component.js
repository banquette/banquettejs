/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../_virtual/_tslib.js"),n=function(n){function ContainerValidatorComponent(){var t=null!==n&&n.apply(this,arguments)||this;return t.subValidators={},t}return t.__extends(ContainerValidatorComponent,n),Object.defineProperty(ContainerValidatorComponent.prototype,"children",{get:function(){return Object.values(this.subValidators)},enumerable:!1,configurable:!0}),ContainerValidatorComponent.prototype.registerChild=function(t){var n=this,o=++ContainerValidatorComponent.MaxId;return this.subValidators[o]=t,this.parentValidator&&this.assignToParentValidator(this.parentValidator),function(){delete n.subValidators[o]}},ContainerValidatorComponent.MaxId=0,ContainerValidatorComponent}(require("./validator.component.js").ValidatorComponent);exports.ContainerValidatorComponent=n;
