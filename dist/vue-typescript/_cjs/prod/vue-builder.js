/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),r=require("@banquette/utils-type/_cjs/prod/ensure-array"),i=require("@banquette/utils-type/_cjs/prod/is-function"),u=require("@banquette/utils-type/_cjs/prod/is-object"),t=require("@banquette/utils-type/_cjs/prod/is-undefined"),n=require("vue"),o=function(){function VueBuilder(){}return VueBuilder.RegisterComponent=function(e,i,u){void 0===u&&(u=VueBuilder.DEFAULT_GROUP);for(var n=0,o=r.ensureArray(u);n<o.length;n++){var l=o[n];t.isUndefined(VueBuilder.Components[l])&&(VueBuilder.Components[l]={}),VueBuilder.Components[l][e]=i}},VueBuilder.RegisterDirective=function(e,i,u,n){void 0===u&&(u=VueBuilder.DEFAULT_GROUP),void 0===n&&(n=null);for(var o=0,l=r.ensureArray(u);o<l.length;o++){var s=l[o];null!==s&&(t.isUndefined(VueBuilder.Directives[s])&&(VueBuilder.Directives[s]={}),VueBuilder.Directives[s][e]=i)}null!==n&&VueBuilder.DirectivesConstructorsMap.set(n,{name:e,directive:i})},VueBuilder.RegisterGlobalProperty=function(e,r){VueBuilder.GlobalProperties[e]=r},VueBuilder.GetDirectiveDefinition=function(r){if(!VueBuilder.DirectivesConstructorsMap.has(r))throw new e.UsageException("No directive definition found for ".concat(r.name||"(Unnamed constructor)","."));return VueBuilder.DirectivesConstructorsMap.get(r)},VueBuilder.SetVueOptions=function(e){VueBuilder.Options=VueBuilder.MergeVueOptions(VueBuilder.Options||{},e)},VueBuilder.CreateApp=function(e,r){void 0===e&&(e=VueBuilder.DEFAULT_GROUP),void 0===r&&(r={});var i=n.createApp({});return VueBuilder.ApplyToExistingApp(i,e,r),i},VueBuilder.CreateAppAndMount=function(e,r,i){return void 0===r&&(r=VueBuilder.DEFAULT_GROUP),void 0===i&&(i={}),VueBuilder.CreateApp(r,i).mount(e)},VueBuilder.ApplyToExistingApp=function(e,i,u){void 0===i&&(i=VueBuilder.DEFAULT_GROUP),void 0===u&&(u={});for(var n=VueBuilder.MergeVueOptions({errorHandler:console.error,warnHandler:console.warn,globalProperties:VueBuilder.GlobalProperties,optionMergeStrategies:{},performance:!1,compilerOptions:{isCustomElement:function(){return!1},whitespace:"condense",delimiters:["{{","}}"],comments:!1}},VueBuilder.Options,u),o=0,l=Object.keys(n);o<l.length;o++){var s=l[o];e.config[s]=n[s]}for(var d="*"===i?Object.keys(VueBuilder.Components).concat(Object.keys(VueBuilder.Directives)):r.ensureArray(i),c=0,p=d=d.filter((function(e,r){return d.indexOf(e)===r}));c<p.length;c++){var a=p[c];if(!t.isUndefined(VueBuilder.Components[a]))for(var V=0,B=Object.keys(VueBuilder.Components[a]);V<B.length;V++){var v=B[V];e.component(v,VueBuilder.Components[a][v])}if(!t.isUndefined(VueBuilder.Directives[a]))for(var f=0,g=Object.keys(VueBuilder.Directives[a]);f<g.length;f++){var O=g[f];e.directive(O,VueBuilder.Directives[a][O])}}},VueBuilder.MergeVueOptions=function(){for(var e=arguments,r=this,t=[],n=0;n<arguments.length;n++)t[n]=e[n];for(var o=t[0],l=1;l<t.length;++l)for(var s=t[l],d=0,c=Object.keys(s);d<c.length;d++){var p=c[d];i.isFunction(o[p])?o[p]=function(e,i){return function(){for(var u=arguments,t=[],n=0;n<arguments.length;n++)t[n]=u[n];return e.apply(r,t)||i.apply(r,t)}}(o[p],s[p]):u.isObject(s[p])?o[p]=VueBuilder.MergeVueOptions(o[p]||{},s[p]):o[p]=s[p]}return o},VueBuilder.DEFAULT_GROUP="default",VueBuilder.Components={},VueBuilder.Directives={},VueBuilder.DirectivesConstructorsMap=new WeakMap,VueBuilder.Options={},VueBuilder.GlobalProperties={},VueBuilder}();exports.VueBuilder=o;
