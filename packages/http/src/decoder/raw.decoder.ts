import { Injector } from '@banquette/core';
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { DecoderTag, Events } from "../constants";
import { ResponseEvent } from "../event/response.event";

export const ResponseTypeRaw = Symbol('raw');
/**
 * A decoder doing nothing except for stopping the propagation, thus ensuring no other decoder runs after it.
 */
function onAfterRequest(event: ResponseEvent) {
    if (event.request.responseType === ResponseTypeRaw) {
        event.stopPropagation();
    }
}

Injector.Get<EventDispatcherInterface>(EventDispatcherServiceSymbol).subscribe<ResponseEvent>(
    Events.BeforeResponse,
    onAfterRequest,
    16, // Slightly higher priority so it is checked before the others
    [DecoderTag]
);
