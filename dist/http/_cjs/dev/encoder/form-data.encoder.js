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
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var constants = require('../constants.js');

var PayloadTypeFormData = Symbol('form-data');
function buildFormData(formData, data, parentKey) {
    if (isObject.isObject(data) && !(data instanceof Date) && !(data instanceof File)) {
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            buildFormData(formData, data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
        }
    }
    else if (parentKey && data instanceof File) {
        formData.append(parentKey, data, data.name);
    }
    else if (parentKey) {
        formData.append(parentKey, !isNullOrUndefined.isNullOrUndefined(data) ? data : '');
    }
}
/**
 * Maybe encode the request payload into a FormData object.
 */
function onBeforeRequest(event) {
    if (event.request.payloadType !== PayloadTypeFormData) {
        return;
    }
    var formData = new FormData();
    var payload = event.request.payload;
    event.stopPropagation();
    if (event.request.tryCount || isNullOrUndefined.isNullOrUndefined(payload)) {
        return;
    }
    if (!isObject.isObject(event.request.payload)) {
        throw new usage_exception.UsageException('An object is expected as input to encode the payload as FormData.');
    }
    if (payload instanceof HTMLFormElement) {
        formData = new FormData(payload);
    }
    else if (payload instanceof HTMLInputElement && payload.type !== 'file') {
        var filesArray = payload.files !== null ? Array.from(payload.files) : [];
        for (var _i = 0, filesArray_1 = filesArray; _i < filesArray_1.length; _i++) {
            var file = filesArray_1[_i];
            formData.append("file".concat(payload.multiple ? 's[]' : ''), file, file.name);
        }
    }
    else {
        buildFormData(formData, payload);
    }
    event.request.payload = formData;
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constants.HttpEvents.BeforeRequest, onBeforeRequest, 0, null, [constants.EncoderTag]);

exports.PayloadTypeFormData = PayloadTypeFormData;
