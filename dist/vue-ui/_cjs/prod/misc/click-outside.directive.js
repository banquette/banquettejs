/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/utils-misc/_cjs/prod/is-server"),i=require("@banquette/utils-misc/_cjs/prod/proxy"),n=require("@banquette/utils-type/_cjs/prod/is-function"),r=require("@banquette/utils-type/_cjs/prod/is-object"),u=require("@banquette/utils-type/_cjs/prod/is-undefined"),l=require("@banquette/vue-typescript/_cjs/prod/decorator/directive.decorator"),s=function(){function ClickOutsideDirective(){this.enabled=!0,this.callback=null,this.unbindHandler=null}return ClickOutsideDirective.prototype.beforeMount=function(e,t){this.updated(e,t)},ClickOutsideDirective.prototype.updated=function(e,t){this.el=e,r.isObject(t.value)?(this.enabled=!!u.isUndefined(t.value.enabled)||!!t.value.enabled,this.callback=t.value.callback||null):n.isFunction(t.value)&&(this.callback=t.value),this.enabled?this.bindHandler(this.resolveHandlerType(t)):this.unbind()},ClickOutsideDirective.prototype.unmounted=function(){this.unbind()},ClickOutsideDirective.prototype.bindHandler=function(e){this.unbind();var t=i.proxy(this.onTrigger,this);window.addEventListener(e,t),this.unbindHandler=function(){return window.removeEventListener(e,t)}},ClickOutsideDirective.prototype.unbind=function(){this.unbindHandler&&(this.unbindHandler(),this.unbindHandler=null)},ClickOutsideDirective.prototype.onTrigger=function(e){var t=e.target;(t instanceof HTMLElement||t instanceof SVGElement)&&!this.isOutside(t)||(null!==this.callback&&this.callback(),this.el.dispatchEvent(new CustomEvent("click-outside")))},ClickOutsideDirective.prototype.resolveHandlerType=function(e){return r.isObject(e.value)&&e.value.eventType||"mousedown"},ClickOutsideDirective.prototype.isOutside=function(e){if(this.el===e||this.el.contains(e)||t.isServer())return!1;for(;e;){if(e.dataset.teleportedFrom){var i=document.getElementById(e.dataset.teleportedFrom);return null!==i&&!this.el.contains(i)}if(!e.parentElement)break;e=e.parentElement}return!0},ClickOutsideDirective=e.__decorate([l.Directive("bt-click-outside")],ClickOutsideDirective)}();exports.ClickOutsideDirective=s;
