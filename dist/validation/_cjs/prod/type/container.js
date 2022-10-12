/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/exception/_cjs/prod/usage.exception"),e=require("@banquette/utils-type/_cjs/prod/is-array"),i=require("@banquette/utils-type/_cjs/prod/is-object"),a=require("@banquette/utils-type/_cjs/prod/is-undefined"),r=require("../utils.js"),o=require("../validation-context.js"),n=function(){function ContainerValidator(t){this.validators=t,this.tags=[],this.groups=[]}return Object.defineProperty(ContainerValidator.prototype,"length",{get:function(){return Object.keys(this.validators).length},enumerable:!1,configurable:!0}),ContainerValidator.prototype.getAll=function(){return this.validators},ContainerValidator.prototype.set=function(e,i){var a=r.splitPath(e);if(1!==a.length){var o=this.getValidator(a[0]);if(!r.isValidatorContainer(o))throw new t.UsageException('A ValidatorContainerInterface is expected for the "'.concat(a[0],'" component of "').concat(e,'".'));o.set(a.slice(1).join("/"),i)}else this.setValidator(a[0],i)},ContainerValidator.prototype.has=function(t){var e=r.splitPath(t);if(1===e.length)return!a.isUndefined(this.getValidator(e[0]));var i=this.getValidator(e[0]);return r.isValidatorContainer(i)&&i.has(e.slice(1).join("/"))},ContainerValidator.prototype.remove=function(t){var e=r.splitPath(t);if(1!==e.length){var i=this.getValidator(e[0]);r.isValidatorContainer(i)&&i.remove(e.slice(1).join("/"))}else this.removeValidator(e[0])},ContainerValidator.prototype.validate=function(t,e){var a=o.ValidationContext.EnsureValidationContext(t,e);if(!i.isObject(t)||!a.shouldValidate(this))return a.result;for(var r=0,n=Object.keys(this.validators);r<n.length;r++){var s=n[r],l=this.getValidator(s),d=a.createSubContext(s,t[s],[],a.groups);d.shouldValidate(l)&&l.validate(t[s],d)}return a.result},ContainerValidator.prototype.getValidator=function(t){return this.isArray(this.validators)?this.validators[parseInt(t,10)]:this.validators[t]},ContainerValidator.prototype.setValidator=function(t,e){this.isArray(this.validators)?this.validators[parseInt(t,10)]=e:this.validators[t]=e},ContainerValidator.prototype.removeValidator=function(t){this.isArray(this.validators)?this.validators.splice(parseInt(t,10),1):delete this.validators[t]},ContainerValidator.prototype.isArray=function(t){return e.isArray(t)},ContainerValidator}();exports.Container=function(t){return e.isArray(t)||(t=Object.assign({},t)),new n(t)},exports.ContainerValidator=n;