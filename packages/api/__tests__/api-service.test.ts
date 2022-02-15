import 'reflect-metadata';
import { Injector } from "@banquette/dependency-injection/injector";
import { HttpMethod } from "@banquette/http/constants";
import { HttpRequest } from "@banquette/http/http-request";
import { Http } from "@banquette/model/decorator/http";
import { Pojo } from "@banquette/model/decorator/pojo";
import { Relation } from "@banquette/model/decorator/relation";
import { Model } from "@banquette/model/transformer/type/model";
import { isArray } from "@banquette/utils-type/is-array";
import { isPromiseLike } from "@banquette/utils-type/is-promise-like";
import { buildTestUrl } from "../../http/__tests__/__mocks__/utils";
import '../../http/__tests__/__mocks__/xml-http-request.mock';
import { GenericTransformerTest } from "../../model/__tests__/__mocks__/generic-transformer-test";
import { ApiService } from "../src/api.service";
import { Endpoint } from "../src/decorator/endpoint";

const api = Injector.Get(ApiService);

describe('Basic use cases', () => {
    test('Build basic request', () => {
        @Endpoint('getOne', '/get-one')
        class Foo {
            @Http()
            public ref: string = 'abc';
        }

        const request = api.get('getOne', Foo).request;
        expect(request).toBeInstanceOf(HttpRequest);
        expect(request).toMatchObject({
            method: HttpMethod.GET,
            staticUrl: '/get-one'
        });
    });

    test('Attributes not visible by the Api are ignored', () => {
        @Endpoint('create', '/foo', HttpMethod.POST)
        class Foo {
            @Http()
            public ref: string = 'abc';

            // Should be ignored because not marked as @Api()
            public ignored: string = 'hey!';
        }

        const request = api.send(api.build()
            .endpoint('create')
            .model(Foo)
            .payload(new Foo())
            .getRequest()
        ).request;
        expect(request).toMatchObject({
            payload: {ref: 'abc'},
            method: HttpMethod.POST
        });
    });

    test('Local method takes priority over the endpoint', () => {
        @Endpoint('persist', '/foo', HttpMethod.POST)
        class Foo {
        }

        const request = api.send(api.build()
            .endpoint('persist')
            .model(Foo)
            .method(HttpMethod.PUT)
            .getRequest()
        ).request;
        expect(request).toMatchObject({method: HttpMethod.PUT});
    });

    test('The url cannot be overridden when using an endpoint', () => {
        @Endpoint('persist', '/foo', HttpMethod.POST)
        class Foo {
        }

        const request = api.send(api.build()
            .url('/modified')
            .endpoint('persist')
            .model(Foo)
            .method(HttpMethod.PUT)
            .getRequest()
        ).request;
        expect(request).toMatchObject({
            url: '/foo',
            method: HttpMethod.PUT
        });
    });

    test('Missing request parameters get their value from the payload', () => {
        @Endpoint('getOne', '/user/{ref}/{group}')
        class Foo {
            public ref: string = 'abc';
            public group: string = 'group1';
        }

        const request = api.send(api.build()
            .endpoint('getOne')
            .model(Foo)
            .payload(new Foo())
            .getRequest()
        ).request;
        expect(request).toMatchObject({
            staticUrl: '/user/abc/group1',
            payload: {ref: 'abc', group: 'group1'}
        });
    });

    test('The payload never override manually defined ones', () => {
        @Endpoint('getOne', '/user/{ref}/{group}')
        class Foo {
            public ref: string = 'abc';
            public group: string = 'group1';
        }

        const request = api.send(api.build()
            .endpoint('getOne')
            .model(Foo)
            .payload(new Foo())
            .params({ref: 'manualRef'})
            .getRequest()
        ).request;
        expect(request).toMatchObject({
            staticUrl: '/user/manualRef/group1',
            payload: {ref: 'abc', group: 'group1'}
        });
    });
});

