/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { ExceptionFactory } from '@banquette/exception/exception.factory';
import { UsageException } from '@banquette/exception/usage.exception';
import { isArray } from '@banquette/utils-type/is-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isObject } from '@banquette/utils-type/is-object';
import { HttpEvents, EncoderTag } from '../constants.js';

var PayloadTypeJson = Symbol('json');
/**
 * Maybe encode the request payload into a JSON string.
 */
function onBeforeRequest(event) {
    if (event.request.payloadType !== PayloadTypeJson || event.request.tryCount) {
        return;
    }
    event.stopPropagation();
    if (!isNullOrUndefined(event.request.payload)) {
        if (!isArray(event.request.payload) && !isObject(event.request.payload)) {
            throw new UsageException('Invalid payload for JSON encoding. An object or array is expected.');
        }
        try {
            event.request.payload = JSON.stringify(event.request.payload);
        }
        catch (e) {
            throw new UsageException('Failed to encode request payload to JSON.', ExceptionFactory.EnsureException(e));
        }
    }
    else {
        event.request.payload = '{}';
    }
    event.request.headers.set('Content-Type', 'application/json');
}
Injector.Get(EventDispatcherService).subscribe(HttpEvents.BeforeRequest, onBeforeRequest, 0, null, [EncoderTag]);

export { PayloadTypeJson };
