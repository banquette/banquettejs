import { Injector } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { ExceptionFactory, UsageException } from "@banquette/exception";
import { isArray } from "@banquette/utils-type/is-array";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
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
        event.request.headers.set('Content-Type', 'application/json');
    } catch (e) {
        throw new UsageException('Failed to encode request payload to JSON.', ExceptionFactory.EnsureException(e));
    }
}
Injector.Get(EventDispatcherService).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    null,
    [EncoderTag]
);
