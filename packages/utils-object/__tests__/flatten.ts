import { createGenericTestSuite } from "../../__tests__/utils";
import { flattenObject } from "../src";

const BASE_OBJ = {
    foo: {
        bar: {
            a: 'a',
            b: {
                b1: 'b1',
                b2: 'b2',
                b3: 'b3',
            },
            c: 'c'
        },
        baz: 'baz'
    },
    second: 'second'
};

describe('flatten', () => {
    createGenericTestSuite(flattenObject, [
        [BASE_OBJ, {
            'foo.bar.a': 'a',
            'foo.bar.b.b1': 'b1',
            'foo.bar.b.b2': 'b2',
            'foo.bar.b.b3': 'b3',
            'foo.bar.c': 'c',
            'foo.baz': 'baz',
            'second': 'second'
        }]
    ], 'toStrictEqual');

    createGenericTestSuite(flattenObject, [
        [BASE_OBJ, [{
            'foo->bar->a': 'a',
            'foo->bar->b->b1': 'b1',
            'foo->bar->b->b2': 'b2',
            'foo->bar->b->b3': 'b3',
            'foo->bar->c': 'c',
            'foo->baz': 'baz',
            'second': 'second'
        }, '->']]
    ], 'toStrictEqual');

    createGenericTestSuite(flattenObject, [
        [BASE_OBJ, [{
            'foo_bar': {
                a: 'a',
                b: {
                    b1: 'b1',
                    b2: 'b2',
                    b3: 'b3'
                },
                c: 'c'
            },
            'foo_baz': 'baz',
            'second': 'second'
        }, '_', 1]]
    ], 'toStrictEqual');

    createGenericTestSuite(flattenObject, [
        [BASE_OBJ, [{
            'foo.bar.a': 'a',
            'foo.bar.b': {
                b1: 'b1',
                b2: 'b2',
                b3: 'b3'
            },
            'foo.bar.c': 'c',
            'foo.baz': 'baz',
            'second': 'second'
        }, '.', 2]]
    ], 'toStrictEqual');

    createGenericTestSuite(flattenObject, [
        [BASE_OBJ, [{
            'foo.bar': {a: 'a', c: 'c'},
            'foo.bar.b': {
                b1: 'b1',
                b2: 'b2',
                b3: 'b3'
            },
            'foo': {baz: 'baz'},
            'second': 'second'
        }, '.', -1]]
    ], 'toStrictEqual');

    createGenericTestSuite(flattenObject, [
        [BASE_OBJ, [{
            foo: {
                bar: {
                    a: 'a',
                    c: 'c'
                },
                baz: 'baz'
            },
            'foo.bar': {
                b: {
                    b1: 'b1',
                    b2: 'b2',
                    b3: 'b3'
                }
            },
            second: 'second'
        }, '.', -2]]
    ], 'toStrictEqual');
});
