/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { isArray } from '@banquette/utils-type/is-array';
import { TableApiEvents, TableProcessorTag } from '../constant.js';
import { isPaginatedServerResponseInterface } from '../pagination/utils.js';

function onBeforeResponse(event) {
    var responseBody = event.httpEvent.response.response;
    var isPaginatedResponse = event.state.pagination.enabled && isPaginatedServerResponseInterface(responseBody);
    var items = isPaginatedResponse ? responseBody.items : responseBody;
    if (!isArray(items)) {
        return;
    }
    if (isPaginatedResponse) {
        event.result.pagination = event.httpEvent.response.response;
    }
    event.result.items = items;
    event.httpEvent.response.response = event.result;
}
Injector.Get(EventDispatcherService).subscribe(TableApiEvents.BeforeResponse, onBeforeResponse, 1, null, [TableProcessorTag]);
