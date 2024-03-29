import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { EventDispatcherService } from "@banquette/event";
import { UsageException } from "@banquette/exception";
import { ObservablePromise } from "@banquette/promise";
import { makeReassignable, waitForDelay, waitForNextCycle } from "@banquette/utils-misc";
import { removeFromObject } from "../../__tests__/utils";
import {
    XhrAdapter,
    HttpConfigurationSymbol,
    HttpEvents,
    HttpMethod,
    ResponseTypeAutoDetect,
    ResponseTypeJson,
    PayloadTypeFormData,
    PayloadTypeJson,
    RequestEvent,
    InvalidResponseTypeException,
    NetworkException,
    RequestCanceledException,
    RequestTimeoutException,
    RequestException,
    HttpConfigurationInterface,
    HttpRequest,
    HttpRequestBuilder,
    HttpRequestFactory,
    HttpService,
    UrlParameterType
} from "../src";
import './__mocks__/network-watcher.mock';

import { TestResponses } from "./__mocks__/test-responses";
import { buildTestUrl } from "./__mocks__/utils";
import './__mocks__/xml-http-request.mock';

const eventDispatcher: EventDispatcherService = Injector.Get(EventDispatcherService);
const http: HttpService = Injector.Get(HttpService);

const config: ConfigurationService = Injector.Get(ConfigurationService);
config.modify<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    maxSimultaneousRequests: 5,
    requestRetryCount: 5,
    adapter: XhrAdapter
});

/**
 * Url
 */
describe('url', () => {
    test('default parameter type is auto', () => {
        const request = (new HttpRequestBuilder())
            .url('/user/{id}/{other}')
            .params({id: 2, other: 'test'})
            .getRequest();
        expect(request.params.id.type).toEqual(UrlParameterType.Auto);
    });

    test('the url can take parameters', () => {
        const request = (new HttpRequestBuilder())
            .url('/user/{id}/{other}')
            .params({id: 2, other: 'test'})
            .getRequest();
        expect(request.staticUrl).toEqual('/user/2/test');
    });

    test('an url parameter with no value is untouched', () => {
        const request = (new HttpRequestBuilder())
            .url('/user/{id}/{other}')
            .params({id: 2})
            .getRequest();
        expect(request.staticUrl).toEqual('/user/2/{other}');
    });

    test('a parameter not found in the url is added to the query string', () => {
        const request = (new HttpRequestBuilder())
            .url('/user/{id}')
            .params({id: 2, other: 'test'})
            .getRequest();
        expect(request.staticUrl).toEqual('/user/2?other=test');
    });

    test('parameters can be added to an existing query string', () => {
        const request = (new HttpRequestBuilder())
            .url('/user-{id}?id=254&final=tochange&existing=value')
            .params({id: 2, other: 'test', final: 'final'})
            .getRequest();
        expect(request.staticUrl).toEqual('/user-2?id=254&final=final&existing=value&other=test');
    });

    test('a parameter forced in the url with no placeholder is ignored', () => {
        const request = (new HttpRequestBuilder())
            .url('/user')
            .params({id: 2}, UrlParameterType.Url)
            .getRequest();
        expect(request.staticUrl).toEqual('/user');
    });

    test('a parameter forced in the query doesn\'t touch matching placeholders in the url', () => {
        const request = (new HttpRequestBuilder())
            .url('/user/{id}')
            .params({id: 2}, UrlParameterType.Query)
            .getRequest();
        expect(request.staticUrl).toEqual('/user/{id}?id=2');
    });

    test('url parameters are normalized to string', () => {
        const request = (new HttpRequestBuilder())
            .url('/user/{id}')
            .params({
                num: 2,
                boolTrue: true,
                boolFalse: false,
                str: 'value'
            }).getRequest();
        expect(request.params).toMatchObject({
            num: {value: '2'},
            boolTrue: {value: 'true'},
            boolFalse: {value: 'false'},
            str: {value: 'value'}
        });
    });
});

/**
 * Shortcut methods
 */
