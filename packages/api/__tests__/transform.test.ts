import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { XhrAdapter, HttpConfigurationSymbol, HttpMethod, HttpConfigurationInterface, HttpRequest, HttpRequestFactory, HttpService } from "@banquette/http";
import { Relation, TransformFailedException, TransformResult, TransformService, Model } from "@banquette/model";
import { buildTestUrl } from "../../http/__tests__/__mocks__/utils";
import '../../http/__tests__/__mocks__/xml-http-request.mock';
import { GenericTransformerTest } from "../../model/__tests__/__mocks__/generic-transformer-test";
import { EndpointNotFoundException, HttpTransformerSymbol, ApiTransformerSymbol, ApiService, Endpoint } from "../src";
import { Api } from "../src/decorator/api";
import { Http } from "../src/decorator/http";

const http: HttpService = Injector.Get(HttpService);
const api = Injector.Get(ApiService);

const config = Injector.Get(ConfigurationService);
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

            // Should be ignored because not marked as @Http()
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

describe('ApiTransformer', () => {
    const transformService = Injector.Get(TransformService);

    test('Attributes not visible by the Api are ignored', () => {
        @Endpoint('getOne', '/get-one')
        class Foo {
            @Api()
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
                @Api()
                public ref: string = 'abc';
            }

            const result = transformService.transform(new Foo(), ApiTransformerSymbol, {
                endpoint: 'getOne',
                parameters: {ref: 'def', other: 'custom'}
            });
            expect(result).toBeInstanceOf(TransformResult);
            expect(result.ready).toBe(true);
            expect(result.result).toMatchObject({ref: 'abc'});
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
            expect(result.result).toMatchObject({ref: 'def'});
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
            const result = transformService.transformInverse(response.result, Foo, ApiTransformerSymbol);
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
            await response.promise;
            const result = transformService.transformInverse(response.result, Foo, ApiTransformerSymbol);
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
            const result = transformService.transformInverse(response.result, Foo, ApiTransformerSymbol);
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
            await response.promise;
            const result = transformService.transformInverse(response.result, Foo, ApiTransformerSymbol);
            await result.promise;
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({ref: 'def', bar: {baz: 'new baz', qux: {quux: 'new quux'}}});
        });
    });
});
