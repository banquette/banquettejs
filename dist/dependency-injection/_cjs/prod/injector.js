/*!
 * Banquette DependencyInjection v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./adatper/built-in.adapter.js"),t=require("./metadata.container.js"),r=function(){function Injector(){}return Injector.UseAdapter=function(e){Injector.Adapter=e;for(var r=0,n=t.MetadataContainer.GetKnownMetadata();r<n.length;r++){var o=n[r];Injector.Adapter.register(o)}},Injector.GetContainer=function(){return Injector.Adapter.getContainer()},Injector.Get=function(e){return Injector.Adapter.get(e)},Injector.GetMultiple=function(e){return Injector.Adapter.getMultiple(e)},Injector.Has=function(e){return Injector.Adapter.has(e)},Injector.Register=function(e){Injector.Adapter.register(e)},Injector}();r.UseAdapter(new e.BuiltInAdapter),exports.Injector=r;
