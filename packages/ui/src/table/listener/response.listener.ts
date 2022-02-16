import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { isArray } from "@banquette/utils-type/is-array";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableResponseEvent } from "../event/table-response.event";
import { PaginatedServerResponseInterface } from "../pagination/paginated-server-response.interface";
import { isPaginatedServerResponseInterface } from "../pagination/utils";

function onBeforeResponse(event: TableResponseEvent) {
    const responseBody: any = event.httpEvent.response.response;
    const isPaginatedResponse = event.state.pagination.enabled && isPaginatedServerResponseInterface(responseBody);
    const items = isPaginatedResponse ? (responseBody as PaginatedServerResponseInterface).items : responseBody;
    if (!isArray(items)) {
        return ;
    }
    if (isPaginatedResponse) {
        event.result.pagination = event.httpEvent.response.response as PaginatedServerResponseInterface;
    }
    event.result.items = items;
    event.httpEvent.response.response = event.result;
}
Injector.Get(EventDispatcherService).subscribe<TableResponseEvent>(
    TableApiEvents.BeforeResponse,
    onBeforeResponse,
    1,
    null,
    [TableProcessorTag]
);
