import { Injector, UsageException } from "@banquette/core";
import { EventDispatcherInterface, EventDispatcherServiceSymbol } from "@banquette/event";
import { isNullOrUndefined } from "@banquette/utils";
import { EncoderTag, Events } from "../constants";
import { RequestEvent } from "../event/request.event";

export const PayloadTypeFile = Symbol('file');

/**
 * Maybe encode the request payload into binary.
 */
function onBeforeRequest(event: RequestEvent) {
    if (event.request.payloadType !== PayloadTypeFile) {
        return ;
    }
    if (event.request.payload instanceof HTMLInputElement && !isNullOrUndefined(event.request.payload.files)) {
        if (event.request.payload.files.length > 1) {
            throw new UsageException(
                'Only a single file can be uploaded by request using the PayloadTypeFile encoder. ' +
                'Use the PayloadFormData encoder to upload multiple files per request.'
            );
        }
        event.request.payload = event.request.payload.files.item(0);
    }
    if (!(event.request.payload instanceof File)) {
        throw new UsageException('No file has been found in the payload.');
    }
    event.stopPropagation();
    const file = event.request.payload as File;
    const boundary = Math.random().toString().substr(2);
    const dashes = '--';
    const crlf = "\r\n";
    const postDataStart = dashes + boundary + crlf + "Content-Disposition: form-data;" + "name=\"file\";" + "filename=\"" + encodeURIComponent(file.name) + "\"" + crlf + "Content-Type: " + file.type + crlf + crlf;
    const postDataEnd = crlf + dashes + boundary + dashes;
    event.request.headers['Content-Type'] = `multipart/related;type=application/dicom;boundary=${boundary}`;
    event.request.headers['Accept'] = 'application/dicom+json';
    event.request.payload = new Blob([new Blob([postDataStart]), file, new Blob([postDataEnd])]);
}
Injector.Get<EventDispatcherInterface>(EventDispatcherServiceSymbol).subscribe<RequestEvent>(
    Events.BeforeRequest,
    onBeforeRequest,
    0,
    [EncoderTag]
);
