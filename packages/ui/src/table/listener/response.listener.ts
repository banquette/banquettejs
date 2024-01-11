import { Injector } from "@banquette/dependency-injection";
import {EventDispatcherService, UnsubscribeFunction} from "@banquette/event";
import {isArray} from "@banquette/utils-type";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableResponseEvent } from "../event/table-response.event";
import { PaginatedServerResponseInterface } from "../pagination/paginated-server-response.interface";
import { isPaginatedServerResponseInterface } from "../pagination/utils";

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useBuiltInResponseListener = /**!PURE*/ (() => {
    return (): UnsubscribeFunction => {
        function onBeforeResponse(event: TableResponseEvent) {
            const responseBody: any = event.httpEvent.response.response;
            const isPaginatedResponse = event.state.pagination.enabled && isPaginatedServerResponseInterface(responseBody);
            const items = isPaginatedResponse ? (responseBody as PaginatedServerResponseInterface).items : responseBody;
            if (!isArray(items)) {
                return;
            }
            if (isPaginatedResponse) {
                event.result.pagination = event.httpEvent.response.response as PaginatedServerResponseInterface;
            }
            event.result.items = items;
            event.httpEvent.response.response = event.result;
        }

        return Injector.Get(EventDispatcherService).subscribe<TableResponseEvent>(
            TableApiEvents.BeforeResponse,
            onBeforeResponse,
            1,
            null,
            [TableProcessorTag]
        );
    };
})();
