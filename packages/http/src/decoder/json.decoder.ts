import { Injector } from "@banquette/dependency-injection";
import { EventDispatcherInterface, EventDispatcherService } from "@banquette/event";
import { ExceptionFactory } from "@banquette/exception";
import { trim } from "@banquette/utils-string/format/trim";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { DecoderTag, Events } from "../constants";
import { ResponseEvent } from "../event/response.event";
import { InvalidResponseTypeException } from "../exception/invalid-response-type.exception";
import { ResponseTypeAutoDetect } from "./auto-detect.decoder";

export const XSSIPrefix = ")]}'\n";
export const ResponseTypeJson = Symbol('json');

/**
 * Remove the XSSI prefix (if present).
 */
function stripXSSIPrefix(input: string): string {
    if (input.substring(0, XSSIPrefix.length) === XSSIPrefix) {
        return input.substring(XSSIPrefix.length);
    }
    return input;
}

function expectJson(event: ResponseEvent): boolean {
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
function onAfterRequest(event: ResponseEvent) {
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

Injector.Get<EventDispatcherInterface>(EventDispatcherService).subscribe<ResponseEvent>(
    Events.BeforeResponse,
    onAfterRequest,
    0,
    [DecoderTag]
);
