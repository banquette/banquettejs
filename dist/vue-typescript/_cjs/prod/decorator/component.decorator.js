/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-type/_cjs/prod/is-string"),t=require("@banquette/utils-type/_cjs/prod/is-undefined"),n=require("../constants.js"),r=require("../generate-vccopts.js"),u=require("../utils/get-or-create-component-metadata.js"),i=require("../vue-builder.js");exports.Component=function Component(o){return function(s){var a=null,p=u.getOrCreateComponentMetadata(s.prototype);o=e.isString(o)?{name:o}:o||{},p.component=o,Object.defineProperty(s,n.VUE_CLASS_COMPONENT_OPTIONS,{enumerable:!0,configurable:!0,get:function(){return null===a&&(a=r.generateVccOpts(s,p)),a}}),t.isUndefined(o.name)||i.VueBuilder.RegisterComponent(o.name,s,o.group||i.VueBuilder.DEFAULT_GROUP)}};
