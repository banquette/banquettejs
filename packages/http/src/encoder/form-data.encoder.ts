import { Injector, UsageException } from "@banquette/core";
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { isNullOrUndefined, isObject } from "@banquette/utils";
import { EncoderTag, Events } from "../constants";
import { RequestEvent } from "../event/request.event";

export const PayloadTypeFormData = Symbol('form-data');

/**
 * Maybe encode the request payload into a FormData object.
 */
function onBeforeRequest(event: RequestEvent) {
    if (event.request.payloadType !== PayloadTypeFormData) {
        return ;
    }
    debugger;
    event.stopPropagation();
    if (event.request.tryCount || isNullOrUndefined(event.request.payload)) {
        return ;
    }
    if (!isObject(event.request.payload)) {
        throw new UsageException('An object is expected as input to encode the payload as FormData.');
    }
    const formData = new FormData();
    for (const key of Object.keys(event.request.payload)) {
        const value = event.request.payload[key];
        // TODO: handle file name with the 3rd parameter (required in IE 10).
        formData.append(key, value);
    }
}
Injector.Get<EventDispatcherInterface>(EventDispatcherServiceSymbol).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    [EncoderTag]
);
