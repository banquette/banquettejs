/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("@banquette/dependency-injection/_cjs/prod/injector"),r=require("@banquette/event/_cjs/prod/event-dispatcher.service"),t=require("@banquette/model/_cjs/prod/model-metadata.service"),s=require("@banquette/model/_cjs/prod/transformer/transform.service"),o=require("@banquette/model/_cjs/prod/transformer/type/root/pojo"),n=require("@banquette/utils-type/_cjs/prod/is-array"),i=require("../constant.js"),a=e.Injector.Get(s.TransformService),u=e.Injector.Get(t.ModelMetadataService);e.Injector.Get(r.EventDispatcherService).subscribe(i.TableApiEvents.BeforeResponse,(function onBeforeResponse(e){if(null!==e.state.remote.model&&n.isArray(e.result.items)){var r=u.resolveAlias(e.state.remote.model),t=a.transformInverse(e.result.items,r,o.PojoTransformerSymbol),assignResult=function(){e.result.items=t.result};if(null!==t.promise)return t.promise.then(assignResult);assignResult()}}),0,null,[i.TableProcessorTag]);
