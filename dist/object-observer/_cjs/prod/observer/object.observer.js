/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../_virtual/_tslib.js"),t=require("@banquette/utils-type/_cjs/prod/is-object"),r=require("@banquette/utils-type/_cjs/prod/is-undefined"),s=function(s){function ObjectObserver(){return null!==s&&s.apply(this,arguments)||this}return e.__extends(ObjectObserver,s),ObjectObserver.Supports=function(e){return t.isObject(e)&&!(e instanceof Date)},ObjectObserver.prototype.observe=function(e){for(var t=0,s=Object.keys(e);t<s.length;t++){var i=s[t],b=Object.getOwnPropertyDescriptor(e,i);if(r.isUndefined(b)||b.writable||!r.isUndefined(b.set))try{e[i]=this.observeProperty(i,e[i])}catch(e){}}},ObjectObserver}(require("./abstract.observer.js").AbstractObserver);exports.ObjectObserver=s;
