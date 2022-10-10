/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function Mutation(t,e,i,n,r){this.type=t,this.pathParts=e,this.oldValue=i,this.newValue=n,this.target=r}return Object.defineProperty(Mutation.prototype,"path",{get:function(){return"/"+this.pathParts.join("/")},enumerable:!1,configurable:!0}),Mutation}();exports.Mutation=t;
