/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { UsageException } from '@banquette/exception/usage.exception';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { HttpEvents, EncoderTag } from '../constants.js';

var PayloadTypeFile = Symbol('file');
/**
 * Maybe encode the request payload into binary.
 */
function onBeforeRequest(event) {
    if (event.request.payloadType !== PayloadTypeFile) {
        return;
    }
    if (event.request.payload instanceof HTMLInputElement && !isNullOrUndefined(event.request.payload.files)) {
        if (event.request.payload.files.length > 1) {
            throw new UsageException('Only a single file can be uploaded by request using the PayloadTypeFile encoder. ' +
                'Use the PayloadFormData encoder to upload multiple files per request.');
        }
        event.request.payload = event.request.payload.files.item(0);
    }
    if (!(event.request.payload instanceof File)) {
        throw new UsageException('No file has been found in the payload.');
    }
    event.stopPropagation();
    var file = event.request.payload;
    var boundary = Math.random().toString().substr(2);
    var dashes = '--';
    var crlf = "\r\n";
    var postDataStart = dashes + boundary + crlf + "Content-Disposition: form-data;" + "name=\"file\";" + "filename=\"" + encodeURIComponent(file.name) + "\"" + crlf + "Content-Type: " + file.type + crlf + crlf;
    var postDataEnd = crlf + dashes + boundary + dashes;
    event.request.headers.set('Content-Type', "multipart/related;type=application/dicom;boundary=".concat(boundary));
    event.request.headers.set('Accept', 'application/dicom+json');
    event.request.payload = new Blob([new Blob([postDataStart]), file, new Blob([postDataEnd])]);
}
Injector.Get(EventDispatcherService).subscribe(HttpEvents.BeforeRequest, onBeforeRequest, 0, null, [EncoderTag]);

export { PayloadTypeFile };
