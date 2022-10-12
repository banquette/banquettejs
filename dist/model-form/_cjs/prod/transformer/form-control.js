/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/model/_cjs/prod/transformer/transform-context"),o=require("@banquette/model/_cjs/prod/transformer/type/raw"),n=require("@banquette/utils-type/_cjs/prod/is-undefined"),s=require("../contants.js"),u=require("../form-component.factory.js"),a=require("./root/form.js"),l=require("./utils.js"),i=e.Injector.Get(u.FormComponentFactory);exports.FormControl=function FormControl(e){if(void 0===e&&(e=o.Raw()),l.isFormTransformer(e))throw new r.UsageException("A FormControl transformer cannot contain a form transformer.");return{type:s.FormControlTransformerSymbol,getChild:function(){return e},transform:function(t){if(null===t.property)throw new r.UsageException('The "FormControl" transformer can only be applied on properties.');if(!n.isUndefined(e.transform)){var o=e.transform(t);return null!==o.localPromise?o.delayResponse(new Promise((function(e,r){o.localPromise.then(e).catch(r)})).then((function(){o.setResult(i.createFormControl(t.ctor,t.property,o.result))}))):o.setResult(i.createFormControl(t.ctor,t.property,o.result)),o}return t.result.setResult(i.createFormControl(t.ctor,t.property,t.value)),t.result},transformInverse:function(r){var o=r.value.value;if(!n.isUndefined(e.transformInverse)){var s=e.transformInverse(new t.TransformContext(r,a.FormTransformerSymbol,r.ctor,o,r.property));return null!==s.localPromise?s.delayResponse(new Promise((function(e,r){s.localPromise.then(e).catch(r)})).then((function(){s.setResult(s.result)}))):s.setResult(s.result),s}return r.result.setResult(o),r.result}}};