import 'reflect-metadata';
import { ComponentNotFoundException } from "@banquette/form/exception/component-not-found.exception";
import { Relation } from "@banquette/model/decorator/relation";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { Form, FormModelBinder, FormObject, FormTransformerSymbol, FormArray } from "../src";
import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { FormObject as FormObjectObject } from '@banquette/form/form-object';
import { FormControl as FormControlObject } from '@banquette/form/form-control';
import { FormArray as FormArrayObject } from '@banquette/form/form-array';
import { GenericTransformerTest } from "../../model/__tests__/__mocks__/generic-transformer-test";

class A {
    @Form()
    public foo: string = 'foo';
}
class B {
    @Relation(A)
    @Form(FormObject())
    public a: A = new A();

    @Relation(A)
    @Form(FormArray(FormObject()))
    public aArr: A[] = [new A(), new A()];

    @Form()
    public bar: string = 'bar';

    @Relation(A)
    @Form()
    public aBis: A = new A();
}
class C {
    @Relation(B)
    @Form(FormObject())
    public b: B = new B();

    @Relation(B)
    @Form(FormArray())
    public bArr: B[] = [new B(), new B()];

    @Form()
    public existing: string = 'test';
}

describe('Creation', () => {
    test('Bind an existing form', () => {
        class Foo {
            @Form()
            public bar: string = 'model value 1';

            @Form()
            public baz: string = 'model value 2';
        }
        const form = new FormObjectObject({bar: new FormControlObject('form value')});
        Injector.Get(FormModelBinder).bind(new Foo(), form);
        form.getByPattern('**').markAsConcrete();
        expect(form.sizeDeep).toEqual(3);
        expect(form.get('bar').value).toEqual('model value 1');
        expect(form.get('baz').value).toEqual('model value 2');
    });

    test('Form transformers must be synchronous', () => {
        class Foo {
            @Form(GenericTransformerTest({delay: 50}))
            public asynchronous: boolean = true;
        }
        expect(() => Injector.Get(FormModelBinder).bind(new Foo(), new FormObjectObject())).toThrow(UsageException);
    });

    test('Missing form components are created when biding a model', () => {
        const form = new FormObjectObject({
            existing: new FormControlObject('other value')
        });
        Injector.Get(FormModelBinder).bind(new C(), form);
        form.getByPattern('**').markAsConcrete();
        expect(form.sizeDeep).toEqual(15);
        expect(form.get('b/bar')).toBeInstanceOf(FormControlObject);
        expect(form.get('b/a')).toBeInstanceOf(FormObjectObject);
        expect(form.get('b/a/foo')).toBeInstanceOf(FormControlObject);
        expect(form.get('existing').value).toEqual('test');
    });

    test('When the binding is created, the values of the model take priority over those of the form', () => {
        class Foo {
            @Form()
            public bar: string = 'model value';
        }
        const instance = new Foo();
        const form = Injector.Get(TransformService).transform(instance, FormTransformerSymbol).result as FormObjectObject;
        form.getByPattern('**').markAsConcrete().setValue('form value');
        Injector.Get(FormModelBinder).bind(instance, form);
        expect(form.get('bar').value).toEqual('model value');
        expect(instance.bar).toEqual('model value');
    });

    test('Value transformers are executed when setting the model value upon initialization', () => {
        class Foo {
            @Form(GenericTransformerTest({transform: 'transformed'}))
            public bar: string = 'model value';
        }
        const instance = new Foo();
        const form = Injector.Get(TransformService).transform(instance, FormTransformerSymbol).result as FormObjectObject;
        form.getByPattern('**').markAsConcrete().setValue('form value');
        Injector.Get(FormModelBinder).bind(instance, form);
        expect(form.get('bar').value).toEqual('transformed');
    });
});

