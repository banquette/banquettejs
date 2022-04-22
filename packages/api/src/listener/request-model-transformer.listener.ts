/**
 * The role of this event listener is to check if the ApiRequest is configured to handle models
 * and if so, transform to pojo every model found in the payload.
 *
 * This will only work if the payload only contains the model or an array of models.
 *
 * If you have a more specific use case this listener cannot handle, simply subscribe to the event
 * yourself with a higher priority and stop the propagation.
 */
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { HttpMethod } from "@banquette/http/constants";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { isObject } from "@banquette/utils-type/is-object";
import { ApiProcessorTag, ApiEvents } from "../constant";
import { ApiRequestEvent } from "../event/api-request.event";
import { ApiTransformerSymbol } from "../transformer/api";

const transformService = Injector.Get(TransformService);

/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeRequest(event: ApiRequestEvent) {
    let payload: any = event.httpEvent.request.payload;
    if (event.apiRequest.method === HttpMethod.GET || event.apiRequest.model === null || !isObject(payload)) {
        return ;
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
Injector.Get(EventDispatcherService).subscribe<ApiRequestEvent>(
    ApiEvents.BeforeRequest,
    onBeforeRequest,
    0,
    null,
    [ApiProcessorTag]
);
