/*!
 * Banquette Fingerprint v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./_virtual/_tslib.js"),r=require("@banquette/dependency-injection/_cjs/prod/decorator/inject-multiple.decorator"),t=require("@banquette/dependency-injection/_cjs/prod/decorator/inject.decorator"),n=require("@banquette/dependency-injection/_cjs/prod/decorator/service.decorator"),i=require("@banquette/exception/_cjs/prod/exception.factory"),a=require("@banquette/exception/_cjs/prod/usage.exception"),o=require("@banquette/storage/_cjs/prod/storage.service"),s=require("@banquette/utils-misc/_cjs/prod/noop"),c=require("@banquette/utils-type/_cjs/prod/is-null-or-undefined");require("./adapter/fingerprintjs.adapter.js");var u=require("./constant.js"),p=function(){function FingerprintService(e,r){this.storage=e,this.adapters=r}var p;return p=FingerprintService,FingerprintService.prototype.getFingerprint=function(r){var t=this;return void 0===r&&(r=!0),c.isNullOrUndefined(this.promise)&&(this.promise=new Promise((function(n,a){return e.__awaiter(t,void 0,void 0,(function(){var t,o;return e.__generator(this,(function(e){switch(e.label){case 0:return r?[4,this.storage.get(p.StorageKey)]:[3,2];case 1:if(t=e.sent())return[2,void n(t)];e.label=2;case 2:return e.trys.push([2,4,,5]),[4,this.generateFingerprint()];case 3:return t=e.sent(),r&&this.storage.set(p.StorageKey,t).catch(s.noop),n(t),[3,5];case 4:return o=e.sent(),a(i.ExceptionFactory.EnsureException(o)),[3,5];case 5:return[2]}}))}))}))),this.promise},FingerprintService.prototype.generateFingerprint=function(){return e.__awaiter(this,void 0,void 0,(function(){var r,t,n,o,s;return e.__generator(this,(function(e){switch(e.label){case 0:r=null,t=0,n=this.adapters,e.label=1;case 1:if(!(t<n.length))return[3,6];o=n[t],e.label=2;case 2:return e.trys.push([2,4,,5]),[4,o.generateFingerprint()];case 3:return[2,e.sent()];case 4:return s=e.sent(),r=i.ExceptionFactory.EnsureException(s,"Adapter failed for an unknown reason.",r),[3,5];case 5:return t++,[3,1];case 6:if(r)throw r;throw new a.UsageException('No fingerprint adapter has been defined. Please define at least one adapter by registering it in the container using the "AdapterInterfaceSymbol" symbol.')}}))}))},FingerprintService.StorageKey="efp",FingerprintService=p=e.__decorate([n.Service(),e.__param(0,t.Inject(o.StorageService)),e.__param(1,r.InjectMultiple(u.AdapterTag)),e.__metadata("design:paramtypes",[o.StorageService,Array])],FingerprintService)}();exports.FingerprintService=p;
