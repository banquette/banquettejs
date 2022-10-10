/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),r=require("@banquette/dependency-injection/_cjs/prod/decorator/service.decorator"),t=require("@banquette/exception/_cjs/prod/usage.exception"),o=function(o){function FormStorageService(){return null!==o&&o.apply(this,arguments)||this}return e.__extends(FormStorageService,o),FormStorageService.prototype.register=function(e,r){if(this.has(r))throw new t.UsageException('A form named "'.concat(r,'" is already registered in the storage.'));o.prototype.register.call(this,e,r)},FormStorageService=e.__decorate([r.Service()],FormStorageService)}(require("@banquette/utils-misc/_cjs/prod/weak-object-map").WeakObjectMap);exports.FormStorageService=o;
