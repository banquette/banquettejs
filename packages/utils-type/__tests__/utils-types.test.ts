import 'reflect-metadata';
import { ObservablePromise } from "@banquette/promise/observable-promise";
import { isPojo, isPrimitive, isPromiseLike, isObject, isUndefined } from "../src";

class Foo {}

let currentTestingFunction: Function = () => {};

const candidateValues: Record<string, any> = {
    '{}'                            : {},
    'Object.create(null)'           : Object.create(null),
    'function() {}'                 : function () {},
    '[]'                            : [],
    'new Date()'                    : new Date(),
    'true'                          : true,
    '"abc"'                         : "abc",
    '123'                           : 123,
    'RegExp'                        : new RegExp(/.*/),
    'null'                          : null,
    'undefined'                     : undefined,
    'Object.create({})'             : Object.create({}),
    'new Foo()'                     : new Foo(),
    '{constructor: Foo}'            : {constructor: Foo},
    '{constructor: "Foo"}'          : {constructor: "Foo"},
    '{ then: () => null }'          : { then: () => null },
    '{ then: 2 }'                   : { then: 2 },
    'ObservablePromise.Resolve()'   : ObservablePromise.Resolve(),
    'new Promise(...)'              : new Promise(() => {}),
    'function in obj'               : {num: 2, str: 'string', func: () => 2},
    'function in obj (deep)'        : {sub: {func: () => 2}}
};

function createTest(description: string, expected: boolean, ...args: any[]) {
    test(description, () => {
        expect(currentTestingFunction.apply(null, args)).toBe(expected);
    });
}

function createTestSuite(testFunction: Function, tests: Record<string, boolean>) {
    beforeAll(() => {
        currentTestingFunction = testFunction;
    });
    for (const key of Object.keys(tests)) {
        if (!isUndefined(candidateValues[key]) || key === 'undefined') {
            createTest(key, tests[key], candidateValues[key]);
        } else {
            throw `Candidate value "${key}" not found. Maybe update your test?`;
        }
    }
}

describe('isPromiseLike', () => {
    createTestSuite(isPromiseLike, {
        '{}'                            : false,
        'Object.create(null)'           : false,
        'function() {}'                 : false,
        '[]'                            : false,
        'new Date()'                    : false,
        'true'                          : false,
        '"abc"'                         : false,
        '123'                           : false,
        'RegExp'                        : false,
        'null'                          : false,
        'undefined'                     : false,
        'Object.create({})'             : false,
        'new Foo()'                     : false,
        '{constructor: Foo}'            : false,
        '{constructor: "Foo"}'          : false,
        '{ then: () => null }'          : false,
        '{ then: 2 }'                   : false,
        'ObservablePromise.Resolve()'   : true,
        'new Promise(...)'              : true,
        'function in obj'               : false,
        'function in obj (deep)'        : false
    });
});

describe('isPojo', () => {
    createTestSuite(isPojo, {
        '{}'                            : true,
        'Object.create(null)'           : true,
        'function() {}'                 : false,
        '[]'                            : false,
        'new Date()'                    : false,
        'true'                          : false,
        '"abc"'                         : false,
        '123'                           : false,
        'RegExp'                        : false,
        'null'                          : false,
        'undefined'                     : false,
        'Object.create({})'             : false,
        'new Foo()'                     : false,
        '{constructor: Foo}'            : false,
        '{constructor: "Foo"}'          : true,
        '{ then: () => null }'          : false,
        '{ then: 2 }'                   : true,
        'ObservablePromise.Resolve()'   : false,
        'new Promise(...)'              : false,
        'function in obj'               : false,
        'function in obj (deep)'        : false
    });
});

describe('isPojo (deep: false)', () => {
    createTestSuite((value: any) => isPojo(value, false), {
        '{}'                    : true,
        'Object.create(null)'   : true,
        'function() {}'         : false,
        '[]'                    : false,
        'new Date()'            : false,
        'true'                  : false,
        '"abc"'                 : false,
        '123'                   : false,
        'RegExp'                : false,
        'null'                  : false,
        'undefined'             : false,
        'Object.create({})'     : false,
        'new Foo()'             : false,
        '{constructor: Foo}'    : true,
        '{constructor: "Foo"}'  : true,
        '{ then: () => null }'  : true,
        '{ then: 2 }'           : true,
        'new Promise(...)'      : false,
        'function in obj'       : true,
        'function in obj (deep)': true
    });
});

describe('isObject', () => {
    createTestSuite(isObject, {
        '{}'                    : true,
        'Object.create(null)'   : true,
        'function() {}'         : false,
        '[]'                    : true,
        'new Date()'            : true,
        'true'                  : false,
        '"abc"'                 : false,
        '123'                   : false,
        'RegExp'                : true,
        'null'                  : false,
        'undefined'             : false,
        'Object.create({})'     : true,
        'new Foo()'             : true,
        '{constructor: Foo}'    : true,
        '{constructor: "Foo"}'  : true,
        '{ then: () => null }'  : true,
        '{ then: 2 }'           : true,
        'new Promise(...)'      : true,
        'function in obj'       : true,
        'function in obj (deep)': true
    });
});

describe('isPrimitive', () => {
    createTestSuite(isPrimitive, {
        '{}'                    : false,
        'Object.create(null)'   : false,
        'function() {}'         : false,
        '[]'                    : false,
        'new Date()'            : false,
        'true'                  : true,
        '"abc"'                 : true,
        '123'                   : true,
        'RegExp'                : false,
        'null'                  : true,
        'undefined'             : true,
        'Object.create({})'     : false,
        'new Foo()'             : false,
        '{constructor: Foo}'    : false,
        '{constructor: "Foo"}'  : false,
        '{ then: () => null }'  : false,
        '{ then: 2 }'           : false,
        'new Promise(...)'      : false,
        'function in obj'       : false,
        'function in obj (deep)': false
    });
});
