import { MutationType } from "../src/constant";
import { ObserverFactory } from "../src";
import { wrapObserver } from "./utils";

describe('Base mechanics', () => {
    test('The original type is preserved.', () => {
        class Foo {}
        const value = ObserverFactory.Create(new Foo()).proxy;
        expect(value instanceof Foo).toEqual(true);
    });

    test('Observing the same object twice result in the same observer instance.', () => {
        const foo = {bar: 'bar'};
        const proxy1 = ObserverFactory.Create(foo).proxy;
        const proxy2 = ObserverFactory.Create(foo).proxy;
        expect(proxy1).toStrictEqual(proxy2);
    });

    test('Original object keys order is preserved', () => {
        const person = {
            name: 'name',
            age: 7,
            street: 'street',
            block: 9,
            apt: 1
        };
        expect(Object.keys(ObserverFactory.Create(person).proxy)).toStrictEqual(Object.keys(person));
    });

    test('A mutation of the proxy impacts the original object', () => {
        class Foo {
            public get uppercaseName(): string { return this.name.toUpperCase(); }
            public constructor(public name: string) { }
        }
        const obj = new Foo('paul');
        const wrapped = wrapObserver(ObserverFactory.Create(obj));
        wrapped.proxy.name = 'new';
        expect(obj.uppercaseName).toEqual('NEW');
    });

    test('A mutation of the original object impacts the proxy', () => {
        class Foo {
            public get uppercaseName(): string { return this.name.toUpperCase(); }
            public constructor(public name: string) { }
        }
        const obj = new Foo('paul');
        const wrapped = wrapObserver(ObserverFactory.Create(obj));
        obj.name = 'new';
        // No events are expected here because we changed the original object.
        wrapped.expect([]);
        expect(wrapped.proxy.name).toEqual('new');
    });

    test('Observers are detached from their parent when their value is replaced', () => {
        const obj: any = {inner: {sub: {}}};
        const wrapper = wrapObserver(ObserverFactory.Create(obj));
        const subProxy = wrapper.proxy.inner.sub;

        wrapper.proxy.inner.sub.value = 'test';
        wrapper.expect([[MutationType.Insert, '/inner/sub/value', undefined, 'test']]);
        wrapper.clear();

        wrapper.proxy.inner = {foo: 'bar'};
        wrapper.expect([
            [MutationType.Update, '/inner', {sub: {value: 'test'}}, {foo: 'bar'}]
        ]);
        wrapper.clear();

        subProxy.value = 'new';
        wrapper.expect([]);
    });

    test('Observers are detached from their parent when their value is deleted', () => {
        const obj: any = {inner: {sub: {}}};
        const wrapper = wrapObserver(ObserverFactory.Create(obj));
        const subProxy = wrapper.proxy.inner.sub;

        wrapper.proxy.inner.sub.value = 'test';
        wrapper.expect([[MutationType.Insert, '/inner/sub/value', undefined, 'test']]);
        wrapper.clear();

        delete wrapper.proxy.inner;
        wrapper.expect([
            [MutationType.Delete, '/inner', {sub: {value: 'test'}}]
        ]);
        wrapper.clear();

        subProxy.value = 'new';
        wrapper.expect([]);
    });
});

