/*!
 * Banquette Model v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-misc/_cjs/prod/noop"),i=require("@banquette/utils-misc/_cjs/prod/proxy"),t=function(){function TransformPipeline(e,i){this.result=e,this.transformableProperties=i,this.onFinishSubscribers=[],this.settled=!1,this.promise=null,this.promiseResolve=null,this.promiseReject=null}return TransformPipeline.prototype.forEach=function(e,i){var t=this;try{for(var s=Object.keys(this.transformableProperties),r=s.length,n=0,o=s;n<o.length;n++){var l=o[n],h=e(l,this.transformableProperties[l]),p=function(e,s){return function(){s.error?t.fail(s.errorDetail):(i(e,s),--r||t.settle())}}(l,h);if(null!==h.promise?this.waitForResult(h).then(p):p(),this.settled)break}s.length||this.settle()}catch(e){this.fail(e)}},TransformPipeline.prototype.onFinish=function(e){var i=this;return this.onFinishSubscribers.push(e),this.settled&&e(),function(){for(var t=0;t<i.onFinishSubscribers.length;++t)if(i.onFinishSubscribers[t]===e){i.onFinishSubscribers.splice(t,1);break}}},TransformPipeline.prototype.waitForResult=function(t){var s=this;return null===this.promise&&(this.promise=new Promise((function(e,i){s.promiseResolve=e,s.promiseReject=i})),this.result.delayResponse(this.promise)),t.promise.then(e.noop).catch(i.proxy(this.fail,this))},TransformPipeline.prototype.settle=function(){if(!this.settled){this.settled=!0,null!==this.promiseResolve&&this.promiseResolve();for(var e=0,i=this.onFinishSubscribers;e<i.length;e++){(0,i[e])()}}},TransformPipeline.prototype.fail=function(e){null!==this.promiseReject?this.promiseReject(e):this.result.fail(e),this.settled=!0},TransformPipeline}();exports.TransformPipeline=t;
