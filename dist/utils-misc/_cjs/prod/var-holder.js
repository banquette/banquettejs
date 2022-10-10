/*!
 * Banquette UtilsMisc v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/exception/_cjs/prod/usage.exception"),t=require("@banquette/utils-object/_cjs/prod/get-object-keys"),r=require("@banquette/utils-type/_cjs/prod/ensure-array"),n=require("@banquette/utils-type/_cjs/prod/is-object"),i=require("@banquette/utils-type/_cjs/prod/is-string"),o=require("@banquette/utils-type/_cjs/prod/is-undefined"),s=function(){function VarHolder(e){o.isUndefined(e)?this.bag={}:this.bag=Object.assign({},e)}return VarHolder.prototype.all=function(){return Object.assign({},this.bag)},VarHolder.prototype.keys=function(){return Object.keys(this.bag)},VarHolder.prototype.get=function(e,t){void 0===t&&(t=null);for(var s=i.isString(e)?e.split("."):r.ensureArray(e),a=this.bag,u=0;u<s.length;++u){if(o.isUndefined(a[s[u]])||!n.isObject(a[s[u]])&&u<s.length-1)return t;a=a[s[u]]}return a},VarHolder.prototype.set=function(t,s){for(var a=i.isString(t)?t.split("."):r.ensureArray(t),u=this.bag,l=0;l<a.length-1;++l){if(o.isUndefined(u[a[l]])&&(u[a[l]]={}),!n.isObject(u[a[l]]))throw new e.UsageException('The key "'+a[l]+'" is already used by a non object value.');u=u[a[l]]}u[a[a.length-1]]=s},VarHolder.prototype.replace=function(e){this.bag=e},VarHolder.prototype.add=function(e){for(var r=0,n=t.getObjectKeys(e);r<n.length;r++){var i=n[r];this.bag[i]=e[i]}},VarHolder.prototype.has=function(e){return null!==this.get(e)||null===this.get(e,"_")},VarHolder.prototype.remove=function(e){delete this.bag[e]},VarHolder.prototype.clear=function(){this.bag={}},VarHolder.prototype.count=function(){return Object.keys(this.bag).length},VarHolder}();exports.VarHolder=s;
