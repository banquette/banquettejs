import { Injector } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { UsageException } from '@banquette/exception';
import { isNullOrUndefined } from '@banquette/utils-type';
import { EncoderTag, HttpEvents } from '../constants';
import { RequestEvent } from '../event/request.event';

export const PayloadTypeFile = Symbol('file');

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useFileEncoder = /**!PURE*/ (() => {
    return () => {
        /**
         * Maybe encode the request payload into binary.
         */
        function onBeforeRequest(event: RequestEvent) {
            if (event.request.payloadType !== PayloadTypeFile) {
                return;
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
            event.request.headers.set('Content-Type', `multipart/related;type=application/dicom;boundary=${boundary}`);
            event.request.headers.set('Accept', 'application/dicom+json');
            event.request.payload = new Blob([new Blob([postDataStart]), file, new Blob([postDataEnd])]);
        }

        Injector.Get(EventDispatcherService).subscribe<RequestEvent>(
            HttpEvents.BeforeRequest,
            onBeforeRequest,
            0,
            null,
            [EncoderTag]
        );
    };
})();
