/**
 * The role of this event listener is to check if the ApiRequest is configured to handle models
 * and if so, transform the response into models.
 *
 * This will only work if the response only contains the model or an array of models.
 *
 * If you have a more specific use case this listener cannot handle, simply subscribe to the event
 * yourself with a higher priority and stop the propagation.
 */
import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { ModelMetadataService } from "@banquette/model/model-metadata.service";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { PojoTransformerSymbol } from "@banquette/model/transformer/type/root/pojo";
import { isObject } from "@banquette/utils-type/is-object";
import { ApiProcessorTag, ApiEvents } from "../constant";
import { ApiResponseEvent } from "../event/api-response.event";

const transformService = Injector.Get(TransformService);
const modelMetadata = Injector.Get(ModelMetadataService);

/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onBeforeResponse(event: ApiResponseEvent) {
    let responseBody: any = event.httpEvent.response.response;
    if (event.apiRequest.model === null || !isObject(responseBody) || !Object.keys(responseBody).length) {
        return ;
    }
    const ctor = modelMetadata.resolveAlias(event.apiRequest.model);
    const transformResult = transformService.transformInverse(responseBody, ctor, PojoTransformerSymbol);
    if (transformResult.promise !== null) {
        return transformResult.promise.then(() => {
            event.httpEvent.response.response = transformResult.result;
        });
    } else {
        event.httpEvent.response.response = transformResult.result;
    }
}
Injector.Get(EventDispatcherService).subscribe<ApiResponseEvent>(
    ApiEvents.BeforeResponse,
    onBeforeResponse,
    0,
    null,
    [ApiProcessorTag]
);
