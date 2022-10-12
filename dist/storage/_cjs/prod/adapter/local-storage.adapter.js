/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../_virtual/_tslib.js"),e=require("@banquette/dependency-injection/_cjs/prod/decorator/service.decorator"),r=require("@banquette/utils-misc/_cjs/prod/is-server"),o=require("@banquette/utils-type/_cjs/prod/is-function"),n=require("@banquette/utils-type/_cjs/prod/is-object"),a=require("@banquette/utils-type/_cjs/prod/is-undefined"),i=require("../constant.js"),c=function(c){function LocalStorageAdapter(){return null!==c&&c.apply(this,arguments)||this}return t.__extends(LocalStorageAdapter,c),LocalStorageAdapter.prototype.isAvailable=function(){return!r.isServer()&&n.isObject(window.localStorage)&&o.isFunction(window.localStorage.getItem)},LocalStorageAdapter.prototype.getPriority=function(){return 1},LocalStorageAdapter.prototype.get=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.getSync(e,r)]}))}))},LocalStorageAdapter.prototype.getSync=function(t,e){var r=window.localStorage.getItem(t);return null!==r?this.decode(r):a.isUndefined(e)?null:e},LocalStorageAdapter.prototype.set=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return this.setSync(e,r),[2]}))}))},LocalStorageAdapter.prototype.setSync=function(t,e){var r=this.getSync(t);window.localStorage.setItem(t,this.encode(e)),this.notifyKeyChange(t,e,r)},LocalStorageAdapter.prototype.remove=function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return this.removeSync(e),[2]}))}))},LocalStorageAdapter.prototype.removeSync=function(t){var e=this.getSync(t);window.localStorage.removeItem(t),this.notifyKeyChange(t,void 0,e)},LocalStorageAdapter.prototype.clear=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return this.clearSync(),[2]}))}))},LocalStorageAdapter.prototype.clearSync=function(){window.localStorage.clear(),this.notifyClear()},LocalStorageAdapter.prototype.length=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.lengthSync()]}))}))},LocalStorageAdapter.prototype.lengthSync=function(){return window.localStorage.length},LocalStorageAdapter.prototype.keys=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.keysSync()]}))}))},LocalStorageAdapter.prototype.keysSync=function(){for(var t=[],e=0,r=localStorage.length;e<r;++e)t.push(localStorage.key(e));return t},LocalStorageAdapter=t.__decorate([e.Service(i.StorageAdapterTag)],LocalStorageAdapter)}(require("./abstract.adapter.js").AbstractAdapter);exports.LocalStorageAdapter=c;
