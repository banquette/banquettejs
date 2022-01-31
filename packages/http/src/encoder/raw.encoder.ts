import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { EncoderTag, Events } from "../constants";
import { RequestEvent } from "../event/request.event";

export const PayloadTypeRaw = Symbol('raw');

/**
 * An encoder doing nothing except for stopping the propagation, thus ensuring no other encoder runs after it.
 * If you plan to use this, please ensure your payload is already in a format compatible with XHR.
 */
function onBeforeRequest(event: RequestEvent) {
    if (event.request.payloadType === PayloadTypeRaw) {
        event.stopPropagation();
    }
}
Injector.Get(EventDispatcherService).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    16, // Slightly higher priority so it is checked before the others
    null,
    [EncoderTag]
);
