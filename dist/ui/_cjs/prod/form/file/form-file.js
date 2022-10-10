/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@banquette/utils-string/_cjs/prod/format/byte-count-to-human-size"),t=require("@banquette/utils-string/_cjs/prod/is-non-empty-string"),i=require("@banquette/utils-type/_cjs/prod/is-object"),n=require("@banquette/utils-type/_cjs/prod/is-valid-number"),u=require("./constant.js"),l=function(){function FormFile(e,t){this.filename="(unknown name)",this.type=null,this._totalSize=null,this._uploadedSize=null,this.error=null,this.file=e,this.type=null!==e?e.type:null,this.filename=null!==e?e.name:t.noName,this.progress=null!==e?0:null,this.uploadedSize=null!==e?0:null,this.totalSize=null!==e?e.size:null,this.status=null!==e?u.UploadStatus.Paused:u.UploadStatus.Remote}return Object.defineProperty(FormFile.prototype,"totalSize",{get:function(){return this._totalSize},set:function(t){this._totalSize=t,this.totalSizeText=null!==t?e.byteCountToHumanSize(t):null},enumerable:!1,configurable:!0}),Object.defineProperty(FormFile.prototype,"uploadedSize",{get:function(){return this._uploadedSize},set:function(t){this._uploadedSize=t,this.uploadedSizeText=null!==t?e.byteCountToHumanSize(t):null},enumerable:!1,configurable:!0}),Object.defineProperty(FormFile.prototype,"uploading",{get:function(){return this.status===u.UploadStatus.Uploading},enumerable:!1,configurable:!0}),Object.defineProperty(FormFile.prototype,"paused",{get:function(){return this.status===u.UploadStatus.Paused},enumerable:!1,configurable:!0}),Object.defineProperty(FormFile.prototype,"succeeded",{get:function(){return this.status===u.UploadStatus.Succeeded},enumerable:!1,configurable:!0}),Object.defineProperty(FormFile.prototype,"failed",{get:function(){return this.status===u.UploadStatus.Failed},enumerable:!1,configurable:!0}),Object.defineProperty(FormFile.prototype,"remote",{get:function(){return this.status===u.UploadStatus.Remote},enumerable:!1,configurable:!0}),FormFile.Create=function(e,u){if(e instanceof File)return new FormFile(e,u);var l=new FormFile(null,u);return i.isObject(e)&&(t.isNonEmptyString(e.name)&&(l.filename=e.name),n.isValidNumber(e.size)&&(l.totalSize=e.size),t.isNonEmptyString(e.type)&&(l.type=e.type),l.serverResponse=e),l},FormFile}();exports.FormFile=l;