describe('Change detection', () => {
    test('Mutation of the root object', () => {
        const wrapped = wrapObserver(ObserverFactory.Create({name: 'name', age: 7}));
        wrapped.proxy.name = 'new';
        wrapped.expect([[MutationType.Update, '/name', 'name', 'new']]);
    });

    test('Multiple root operations', () => {
        const o = {name: 'name', age: 7, address: null};
        const address = {street: 'some'};

        const wrapper = wrapObserver(ObserverFactory.Create(o));

        wrapper.proxy.name = 'new name';
        wrapper.proxy.age = 9;
        wrapper.proxy.address = address;

        wrapper.expect([
            [MutationType.Update, '/name', 'name', 'new name'],
            [MutationType.Update, '/age', 7, 9],
            [MutationType.Update, '/address', null, address],
        ]);
        wrapper.clear();

        wrapper.proxy.address = null;
        wrapper.proxy.sex = 'male';
        delete wrapper.proxy.sex;

        wrapper.expect([
            [MutationType.Update, '/address', address, null],
            [MutationType.Insert, '/sex', undefined, 'male'],
            [MutationType.Delete, '/sex']
        ]);
    });

    test('Mutation of the subtree', () => {
        class Baz {
            public constructor(public value: string) { }
        }
        class Bar {
            public baz: Baz = new Baz('baz')
        }
        class Foo {
            public bar: Bar = new Bar();
        }
        const wrapper = wrapObserver(ObserverFactory.Create(new Foo()));
        wrapper.proxy.bar.baz.value = 'new';
        wrapper.proxy.bar.baz = new Baz('new instance')
        wrapper.expect([
            [MutationType.Update, '/bar/baz/value', 'baz', 'new'],
            [MutationType.Update, '/bar/baz', {value: 'new'}, {value: 'new instance'}]
        ]);
    });

    test('Object.assign with multiple properties triggers multiple events', () => {
        const wrapper = wrapObserver(ObserverFactory.Create({} as any));

        Object.assign(wrapper.proxy, { a: 1, b: 2, c: 3 });
        wrapper.proxy.a = 4;
        wrapper.expect([
            [MutationType.Insert, '/a', undefined, 1],
            [MutationType.Insert, '/b', undefined, 2],
            [MutationType.Insert, '/c', undefined, 3],
            [MutationType.Update, '/a', 1, 4]
        ]);
    });
});

describe('Edge cases', () => {
    test('Assign a proxy to another observer', () => {
        const wrapped1 = wrapObserver(ObserverFactory.Create({name: 'a', address: {town: 't1'}}));
        const wrapped2 = wrapObserver(ObserverFactory.Create({name: 'b', address: {town: 't2'}}));

        // Only expect a change on the first observer.
        wrapped1.proxy.address.town = 'new t1';
        wrapped1.expect([[MutationType.Update, '/address/town', 't1', 'new t1']]);
        wrapped2.expect([]);
        wrapped1.clear();

        // Only expect a change on the second observer.
        wrapped2.proxy.address.town = 'new t2';
        wrapped2.expect([[MutationType.Update, '/address/town', 't2', 'new t2']]);
        wrapped1.expect([]);
        wrapped2.clear();

        // Now reassign the address of the second wrapper
        wrapped1.proxy.address = wrapped2.proxy.address;

        // Now expect both observers to be notified of the change, because they both have a reference on the same proxy.
        wrapped1.proxy.address.town = 'new both';
        wrapped2.proxy.address.town = 'new both 2';
        wrapped1.expect([
            [MutationType.Update, '/address'],
            [MutationType.Update, '/address/town', 'new t2', 'new both'],
            [MutationType.Update, '/address/town', 'new both', 'new both 2'],
        ]);
        wrapped2.expect([
            [MutationType.Update, '/address/town', 'new t2', 'new both'],
            [MutationType.Update, '/address/town', 'new both', 'new both 2'],
        ]);
    });

    test('Create an observer on a subtree proxy', () => {
        const obj: any = {inner: {}};
        const wrapper = wrapObserver(ObserverFactory.Create(obj));
        const innerWrapper = wrapObserver(ObserverFactory.Create(wrapper.proxy.inner));

        // Because `wrapper.proxy.inner` is already observed, so the factory returns the existing observer.
        expect(wrapper.proxy.inner).toStrictEqual(innerWrapper.proxy);

        innerWrapper.proxy.some = 'text';
        wrapper.expect([[MutationType.Insert, '/inner/some', undefined, 'text']]);
        wrapper.clear();

        // Because the `wrapObserver` function does a subscribe.
        innerWrapper.expect([[MutationType.Insert, '/some', undefined, 'text']]);
    });
});
