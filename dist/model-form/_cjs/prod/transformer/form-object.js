/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("@banquette/form/_cjs/prod/form-object"),t=require("@banquette/model/_cjs/prod/transformer/transform-context"),n=require("@banquette/model/_cjs/prod/transformer/type/model"),o=require("@banquette/model/_cjs/prod/utils"),u=require("../contants.js"),a=require("../form-component.factory.js"),m=e.Injector.Get(a.FormComponentFactory);exports.FormObject=function FormObject(){var e=o.ensureCompleteTransformer(n.Model());return{type:u.FormObjectTransformerSymbol,getChild:function(){return e},transform:function(r){var t=e.transform(r);return null===t.result&&t.setResult(m.createFormObject(r.ctor,r.property)),t},transformInverse:function(n){return n.value instanceof r.FormObject&&n.value.length||(n=new t.TransformContext(n.parent,n.type,n.ctor,null,n.property)),e.transformInverse(n)}}};
