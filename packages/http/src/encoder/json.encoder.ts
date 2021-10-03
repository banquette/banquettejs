import { Injector } from "@banquette/dependency-injection";
import { EventDispatcherInterface, EventDispatcherService } from "@banquette/event";
import { ExceptionFactory, UsageException } from "@banquette/exception";
import { isArray, isNullOrUndefined, isObject } from "@banquette/utils-type";
import { EncoderTag, Events } from "../constants";
import { RequestEvent } from "../event/request.event";

export const PayloadTypeJson = Symbol('json');

/**
 * Maybe encode the request payload into a JSON string.
 */
function onBeforeRequest(event: RequestEvent) {
    if (event.request.payloadType !== PayloadTypeJson || event.request.tryCount) {
        return;
    }
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
        throw new UsageException('Failed to encode request payload to JSON.', ExceptionFactory.EnsureException(e));
    }
}
Injector.Get<EventDispatcherInterface>(EventDispatcherService).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    [EncoderTag]
);
