/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-type/_cjs/prod/is-iterable"),r=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("../utils.js"),n=require("../validation-context.js");exports.Foreach=function Foreach(a){var ensureContainer=function(t){if(!i.isValidatorContainer(a))throw new e.UsageException('A ValidatorContainerInterface is expected for "'.concat(t,'".'));return a};return{length:0,set:function(e,t){ensureContainer(e).set(e,t)},has:function(e){return ensureContainer(e).has(e)},remove:function(e){ensureContainer(e).remove(e)},validate:function(e,i){var o=n.ValidationContext.EnsureValidationContext(e,i);if(t.isIterable(e)||null!==e&&r.isObject(e))for(var u=0,s=Object.entries(e);u<s.length;u++){var c=s[u],l=c[0],d=c[1],f=o.createSubContext(l,d,[],o.groups);f.shouldValidate(a)&&a.validate(d,f)}return o.result}}};
