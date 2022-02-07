import 'reflect-metadata';
import { EndpointNotFoundException } from "@banquette/api/exception/endpoint-not-found.exception";
import { SharedConfiguration } from "@banquette/config/config/shared-configuration";
import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { XhrAdapter } from "@banquette/http/adapter/xhr.adapter";
import { HttpConfigurationSymbol } from "@banquette/http/config";
import { HttpMethod } from "@banquette/http/constants";
import { HttpConfigurationInterface } from "@banquette/http/http-configuration.interface";
import { HttpRequest } from "@banquette/http/http-request";
import { HttpRequestFactory } from "@banquette/http/http-request.factory";
import { HttpService } from "@banquette/http/http.service";
import { Relation } from "@banquette/model/decorator/relation";
import { TransformFailedException } from "@banquette/model/exception/transform-failed.exception";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { Model } from "@banquette/model/transformer/type/model";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { GenericTransformerTest } from "../../model/__tests__/__mocks__/generic-transformer-test";
import { Endpoint, Api, ModelApiService, ApiTransformerSymbol } from "../src";
import { buildTestUrl } from "../../http/__tests__/__mocks__/utils";
import '../../http/__tests__/__mocks__/xml-http-request.mock';

const http: HttpService = Injector.Get<HttpService>(HttpService);

const config = Injector.Get(SharedConfiguration);
config.modify<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    maxSimultaneousRequests: 5,
    requestRetryCount: 5,
    adapter: XhrAdapter
});

const api = Injector.Get(ModelApiService);

describe('ModelApiService', () => {
    test('Build basic request', () => {
        @Endpoint('getOne', '/get-one')
        class Foo {
            @Api()
            public ref: string = 'abc';
        }
        const request = api.buildRequest(new Foo(), 'getOne');
        expect(request).toBeInstanceOf(HttpRequest);
        expect(request).toMatchObject({
            method: HttpMethod.GET,
            staticUrl: '/get-one',
            payload: {ref: 'abc'}
        });
    });

    test('Attributes not visible by the Api are ignored', () => {
        @Endpoint('getOne', '/get-one')
        class Foo {
            @Api()
            public ref: string = 'abc';

            // Should be ignored because not marked as @Api()
            public ignored: string = 'hey!';
        }
        const request = api.buildRequest(new Foo(), 'getOne');
        expect(request).toMatchObject({
            payload: {ref: 'abc'}
        });
    });

    test('Build request having url parameters', () => {
        @Endpoint('getOne', '/user/{ref}/{group}')
        class Foo {
            @Api()
            public ref: string = 'abc';

            @Api()
            public group: string = 'group1';
        }
        const request = api.buildRequest(new Foo(), 'getOne');
        expect(request).toMatchObject({
            staticUrl: '/user/abc/group1',
            payload: {ref: 'abc', group: 'group1'}
        });
    });

    test('Build request with parameter override and custom parameter', () => {
        @Endpoint('getOne', '/user/{ref}/{other}')
        class Foo {
            @Api()
            public ref: string = 'abc';
        }
        const request = api.buildRequest(new Foo(), 'getOne', {ref: 'def', other: 'custom'});
        expect(request).toMatchObject({
            staticUrl: '/user/def/custom',
            payload: {ref: 'abc'}
        });
    });

    test('Build request with asynchronous transformer', async () => {
        @Endpoint('getOne', '/test')
        class Foo {
            @Api(GenericTransformerTest({delay: 100, transform: 'def'}))
            public ref: string = 'abc';
        }
        let request = api.buildRequest(new Foo(), 'getOne');
        expect(isPromiseLike(request)).toBe(true);
        request = await request;
        expect(request).toMatchObject({
            staticUrl: '/test',
            payload: {ref: 'def'}
        });
    });

    test('Build request with asynchronous transformer and deep relations', async () => {
        class Qux {
            @Api(GenericTransformerTest({delay: 100, transform: 'new quux'}))
            public quux: string = 'quux';
        }
        class Bar {
            @Api(GenericTransformerTest({transform: 'new baz'}))
            public baz: string = 'baz';

            @Api(Model())
            @Relation(Qux)
            public qux: Qux = new Qux();
        }
        @Endpoint('getOne', '/test')
        class Foo {
            @Api()
            public ref: string = 'abc';

            @Api(Model())
            @Relation(Bar)
            public bar: Bar = new Bar();
        }
        let request = api.buildRequest(new Foo(), 'getOne');
        expect(isPromiseLike(request)).toBe(true);
        request = await request;
        expect(request).toMatchObject({
            staticUrl: '/test',
            payload: {ref: 'abc', bar: {baz: 'new baz', qux: {quux: 'new quux'}}}
        });
    });
});

