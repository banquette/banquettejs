import { Injector } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { isNullOrUndefined } from "@banquette/utils-type/is-null-or-undefined";
import { isObject } from "@banquette/utils-type/is-object";
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
    event.stopPropagation();
    if (event.request.tryCount || isNullOrUndefined(event.request.payload)) {
        return ;
    }
    if (!isObject(event.request.payload)) {
        throw new UsageException('An object is expected as input to encode the payload as FormData.');
    }
    if (event.request.payload instanceof HTMLFormElement) {
        event.request.payload = new FormData(event.request.payload);
    } else if (event.request.payload instanceof HTMLInputElement && !isNullOrUndefined(event.request.payload.files)) {
        const formData = new FormData();
        for (let i = 0; i < event.request.payload.files.length; ++i) {
            const file: File|null = event.request.payload.files.item(i);
            if (file) {
                formData.append(`files${event.request.payload.multiple ? '[]' : ''}`, file, file.name);
            }
        }
        event.request.payload = formData;
    } else {
        const formData = new FormData();
        for (const key of Object.keys(event.request.payload)) {
            const value = event.request.payload[key];
            formData.append(key, value);
        }
        event.request.payload = formData;
    }
}
Injector.Get(EventDispatcherService).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    null,
    [EncoderTag]
);
