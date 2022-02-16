import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { PojoTransformerSymbol } from "@banquette/model/transformer/type/root/pojo";
import { isArray } from "@banquette/utils-type/is-array";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableResponseEvent } from "../event/table-response.event";

const transformService = Injector.Get(TransformService);
const modelMetadata = Injector.Get(ModelMetadataService);

/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeResponse(event: TableResponseEvent) {
    if (event.state.remote.model === null || !isArray(event.result.items)) {
        return ;
    }
    const ctor = modelMetadata.resolveAlias(event.state.remote.model);
    const transformResult = transformService.transformInverse(event.result.items, ctor, PojoTransformerSymbol);
    const assignResult = () => {
        event.result.items = transformResult.result;
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