describe('check the HttpRequest objects created by shortcut methods', () => {
    for (const method of ['get', 'delete']) {
        test(`${method}()`, ((_method) => {
            expect.assertions(1);
            return async () => {
                const unsubscribe = eventDispatcher.subscribe(HttpEvents.RequestQueued, (event: RequestEvent) => {
                    unsubscribe();
                    expect(removeFromObject(event.request, ['id', 'cancelCallback', 'response'])).toMatchObject(removeFromObject(HttpRequestFactory.Create({
                        method: method.toUpperCase() as HttpMethod,
                        url: '//test',
                        payload: null,
                        responseType: ResponseTypeAutoDetect,
                        params: {'foo': 'bar'}
                    }), ['id', 'cancelCallback', 'response']));
                });
                await (http as any)[_method]('//test', {'foo': 'bar'}).promise;
            };
        })(method));
    }
    for (const method of ['post', 'put', 'patch']) {
        test(`${method}()`, ((_method) => {
            expect.assertions(1);
            return async () => {
                const unsubscribe = eventDispatcher.subscribe(HttpEvents.RequestQueued, (event: RequestEvent) => {
                    unsubscribe();
                    expect(removeFromObject(event.request, ['id', 'cancelCallback'])).toMatchObject(removeFromObject(HttpRequestFactory.Create({
                        method: _method.toUpperCase() as HttpMethod,
                        url: '//test',
                        payload: {value: 2},
                        responseType: ResponseTypeAutoDetect,
                        params: {'foo': 'bar'}
                    }), ['id', 'cancelCallback']));
                });
                try {
                    await (http as any)[_method]('//test', {value: 2}, {'foo': 'bar'}).promise;
                } catch (e) { }
            };
        })(method));
    }
});

/**
 * Factory
 */
describe('requests forgery', () => {
    // The id is incremental so it must be removed to compare the requests.
    function removeId(input: any) {
        delete input.id;
        return input;
    }

    test('factory default values', () => {
        expect(removeId(HttpRequestFactory.Create({
            url: '//test',
        }))).toStrictEqual(removeId(HttpRequestFactory.Create({
            method: HttpMethod.GET,
            url: '//test',
            params: {},
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
            mimeType: null,
            tags: []
        })));
    });

    test('builder default request', () => {
        const requestBuilder = new HttpRequestBuilder();
        expect(removeId(requestBuilder.url('//test').getRequest())).toMatchObject(removeId(HttpRequestFactory.Create({url: '//test'})));
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
        unsubscribeMethods.push(eventDispatcher.subscribe(HttpEvents.BeforeRequest, (event: RequestEvent) => {
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

    test(`request payload is encoded`, async () => {
        const payload = {'test': '2'};
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'PayloadAsJson'}),
            payload,
            payloadType: PayloadTypeJson
        }));
        await response.promise;
        expect(lastPayload).toStrictEqual(JSON.stringify(payload));
    });

    test(`tagged request payload is still encoded`, async () => {
        const payload = {'test': '2'};
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'PayloadAsJson'}),
            payload,
            payloadType: PayloadTypeJson,
            tags: [Symbol('custom-tag')]
        }));
        await response.promise;
        expect(lastPayload).toStrictEqual(JSON.stringify(payload));
    });

    test(`circular reference in the payload`, async () => {
        const group: any = {name: 'A', items: []};
        const payload = {items: [{name: 'I1', group}, {name: 'I2', group}]};
        group.items = payload.items;
        const response = http.send(HttpRequestFactory.Create({
            url: '//test',
            payload,
            payloadType: PayloadTypeFormData,
            tags: [Symbol('custom-tag')]
        }));
        await response.promise;
        expect(response.isSuccess).toEqual(true);
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
        return expect(response.promise).resolves.toMatchObject(makeReassignable({result: JSON.parse(TestResponses.ValidJson.content)}));
    });
    test(`JSON response (with XSSI prefix and response type)`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson', responseType: 'json', XSSISafe: true})
        }));
        return expect(response.promise).resolves.toMatchObject(makeReassignable({result: JSON.parse(TestResponses.ValidJson.content)}));
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
        await expect(response.promise).resolves.toMatchObject(makeReassignable({result: {}}));
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
        await expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(InvalidResponseTypeException)}));
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
        return expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(NetworkException)}));
    });
    test(`timeout reached`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 1000, timeout: 500, responseKey: 'ValidJson'})
        }));
        return expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(RequestTimeoutException)}));
    });
    test(`error HTTP status code`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ServerError'})
        }));
        return expect(response.promise).rejects.toMatchObject(makeReassignable({
            error: expect.any(RequestException),
            result: {message: 'Test error.'}
        }));
    });
    test(`cancel (immediate)`, () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'})
        }));
        response.request.cancel();
        return expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(RequestCanceledException)}));
    });
    test(`cancel (after delay)`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'})
        }));
        await waitForDelay(200);
        response.request.cancel();
        await expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(RequestCanceledException)}));
    });
    test(`invalid payload`,  () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({delay: 500, responseKey: 'ServerError'}),
            payloadType: PayloadTypeJson,
            payload: '<p>Test</p>'
        }));
        return expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(UsageException)}));
    });
    test(`timeout request doesn\'t retry`, async () => {
        expect.assertions(2);
        const start = (new Date()).getTime();
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({timeout: 100, delay: 1000})
        }));
        await expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(RequestTimeoutException)}));
        expect((new Date()).getTime() - start).toBeLessThan(250 /* meaning 1 try */);
    });
    test(`no retry for this request`, async () => {
        expect.assertions(1);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 1, responseKey: 'ValidJson'}),
            retry: 0
        }));
        await expect(response.promise).rejects.toMatchObject(makeReassignable({error: expect.any(NetworkException)}));
    });
    test(`retry delay is respected`, async () => {
        expect.assertions(3);
        const start = (new Date()).getTime();
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 1, delay: 0, responseKey: 'ValidJson'}),
            retry: 1,
            retryDelay: 300
        }));
        await expect(response.promise).resolves.toMatchObject(makeReassignable({result: JSON.parse(TestResponses.ValidJson.content)}));
        const delta = (new Date()).getTime() - start;
        expect(delta).toBeGreaterThan(300);
        expect(delta).toBeLessThan(500);
    });
    test(`retry auto increment exponentially`, async () => {
        expect.assertions(3);
        const start = (new Date()).getTime();
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 3, delay: 0, responseKey: 'ValidJson'}),
            retry: 4,
            retryDelay: 'auto'
        }));
        await expect(response.promise).resolves.toMatchObject(makeReassignable({result: JSON.parse(TestResponses.ValidJson.content)}));
        const delta = (new Date()).getTime() - start;
        expect(delta).toBeGreaterThan(1110 /* 0 + 10 + 100 + 1000 */);
        expect(delta).toBeLessThan(1500);
    });
});

