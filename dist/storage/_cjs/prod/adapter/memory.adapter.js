/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../_virtual/_tslib.js"),e=require("@banquette/dependency-injection/_cjs/prod/decorator/service.decorator"),r=require("@banquette/utils-misc/_cjs/prod/is-server"),n=require("@banquette/utils-type/_cjs/prod/is-undefined"),o=require("../constant.js"),i=function(i){function MemoryAdapter(){var t=null!==i&&i.apply(this,arguments)||this;return t.store={},t}return t.__extends(MemoryAdapter,i),MemoryAdapter.prototype.isAvailable=function(){return r.isServer()},MemoryAdapter.prototype.getPriority=function(){return 1},MemoryAdapter.prototype.get=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.getSync(e,r)]}))}))},MemoryAdapter.prototype.getSync=function(t,e){var r=n.isUndefined(this.store[t])?null:this.store[t];return null!==r?this.decode(r):n.isUndefined(e)?null:e},MemoryAdapter.prototype.set=function(e,r){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return this.setSync(e,r),[2]}))}))},MemoryAdapter.prototype.setSync=function(t,e){var r=this.getSync(t);this.store[t]=this.encode(e),this.notifyKeyChange(t,e,r)},MemoryAdapter.prototype.remove=function(e){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return this.removeSync(e),[2]}))}))},MemoryAdapter.prototype.removeSync=function(t){var e=this.getSync(t);n.isUndefined(this.store[t])||delete this.store[t],this.notifyKeyChange(t,void 0,e)},MemoryAdapter.prototype.clear=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return this.clearSync(),[2]}))}))},MemoryAdapter.prototype.clearSync=function(){this.store={},this.notifyClear()},MemoryAdapter.prototype.length=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.lengthSync()]}))}))},MemoryAdapter.prototype.lengthSync=function(){return Object.keys(this.store).length},MemoryAdapter.prototype.keys=function(){return t.__awaiter(this,void 0,void 0,(function(){return t.__generator(this,(function(t){return[2,this.keysSync()]}))}))},MemoryAdapter.prototype.keysSync=function(){return Object.keys(this.store)},MemoryAdapter=t.__decorate([e.Service(o.StorageAdapterTag)],MemoryAdapter)}(require("./abstract.adapter.js").AbstractAdapter);exports.MemoryAdapter=i;