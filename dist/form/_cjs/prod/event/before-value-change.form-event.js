/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),r=function(r){function BeforeValueChangeFormEvent(e,t,n){var o=r.call(this,e)||this;return o.oldValue=t,o.newValue=n,o.changeAccepted=!0,o}return e.__extends(BeforeValueChangeFormEvent,r),BeforeValueChangeFormEvent.prototype.refuse=function(){this.changeAccepted=!1},BeforeValueChangeFormEvent}(require("./form-event.js").FormEvent);exports.BeforeValueChangeFormEvent=r;
