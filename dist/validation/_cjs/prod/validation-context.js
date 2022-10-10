/*!
 * Banquette Validation v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("@banquette/exception/_cjs/prod/usage.exception"),e=require("@banquette/utils-array/_cjs/prod/array-intersect"),n=require("@banquette/utils-glob/_cjs/prod/constant"),i=require("@banquette/utils-glob/_cjs/prod/match-best"),a=require("@banquette/utils-object/_cjs/prod/get-object-value"),r=require("@banquette/utils-type/_cjs/prod/ensure-array"),s=require("@banquette/utils-type/_cjs/prod/is-undefined"),o=require("./mask/normalize-mask.js"),u=require("./utils.js"),h=require("./validation-result.js"),l=function(){function ValidationContext(e,n,i,a,r){if(void 0===a&&(a=[]),void 0===r&&(r=[]),this.parent=e,this.name=n,this.value=i,this.groups=r,null!==n&&n.match(/\/|\*/))throw new t.UsageException('Invalid context name. Must not contain "/" or "*".');if(this.parent&&!n)throw new t.UsageException("A sub context must have a name.");this.children=[],this.masks=[],this.maskMatchResults=new WeakMap,this.path=this.parent?this.parent.path+(this.parent.name?"/":"")+n:"/",this.result=new h.ValidationResult(this.path,this.parent?this.parent.result:null),this.parent&&this.parent.addChild(this),a.length>0&&this.addMask(a)}return ValidationContext.prototype.addChild=function(e){if(e.parent!==this)throw new t.UsageException("Invalid child context assignation. The parent does not match the current context.");this.children.push(e)},ValidationContext.prototype.getChildren=function(){return this.children},ValidationContext.prototype.getChild=function(t){for(var e=0,n=this.children;e<n.length;e++){var i=n[e];if(i.name===t)return i}return null},ValidationContext.prototype.addMask=function(t){if(this.parent)return this.addMask(t);this.masks=this.masks.concat(o.normalizeMasks(t,this.path))},ValidationContext.prototype.setMasks=function(t){if(this.parent)return this.setMasks(t);this.masks=o.normalizeMasks(t,this.path)},ValidationContext.prototype.getRoot=function(){return this.parent?this.parent.getRoot():this},ValidationContext.prototype.shouldValidate=function(t){var i=this.matchMask(t),a=r.ensureArray(t.groups),s=u.isValidatorContainer(t);return(i.pattern===n.MatchType.Full||i.pattern===n.MatchType.Partial&&s)&&(i.tags>=n.MatchType.Partial||s)&&(s||this.groups.length&&e.arrayIntersect(this.groups,a).length>0||!this.groups.length&&!a.length)},ValidationContext.prototype.getOtherValue=function(t,e){void 0===e&&(e=null);var n=this.getAbsolutePathParts(t);return a.getObjectValue(this.getRoot().value,n,e)},ValidationContext.prototype.getOtherContext=function(t){if(!t||!t.length)return null;var e=this;"/"===t[0]&&(e=this.getRoot(),t=t.substring(1));var n=t.split("/");do{var i=n.shift();if(".."===i){if(!e.parent)return null;e=e.parent}else if("."!==i){for(var a=null,r=0,s=e.children;r<s.length;r++){var o=s[r];if(o.name===i){a=o;break}}if(!a)return null;e=a}}while(n.length>0);return e},ValidationContext.prototype.getAbsolutePath=function(t){return"/"+this.getAbsolutePathParts(t).join("/")},ValidationContext.prototype.createSubContext=function(t,e,n,i){return void 0===n&&(n=[]),void 0===i&&(i=[]),new ValidationContext(this,t,e,n,i)},ValidationContext.prototype.matchMask=function(t){var e;if((void 0===t&&(t=null),t)&&((a=this.maskMatchResults.get(t))&&!s.isUndefined(a[this.path])))return a[this.path];var a,r=this.getRoot().masks;(e=r.length?i.matchBest(r,this.path,t?t.tags:void 0):{pattern:n.MatchType.Full,tags:n.MatchType.Full},t)&&((a=this.maskMatchResults.get(t)||{})[this.path]=e,this.maskMatchResults.set(t,a));return e},ValidationContext.prototype.getAbsolutePathParts=function(t){if(!t)return[];"/"!==t[0]&&(t=this.path+"/"+t);for(var e=t.substring(1).split("/"),n=0;n<e.length;++n)".."===e[n]?(n>0&&e.splice(n---1,1),e.splice(n--,1)):"."===e[n]&&e.splice(n--,1);return e},ValidationContext.EnsureValidationContext=function(t,e){if(!u.isValidationContext(e)){var n=e||{};return new ValidationContext(null,null,t,s.isUndefined(n.mask)?void 0:r.ensureArray(n.mask),s.isUndefined(n.group)?void 0:r.ensureArray(n.group))}return e},ValidationContext}();exports.ValidationContext=l;
