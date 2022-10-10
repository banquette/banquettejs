/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var constants = require('../constants.js');

var PayloadTypeFile = Symbol('file');
/**
 * Maybe encode the request payload into binary.
 */
function onBeforeRequest(event) {
    if (event.request.payloadType !== PayloadTypeFile) {
        return;
    }
    if (event.request.payload instanceof HTMLInputElement && !isNullOrUndefined.isNullOrUndefined(event.request.payload.files)) {
        if (event.request.payload.files.length > 1) {
            throw new usage_exception.UsageException('Only a single file can be uploaded by request using the PayloadTypeFile encoder. ' +
                'Use the PayloadFormData encoder to upload multiple files per request.');
        }
        event.request.payload = event.request.payload.files.item(0);
    }
    if (!(event.request.payload instanceof File)) {
        throw new usage_exception.UsageException('No file has been found in the payload.');
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
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constants.HttpEvents.BeforeRequest, onBeforeRequest, 0, null, [constants.EncoderTag]);

exports.PayloadTypeFile = PayloadTypeFile;
