import 'reflect-metadata';
import { Injector, SharedConfiguration, SharedConfigurationSymbol, UsageException } from '@banquette/core';
import { EventDispatcherService, EventDispatcherServiceSymbol } from "@banquette/event";
import { waitForDelay, waitForNextCycle } from "@banquette/utils";
import { XhrAdapter } from "../adapter/xhr.adapter";
import { HttpConfigurationSymbol } from "../config";
import { Events, HttpMethod, ResponseTypeAutoDetect } from "../constants";
import { ResponseTypeJson } from "../decoder/json.decoder";
import { PayloadTypeFormData } from "../encoder/form-data.encoder";
import { PayloadTypeJson } from "../encoder/json.encoder";
import { RequestEvent } from "../event/request.event";
import { InvalidResponseTypeException } from "../exception/invalid-response-type.exception";
import { NetworkException } from "../exception/network.exception";
import { RequestCanceledException } from "../exception/request-canceled.exception";
import { RequestTimeoutException } from "../exception/request-timeout.exception";
import { RequestException } from "../exception/request.exception";
import { HttpConfigurationInterface } from "../http-configuration.interface";
import { HttpRequestBuilder } from "../http-request.builder";
import { HttpRequestFactory } from "../http-request.factory";
import { HttpService, HttpServiceSymbol } from "../http.service";

import { TestResponses } from "./__mocks__/test-responses";
import { buildTestUrl } from "./__mocks__/utils";
import './__mocks__/xml-http-request.mock';

const eventDispatcher: EventDispatcherService = Injector.Get(EventDispatcherServiceSymbol);
const http: HttpService = Injector.Get<HttpService>(HttpServiceSymbol);

const config: SharedConfiguration = Injector.Get<SharedConfiguration>(SharedConfigurationSymbol);
config.modifyConfig<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    adapter: XhrAdapter
});

/**
 * Shortcut methods
 */
describe('check the HttpRequest objects created by shortcut methods', () => {
    test(`get()`, async () => {
        const unsubscribe = eventDispatcher.subscribe(Events.RequestQueued, (event: RequestEvent) => {
            unsubscribe();
            expect(event.request).toMatchObject(HttpRequestFactory.Create({
                method: HttpMethod.GET,
                url: '//test',
                payload: null,
                responseType: ResponseTypeJson,
                headers: {'x-test': 'test'}
            }));
        });
        try {
            await http.get('//test', {'x-test': 'test'}).promise;
        } catch (e) { }
    });
    for (const method of ['post', 'put']) {
        test(`${method}()`, ((_method) => {
            return async () => {
                const unsubscribe = eventDispatcher.subscribe(Events.RequestQueued, (event: RequestEvent) => {
                    unsubscribe();
                    expect(event.request).toMatchObject(HttpRequestFactory.Create({
                        method: _method === 'post' ? HttpMethod.POST : HttpMethod.PUT,
                        url: '//test',
                        payload: {value: 2},
                        responseType: ResponseTypeJson,
                        headers: {'x-test': 'test'}
                    }));
                });
                try {
                    await (http as any)[_method]('//test', {value: 2}, {'x-test': 'test'}).promise;
                } catch (e) { }
            };
        })(method));
    }
    test(`delete()`, async () => {
        const unsubscribe = eventDispatcher.subscribe(Events.RequestQueued, (event: RequestEvent) => {
            unsubscribe();
            expect(event.request).toMatchObject(HttpRequestFactory.Create({
                method: HttpMethod.DELETE,
                url: '//test',
                payload: null,
                responseType: ResponseTypeJson,
                headers: {'x-test': 'test'}
            }));
        });
        try {
            await http.delete('//test', {'x-test': 'test'}).promise;
        } catch (e) { }
    });
});

/**
 * Factory
 */
describe('requests forgery', () => {
    test('factory default values', () => {
        expect(HttpRequestFactory.Create({
            url: '//test',
        })).toStrictEqual(HttpRequestFactory.Create({
            method: HttpMethod.GET,
            url: '//test',
            payloadType: PayloadTypeFormData,
            responseType: ResponseTypeAutoDetect,
            headers: {},
            payload: null,
            extras: {},
            timeout: 30000
        }));
    });

    test('builder default request', () => {
        const requestBuilder = new HttpRequestBuilder();
        expect(requestBuilder.url('//test').getRequest()).toMatchObject(HttpRequestFactory.Create({url: '//test'}));
    });

    test('builder with missing url', () => {
        const requestBuilder = new HttpRequestBuilder();
        expect(() => {
            requestBuilder.getRequest();
        }).toThrow(UsageException);
    });
});

