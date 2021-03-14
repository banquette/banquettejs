import { Injector, UsageException } from "@banquette/core";
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { isArray, isNullOrUndefined, isObject } from "@banquette/utils";
import { EncoderTag, Events } from "../constants";
import { RequestEvent } from "../event/request.event";

export const PayloadTypeJson = Symbol('json');

/**
 * Maybe encode the request payload into a JSON string.
 */
function onBeforeRequest(event: RequestEvent) {
    if (event.request.payloadType === PayloadTypeJson && !event.request.tryCount) {
        event.stopPropagation();
        if (isNullOrUndefined(event.request.payload)) {
            event.request.payload = '{}';
            return ;
        }
        if (!isArray(event.request.payload) && !isObject(event.request.payload)) {
            throw new UsageException('Invalid payload for JSON encoding. An object or array is expected.');
        }
        try {
            event.request.payload = JSON.stringify(event.request.payload);
        } catch (e) {
            throw new UsageException('Failed to encode request payload to JSON.', e);
        }
    }
}
Injector.Get<EventDispatcherInterface>(EventDispatcherServiceSymbol).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    [EncoderTag]
);
