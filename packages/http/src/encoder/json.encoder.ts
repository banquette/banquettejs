import { Injector } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { ExceptionFactory, UsageException } from '@banquette/exception';
import { isArray, isNullOrUndefined, isObject } from '@banquette/utils-type';
import { EncoderTag, HttpEvents } from '../constants';
import { RequestEvent } from '../event/request.event';

export const PayloadTypeJson = Symbol('json');

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useJsonEncoder = /**!PURE*/ (() => {
    return () => {
        /**
         * Maybe encode the request payload into a JSON string.
         */
        function onBeforeRequest(event: RequestEvent) {
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
                } catch (e) {
                    throw new UsageException('Failed to encode request payload to JSON.', ExceptionFactory.EnsureException(e));
                }
            } else {
                event.request.payload = '{}';
            }
            event.request.headers.set('Content-Type', 'application/json');
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
