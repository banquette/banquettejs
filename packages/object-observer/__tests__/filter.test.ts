import { ensureArray } from "@banquette/utils-type";
import { ObserverFactory } from "../src";
import { MutationType } from "../src/constant";
import { wrapObserver } from "./utils";

let obj: any = {};
const doAllTypesOfMutations = (proxy: any) => {
    proxy.name = 'new';
    proxy.foo = 'bar';
    delete proxy.foo;

    proxy.address.street = 's1_new';
    proxy.address.country = {name: 'new object'};
    proxy.address.country.name = 'new country';
};

beforeEach(() => {
    obj = {name: 'n1', address: {
        street: 's1',
        town: 't1',
        country: {name: 'c1'}
    }};
});

describe('Mutation type filters', () => {
    test('Unfiltered mutations.', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(obj));
        doAllTypesOfMutations(wrapper.proxy);
        wrapper.expect([
            [MutationType.Update, '/name', 'n1', 'new'],
            [MutationType.Insert, '/foo', undefined, 'bar'],
            [MutationType.Delete, '/foo', 'bar'],
            [MutationType.Update, '/address/street', 's1', 's1_new'],
            [MutationType.Update, '/address/country', {name: 'c1'}, {name: 'new object'}],
            [MutationType.Update, '/address/country/name', 'new object', 'new country'],
        ]);
    });

    test('Observe only update mutations.', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(obj), MutationType.Update);
        doAllTypesOfMutations(wrapper.proxy);
        wrapper.expect([
            [MutationType.Update, '/name', 'n1', 'new'],
            [MutationType.Update, '/address/street', 's1', 's1_new'],
            [MutationType.Update, '/address/country', {name: 'c1'}, {name: 'new object'}],
            [MutationType.Update, '/address/country/name', 'new object', 'new country'],
        ]);
    });

    test('Observe only delete mutations.', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(obj), MutationType.Delete);
        doAllTypesOfMutations(wrapper.proxy);
        wrapper.expect([
            [MutationType.Delete, '/foo', 'bar']
        ]);
    });

    test('Observe update and delete mutations.', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(obj), MutationType.Update | MutationType.Delete);
        doAllTypesOfMutations(wrapper.proxy);
        wrapper.expect([
            [MutationType.Update, '/name', 'n1', 'new'],
            [MutationType.Delete, '/foo', 'bar'],
            [MutationType.Update, '/address/street', 's1', 's1_new'],
            [MutationType.Update, '/address/country', {name: 'c1'}, {name: 'new object'}],
            [MutationType.Update, '/address/country/name', 'new object', 'new country'],
        ]);
    });
});

describe('Path mask', () => {
    const tests: any = [
        ['/name', [
            [MutationType.Update, '/name', 'n1', 'new'],
        ]],
        ['/address/*', [
            [MutationType.Update, '/address/street', 's1', 's1_new'],
            [MutationType.Update, '/address/country', {name: 'c1'}, {name: 'new object'}]
        ]],
        ['/address/**', [
            [MutationType.Update, '/address/street', 's1', 's1_new'],
            [MutationType.Update, '/address/country', {name: 'c1'}, {name: 'new object'}],
            [MutationType.Update, '/address/country/name', 'new object', 'new country'],
        ]],
        ['**/name', [
            [MutationType.Update, '/name', 'n1', 'new'],
            [MutationType.Update, '/address/country/name', 'new object', 'new country'],
        ]],
        ['/address/**/name', [
            [MutationType.Update, '/address/country/name', 'new object', 'new country'],
        ]]
    ];

    for (const testItem of tests) {
        test(ensureArray(testItem[0]).join(', '), () => {
            const wrapper = wrapObserver(ObserverFactory.Create(obj), null, testItem[0]);
            doAllTypesOfMutations(wrapper.proxy);
            wrapper.expect(testItem[1]);
        });
    }
});
