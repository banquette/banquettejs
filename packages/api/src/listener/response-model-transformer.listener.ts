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
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { ApiProcessorTag, ApiEvents } from "../constant";
import { ApiResponseEvent } from "../event/api-response.event";
import { ApiTransformerSymbol } from "../transformer/api";

const transformService = Injector.Get(TransformService);
const modelMetadata = Injector.Get(ModelMetadataService);

/**
 * Transform models fround in the payload into Pojo.
 *
 * @throws ModelAliasNotFoundException
 */
function onRequestSuccess(event: ApiResponseEvent) {
    let responseBody: any = event.httpEvent.response.result;
    if (event.apiRequest.model === null || !isObject(responseBody) || !Object.keys(responseBody).length) {
        return ;
    }
    const handleResult = () => {
        if (transformResult.error) {
            event.httpEvent.response.error = transformResult.errorDetail;
        } else {
            event.httpEvent.response.result = transformResult.result;
        }
    };
    const ctor = modelMetadata.resolveAlias(isArray(event.apiRequest.model) ? event.apiRequest.model[1] : event.apiRequest.model);
    const transformResult = transformService.transformInverse(responseBody, ctor, ApiTransformerSymbol);
    if (transformResult.promise !== null) {
        return transformResult.promise.then(handleResult);
    } else {
        handleResult();
    }
}
Injector.Get(EventDispatcherService).subscribe<ApiResponseEvent>(
    ApiEvents.RequestSuccess,
    onRequestSuccess,
    0,
    null,
    [ApiProcessorTag]
);
