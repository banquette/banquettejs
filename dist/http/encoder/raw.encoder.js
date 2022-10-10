/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { HttpEvents, EncoderTag } from '../constants.js';

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
Injector.Get(EventDispatcherService).subscribe(HttpEvents.BeforeRequest, onBeforeRequest, 16, // Slightly higher priority so it is checked before the others
null, [EncoderTag]);

export { PayloadTypeRaw };