describe('ApiTransformer', () => {
    const transformService = Injector.Get(TransformService);

    describe('model => HttpRequest', () => {
        test('Transform basic model', () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Api()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), ApiTransformerSymbol, {
                endpoint: 'getOne',
                parameters: {ref: 'def', other: 'custom'}
            });
            expect(result).toBeInstanceOf(TransformResult);
            expect(result.ready).toBe(true);
            expect(result.result).toBeInstanceOf(HttpRequest);
            expect(result.result.staticUrl).toEqual('/user/def/custom');
            expect(result.result.method).toEqual(HttpMethod.GET);
            expect(result.result.payload).toMatchObject({ref: 'abc'});
        });

        test('Transform model with async property transformer', async () => {
            @Endpoint('getOne', '/user/{ref}')
            class Foo {
                @Api(GenericTransformerTest({delay: 100, transform: 'def'}))
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), ApiTransformerSymbol, {endpoint: 'getOne'});
            expect(result).toBeInstanceOf(TransformResult);
            expect(result.ready).toBe(false);
            await result.promise;
            expect(result.ready).toBe(true);
            expect(result.result).toBeInstanceOf(HttpRequest);
            expect(result.result.staticUrl).toEqual('/user/def');
            expect(result.result.method).toEqual(HttpMethod.GET);
            expect(result.result.payload).toMatchObject({ref: 'def'});
        });

        test('Missing extra', () => {
            @Endpoint('getOne', '/user/{ref}')
            class Foo {
                @Api()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), ApiTransformerSymbol);
            expect(result).toBeInstanceOf(TransformResult);
            expect(result.error).toBe(true);
            expect(result.errorDetail).toBeInstanceOf(TransformFailedException);
            expect((result.errorDetail as TransformFailedException).previous).toBeInstanceOf(UsageException);
        });

        test('Endpoint not found', () => {
            @Endpoint('getOne', '/user/{ref}')
            class Foo {
                @Api()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), ApiTransformerSymbol, {endpoint: 'invalid'});
            expect(result).toBeInstanceOf(TransformResult);
            expect(result.error).toBe(true);
            expect(result.errorDetail).toBeInstanceOf(TransformFailedException);
            expect((result.errorDetail as TransformFailedException).previous).toBeInstanceOf(EndpointNotFoundException);
        });
    });

    describe('HttpResponse => model', () => {
        test('Synchronous response', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Api()
                public ref: string = 'abc';
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def'})})
            }));
            await response.promise;
            const result = transformService.transformInverse(response, Foo, ApiTransformerSymbol);
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def'});
        });

        test('Asynchronous response', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Api()
                public ref: string = 'abc';
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def'})})
            }));
            const result = transformService.transformInverse(response, Foo, ApiTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def'});
        });

        test('Asynchronous response and transformer', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Api(GenericTransformerTest({delay: 100, inverse: 'def'}))
                public ref: string = 'abc';
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def'})})
            }));
            const result = transformService.transformInverse(response, Foo, ApiTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def'});
        });

        test('Asynchronous response and transformer with deep relations', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Qux {
                @Api(GenericTransformerTest({delay: 100, inverse: null}))
                public quux: string = 'quux';
            }
            class Bar {
                @Api(GenericTransformerTest({inverse: null}))
                public baz: string = 'baz';

                @Api(Model())
                @Relation(Qux)
                public qux: Qux = new Qux();
            }
            @Endpoint('getOne', '/test')
            class Foo {
                @Api()
                public ref: string = 'abc';

                @Api(Model())
                @Relation(Bar)
                public bar: Bar = new Bar();
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def', bar: {baz: 'new baz', qux: {quux: 'new quux'}}})})
            }));
            const result = transformService.transformInverse(response, Foo, ApiTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def', bar: {baz: 'new baz', qux: {quux: 'new quux'}}});
        });
    });
});
