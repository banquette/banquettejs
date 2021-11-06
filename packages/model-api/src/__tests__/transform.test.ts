import 'reflect-metadata';
import { Endpoint } from "../decorator/endpoint";
import { Injector } from "@banquette/dependency-injection";
import { HttpRequest, HttpMethod } from "@banquette/http";
import { Api } from "../decorator/api";
import { ModelApiService } from "../model-api.service";
import { GenericTransformerTest } from "../../../model/src/__tests__/__mocks__/generic-transformer-test";
import { isPromiseLike } from "@banquette/utils-type";
import { TransformService, TransformResult } from "@banquette/model";
import { ApiTransformerSymbol } from "../transformer/root/api";
import { TransformFailedException } from "../../../model/src/exception/transform-failed.exception";
import { UsageException } from "@banquette/exception";
import { EndpointNotFoundException } from "@banquette/api";

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

describe('ApiTransformer', () => {
    const transformService = Injector.Get(TransformService);

    test('Transform basic model', () => {
        @Endpoint('getOne', '/user/{ref}/{other}')
        class Foo {
            @Api()
            public ref: string = 'abc';
        }
        const result = transformService.transform(new Foo(), ApiTransformerSymbol, {endpoint: 'getOne', parameters: {ref: 'def', other: 'custom'}});
        expect(result).toBeInstanceOf(TransformResult);
        expect(result.ready).toBe(true);
        expect(result.result).toBeInstanceOf(HttpRequest);
        expect(result.result.url).toEqual('/user/def/custom');
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
        expect(result.result.url).toEqual('/user/def');
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
