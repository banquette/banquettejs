/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/utils-misc/_cjs/prod/var-holder"),n=function(n){function SequenceContext(e,r,u){void 0===u&&(u=null);var o=n.call(this)||this;return o.sequence=e,o.result=r,o.parent=u,o.bag=new t.VarHolder,o.sequenceStopped=!1,o}return e.__extends(SequenceContext,n),SequenceContext.prototype.stopSequence=function(e){void 0===e&&(e=!1),this.stopPropagation(),this.sequenceStopped=!0,e&&this.parent&&this.parent.stopSequence(!0)},SequenceContext}(require("../event-arg.js").EventArg);exports.SequenceContext=n;
