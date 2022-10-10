/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-object/_cjs/prod/flatten-object"),t=require("@banquette/utils-string/_cjs/prod/case/kebab-case"),s=require("@banquette/utils-type/_cjs/prod/ensure-array"),i=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("@banquette/utils-type/_cjs/prod/is-undefined"),n=require("../utils/get-unique-random-id.js"),a=require("./constant.js"),h=require("./event/theme-variant.event.js"),o=function(){function VueThemeVariant(e,t,s){var i,r=this;this.theme=e,this.selector=t,this.eventDispatcher=s,this.uid=n.getUniqueRandomId(),this.publicId=null,this.rawCss="",this.cssVarsMap={},this.cssSelectorsMap={},this.propsMap={},this.propsKeys=[],this.applyIds=[],this.used=!1,this.priorityNumber=0,this.scheduleChangeNotification=(i=!1,function(){i||(i=!0,queueMicrotask((function(){r.notifyChange(),i=!1})))})}return VueThemeVariant.prototype.id=function(e){return this.publicId=e,this},VueThemeVariant.prototype.cssCode=function(e){return this.appendCssCode(e)},VueThemeVariant.prototype.appendCssCode=function(e){return this.rawCss+=e,this.scheduleChangeNotification(),this},VueThemeVariant.prototype.prependCssCode=function(e){return this.rawCss=e+this.rawCss,this.scheduleChangeNotification(),this},VueThemeVariant.prototype.clearCssCode=function(){return this.rawCss="",this.scheduleChangeNotification(),this},VueThemeVariant.prototype.cssVar=function(e,t){var s;return this.cssVars(((s={})[e]=t,s))},VueThemeVariant.prototype.cssVars=function(t){return Object.assign(this.cssVarsMap,e.flattenObject(t)),this.scheduleChangeNotification(),this},VueThemeVariant.prototype.clearCssVars=function(){return this.cssVarsMap={},this.scheduleChangeNotification(),this},VueThemeVariant.prototype.cssSelector=function(e,t){var s;return this.cssSelectors(((s={})[e]=t,s))},VueThemeVariant.prototype.cssSelectors=function(s){for(var n=e.flattenObject(s,".",-1),a=0,h=Object.keys(n);a<h.length;a++){var o=h[a];if(r.isUndefined(this.cssSelectorsMap[o])&&(this.cssSelectorsMap[o]={}),i.isObject(n[o]))for(var u=0,p=Object.keys(n[o]);u<p.length;u++){var c=p[u],V=t.kebabCase(c);this.cssSelectorsMap[o][V]=n[o][c]}}return this.scheduleChangeNotification(),this},VueThemeVariant.prototype.clearCssSelectors=function(){return this.cssSelectorsMap={},this.scheduleChangeNotification(),this},VueThemeVariant.prototype.prop=function(e,t){var s;return this.props(((s={})[e]=t,s))},VueThemeVariant.prototype.props=function(e){return Object.assign(this.propsMap,e),this.propsKeys=Object.keys(this.propsMap),this.scheduleChangeNotification(),this},VueThemeVariant.prototype.clearProps=function(){return this.propsMap={},this.propsKeys=[],this.scheduleChangeNotification(),this},VueThemeVariant.prototype.apply=function(e){return this.applyIds=s.ensureArray(e),this},VueThemeVariant.prototype.priority=function(e){return this.priorityNumber=e,this.eventDispatcher.dispatch(a.ThemesEvents.VariantPriorityChanged,new h.ThemeVariantEvent(this)),this},VueThemeVariant.prototype.use=function(e,t){this.used=!0,this.configuration=t,this.scopeId=e.$.type.__scopeId||null,this.eventDispatcher.dispatch(a.ThemesEvents.VariantUsed,new h.ThemeVariantEvent(this))},VueThemeVariant.prototype.onChange=function(e){return this.eventDispatcher.subscribe(a.ThemesEvents.VariantUpdated,e)},VueThemeVariant.prototype.onUse=function(e){return this.eventDispatcher.subscribe(a.ThemesEvents.VariantUsed,e)},VueThemeVariant.prototype.onPriorityChange=function(e){return this.eventDispatcher.subscribe(a.ThemesEvents.VariantPriorityChanged,e)},VueThemeVariant.prototype.notifyChange=function(){this.eventDispatcher.dispatch(a.ThemesEvents.VariantUpdated,new h.ThemeVariantEvent(this))},VueThemeVariant}();exports.VueThemeVariant=o;
