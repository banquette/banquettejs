import { ObserverFactory } from "../src";
import { MutationType } from "../src/constant";
import { wrapObserver, typedArrayToArray } from "./utils";

test('The original type is preserved.', () => {
    const viewsTypes = [
        Int8Array,
        Uint8Array,
        Uint8ClampedArray,
        Int16Array,
        Uint16Array,
        Int32Array,
        Uint32Array,
        Float32Array,
        Float64Array
    ];
    for (const viewType of viewsTypes) {
        const value = ObserverFactory.Create(new viewType([1, 2, 3])).proxy;
        expect(value).toBeInstanceOf(viewType);
    }
});

test('set()', () => {
    const wrapper = wrapObserver(ObserverFactory.Create(new Int8Array([1, 2, 3, 0, 0])));
    wrapper.proxy.set([4, 5], 3);
    expect(typedArrayToArray(wrapper.proxy)).toEqual([1, 2, 3, 4, 5]);
    wrapper.expect([
        [MutationType.Update, '/3', 0, 4],
        [MutationType.Update, '/4', 0, 5]
    ]);
});

test('reverse()', () => {
    const wrapper = wrapObserver(ObserverFactory.Create([1, 2, 3]));
    wrapper.proxy.reverse();
    expect(wrapper.proxy).toEqual([3, 2, 1]);
    wrapper.expect([
        [MutationType.Reverse, '/']
    ]);
});

test('fill()', () => {
    const wrapper = wrapObserver(ObserverFactory.Create([0, 1, 2]));
    expect(wrapper.proxy.fill(5)).toEqual([5, 5, 5]);
    wrapper.expect([
        [MutationType.Update, '/0', 0, 5],
        [MutationType.Update, '/1', 1, 5],
        [MutationType.Update, '/2', 2, 5]
    ]);
    wrapper.clear();
    expect(wrapper.proxy.fill(10, 1, 3)).toEqual([5, 10, 10]);
    wrapper.expect([
        [MutationType.Update, '/1', 5, 10],
        [MutationType.Update, '/2', 5, 10]
    ]);
});

test('sort()', () => {
    const wrapper = wrapObserver(ObserverFactory.Create(new Int32Array([3, 2, 1])));
    expect(typedArrayToArray(wrapper.proxy.sort())).toEqual([1, 2, 3]);
    expect(typedArrayToArray(wrapper.proxy.sort((a: number, b: number) => b - a))).toEqual([3, 2, 1]);
    wrapper.expect([
        [MutationType.Sort, '/'],
        [MutationType.Sort, '/']
    ]);
});

test('copyWithin()', () => {
    const wrapper = wrapObserver(ObserverFactory.Create(new Int16Array([1, 2, 3, 4, 5])));

    expect(typedArrayToArray(wrapper.proxy.copyWithin(0, 3, 4))).toEqual([4, 2, 3, 4, 5]);
    wrapper.expect([
        [MutationType.Update, '/0', 1, 4]
    ]);
    wrapper.clear();

    expect(typedArrayToArray(wrapper.proxy.copyWithin(1, 3))).toEqual([4, 4, 5, 4, 5]);
    wrapper.expect([
        [MutationType.Update, '/1', 2, 4],
        [MutationType.Update, '/2', 3, 5],
    ]);
    wrapper.clear();

    expect(typedArrayToArray(wrapper.proxy.copyWithin(0, 3))).toEqual([4, 5, 5, 4, 5]);

    // Only the second 4 changes to 5, the index '0' has the same value, so no event is expected for it.
    wrapper.expect([
        [MutationType.Update, '/1', 4, 5]
    ]);
});
