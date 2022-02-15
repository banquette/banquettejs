import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { PojoTransformerSymbol } from "@banquette/model/transformer/type/root/pojo";
import { isArray } from "@banquette/utils-type/is-array";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableResponseEvent } from "../event/table-response.event";
import { PaginatedServerResponseInterface } from "../pagination/paginated-server-response.interface";
import { isPaginatedServerResponseInterface } from "../pagination/utils";

const transformService = Injector.Get(TransformService);
const modelMetadata = Injector.Get(ModelMetadataService);

/**
 * Transform models fround in the payload into Pojo.
 *
 * This listener overrides the one defined in the `api` package, to handle paginated results.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeResponse(event: TableResponseEvent) {
    let responseBody: any = event.httpEvent.response.response;
    if (event.state.remote.model === null) {
        return ;
    }
    const isPaginatedResponse = event.state.pagination.enabled && isPaginatedServerResponseInterface(responseBody);
    const items = isPaginatedResponse ? (responseBody as PaginatedServerResponseInterface).items : responseBody;
    if (!isArray(items)) {
        return ;
    }
    const ctor = modelMetadata.resolveAlias(event.state.remote.model);
    const transformResult = transformService.transformInverse(items, ctor, PojoTransformerSymbol);
    const assignResult = () => {
        if (isPaginatedResponse) {
            event.result.pagination = event.httpEvent.response.response as PaginatedServerResponseInterface;
        }
        event.result.items = transformResult.result;
        event.httpEvent.response.response = event.result;
    };
    if (transformResult.promise !== null) {
        return transformResult.promise.then(assignResult);
    } else {
        assignResult();
    }
}
Injector.Get(EventDispatcherService).subscribe<TableResponseEvent>(
    TableApiEvents.BeforeResponse,
    onBeforeResponse,
    0,
    null,
    [TableProcessorTag]
);
