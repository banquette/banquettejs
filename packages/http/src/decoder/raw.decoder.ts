import { Injector } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { DecoderTag, HttpEvents } from '../constants';
import { BeforeResponseEvent } from '../event/before-response.event';

export const ResponseTypeRaw = Symbol('raw');

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useRawDecoder = /**!PURE*/ (() => {
    return () => {
        /**
         * A decoder doing nothing except for stopping the propagation, thus ensuring no other decoder runs after it.
         */
        function onBeforeResponse(event: BeforeResponseEvent) {
            if (event.request.responseType === ResponseTypeRaw) {
                event.stopPropagation();
            }
        }

        Injector.Get(EventDispatcherService).subscribe<BeforeResponseEvent>(
            HttpEvents.BeforeResponse,
            onBeforeResponse,
            16, // Slightly higher priority so it is checked before the others
            null,
            [DecoderTag]
        );
    };
})();
