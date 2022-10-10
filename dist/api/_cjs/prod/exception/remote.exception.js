/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/exception/_cjs/prod/system.exception"),i=require("@banquette/utils-string/_cjs/prod/format/slugify"),r=function(t){function RemoteException(e,r,o,s){void 0===e&&(e="remote");var n=t.call(this,r,o,s)||this;return n.slug=e,n.slug=i.slugify(e),n}return e.__extends(RemoteException,t),RemoteException}(t.SystemException);exports.RemoteException=r;