describe('Built-in request listener', () => {
    test('Request with model having an asynchronous transformer', async () => {
        @Endpoint('getOne', '/test')
        class Foo {
            @Pojo(GenericTransformerTest({delay: 100, transform: 'def'}))
            public ref: string = 'abc';
        }
        let response = api.send(api.build()
            .endpoint('getOne')
            .model(Foo)
            .payload(new Foo())
            .getRequest()
        );
        expect(isPromiseLike(response.promise)).toBe(true);
        await response.promise;
        expect(response.request).toMatchObject({
            staticUrl: '/test',
            payload: JSON.stringify({ref: 'def'})
        });
    });

    test('Request with array of models each having an asynchronous transformer', async () => {
        @Endpoint('getOne', '/test')
        class Foo {
            @Pojo(GenericTransformerTest({delay: 100, transform: (value: string) => value + '_modified'}))
            public ref: string = 'abc';

            public constructor(ref: string) {
                this.ref = ref;
            }
        }
        let response = api.send(api.build()
            .endpoint('getOne')
            .model(Foo)
            .payload([new Foo('a'), new Foo('b')])
            .getRequest()
        );
        expect(isPromiseLike(response.promise)).toBe(true);
        await response.promise;
        expect(response.request).toMatchObject({
            staticUrl: '/test',
            payload: JSON.stringify([{ref: 'a_modified'}, {ref: 'b_modified'}])
        });
    });

    test('Url parameters are resolve before the payload is transformed', async () => {
        @Endpoint('getOne', '/test/{ref}', HttpMethod.POST)
        class Foo {
            @Pojo(GenericTransformerTest({transform: 'def'}))
            public ref: string = 'abc';
        }
        let response = api.send(api.build()
            .endpoint('getOne')
            .model(Foo)
            .payload(new Foo())
            .getRequest()
        );
        expect(isPromiseLike(response.promise)).toBe(true);
        await response.promise;
        expect(response.request).toMatchObject({
            staticUrl: '/test/abc', // {ref} is resolved to "abc" and not "def" because the parameters are extracted from the payload before the transformers are executed.
            method: HttpMethod.POST,
            payload: JSON.stringify({ref: 'def'})
        });
    });

    test('Build request with asynchronous transformer and deep relations', async () => {
        class Qux {
            @Pojo(GenericTransformerTest({delay: 100, transform: 'new quux'}))
            public quux: string = 'quux';
        }

        class Bar {
            @Pojo(GenericTransformerTest({transform: 'new baz'}))
            public baz: string = 'baz';

            @Pojo(Model())
            @Relation(Qux)
            public qux: Qux = new Qux();
        }

        @Endpoint('test', '/test')
        class Foo {
            @Pojo()
            public ref: string = 'abc';

            @Pojo(Model())
            @Relation(Bar)
            public bar: Bar = new Bar();
        }

        let request = api.send(api.build()
            .endpoint('test')
            .model(Foo)
            .payload(new Foo())
            .getRequest()
        );
        expect(isPromiseLike(request.promise)).toBe(true);
        await request.promise;
        expect(request.request).toMatchObject({
            staticUrl: '/test',
            payload: JSON.stringify({ref: 'abc', bar: {baz: 'new baz', qux: {quux: 'new quux'}}})
        });
    });
});

describe('Built-in response listener', () => {
    test('Single model response', async () => {
        @Endpoint('getOne', buildTestUrl({url: '/test', serverResponse: JSON.stringify({ref: 'serverRef'})}))
        class Foo {
            @Pojo()
            public ref: string = 'abc';
        }
        let response = api.send(api.build()
            .endpoint('getOne')
            .model(Foo)
            .getRequest()
        );
        expect(isPromiseLike(response.promise)).toBe(true);
        await response.promise;
        expect(response.result).toBeInstanceOf(Foo);
        expect(response.result).toMatchObject({ref: 'serverRef'});
    });

    test('Array of models response', async () => {
        @Endpoint('getMultiple', buildTestUrl({url: '/test', serverResponse: JSON.stringify([{ref: 'a'}, {ref: 'b'}])}))
        class Foo {
            @Pojo()
            public ref: string = 'abc';
        }
        let response = api.send(api.build()
            .endpoint('getMultiple')
            .model(Foo)
            .getRequest()
        );
        expect(isPromiseLike(response.promise)).toBe(true);
        await response.promise;
        expect(isArray(response.result)).toBe(true);
        expect(response.result).toMatchObject(expect.arrayContaining([expect.any(Foo), expect.any(Foo)]));
        expect(response.result).toMatchObject(
            expect.arrayContaining([
                expect.objectContaining({ref: 'a'}),
                expect.objectContaining({ref: 'b'})
            ])
        );
    });
});
