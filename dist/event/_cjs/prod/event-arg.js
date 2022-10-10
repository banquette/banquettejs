/*!
 * Banquette Event v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function EventArg(){this.propagationStopped=!1,this.defaultPrevented=!1}return EventArg.prototype.stopPropagation=function(){this.propagationStopped=!0},EventArg.prototype.restorePropagation=function(){this.propagationStopped=!1},EventArg.prototype.preventDefault=function(){this.defaultPrevented=!0},EventArg}();exports.EventArg=t;