/**
 * Simultaneous requests.
 */
describe('request queue', () => {
    const runningRequests: HttpRequest[] = [];
    let unsubscribeMethods: Array<() => void> = [];
    beforeEach(() => {
        unsubscribeMethods.push(eventDispatcher.subscribe(HttpEvents.BeforeRequest, (event: RequestEvent) => void runningRequests.push(event.request)));
        unsubscribeMethods.push(eventDispatcher.subscribe(HttpEvents.RequestSuccess, (event: RequestEvent) => void runningRequests.splice(runningRequests.indexOf(event.request), 1)));
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
        setTimeout(() => {
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
        setTimeout(() => {
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
        jest.spyOn(eventDispatcher, 'dispatch');
    });

    test(`basic working request`, async () => {
        expect.assertions(4);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({responseKey: 'ValidJson'})
        }));
        await waitForNextCycle();
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.RequestQueued, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.BeforeRequest, expect.any(Object), true, []);
        await response.promise;
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.BeforeResponse, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.RequestSuccess, expect.any(Object), true, []);
    });

    test(`request failing 2 times`, async () => {
        expect.assertions(5);
        const response = http.send(HttpRequestFactory.Create({
            url: buildTestUrl({networkError: 2, responseKey: 'ValidJson'})
        }));
        await response.promise;
        expect(eventDispatcher.dispatch).toHaveBeenCalledTimes(12); // RequestQueued x3 + RequestSuccess + BeforeRequest x3 + BeforeResponse + x4 NetworkAvailabilityChange (from mock)
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.RequestQueued, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.BeforeRequest, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.BeforeResponse, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.RequestSuccess, expect.any(Object), true, []);
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
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.RequestQueued, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.BeforeRequest, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.BeforeResponse, expect.any(Object), true, []);
        expect(eventDispatcher.dispatch).toHaveBeenCalledWith(HttpEvents.RequestFailure, expect.any(Object), true, []);
    });
});


/**
 * Headers
 */
describe('headers', () => {
    let request: HttpRequest;

    beforeEach(() => {
        request = HttpRequestFactory.Create({url: ''});
    });

    test('add and get a header', () => {
        request.headers.set('content-type', 'text/plain');
        expect(request.headers.get('content-type')).toEqual('text/plain');
    });

    test('get an non existing header', () => {
        expect(request.headers.get('non-existing')).toBeNull();
        expect(request.headers.get('non-existing', 'default value')).toEqual('default value');
    });

    describe('name normalization', () => {
        const tests: Record<string, string> = {
            'x-aPi-key': 'X-Api-Key',
            'www-authenticate': 'WWW-Authenticate',
            'content-type': 'Content-Type',
            'content  type': 'Content-Type',
            tcn: 'TCN',
            te: 'TE',
            DNS: 'Dns'
        };
        for (const item of Object.keys(tests)) {
            test(item, () => {
                request.headers.empty();
                request.headers.set(item, 'test');
                expect(request.headers.all()).toStrictEqual({
                    [tests[item]]: 'test'
                });
            });
        }
    });
});
