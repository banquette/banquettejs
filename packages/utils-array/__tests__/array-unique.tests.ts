import { createGenericTestSuite } from "../../__tests__/utils";
import { arrayUnique } from "../src";

describe('arrayUnique', () => {
    createGenericTestSuite(arrayUnique, [
        [['a', 'b', 'c', 'b'], ['a', 'b', 'c']],
        [['a', 'b', 'b', 'b'], ['a', 'b']],
    ], 'toStrictEqual');
});
