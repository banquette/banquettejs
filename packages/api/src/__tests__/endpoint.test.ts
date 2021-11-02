import 'reflect-metadata';
import { ApiEndpoint } from "../api-endpoint";
import { HttpMethod, PayloadTypeJson, ResponseTypeJson } from "@banquette/http";
import { ApiEndpointParameterOptions } from "../api-endpoint.options";
import { Exception } from "@banquette/exception";
import { Constructor, isString } from "@banquette/utils-type";
import { NotEmpty, Min } from "@banquette/validation";
import { MissingRequiredParameterException } from "../exception/missing-required-parameter.exception";
import { ApiEndpointParameterInterface } from "../api-endpoint-parameter.interface";
import { InvalidParameterException } from "../exception/invalid-parameter.exception";

export const endpointParameterDefaults = {
    required: false,
    url: false,
    defaultValue: undefined,
    validator: null
};

describe('Creation', () => {
    test('All default values', () => {
        const endpoint = new ApiEndpoint('/test');
        expect(endpoint).toMatchObject({
            url: '/test',
            method: HttpMethod.GET,
            parameters: {},
            headers: {},
            payloadType: PayloadTypeJson,
            responseType: ResponseTypeJson
        });
    });

    describe('Url normalization', () => {
        const tests: Record<string, string> = {
            '': '/',
            'test': '//test',
            '/test': '/test',
            'http://test.com/': 'http://test.com/',
            'https://test.com//': 'https://test.com/',
            'http:///test.com//': 'http://test.com/',
            'ftp://test.com/': 'ftp://test.com/',
            'https://user:pass@test.com/': 'https://user:pass@test.com/',
            '/user/{id}': '/user/{id}',
            'user//{id}': '//user/{id}',
            'http://test.com/a/{b}{c}////{d}/': 'http://test.com/a/{b}{c}/{d}/',
            'https://test.com/a?param=value&path=%2Fpath%2Ftest': 'https://test.com/a?param=value&path=%2Fpath%2Ftest',
        };
        for (const testItem of Object.keys(tests)) {
            test(testItem, () => {
                const endpoint = new ApiEndpoint(testItem);
                expect(endpoint).toMatchObject({
                    url: tests[testItem]
                });
            });
        }
    });
});

describe('Parameters handling', () => {
    test('Parameters default configuration', () => {
        const endpoint = new ApiEndpoint({
            url: '/test',
            parameters: {a: null}
        });
        expect(endpoint.parameters.a).toMatchObject(endpointParameterDefaults);
    });

    test('Parameter defined with validator shortcut', () => {
        const validator = NotEmpty();
        const endpoint = new ApiEndpoint({
            url: '/test',
            parameters: {a: validator}
        });
        expect(endpoint.parameters.a).toMatchObject({validator: validator});
    });

    test('Parameter defined with required shortcut', () => {
        const endpoint = new ApiEndpoint({
            url: '/test',
            parameters: {a: true}
        });
        expect(endpoint.parameters.a).toMatchObject({required: true});
    });

    test('Parameter found in the url is required by default', () => {
        const endpoint = new ApiEndpoint({
            url: '/test/{a}',
            parameters: {a: null}
        });
        expect(endpoint.parameters.a).toMatchObject({required: true});
    });

    test('Parameter not found in the url is not required by default', () => {
        const endpoint = new ApiEndpoint({
            url: '/test',
            parameters: {a: null}
        });
        expect(endpoint.parameters.a).toMatchObject({required: false});
    });

    test('Parameter with specific configuration values defined', () => {
        const endpoint = new ApiEndpoint({
            url: '/test',
            parameters: {a: {
                required: true,
                defaultValue: 'default'
            }}
        });
        expect(endpoint.parameters.a).toMatchObject({
            required: true,
            url: false,
            defaultValue: 'default',
            validator: null
        });
    });

    describe('Parameter in url are detected', () => {
        const tests: Record<string, string[]> = {
            '/user/{id}': ['id'],
            '/user/{a}/{b}': ['a', 'b'],
            '/user/{a-b}': ['a-b'],
            '/{a}{b}': ['a', 'b'],
            '/test/{{a}}': ['{a}']
        };
        for (const testItem of Object.keys(tests)) {
            test(testItem, () => {
                const parameters: any = tests[testItem].reduce((r: any, i) => {
                    r[i] = null;
                    return r;
                }, {});
                const configs: Record<string, ApiEndpointParameterOptions> = {};
                const expected: Record<string, Partial<ApiEndpointParameterInterface>> = {};
                for (const param of tests[testItem]) {
                    configs[param] = null;
                    expected[param] = {url: true};
                }
                const endpoint = new ApiEndpoint({
                    url: testItem,
                    parameters
                });
                expect(endpoint.parameters).toMatchObject(expected);
            });
        }
    });

    const tests: Record<string /* describe */, Record<string /* test */, [
        string|Constructor<Exception>,               // Expected result url or error
        Record<string, ApiEndpointParameterOptions>, // Params config
        Record<string, any>                          // Params values
    ]>> = {
        'Valid cases': {
            '/test': ['/test', {}, {}],
            '/user/{id}': ['/user/2', {id: null}, {id: 2}],
            '/test-{a}-{b}/{01c}': ['/test-a-b/c', {a: null, b: null, '01c': {defaultValue: 'c'}}, {a: 'a', b: 'b'}],
            '/test/{a}/{b}/test': ['/test/a/b/test?c=', {a: null, b: null, c: null}, {a: 'a', b: 'b', c: ''}],
            '/wildcard/{defined}': ['/wildcard/d?a=a&b=%F0%9F%98%8B', {defined: null, '*': null}, {defined: 'd', a: 'a', b: '😋'}],
            '/url-params-encoding/{a}': ['/url-params-encoding/%F0%9F%98%8B', {a: null}, {a: '😋'}],
            'http://test.com/a?param=value&path=%2Fpath%2Ftest': ['http://test.com/a?param=value&path=%2Fpath%2Ftest&new=new%20value', {'*': null}, {new: 'new value'}],
            'https://test.com/test?existing=a&other=2': ['https://test.com/test?existing=b&other=2', {existing: null}, {existing: 'b'}]
        },
        'Invalid cases': {
            '/user/{id}': [MissingRequiredParameterException, {id: true}, {}],
            '/user-min/{id}': [InvalidParameterException, {id: Min(5)}, {id: 2}],
        }
    };

    for (const group of Object.keys(tests)) {
        describe(group, () => {
            const groupTests = tests[group];
            for (const testItem of Object.keys(groupTests)) {
                test(testItem, () => {
                    const testData = groupTests[testItem];
                    const endpoint = new ApiEndpoint({
                        url: testItem,
                        parameters: testData[1]
                    });
                    if (isString(testData[0])) {
                        expect(endpoint.buildUrl(testData[2])).toEqual(testData[0]);
                    } else {
                        expect(() => endpoint.buildUrl(testData[2])).toThrow(testData[0]);
                    }
                });
            }
        });
    }
});
