/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),r=function(r){function TransferProgressEvent(e,s,t,n,o){var u=r.call(this,e,s)||this;return u.request=e,u.status=s,u.loaded=t,u.total=n,u.percent=o,u}return e.__extends(TransferProgressEvent,r),TransferProgressEvent}(require("./request-progress.event.js").RequestProgressEvent);exports.TransferProgressEvent=r;