/**
 * Responses
 */
describe('responses', () => {
    test(`JSON response (no XSSI prefix, no headers, no response type)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson'})
        }));
        await response.promise;
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
    });
    test(`JSON response (with XSSI prefix and response type)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', responseType: 'json', XSSISafe: true})
        }));
        await response.promise;
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
    });
    test(`JSON response (with XSSI prefix and Content-Type header)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', headers: true, XSSISafe: true}),
            responseType: ResponseTypeAutoDetect
        }));
        await response.promise;
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
        expect(response.httpHeaders).toMatchObject({'content-type': 'application/json'});
    });
    test(`JSON response (with XSSI prefix and no info on the response type)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', XSSISafe: true}),
            responseType: ResponseTypeAutoDetect
        }));
        await response.promise;
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
    });
    test(`Empty response (JSON expected)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: '//test',
            responseType: ResponseTypeJson
        }));
        await expect(response.promise).resolves.toMatchObject({result: {}});
    });
    test(`HTML response`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidHtml'})
        }));
        await response.promise;
        expect(response.result).toStrictEqual(TestResponses.ValidHtml.content);
    });
    test(`HTML response (slow connection)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 1000, timeout: 1500, responseKey: 'ValidHtml'})
        }));
        await response.promise;
        expect(response.result).toStrictEqual(TestResponses.ValidHtml.content);
    });
});

/**
 * Requests failures
 */
describe('failures', () => {
    test(`invalid JSON response`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'InvalidJson'}),
            responseType: ResponseTypeAutoDetect
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(InvalidResponseTypeException)});
    });
    test(`success after 1 network failure`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 1, responseKey: 'ValidJson'})
        }));
        await response.promise;
        expect(response.httpStatusCode).toEqual(200);
        expect(response.isSuccess).toEqual(true);
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
    });
    test(`network error`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 5 /** The max number of tries is 3 */, responseKey: 'ValidJson'})
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(NetworkException)});
    });
    test(`timeout reached`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 1000, timeout: 500, responseKey: 'ValidJson'})
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(RequestTimeoutException)});
    });
    test(`error HTTP status code`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ServerError'})
        }));
        await expect(response.promise).rejects.toMatchObject({
            error: expect.any(RequestException),
            result: {message: 'Test error.'}
        });
    });
    test(`cancel (immediate)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'})
        }));
        response.request.cancel();
        await expect(response.promise).rejects.toMatchObject({error: expect.any(RequestCanceledException)});
    });
    test(`cancel (after delay)`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'})
        }));
        await waitForDelay(200);
        response.request.cancel();
        await expect(response.promise).rejects.toMatchObject({error: expect.any(RequestCanceledException)});
    });
    test(`invalid payload`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'}),
            payloadType: PayloadTypeJson,
            payload: '<p>Test</p>'
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(UsageException)});
    });
})

/**
 * Events
 */
describe('events dispatching', () => {
    beforeEach(() => {
        // Remove existing spies.
        jest.restoreAllMocks();
        jest.spyOn(eventDispatcher, 'dispatch');
    });

    test(`basic working request`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson'})
        }));
        await waitForNextCycle();
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.RequestQueued, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.BeforeRequest, expect.any(Object));
        await response.promise;
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.BeforeResponse, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.RequestSuccess, expect.any(Object));
    });

    test(`request failing 2 times`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 2, responseKey: 'ValidJson'})
        }));
        await response.promise;
        expect(eventDispatcher.dispatch).toHaveBeenCalledTimes(8); // RequestQueued x3 + RequestSuccess + BeforeRequest x3 + BeforeResponse
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.RequestQueued, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.BeforeRequest, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.BeforeResponse, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.RequestSuccess, expect.any(Object));
    });

    test(`request failing definitely`, async () => {
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ServerError'})
        }));
        try {
            await response.promise;
        } catch (e) { /* Nothing to do, that's not the point of this test */ }
        expect(eventDispatcher.dispatch).toHaveBeenCalledTimes(4); // RequestQueued + RequestFailure + BeforeRequest + BeforeResponse
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.RequestQueued, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.BeforeRequest, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.BeforeResponse, expect.any(Object));
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(Events.RequestFailure, expect.any(Object));
    });
});
