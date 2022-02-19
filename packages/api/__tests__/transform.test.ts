import 'reflect-metadata';
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
import { Http } from "../src/decorator/http";
import { Relation } from "@banquette/model/decorator/relation";
import { TransformFailedException } from "@banquette/model/exception/transform-failed.exception";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { Model } from "@banquette/model/transformer/type/model";
import { buildTestUrl } from "../../http/__tests__/__mocks__/utils";
import '../../http/__tests__/__mocks__/xml-http-request.mock';
import { GenericTransformerTest } from "../../model/__tests__/__mocks__/generic-transformer-test";
import { EndpointNotFoundException, HttpTransformerSymbol } from "../src";
import { ApiService, Endpoint } from "../src";

const http: HttpService = Injector.Get(HttpService);
const api = Injector.Get(ApiService);

const config = Injector.Get(SharedConfiguration);
config.modify<HttpConfigurationInterface>(HttpConfigurationSymbol, {
    maxSimultaneousRequests: 5,
    requestRetryCount: 5,
    adapter: XhrAdapter
});

describe('HttpTransformer', () => {
    const transformService = Injector.Get(TransformService);

    test('Attributes not visible by the Api are ignored', () => {
        @Endpoint('getOne', '/get-one')
        class Foo {
            @Http()
            public ref: string = 'abc';

            // Should be ignored because not marked as @Api()
            public ignored: string = 'hey!';
        }
        const request = api.post('getOne', Foo, new Foo()).request;
        expect(request).toMatchObject({
            payload: {ref: 'abc'}
        });
    });

    describe('model => HttpRequest', () => {
        test('Transform basic model', () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Http()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), HttpTransformerSymbol, {
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
                @Http(GenericTransformerTest({delay: 100, transform: 'def'}))
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), HttpTransformerSymbol, {endpoint: 'getOne'});
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
                @Http()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), HttpTransformerSymbol);
            expect(result).toBeInstanceOf(TransformResult);
            expect(result.error).toBe(true);
            expect(result.errorDetail).toBeInstanceOf(TransformFailedException);
            expect((result.errorDetail as TransformFailedException).previous).toBeInstanceOf(UsageException);
        });

        test('Endpoint not found', () => {
            @Endpoint('getOne', '/user/{ref}')
            class Foo {
                @Http()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), HttpTransformerSymbol, {endpoint: 'invalid'});
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
                @Http()
                public ref: string = 'abc';
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def'})})
            }));
            await response.promise;
            const result = transformService.transformInverse(response, Foo, HttpTransformerSymbol);
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def'});
        });

        test('Asynchronous response', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Http()
                public ref: string = 'abc';
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def'})})
            }));
            const result = transformService.transformInverse(response, Foo, HttpTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def'});
        });

        test('Asynchronous response and transformer', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Foo {
                @Http(GenericTransformerTest({delay: 100, inverse: 'def'}))
                public ref: string = 'abc';
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def'})})
            }));
            const result = transformService.transformInverse(response, Foo, HttpTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def'});
        });

        test('Asynchronous response and transformer with deep relations', async () => {
            @Endpoint('getOne', '/user/{ref}/{other}')
            class Qux {
                @Http(GenericTransformerTest({delay: 100, inverse: null}))
                public quux: string = 'quux';
            }
            class Bar {
                @Http(GenericTransformerTest({inverse: null}))
                public baz: string = 'baz';

                @Http(Model())
                @Relation(Qux)
                public qux: Qux = new Qux();
            }
            @Endpoint('getOne', '/test')
            class Foo {
                @Http()
                public ref: string = 'abc';

                @Http(Model())
                @Relation(Bar)
                public bar: Bar = new Bar();
            }
            const response = http.send(HttpRequestFactory.Create({
                url: buildTestUrl({delay: 50, serverResponse: JSON.stringify({ref: 'def', bar: {baz: 'new baz', qux: {quux: 'new quux'}}})})
            }));
            const result = transformService.transformInverse(response, Foo, HttpTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def', bar: {baz: 'new baz', qux: {quux: 'new quux'}}});
        });
    });
});
