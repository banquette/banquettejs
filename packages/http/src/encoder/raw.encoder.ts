import { Injector } from "@banquette/core";
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { EncoderTag, Events } from "../constants";
import { RequestEvent } from "../event/request.event";

export const PayloadTypeRaw = Symbol('raw');

/**
 * An encoder doing nothing.
 * If you plan to use this, please ensure your payload is already in a format compatible with XHR.
 */
function onBeforeRequest(event: RequestEvent) {
    if (event.request.payloadType !== PayloadTypeRaw) {
        event.stopPropagation();
    }
}
Injector.Get<EventDispatcherInterface>(EventDispatcherServiceSymbol).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    [EncoderTag]
);
