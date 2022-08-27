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
        ['Default configuration', [BASE_OBJ], {
            'foo.bar.a': 'a',
            'foo.bar.b.b1': 'b1',
            'foo.bar.b.b2': 'b2',
            'foo.bar.b.b3': 'b3',
            'foo.bar.c': 'c',
            'foo.baz': 'baz',
            'second': 'second'
        }],
        ['With "->" as separator', [BASE_OBJ, '->'], {
            'foo->bar->a': 'a',
            'foo->bar->b->b1': 'b1',
            'foo->bar->b->b2': 'b2',
            'foo->bar->b->b3': 'b3',
            'foo->bar->c': 'c',
            'foo->baz': 'baz',
            'second': 'second'
        }],
        ['With "_" as separator and max depth from root of 1', [BASE_OBJ, '_', 1], {
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
        }],
        ['With "." as separator and max depth from root of 2', [BASE_OBJ, '.', 2], {
            'foo.bar.a': 'a',
            'foo.bar.b': {
                b1: 'b1',
                b2: 'b2',
                b3: 'b3'
            },
            'foo.bar.c': 'c',
            'foo.baz': 'baz',
            'second': 'second'
        }],
        ['With "_" as separator and total max depth of 1', [BASE_OBJ, '.', -1], {
            'foo.bar': {a: 'a', c: 'c'},
            'foo.bar.b': {
                b1: 'b1',
                b2: 'b2',
                b3: 'b3'
            },
            'foo': {baz: 'baz'},
            'second': 'second'
        }],
        ['With "." as separator and max total max depth of 2', [BASE_OBJ, '.', -2], {
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
        }]
    ], 'toStrictEqual');
});
