import { Injector } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { ModelMetadataService, TransformService, PojoTransformerSymbol } from "@banquette/model";
import { isArray } from "@banquette/utils-type";
import { TableProcessorTag, TableApiEvents } from "../constant";
import { TableResponseEvent } from "../event/table-response.event";

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useBuiltInResponseTransformer = /**!PURE*/ (() => {
    return () => {
        const transformService = /**!PURE*/ Injector.Get(TransformService);
        const modelMetadata = /**!PURE*/ Injector.Get(ModelMetadataService);

        /**
         * Transform models fround in the payload into Pojo.
         *
         * @throws ModelAliasNotFoundException
         */
        function onBeforeResponse(event: TableResponseEvent) {
            if (event.state.remote.model === null || !isArray(event.result.items)) {
                return;
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
    };
})();
