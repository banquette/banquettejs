import { isArray } from "@banquette/utils-type";
import { ObserverFactory } from "../src";
import { MutationType } from "../src/constant";
import { wrapObserver } from "./utils";

test('The original type is preserved.', () => {
    const value = ObserverFactory.Create([1, 2]).proxy;
    expect(isArray(value)).toEqual(true);
});

test('Basic change detection', () => {
    const wrapper = wrapObserver(ObserverFactory.Create([{ test: 'text' }]));
    const firstItemProxy = wrapper.proxy[0];

    firstItemProxy.test = 'new';
    wrapper.expect([
        [MutationType.Update, '/0/test', 'text', 'new']
    ]);
    wrapper.clear();
    wrapper.proxy.pop();

    firstItemProxy.test = 'other';
    wrapper.expect([
        [MutationType.Delete, '/0']
    ]);
});

describe('Array.prototype functions', () => {
    test('Array.pop()', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(['a', 'b', 'c']));
        expect(wrapper.proxy.pop()).toEqual('c');
        expect(wrapper.proxy.pop()).toEqual('b');
        wrapper.expect([
            [MutationType.Delete, '/2', 'c'],
            [MutationType.Delete, '/1', 'b'],
        ]);
    });

    test('Array.pop() - empty array', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([]));
        expect(wrapper.proxy.pop()).toEqual(undefined);
        wrapper.expect([]);
    });

    test('Array.shift()', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(['a', 'b', 'c']));
        expect(wrapper.proxy.shift()).toEqual('a');
        expect(wrapper.proxy.shift()).toEqual('b');
        wrapper.expect([
            [MutationType.Delete, '/0', 'a'],
            [MutationType.Delete, '/0', 'b'],
        ]);
    });

    test('Array.shift() - empty array', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([]));
        expect(wrapper.proxy.shift()).toEqual(undefined);
        wrapper.expect([]);
    });

    test('Array.push() - primitives', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([1, 2, 3, 4]));

        wrapper.proxy.push(5);
        wrapper.proxy.push(6, 7);
        wrapper.expect([
            [MutationType.Insert, '/4', undefined, 5],
            [MutationType.Insert, '/5', undefined, 6],
            [MutationType.Insert, '/6', undefined, 7],
        ]);
    });

    test('Array.push() - objects', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([]));

        wrapper.proxy.push({name: 'paul'});
        wrapper.proxy[0].name = 'john';
        wrapper.expect([
            [MutationType.Insert, '/0', undefined, {name: 'paul'}],
            [MutationType.Update, '/0/name', 'paul', 'john']
        ]);
    });

    test('Array.unshift() - primitives', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([1, 2, 3, 4]));

        wrapper.proxy.unshift(5);
        wrapper.proxy.unshift(6, 7);
        wrapper.expect([
            [MutationType.Insert, '/0', undefined, 5],
            [MutationType.Insert, '/0', undefined, 6],
            [MutationType.Insert, '/1', undefined, 7],
        ]);
    });

    test('Array.unshift() - objects', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([]));

        wrapper.proxy.unshift({name: 'paul'});
        wrapper.proxy[0].name = 'john';
        wrapper.expect([
            [MutationType.Insert, '/0', undefined, {name: 'paul'}],
            [MutationType.Update, '/0/name', 'paul', 'john']
        ]);
    });

    test('Array.unshift() - empty array', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([]));
        expect(wrapper.proxy.unshift()).toEqual(0);
        wrapper.expect([]);
    });

    test('Array.reverse()', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(['a', 'b', 'c']));
        wrapper.proxy.reverse();
        expect(wrapper.proxy).toEqual(['c', 'b', 'a']);
        wrapper.expect([
            [MutationType.Reverse, '/']
        ]);
    });

    test('Array.reverse() - observers keys are updated', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([{name: 'a'}, {name: 'b'}, {name: 'c'}]));
        wrapper.proxy.reverse();
        wrapper.proxy[0].name = 'c_new';
        wrapper.proxy[2].name = 'a_new';
        wrapper.expect([
            [MutationType.Reverse, '/'],
            [MutationType.Update, '/0/name', 'c', 'c_new'],
            [MutationType.Update, '/2/name', 'a', 'a_new'],
        ]);
    });

    test('Array.reverse() - subtree', () => {
        const wrapper = wrapObserver(ObserverFactory.Create({inner: ['a', 'b', 'c']}));
        wrapper.proxy.inner.reverse();
        expect(wrapper.proxy.inner).toEqual(['c', 'b', 'a']);
        wrapper.expect([
            [MutationType.Reverse, '/inner']
        ]);
    });

    test('Array.reverse() - empty array', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([]));
        wrapper.proxy.reverse();
        wrapper.expect([]);
    });

    test('Array.sort() - flat array', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([3, 2, 1]));
        expect(wrapper.proxy.sort()).toEqual([1, 2, 3]);
        expect(wrapper.proxy.sort((a: number, b: number) => b - a)).toEqual([3, 2, 1]);
        wrapper.expect([
            [MutationType.Sort, '/'],
            [MutationType.Sort, '/']
        ]);
    });

    test('Array.sort() - nested arrays', () => {
        const wrapper = wrapObserver(ObserverFactory.Create({a1: {a2: [3, 2, 1]}}));
        expect(wrapper.proxy.a1.a2.sort()).toEqual([1, 2, 3]);
        expect(wrapper.proxy.a1.a2.sort((a: number, b: number) => b - a)).toEqual([3, 2, 1]);
        wrapper.expect([
            [MutationType.Sort, '/a1/a2'],
            [MutationType.Sort, '/a1/a2']
        ]);
    });

    test('Array.sort() - objects', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([{name: 'a'}, {name: 'b'}, {name: 'c'}]));

        wrapper.proxy[0].name = 'a_new';
        expect(wrapper.proxy.sort((a: any, b: any) => b.name.localeCompare(a.name))).toMatchObject(expect.arrayContaining([
            expect.objectContaining({name: 'c'}),
            expect.objectContaining({name: 'b'}),
            expect.objectContaining({name: 'a_new'})
        ]));
        wrapper.proxy[0].name = 'c_new';
        expect(wrapper.proxy).toMatchObject(expect.arrayContaining([
            expect.objectContaining({name: 'c_new'}),
            expect.objectContaining({name: 'b'}),
            expect.objectContaining({name: 'a_new'})
        ]));
        wrapper.expect([
            [MutationType.Update, '/0/name', 'a', 'a_new'],
            [MutationType.Sort, '/'],
            [MutationType.Update, '/0/name', 'c', 'c_new']
        ]);
    });

    test('Array.fill() - primitives', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([0, 1, 2]));
        expect(wrapper.proxy.fill('a')).toEqual(['a', 'a', 'a']);
        wrapper.expect([
            [MutationType.Update, '/0', 0, 'a'],
            [MutationType.Update, '/1', 1, 'a'],
            [MutationType.Update, '/2', 2, 'a']
        ]);
        wrapper.clear();
        expect(wrapper.proxy.fill('b', 1, 3)).toEqual(['a', 'b', 'b']);
        wrapper.expect([
            [MutationType.Update, '/1', 'a', 'b'],
            [MutationType.Update, '/2', 'a', 'b']
        ]);
    });

    test('Array.splice() - primitives', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([1, 2, 3, 4, 5, 6]));
        expect(wrapper.proxy.splice(2, 2, 'a')).toEqual([3, 4]);
        expect(wrapper.proxy).toEqual([1, 2, 'a', 5, 6]);

        wrapper.expect([
            [MutationType.Delete, '/2', 3],
            [MutationType.Delete, '/3', 4],
            [MutationType.Insert, '/2', undefined, 'a'],
        ]);
        wrapper.clear();

        expect(wrapper.proxy.splice(-3)).toEqual(['a', 5, 6]);
        wrapper.expect([
            [MutationType.Delete, '/2', 'a'],
            [MutationType.Delete, '/3', 5],
            [MutationType.Delete, '/4', 6]
        ]);
        wrapper.clear();

        expect(wrapper.proxy.splice(0)).toEqual([1, 2]);
        wrapper.expect([
            [MutationType.Delete, '/0', 1],
            [MutationType.Delete, '/1', 2]
        ]);
        expect(wrapper.proxy.length).toEqual(0);
    });

    test('Array.splice() - added items are observed', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([{text: 'a'}, {text: 'b'}, {text: 'c'}, {text: 'd'}]));
        wrapper.proxy.splice(1, 2, {text: '1'});
        wrapper.clear();

        wrapper.proxy[1].text = 'new';
        wrapper.expect([
            [MutationType.Update, '/1/text', '1', 'new']
        ]);
    });

    test('Array.splice() - removed items are detached', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([{text: 'a'}, {text: 'b'}, {text: 'c'}, {text: 'd'}]));
        const removed = wrapper.proxy.splice(1, 2, {text: '1'});
        wrapper.clear();

        // The observer should be detached here.
        removed[0].text = 'new';
        wrapper.expect([]);
    });

    test('Array.slice() - removed items not detached', () => {
        const wrapper = wrapObserver(ObserverFactory.Create([{text: 'a'}, {text: 'b'}, {text: 'c'}, {text: 'd'}]));
        const removed = wrapper.proxy.slice(1, 2, {text: '1'});

        // The observer should be preserved because the item is still part of the original array.
        removed[0].text = 'new';
        wrapper.expect([
            [MutationType.Update, '/1/text', 'b', 'new']
        ]);
    });

    test('Array.copyWithin()', () => {
        const wrapper = wrapObserver(ObserverFactory.Create(['a', 'b', 'c', 'd', 'e']));

        expect(wrapper.proxy.copyWithin(0, 3, 4)).toEqual(['d', 'b', 'c', 'd', 'e']);
        wrapper.expect([
            [MutationType.Update, '/0', 'a', 'd']
        ]);
        wrapper.clear();

        expect(wrapper.proxy.copyWithin(1, 3)).toEqual(['d', 'd', 'e', 'd', 'e']);
        wrapper.expect([
            [MutationType.Update, '/1', 'b', 'd'],
            [MutationType.Update, '/2', 'c', 'e'],
        ]);
        wrapper.clear();

        expect(wrapper.proxy.copyWithin(0, 3)).toEqual(['d', 'e', 'e', 'd', 'e']);

        // Only the second 'd' changes to 'e', the index '0' has the same value, so no event is expected for it.
        wrapper.expect([
            [MutationType.Update, '/1', 'd', 'e']
        ]);
    });
});