describe('Synchronization', () => {
    function bindComplexModelC(form: FormObjectObject): C {
        const c = Injector.Get(FormModelBinder).bind(new C(), form);
        form.getByPattern('**').markAsConcrete();
        return c;
    }

    describe('Model => Form', () => {
        test('Update a FormControl', () => {
            class Foo {
                @Form()
                public bar: string = 'bar';
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            expect(form.get('bar').value).toEqual('bar');
            model.bar = 'new value';
            expect(form.get('bar').value).toEqual('new value');
        });

        test('Update a FormControl object value (deep)', () => {
            class Foo {
                @Form()
                public bar: any = {a: [1, 2, 3]};
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            expect(form.get('bar')).toBeInstanceOf(FormControlObject);
            model.bar.a[1] = 20;
            expect(JSON.stringify(form.get('bar').value)).toStrictEqual(JSON.stringify({a: [1, 20, 3]}));
        });

        test('Update a FormControl class instance value', () => {
            class Bar {
                @Form()
                public baz: string = 'baz';
            }
            class Foo {
                @Form()
                public bar: Bar = new Bar();
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            expect(form.get('bar')).toBeInstanceOf(FormControlObject);
            expect(form.get('bar').value).toMatchObject({baz: 'baz'});
            model.bar.baz = 'new value';
            expect(form.get('bar').value).toMatchObject({baz: 'new value'});
        });

        test('Create a FormControl', () => {
            class Foo {
                @Form()
                public bar!: string;
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            expect(form.get('bar').value).toBeUndefined();
            model.bar = 'new value';
            expect(form.get('bar').value).toEqual('new value');
        });

        test('Remove a property of a model', () => {
            class Foo {
                @Form()
                public bar?: string|null = 'bar';
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            delete model.bar;
            expect(() => form.get('bar')).toThrow(ComponentNotFoundException);
        });

        test('Set FormControl to null', () => {
            class Foo {
                @Form()
                public bar: string|null = 'bar';
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            model.bar = null;
            expect(form.get('bar').value).toBeNull();
        });

        test('Set FormControl to undefined', () => {
            class Foo {
                @Form()
                public bar?: string = 'bar';
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            model.bar = undefined;
            expect(form.get('bar').value).toBeUndefined();
        });

        test('FormObject partially exist in the form', () => {
            class Bar {
                @Form()
                public a: string = 'a'; // Exist in both the original form and the model

                @Form()
                public b!: string; // Exist in neither the original form nor the model

                @Form()
                public c: string = 'c';  // Exist in model but not in the original form

                @Form()
                public d!: string; // Exist in the original form but not in the model
            }
            class Foo {
                @Relation(Bar)
                @Form(FormObject())
                public bar: Bar = new Bar();
            }
            const form = new FormObjectObject({
                bar: new FormObjectObject({
                    a: new FormControlObject('form value a'),
                    d: new FormControlObject('form value d')
                })
            });
            Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            const bar = form.get<FormObjectObject>('bar');
            expect(bar).toBeInstanceOf(FormObjectObject);
            expect(bar.get('a').value).toEqual('a');
            expect(bar.get('b').value).toBeUndefined();
            expect(bar.get('c').value).toEqual('c');
            expect(bar.get('d').value).toBeUndefined();
        });

        test('FormArray partially exist in the form', () => {
            class Bar {
                @Form()
                public a: string = 'a';

                @Form()
                public b!: string;

                @Form()
                public c: string = 'c';

                @Form()
                public d!: string;
            }
            class Foo {
                @Relation(Bar)
                @Form(FormArray(FormObject()))
                public bar: Bar[] = [new Bar(), new Bar()];
            }
            const form = new FormObjectObject({
                bar: new FormArrayObject([
                    new FormObjectObject({
                        d: new FormControlObject('form value d')
                    })
                ])
            });
            Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            const bar = form.get<FormArrayObject>('bar');
            expect(bar).toBeInstanceOf(FormArrayObject);
            for (let i = 0; i < 2; ++i) {
                expect(bar.get(i)).toBeInstanceOf(FormObjectObject);
                expect(bar.get(`${i}/a`).value).toEqual('a');
                expect(bar.get(`${i}/b`).value).toBeUndefined();
                expect(bar.get(`${i}/c`).value).toEqual('c');
                expect(bar.get(`${i}/d`).value).toBeUndefined();
            }
        });

        test('Nested FormArray partially exist in the form', () => {
            class Bar {
                @Form()
                public a: string = 'a';

                @Form()
                public b!: string;

                @Form()
                public c: string = 'c';

                @Form()
                public d!: string;
            }
            class Foo {
                @Relation(Bar)
                @Form(FormArray(FormArray(FormObject())))
                public bar: Bar[][] = [[new Bar(), new Bar()]];
            }
            const form = new FormObjectObject({
                bar: new FormArrayObject()
            });
            Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            for (let i = 0; i < 2; ++i) {
                expect(form.get(`bar/0/${i}`)).toBeInstanceOf(FormObjectObject);
                expect(form.get(`bar/0/${i}/a`).value).toEqual('a');
                expect(form.get(`bar/0/${i}/b`).value).toBeUndefined();
                expect(form.get(`bar/0/${i}/c`).value).toEqual('c');
                expect(form.get(`bar/0/${i}/d`).value).toBeUndefined();
            }
        });

        test('Update a value inside a FormObject', () => {
            class Bar {
                @Form()
                public baz: string = 'baz';
            }
            class Foo {
                @Relation(Bar)
                @Form(FormObject())
                public bar: Bar = new Bar();
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            model.bar.baz = 'new value';
            expect(form.get('/bar/baz').value).toEqual('new value');
        });

        test('Create a new FormObject', () => {
            class Bar {
                @Form()
                public baz: string = 'baz';
            }
            class Foo {
                @Relation(Bar)
                @Form(FormObject())
                public bar!: Bar;
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            expect(() => form.get('bar')).toThrow(ComponentNotFoundException);
            model.bar = new Bar();
            expect(form.get('/bar/baz').value).toEqual('baz');
            model.bar.baz = 'new value';
            expect(form.get('/bar/baz').value).toEqual('new value');
        });

        test('Remove a FormObject', () => {
            class Bar {
                public baz: string = 'baz';
            }
            class Foo {
                @Relation(Bar)
                @Form(FormObject())
                public bar: Bar|null = new Bar();
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            expect(form.get('bar')).toBeInstanceOf(FormObjectObject);
            model.bar = null;
            expect(() => form.get('bar')).toThrow(ComponentNotFoundException);
        });

        test('Create a sub object after binding', () => {
            class A {
                @Form()
                public foo: string = 'foo';
            }
            class B {
                @Relation(A)
                @Form(FormObject())
                public a!: A;
            }
            class C {
                @Relation(B)
                @Form(FormObject())
                public b!: B;
            }

            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new C(), form);
            form.getByPattern('**').markAsConcrete();
            const a = new A();
            const b = new B();
            b.a = a;
            model.b = b;
            expect(form.get('/b/a')).toBeInstanceOf(FormObjectObject);
            expect(form.get('/b/a/foo').value).toEqual('foo');
            model.b.a.foo = 'new value';
            expect(form.get('/b/a/foo').value).toEqual('new value');
        });

        test('Modify value deeper than a FormControl', () => {
            const form = new FormObjectObject();
            const model = bindComplexModelC(form);
            model.bArr[0].aBis.foo = 'new value';
            expect(form.get('/bArr/0').value).toMatchObject({aBis: {foo: 'new value'}});
        });

        test('Modify value inside a FormObject that is inside a FormArray', () => {
            const form = new FormObjectObject();
            const model = bindComplexModelC(form);
            model.b.aArr[0].foo = 'new value';
            expect(form.get('/b/aArr/0/foo').value).toEqual('new value');
        });

        test('Add a FormObject value inside a FormArray', () => {
            const form = new FormObjectObject();
            const model = bindComplexModelC(form);
            const a = new A();
            a.foo = 'new A';
            model.b.aArr.push(a);
            expect(form.get('/b/aArr/2')).toBeInstanceOf(FormObjectObject);
            expect(form.get('/b/aArr/2/foo').value).toEqual('new A');
        });

        test('Remove a FormObject value inside a FormArray', () => {
            const form = new FormObjectObject();
            const model = bindComplexModelC(form);
            model.b.aArr[0].foo = 'foo 1';
            model.b.aArr[1].foo = 'foo 2';
            expect(form.get('/b/aArr/0/foo').value).toEqual('foo 1');
            expect(form.get('/b/aArr/1/foo').value).toEqual('foo 2');
            model.b.aArr.splice(0, 1);
            expect(form.get('/b/aArr/0/foo').value).toEqual('foo 2');
            expect(() => form.get('/b/aArr/1')).toThrow(ComponentNotFoundException);
        });

        test('Remove then add a FormObject in a nested FormArray', () => {
            class Bar {
                @Form()
                public a: string = 'a';

                @Form()
                public b!: string;

                @Form()
                public c: string = 'c';

                @Form()
                public d!: string;
            }
            class Foo {
                @Relation(Bar)
                @Form(FormArray(FormArray(FormObject())))
                public bar: Bar[][] = [[new Bar(), new Bar()]];
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            model.bar[0][0].a = 'a1';
            model.bar[0][1].a = 'a2';
            model.bar[0].splice(0, 1);
            expect(() => form.get('bar/0/1')).toThrow(ComponentNotFoundException);
            expect(form.get('bar/0/0/a').value).toEqual('a2');
            model.bar[0].push(new Bar());
            expect(form.get('bar/0/0/b').value).toBeUndefined();
            expect(form.get('bar/0/0/c').value).toEqual('c');
            model.bar.push([new Bar()]);
            expect(form.get('bar/1/0/c').value).toEqual('c');
        });
    });

    describe('Form => Model', () => {
        test('Update a FormControl', () => {
            class Foo {
                @Form()
                public bar: string = 'bar';
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.getByPattern('**').markAsConcrete();
            form.get('bar').setValue('new value');
            expect(model.bar).toEqual('new value');
        });

        test('Remove then add a FormObject in a nested FormArray', () => {
            class Bar {
                @Form()
                public a: string = 'a';

                @Form()
                public b!: string;

                @Form()
                public c: string = 'c';

                @Form()
                public d!: string;
            }
            class Foo {
                @Relation(Bar)
                @Form(FormArray(FormArray(FormObject())))
                public bar: Bar[][] = [[new Bar(), new Bar()]];
            }
            const form = new FormObjectObject();
            const model = Injector.Get(FormModelBinder).bind(new Foo(), form);
            form.get('/bar/0/1/c').setValue('new value');
            expect(model.bar[0][1].c).toEqual('new value');
        });

        test('Mutations of the form throw an error when bound to a model', () => {
            class Foo {
                @Form()
                public bar: string = 'bar';
            }
            const form = new FormObjectObject();
            Injector.Get(FormModelBinder).bind(new Foo(), form);
            expect(() => form.set('test', new FormControlObject())).toThrow(UsageException);
        });
    });
});
