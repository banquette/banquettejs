import 'reflect-metadata';
import { Injector, SharedConfiguration, SharedConfigurationSymbol, UsageException } from '@banquette/core';
import { EventDispatcherService, EventDispatcherServiceSymbol } from "@banquette/event";
import { ObservablePromise } from "@banquette/promise";
import { waitForDelay, waitForNextCycle } from "@banquette/utils";
import { XhrAdapter } from "../adapter/xhr.adapter";
import { HttpConfigurationSymbol } from "../config";
import { Events, HttpMethod } from "../constants";
import { ResponseTypeAutoDetect } from "../decoder/auto-detect.decoder";
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
import { HttpRequest } from "../http-request";
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
    maxSimultaneousRequests: 5,
    requestRetryCount: 5,
    adapter: XhrAdapter
});

/**
 * Shortcut methods
 */
describe('check the HttpRequest objects created by shortcut methods', () => {
    for (const method of ['get', 'delete']) {
        test(`${method}()`, ((_method) => {
            expect.assertions(1);
            return async () => {
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
                    await (http as any)[_method]('//test', {'x-test': 'test'}).promise;
                } catch (e) {
                }
            };
        })(method));
    }
    for (const method of ['post', 'put', 'patch']) {
        test(`${method}()`, ((_method) => {
            expect.assertions(1);
            return async () => {
                const unsubscribe = eventDispatcher.subscribe(Events.RequestQueued, (event: RequestEvent) => {
                    unsubscribe();
                    expect(event.request).toMatchObject(HttpRequestFactory.Create({
                        method: _method.toUpperCase() as HttpMethod,
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
            timeout: null,
            retry: null,
            retryDelay: null,
            priority: 0,
            withCredentials: false,
            mimeType: null
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
 * Payloads
 */
describe('payloads', () => {
    let lastPayload: any = null;
    let unsubscribeMethods: any[] = [];

    beforeAll(() => {
        unsubscribeMethods.push(eventDispatcher.subscribe(Events.BeforeRequest, (event: RequestEvent) => {
            lastPayload = event.request.payload;
        }, -1024 /* Very low priority and not tag to ensure being called last */));
    });

    afterAll(() => {
        for (const unsub of unsubscribeMethods) {
            unsub();
        }
    });

    test(`POST request with FormData`, async () => {
        expect.assertions(2);
        const payload = {'test': '2'};
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'PayloadAsJson'}),
            payload
        }));
        await response.promise;
        expect(lastPayload).toBeInstanceOf(FormData);
        const obj: Record<string, any>   = {};
        (lastPayload as FormData).forEach((value, key) => {
            obj[key] = value;
        });
        expect(obj).toStrictEqual(payload);
    });
});

/**
 * Responses
 */
describe('responses', () => {
    test(`JSON response (no XSSI prefix, no headers, no response type)`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson'})
        }));
        return expect(response.promise).resolves.toMatchObject({result: JSON.parse(TestResponses.ValidJson.content)});
    });
    test(`JSON response (with XSSI prefix and response type)`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', responseType: 'json', XSSISafe: true})
        }));
        return expect(response.promise).resolves.toMatchObject({result: JSON.parse(TestResponses.ValidJson.content)});
    });
    test(`JSON response (with XSSI prefix and Content-Type header)`, async () => {
        expect.assertions(2);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', headers: true, XSSISafe: true}),
            responseType: ResponseTypeAutoDetect
        }));
        await response.promise;
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
        expect(response.httpHeaders).toMatchObject({'content-type': 'application/json'});
    });
    test(`JSON response (with XSSI prefix and no info on the response type)`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', XSSISafe: true}),
            responseType: ResponseTypeAutoDetect
        }));
        await response.promise;
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
    });
    test(`Empty response (JSON expected)`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: '//test',
            responseType: ResponseTypeJson
        }));
        await expect(response.promise).resolves.toMatchObject({result: {}});
    });
    test(`HTML response`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidHtml'})
        }));
        await response.promise;
        expect(response.result).toStrictEqual(TestResponses.ValidHtml.content);
    });
    test(`HTML response (slow connection)`, async () => {
        expect.assertions(1);
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
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'InvalidJson'}),
            responseType: ResponseTypeAutoDetect
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(InvalidResponseTypeException)});
    });
    test(`success after 1 network failure`, async () => {
        expect.assertions(3);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 1, responseKey: 'ValidJson'})
        }));
        await response.promise;
        expect(response.httpStatusCode).toEqual(200);
        expect(response.isSuccess).toEqual(true);
        expect(response.result).toStrictEqual(JSON.parse(TestResponses.ValidJson.content));
    });
    test(`network error`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 6 /** The max number of tries is 5 */, responseKey: 'ValidJson'}),
            retryDelay: 0
        }));
        return expect(response.promise).rejects.toMatchObject({error: expect.any(NetworkException)});
    });
    test(`timeout reached`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 1000, timeout: 500, responseKey: 'ValidJson'})
        }));
        return expect(response.promise).rejects.toMatchObject({error: expect.any(RequestTimeoutException)});
    });
    test(`error HTTP status code`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ServerError'})
        }));
        return expect(response.promise).rejects.toMatchObject({
            error: expect.any(RequestException),
            result: {message: 'Test error.'}
        });
    });
    test(`cancel (immediate)`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'})
        }));
        response.request.cancel();
        return expect(response.promise).rejects.toMatchObject({error: expect.any(RequestCanceledException)});
    });
    test(`cancel (after delay)`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'})
        }));
        await waitForDelay(200);
        response.request.cancel();
        await expect(response.promise).rejects.toMatchObject({error: expect.any(RequestCanceledException)});
    });
    test(`invalid payload`,  () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'}),
            payloadType: PayloadTypeJson,
            payload: '<p>Test</p>'
        }));
        return expect(response.promise).rejects.toMatchObject({error: expect.any(UsageException)});
    });
    test(`timeout request doesn\'t retry`, async () => {
        expect.assertions(2);
        const start = (new Date()).getTime();
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({timeout: 100, delay: 1000})
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(RequestTimeoutException)});
        expect((new Date()).getTime() - start).toBeLessThan(150 /* meaning 1 try */);
    });
    test(`no retry for this request`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 1, responseKey: 'ValidJson'}),
            retry: 0
        }));
        await expect(response.promise).rejects.toMatchObject({error: expect.any(NetworkException)});
    });
    test(`retry delay is respected`, async () => {
        expect.assertions(3);
        const start = (new Date()).getTime();
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 1, delay: 0, responseKey: 'ValidJson'}),
            retry: 1,
            retryDelay: 300
        }));
        await expect(response.promise).resolves.toMatchObject({result: JSON.parse(TestResponses.ValidJson.content)});
        const delta = (new Date()).getTime() - start;
        expect(delta).toBeGreaterThan(300);
        expect(delta).toBeLessThan(350);
    });
    test(`retry auto increment exponentially`, async () => {
        expect.assertions(3);
        const start = (new Date()).getTime();
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 3, delay: 0, responseKey: 'ValidJson'}),
            retry: 4,
            retryDelay: 'auto'
        }));
        await expect(response.promise).resolves.toMatchObject({result: JSON.parse(TestResponses.ValidJson.content)});
        const delta = (new Date()).getTime() - start;
        expect(delta).toBeGreaterThan(1110 /* 0 + 10 + 100 + 1000 */);
        expect(delta).toBeLessThan(1200);
    });
});

