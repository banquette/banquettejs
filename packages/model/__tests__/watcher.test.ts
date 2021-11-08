import 'reflect-metadata';
import { Injector } from "@banquette/dependency-injection";
import { ModelWatcherService, ModelChangeEvent, Json, JsonTransformerSymbol, T, Relation } from "../src";
import { isString } from "@banquette/utils-type";

const watcher = Injector.Get(ModelWatcherService);

/**
 * Watch an instance, then call a method so you can make changes on it,
 * then check if the recorded changes match what is expected.
 */
function watchAndCheck(instance: any, pathsOrSymbols: string[]|symbol[]|null, doChanges: (proxy: any) => void, expected: Array<[string, any, any]>): void {
    const changes: Array<[string, any, any]> = [];
    const onChange = (event: ModelChangeEvent<any>) => {
        changes.push([event.path, event.oldValue, event.newValue]);
    };
    const proxy = pathsOrSymbols === null || !pathsOrSymbols.length || isString(pathsOrSymbols[0]) ?
        watcher.watch(instance, pathsOrSymbols as string[]|null, onChange) :
        watcher.watchTransformableProperties(instance, pathsOrSymbols as symbol[], onChange);
    doChanges(proxy);
    expect(JSON.stringify(changes)).toStrictEqual(JSON.stringify(expected));
}

describe('Basic mechanics', () => {
    test('We can watch a model property', () => {
        class Foo {
            public bar: string = '';
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = 'test';
        }, [['/bar', '', 'test']]);
    });

    test('We can watch multiples properties of a model', () => {
        class Foo {
            public bar: string = '';
            public baz: number = 0;
            public foo: boolean = false;
        }
        watchAndCheck(new Foo(), [], (proxy: Foo) => {
            proxy.bar = 'test';
            proxy.foo = true;
        }, [['/bar', '', 'test'], ['/foo', false, true]]);
    });

    test('Properties not watched don\'t trigger a change event', () => {
        class Foo {
            public bar: string = '';
            public baz: string = '';
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.baz = 'test';
        }, []);
    });

    test('Properties not watched don\'t trigger a change event (deep)', () => {
        class Bar {
            public foo: string = '';
            public baz: string = '';
        }
        class Foo {
            public foo: string = '';
            public bar: Bar = new Bar();
        }
        watchAndCheck(new Foo(), ['/bar/foo'], (proxy: Foo) => {
            proxy.foo = 'modified 1';
            proxy.bar.foo = 'modified 2';
            proxy.bar.baz = 'modified 3';
        }, [['/bar/foo', '', 'modified 2']]);
    });

    test('Calling watch on a proxy will create a new separate one', () => {
        class Foo {
            public bar: string = '';
        }
        const fn = jest.fn();
        const proxy1 = watcher.watch(new Foo(), ['/bar'], fn);
        watchAndCheck(proxy1, ['/bar'], (proxy2: Foo) => {
            proxy2.bar = 'test';
        }, [['/bar', '', 'test']]);
        expect(fn).toBeCalledTimes(1);
    });

    test('Changes are only detected if made through the proxy', () => {
        class Foo {
            public bar: string = '';
        }
        const instance = new Foo();
        watchAndCheck(instance, ['/bar'], (proxy: Foo) => {
            instance.bar = 'test';
        }, []);
    });

    test('Changes are only detected if made through the proxy', () => {
        class Bar {
            public baz: string = '';
        }
        class Foo {
            public bar!: Bar;
        }
        const bar = new Bar();
        const foo = new Foo();
        foo.bar = bar;
        watchAndCheck(foo, ['/bar/baz'], (proxy: Foo) => {
            bar.baz = 'modified 1';
            proxy.bar.baz = 'modified 2';
        }, [['/bar/baz', 'modified 1', 'modified 2']]);
    });
});

describe('Transformers sources', () => {
    test('We can use transformers types to automatically select properties to watch', () => {
        class Foo {
            @Json()
            public bar: string = '';
        }
        watchAndCheck(new Foo(), [JsonTransformerSymbol], (proxy: Foo) => {
            proxy.bar = 'modified';
        }, [['/bar', '', 'modified']]);
    });

    test('Only properties visible to the transformer are observed', () => {
        class Foo {
            @Json()
            public bar: string = '';
            public baz: string = '';
        }
        watchAndCheck(new Foo(), [JsonTransformerSymbol], (proxy: Foo) => {
            proxy.bar = 'modified 1';
            proxy.baz = 'modified 2';
        }, [['/bar', '', 'modified 1']]);
    });

    test('Works recursively', () => {
        class A {
            @Json()
            public foo: string = 'foo';
        }

        class B {
            @Relation(A)
            @Json(T.Model())
            public a: A = new A();
        }

        class C {
            @Json(T.Model())
            @Relation(B)
            public b: B = new B();
        }
        watchAndCheck(new C(), [JsonTransformerSymbol], (proxy: C) => {
            proxy.b.a.foo = 'modified';
        }, [['/b/a/foo', 'foo', 'modified']]);
    });
});

describe('Types of mutations', () => {
    test('Mutate a uninitialized value', () => {
        class Foo {
            public bar!: string;
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = 'test';
        }, [['/bar', undefined, 'test']]);
    });

    test('Mutate a string', () => {
        class Foo {
            public bar: string = '';
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = 'test';
        }, [['/bar', '', 'test']]);
    });

    test('Mutate a number (reassign)', () => {
        class Foo {
            public bar: number = 0;
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = 2;
        }, [['/bar', 0, 2]]);
    });

    test('Mutate a number (increment)', () => {
        class Foo {
            public bar: number = 0;
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            ++proxy.bar;
        }, [['/bar', 0, 1]]);
    });

    test('Mutate a boolean', () => {
        class Foo {
            public bar: boolean = false;
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = true;
        }, [['/bar', false, true]]);
    });

    test('Mutate a literal object (reassign)', () => {
        class Foo {
            public bar: any = {a: 'a', b: 'b'};
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = {a: 1, b: 2};
        }, [['/bar', {a: 'a', b: 'b'}, {a: 1, b: 2}]]);
    });

    test('Mutate an object (deep)', () => {
        class A {
            public foo: string = 'foo';
        }

        class B {
            public a: A = new A();
        }

        class C {
            public b: B = new B();
        }
        watchAndCheck(new C(), null, (proxy: C) => {
            proxy.b.a.foo = 'modified';
        }, [['/b/a/foo', 'foo', 'modified']]);
    });

    test('Mutate an array (reassign)', () => {
        class Foo {
            public bar: string[] = ['a', 'b', 'c'];
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar = ['d', 'e', 'f'];
        }, [['/bar', ['a', 'b', 'c'], ['d', 'e', 'f']]]);
    });

    test('Mutate an array (deep)', () => {
        class Foo {
            public bar: string[] = ['a', 'b', 'c'];
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar[1] = 'new';
        }, [['/bar/1', 'b', 'new']]);
    });

    test('Mutate an array (add item)', () => {
        class Foo {
            public bar: string[] = ['a', 'b', 'c'];
        }
        watchAndCheck(new Foo(), ['/bar'], (proxy: Foo) => {
            proxy.bar.push('new');
        }, [['/bar/3', undefined, 'new']]);
    });

    test('Mutate an object (deep) into an array', () => {

    });
});
