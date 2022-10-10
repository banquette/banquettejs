/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var constants = require('../constants.js');

var PayloadTypeRaw = Symbol('raw');
/**
 * An encoder doing nothing except for stopping the propagation, thus ensuring no other encoder runs after it.
 * If you plan to use this, please ensure your payload is already in a format compatible with XHR.
 */
function onBeforeRequest(event) {
    if (event.request.payloadType === PayloadTypeRaw) {
        event.stopPropagation();
    }
}
injector.Injector.Get(eventDispatcher_service.EventDispatcherService).subscribe(constants.HttpEvents.BeforeRequest, onBeforeRequest, 16, // Slightly higher priority so it is checked before the others
null, [constants.EncoderTag]);

exports.PayloadTypeRaw = PayloadTypeRaw;
