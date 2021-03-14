import 'reflect-metadata';
import { isPromiseLike } from "../types/is-promise-like";

test('isPromiseLike', () => {
    expect(isPromiseLike({ then: () => null })).toBe(true);
    expect(isPromiseLike(null)).toBe(false);
    expect(isPromiseLike({})).toBe(false);
});
