/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var constant = require('../constant.js');
var utils = require('../pagination/utils.js');

function onBeforeResponse(event) {
    var responseBody = event.httpEvent.response.response;
    var isPaginatedResponse = event.state.pagination.enabled && utils.isPaginatedServerResponseInterface(responseBody);
    var items = isPaginatedResponse ? responseBody.items : responseBody;
    if (!isArray.isArray(items)) {
        return;
    }
    if (isPaginatedResponse) {
        event.result.pagination = event.httpEvent.response.response;
    }
    event.result.items = items;
    event.httpEvent.response.response = event.result;
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constant.TableApiEvents.BeforeResponse, onBeforeResponse, 1, null, [constant.TableProcessorTag]);
