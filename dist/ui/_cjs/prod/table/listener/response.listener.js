/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
"use strict";var e=require("@banquette/dependency-injection/_cjs/prod/injector"),t=require("@banquette/event/_cjs/prod/event-dispatcher.service"),s=require("@banquette/utils-type/_cjs/prod/is-array"),n=require("../constant.js"),r=require("../pagination/utils.js");e.Injector.Get(t.EventDispatcherService).subscribe(n.TableApiEvents.BeforeResponse,(function onBeforeResponse(e){var t=e.httpEvent.response.response,n=e.state.pagination.enabled&&r.isPaginatedServerResponseInterface(t),i=n?t.items:t;s.isArray(i)&&(n&&(e.result.pagination=e.httpEvent.response.response),e.result.items=i,e.httpEvent.response.response=e.result)}),1,null,[n.TableProcessorTag]);
