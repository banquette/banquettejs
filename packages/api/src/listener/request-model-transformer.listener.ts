/**
 * The role of this event listener is to check if the ApiRequest is configured to handle models
 * and if so, transform to pojo every model found in the payload.
 *
 * This will only work if the payload only contains the model or an array of models.
 *
 * If you have a more specific use case this listener cannot handle, simply subscribe to the event
 * yourself with a higher priority and stop the propagation.
 */
import { Injector } from "@banquette/dependency-injection";
import {EventDispatcherService, UnsubscribeFunction} from "@banquette/event";
import { HttpMethod } from "@banquette/http";
import { TransformService } from "@banquette/model";
import { isArray, isObject } from "@banquette/utils-type";
import { ApiProcessorTag, ApiEvents } from "../constant";
import { ApiRequestEvent } from "../event/api-request.event";
import { ApiTransformerSymbol } from "../transformer/api";

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useBuiltInRequestModelTransformer = /**!PURE*/ (() => {
    return (): UnsubscribeFunction  => {
        const transformService = /**!PURE*/ Injector.Get(TransformService);

        /**
         * Transform models fround in the payload into Pojo.
         *
         * @throws ModelAliasNotFoundException
         */
        function onBeforeRequest(event: ApiRequestEvent) {
            let payload: any = event.httpEvent.request.payload;
            const modelCtor = event.apiRequest.model !== null ? (isArray(event.apiRequest.model) ? event.apiRequest.model[0] : event.apiRequest.model) : null;
            if (event.apiRequest.method === HttpMethod.GET || modelCtor === null || !isObject(payload)) {
                return;
            }
            const transformResult = transformService.transform(payload, ApiTransformerSymbol);
            if (transformResult.promise !== null) {
                return transformResult.promise.then(() => {
                    event.httpEvent.request.payload = transformResult.result;
                });
            } else {
                event.httpEvent.request.payload = transformResult.result;
            }
        }

        return Injector.Get(EventDispatcherService).subscribe<ApiRequestEvent>(
            ApiEvents.BeforeRequest,
            onBeforeRequest,
            0,
            null,
            [ApiProcessorTag]
        );
    };
})();
