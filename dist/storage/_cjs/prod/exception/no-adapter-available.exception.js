/*!
 * Banquette Storage v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=function(t){function NoAdapterAvailableException(e){void 0===e&&(e="None of the available storage adapters is supported by the current browser.");var a=t.call(this,e)||this;return a.slug="no-adapter-available",a}return e.__extends(NoAdapterAvailableException,t),NoAdapterAvailableException}(require("@banquette/exception/_cjs/prod/system.exception").SystemException);exports.NoAdapterAvailableException=t;
