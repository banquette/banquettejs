import { Injector } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { EncoderTag, HttpEvents } from '../constants';
import { RequestEvent } from '../event/request.event';

export const PayloadTypeRaw = Symbol('raw');

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useRawEncoder = /**!PURE*/ (() => {
    return () => {
        /**
         * An encoder doing nothing except for stopping the propagation, thus ensuring no other encoder runs after it.
         * If you plan to use this, please ensure your payload is already in a format compatible with XHR.
         */
        function onBeforeRequest(event: RequestEvent) {
            if (event.request.payloadType === PayloadTypeRaw) {
                event.stopPropagation();
            }
        }

        Injector.Get(EventDispatcherService).subscribe<RequestEvent>(
            HttpEvents.BeforeRequest,
            onBeforeRequest,
            16, // Slightly higher priority so it is checked before the others
            null,
            [EncoderTag]
        );
    };
})();
