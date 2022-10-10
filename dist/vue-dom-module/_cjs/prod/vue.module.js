/*!
 * Banquette VueDomModule v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("./_virtual/_tslib.js"),t=require("@banquette/dom-modules/_cjs/prod/abstract.dom-module"),u=require("@banquette/dom-modules/_cjs/prod/decorator/dom-module.decorator"),o=require("@banquette/vue-typescript/_cjs/prod/vue-builder");!function(t){function Vue(){return null!==t&&t.apply(this,arguments)||this}e.__extends(Vue,t),Vue.prototype.getDefaultOptionName=function(){return"group"},Vue.prototype.bind=function(){o.VueBuilder.CreateAppAndMount(this.element,this.getOption("group","*"),{compilerOptions:{delimiters:this.getOption("delimiters",["${","}"])}})},Vue=e.__decorate([u.DomModule("vue")],Vue)}(t.AbstractDomModule);
