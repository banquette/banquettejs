import { arrayUnique } from "@banquette/utils-array";
import { uniqueId } from '../src';

describe('uniqueId', () => {
    test('expected length', () => {
        for (let i = 1; i < 100; ++i) {
            expect(uniqueId(i).length).toEqual(i);
        }
    });

    test('is unique', () => {
        const generated: string[] = [];
        for (let i = 0; i < 100; ++i) {
            generated.push(uniqueId(5));
        }
        expect(arrayUnique(generated).length).toEqual(generated.length);
    });
});
