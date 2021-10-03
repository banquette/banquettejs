import 'reflect-metadata';
import { noop } from "../src/utils";
import { GenericCallback, isPojo, isPromiseLike } from "../src";

class Foo {}

let currentTestingFunction: GenericCallback = noop;
function createTest(description: string, expected: boolean, ...args: any[]) {
    test(description, () => {
        expect(currentTestingFunction.apply(null, args)).toBe(expected);
    });
}

describe('isPromiseLike', () => {
    beforeAll(() => {
        currentTestingFunction = isPromiseLike;
    });
    createTest('{ then: () => null }', true, { then: () => null });
    createTest('null', false, null);
    createTest('{}', false, {});
});

describe('isPojo', () => {
    beforeAll(() => {
        currentTestingFunction = isPojo;
    });
    createTest('empty object',  true, {});
    createTest('Object.create(null)',  true, Object.create(null));
    createTest('function() {}', false, function() {});
    createTest('[]', false, []);
    createTest('new Date()', false, new Date());
    createTest('true', false, true);
    createTest('"abc"', false, "abc");
    createTest('123', false, 123);
    createTest('RegExp', false, new RegExp(/.*/));
    createTest('null', false, null);
    createTest('undefined', false, undefined);
    createTest('Object.create({})', false, Object.create({}));
    createTest('new Foo()', false, new Foo());
    createTest('{constructor: Foo}', false, {constructor: Foo});
    createTest('{constructor: "Foo"}', true, {constructor: "Foo"});
    createTest('function as value',  false, {
        num: 2,
        str: 'string',
        func: () =>  2
    });
    createTest('function as deep value',  false, {
        sub: {func: () => 2}
    });
    createTest('function as deep value (shallow check)',  true, {
        sub: {func: () => 2}
    }, false);
});
