import { Injector } from '@banquette/dependency-injection';
import { EventDispatcherService } from '@banquette/event';
import { ExceptionFactory } from '@banquette/exception';
import { trim } from '@banquette/utils-string';
import { isString, isUndefined } from '@banquette/utils-type';
import { DecoderTag, HttpEvents } from '../constants';
import { BeforeResponseEvent } from '../event/before-response.event';
import { InvalidResponseTypeException } from '../exception/invalid-response-type.exception';
import { ResponseTypeAutoDetect } from './auto-detect.decoder';

export const XSSIPrefix = ")]}'\n";
export const ResponseTypeJson = Symbol('json');

// The assignation is so the /**!PURE*/ comment is kept when compiling.
// It's then replace by "/* @__PURE__ */" at the end of the build.
// If "/* @__PURE__ */" is set right here, it'll be striped out when building.
export const useJsonDecoder = /**!PURE*/ (() => {
    return () => {
        /**
         * Remove the XSSI prefix (if present).
         */
        function stripXSSIPrefix(input: string): string {
            if (input.substring(0, XSSIPrefix.length) === XSSIPrefix) {
                return input.substring(XSSIPrefix.length);
            }
            return input;
        }

        function expectJson(event: BeforeResponseEvent): boolean {
            if (event.request.responseType === ResponseTypeJson) {
                return true;
            }
            if (event.request.responseType !== ResponseTypeAutoDetect || !isString(event.response.response)) {
                return false;
            }
            if (event.response.responseType === 'json' || event.response.headers['content-type'] === 'application/json') {
                return true;
            }
            // If we have no information on the type of body, try to detect if it looks like JSON.
            if (!event.response.responseType && isUndefined(event.response.headers['content-type'])) {
                const body = trim(stripXSSIPrefix(event.response.response));
                return body[0] === '[' || body[0] === '{';
            }
            return false;
        }

        /**
         * Maybe decode the JSON response into an object.
         */
        function onBeforeResponse(event: BeforeResponseEvent) {
            if (!expectJson(event)) {
                return ;
            }
            // JSON is expected, so before doing anything, prevent other decoders from executing.
            event.stopPropagation();

            // An empty string or null results in an empty object.
            if (event.response.response === null || event.response.response === '') {
                event.response.response = {};
                return ;
            }
            if (!isString(event.response.response)) {
                throw new InvalidResponseTypeException(event.request.response, 'A string is expected for a JSON response.');
            }
            try {
                event.response.response = JSON.parse(trim(stripXSSIPrefix(event.response.response)));
            } catch (e) {
                throw new InvalidResponseTypeException(
                    event.request.response,
                    'The response is not a valid JSON string.',
                    ExceptionFactory.EnsureException(e)
                );
            }
        }

        Injector.Get(EventDispatcherService).subscribe<BeforeResponseEvent>(
            HttpEvents.BeforeResponse,
            onBeforeResponse,
            0,
            null,
            [DecoderTag]
        );
    };
})();
