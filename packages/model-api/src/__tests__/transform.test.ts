import 'reflect-metadata';
import { Endpoint } from "../decorator/endpoint";
import { Injector } from "@banquette/dependency-injection";
import { HttpRequest, HttpMethod } from "@banquette/http";
import { Api } from "../decorator/api";
import { ModelApiService } from "../model-api.service";
import { GenericTransformerTest } from "../../../model/src/__tests__/__mocks__/generic-transformer-test";
import { isPromiseLike } from "@banquette/utils-type";

const api = Injector.Get(ModelApiService);

describe('General mechanics', () => {
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
            url: '/get-one',
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
            url: '/user/abc/group1',
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
            url: '/user/def/custom',
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
            url: '/test',
            payload: {ref: 'def'}
        });
    });
});
