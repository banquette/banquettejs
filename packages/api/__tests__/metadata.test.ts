import 'reflect-metadata';
import { Injector } from "@banquette/dependency-injection/injector";
import { HttpMethod } from "@banquette/http/constants";
import { ResponseTypeJson } from "@banquette/http/decoder/json.decoder";
import { PayloadTypeJson } from "@banquette/http/encoder/json.encoder";
import { NotEmpty } from "@banquette/validation/type/not-empty";
import { EndpointNotFoundException, ApiEndpointStorage, ApiEndpoint } from "../src";
import { endpointParameterDefaults } from "./endpoint.test";

const metadata = Injector.Get(ApiEndpointStorage);

beforeEach(() => {
    metadata.clear();
});

test('Create endpoint multi arguments', () => {
    metadata.registerEndpoint('get_user', '/user/{id}');
    expect(metadata.getEndpoint('get_user')).toMatchObject({
        url: '/user/{id}',
        method: HttpMethod.GET,
        params: {},
        headers: {},
        payloadType: PayloadTypeJson,
        responseType: ResponseTypeJson
    });
});

test('Default endpoint parameter options', () => {
    metadata.registerEndpoint('get_user', '/user', HttpMethod.GET, {param: null});
    expect(metadata.getEndpoint('get_user')).toEqual(expect.objectContaining({
        params: expect.objectContaining({
            param: expect.objectContaining(endpointParameterDefaults),
        })
    }));
});

test('Create endpoint multi arguments with params', () => {
    metadata.registerEndpoint('get_user', '/user', HttpMethod.GET, {param: NotEmpty()});

    expect(metadata.getEndpoint('get_user')).toMatchObject({
        url: '/user',
        method: HttpMethod.GET,
        params: expect.objectContaining({
            param: expect.objectContaining({validator: expect.objectContaining({validate: expect.any(Function)})})
        }),
        headers: {}
    });
});

test('Create endpoint by object', () => {
    metadata.registerEndpoint({
        name: 'get_user',
        url: '/user/{id}'
    });
    expect(metadata.getEndpoint('get_user')).toMatchObject({
        url: '/user/{id}',
        method: HttpMethod.GET,
        params: {},
        headers: {},
        payloadType: PayloadTypeJson,
        responseType: ResponseTypeJson
    });
});

test('Register an existing endpoint', () => {
    const endpoint = new ApiEndpoint({
        url: '/user/{id}',
        params: {id: true}
    })
    metadata.registerEndpoint('get_user', endpoint);
    expect(metadata.getEndpoint('get_user')).toMatchObject({
        url: '/user/{id}',
        method: HttpMethod.GET,
        params: {id: {required: true}}
    });
});

test('Getting a non existing endpoint throw an error', () => {
    expect(() => metadata.getEndpoint('get_user')).toThrow(EndpointNotFoundException);
});

test('Remove an endpoint', () => {
    metadata.registerEndpoint('get_user', '/user/{id}');
    metadata.removeEndpoint('get_user');
    expect(() => metadata.getEndpoint('get_user')).toThrow(EndpointNotFoundException);
});

test('Removing a non existing endpoint does nothing', () => {
    metadata.registerEndpoint( 'get_user', '/user/{id}');
    metadata.removeEndpoint('non_existing');
    expect(metadata.getEndpoint('get_user')).toBeInstanceOf(Object);
});

test('Clear all endpoints', () => {
    metadata.registerEndpoint('a', '/a');
    metadata.registerEndpoint('b', '/b');
    metadata.clear();
    expect(() => metadata.getEndpoint('a')).toThrow(EndpointNotFoundException);
    expect(() => metadata.getEndpoint('b')).toThrow(EndpointNotFoundException);
});