/**
 * Simultaneous requests.
 */
describe('request queue', () => {
    const runningRequests: HttpRequest[] = [];
    let unsubscribeMethods: Array<() => void> = [];
    beforeEach(() => {
        unsubscribeMethods.push(eventDispatcher.subscribe(Events.BeforeRequest, (event: RequestEvent) => void runningRequests.push(event.request)));
        unsubscribeMethods.push(eventDispatcher.subscribe(Events.RequestSuccess, (event: RequestEvent) => void runningRequests.splice(runningRequests.indexOf(event.request), 1)));
    });

    afterEach(() => {
        for (const unsubscribeMethod of unsubscribeMethods) {
            unsubscribeMethod();
        }
    });

    test(`simultaneous requests limit is respected`, () => {
        expect.assertions(1);
        const promises: any[] = [];
        for (let i = 0; i < 7; ++i) {
            promises.push(http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 200, responseKey: 'ValidJson'})
            })).promise);
        }
        window.setTimeout(() => {
            expect(runningRequests.length).toEqual(config.get('http.maxSimultaneousRequests'));
        }, 50);
        return ObservablePromise.All(promises);
    });

    test(`priority is respected`, () => {
        expect.assertions(1);
        const promises: any[] = [];
        for (let i = 1; i <= 5; ++i) {
            promises.push(http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 200, responseKey: 'ValidJson'}),
                priority: 5 - i, // Inverse the priority so the requests are not added in the correct order,
                extras: {i}
            })).promise);
        }
        window.setTimeout(() => {
            expect(runningRequests.reduce((acc: string[], i) => {
                acc.push(i.extras.i);
                return acc;
            }, [])).toEqual([1, 2, 3, 4, 5]);
        }, 50);
        return ObservablePromise.All(promises);
    });
});

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
        expect.assertions(4);
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
        expect.assertions(5);
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
        expect.assertions(5);
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
