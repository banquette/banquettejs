import { Injector } from "@banquette/dependency-injection/injector";
import { EventDispatcherService } from "@banquette/event/event-dispatcher.service";
import { DecoderTag, HttpEvents } from "../constants";
import { BeforeResponseEvent } from "../event/before-response.event";

export const ResponseTypeRaw = Symbol('raw');
/**
 * A decoder doing nothing except for stopping the propagation, thus ensuring no other decoder runs after it.
 */
function onBeforeResponse(event: BeforeResponseEvent) {
    if (event.request.responseType === ResponseTypeRaw) {
        event.stopPropagation();
    }
}

Injector.Get(EventDispatcherService).subscribe<BeforeResponseEvent>(
    HttpEvents.BeforeResponse,
    onBeforeResponse,
    16, // Slightly higher priority so it is checked before the others
    null,
    [DecoderTag]
);
