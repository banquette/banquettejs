import { createGenericTestSuite } from "../../__tests__/utils";
import { arrayUnique, arrayIntersect } from "../src";

/**
 * Tests are TODO.
 */

describe('arrayUnique', () => {
    createGenericTestSuite(arrayUnique, [
        [['a', 'b', 'c', 'b'], ['a', 'b', 'c']],
        [['a', 'b', 'b', 'b'], ['a', 'b']],
    ], 'toStrictEqual');
});

describe('arrayIntersect', () => {
    createGenericTestSuite(arrayIntersect, [
        /*     array1            expected        array2         */
        [['a', 'b', 'c', 'b'], [['a', 'c'], ['d', 'e', 'a', 'c']]],
    ], 'toStrictEqual');
});
