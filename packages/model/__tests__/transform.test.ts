import { Injector } from "@banquette/dependency-injection/injector";
import { SystemException } from "@banquette/exception/system.exception";
import { UsageException } from "@banquette/exception/usage.exception";
import {
    Pojo,
    TransformService,
    PojoTransformerSymbol,
    T,
    TransformNotSupportedException,
    TransformInverseNotSupportedException,
    Collection,
    Primitive,
    Type,
    Json,
    JsonTransformerSymbol,
    TransformFailedException,
    Relation
} from "../src";

import { TransformOnlyTransformerTest } from "./__mocks__/transform-only-transformer-test";
import { TransformInverseOnlyTransformerTest } from "./__mocks__/transform-inverse-only-transformer-test";
import { transformAndCheck, checkTransformResult, transformAndCheckAsync } from "./utils";
import { GenericTransformerTest } from "./__mocks__/generic-transformer-test";

const transformService = Injector.Get(TransformService);

describe('General mechanics', () => {
    describe('Sync', () => {
        test('Single property', () => {
            class Foo {
                @Pojo(GenericTransformerTest({transform: 'transform', inverse: 'inverse'}))
                public bar!: string;
            }
            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: 'transform'}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'inverse'}
            });
        });

        test('Multiple properties', () => {
            class Foo {
                @Pojo(GenericTransformerTest({transform: 'bar', inverse: 'invBar'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2, inverse: -2}))
                public baz!: number;
            }
            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: 'bar', baz: 2}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'invBar', baz: -2}
            });
        });

        test('Multiple properties (deep)', () => {
            class Sub {
                @Pojo(GenericTransformerTest({transform: 'foo', inverse: 'invFoo'}))
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(GenericTransformerTest({transform: 'bar', inverse: 'invBar'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2, inverse: -2}))
                public baz!: number;

                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: 'bar', baz: 2, sub: {foo: 'foo'}}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'invBar', baz: -2, sub: {foo: 'invFoo'}}
            });
        });

        test('Multiple properties (with error)', () => {
            class Foo {
                @Pojo(GenericTransformerTest({transformError: 'fail'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2}))
                public baz!: number;
            }
            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                errorType: UsageException,
                errorMessage: 'fail'
            });
        });

        test('Multiple properties (deep with custom error)', () => {
            class TestException extends SystemException {
                public slug: string = 'test';
            }
            class Sub {
                @Pojo(GenericTransformerTest({transformError: new TestException('fail')}))
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(GenericTransformerTest({transform: 'bar'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2}))
                public baz!: number;

                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                errorType: TestException,
                errorMessage: 'fail'
            });
        });

        test('Unsupported transform (deep)', () => {
            class Sub {
                @Pojo(TransformInverseOnlyTransformerTest())
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            const transformResult = transformService.transform(new Foo(), PojoTransformerSymbol);
            checkTransformResult(transformResult, {
                errorType: TransformNotSupportedException
            });
        });

        test('Unsupported transform (deep)', () => {
            class Sub {
                @Pojo(TransformOnlyTransformerTest())
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            const transformResult = transformService.transformInverse({sub: {foo: 'test'}}, Foo, PojoTransformerSymbol);
            checkTransformResult(transformResult, {
                errorType: TransformInverseNotSupportedException
            });
        });
    });

    describe('Async', () => {
        test('Single property', async () => {
            class Foo {
                @Pojo(GenericTransformerTest({delay: 50, transform: 'transform', inverse: 'inverse'}))
                public bar!: string;
            }
            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: 'transform'}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'inverse'}
            });
        });

        test('Multiple properties', async () => {
            class Foo {
                @Pojo(GenericTransformerTest({transform: 'bar', inverse: 'invBar'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({delay: 50, transform: 2, inverse: -2}))
                public baz!: number;
            }
            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: 'bar', baz: 2}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'invBar', baz: -2}
            });
        });

        test('Multiple properties (deep)', async () => {
            class Sub {
                @Pojo(GenericTransformerTest({transform: 'foo', delay: 50, inverse: 'invFoo'}))
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(GenericTransformerTest({transform: 'bar', inverse: 'invBar'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2, inverse: -2}))
                public baz!: number;

                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: 'bar', baz: 2, sub: {foo: 'foo'}}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'invBar', baz: -2, sub: {foo: 'invFoo'}}
            });
        });

        test('Multiple properties (with error)', async () => {
            class Foo {
                @Pojo(GenericTransformerTest({delay: 50, transformError: 'fail'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2}))
                public baz!: number;
            }
            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                errorType: UsageException,
                errorMessage: 'fail'
            });
        });

        test('Multiple properties (deep with error)', async () => {
            class TestException extends SystemException {
                public slug: string = 'test';
            }
            class Sub {
                @Pojo(GenericTransformerTest({delay: 50, transformError: new TestException('fail')}))
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(GenericTransformerTest({transform: 'bar'}))
                public bar!: string;

                @Pojo(GenericTransformerTest({transform: 2}))
                public baz!: number;

                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                errorType: TestException,
                errorMessage: 'fail'
            });
        });

        test('Unsupported transform (deep)', async () => {
            class Sub {
                @Pojo(TransformInverseOnlyTransformerTest())
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(GenericTransformerTest({delay: 50, transform: 'bar'}))
                public bar!: string;

                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            const transformResult = transformService.transform(new Foo(), PojoTransformerSymbol);
            await transformResult.promise;
            checkTransformResult(transformResult, {
                errorType: TransformNotSupportedException
            });
        });

        test('Unsupported transform (deep)', async () => {
            class Sub {
                @Pojo(TransformOnlyTransformerTest())
                public foo: string = 'default';
            }

            class Foo {
                @Pojo(GenericTransformerTest({delay: 50, transform: 'bar'}))
                public bar!: string;

                @Pojo(T.Model())
                @Relation(Sub)
                public sub: Sub = new Sub();
            }
            const transformResult = transformService.transformInverse({sub: {foo: 'test'}}, Foo, PojoTransformerSymbol);
            await transformResult.promise;
            checkTransformResult(transformResult, {
                errorType: TransformInverseNotSupportedException
            });
        });
    });
});

describe('Wildcard transformer', () => {
    test('Transform a literal object into JSON', () => {
        const result = transformService.transform({
            foo: 'foo',
            bar: 'bar'
        }, JsonTransformerSymbol, {}, Primitive());
        expect(result.result).toEqual('{"foo":"foo","bar":"bar"}');
    });

    test('Wildcard only apply to a single transform call', () => {
        const obj = {
            foo: 'foo',
            bar: 'bar'
        };
        const result = transformService.transform(obj, JsonTransformerSymbol, {}, Primitive());
        expect(result.result).toEqual('{"foo":"foo","bar":"bar"}');

        const result2 = transformService.transform(obj, JsonTransformerSymbol);
        expect(result2.result).toEqual('{}');

    });

    test('Only primitive values are included in the transform', () => {
        const result = transformService.transform({
            foo: 'foo',
            bar: 'bar',
            num: 2,
            obj: {a: 2, b: 'b'},
            func: () => {}
        }, JsonTransformerSymbol, {}, Primitive());
        expect(result.result).toEqual('{"foo":"foo","bar":"bar","num":2,"obj":{"a":2,"b":"b"}}');
    });
});

describe('Root transformers', () => {
    describe('Json', () => {
        test('Transform inverse, sync', () => {
            class Foo {
                @Json()
                public bar: string = 'bar';
            }
            const result = transformService.transformInverse('{"bar": "bar"}', Foo, JsonTransformerSymbol);
            expect(result.result).toBeInstanceOf(Foo);
            expect(result.result).toMatchObject({bar: 'bar'});
        });

        test('Transform inverse, invalid json', () => {
            class Foo {
                @Json()
                public bar: string = 'bar';
            }
            const result = transformService.transformInverse('{"bar: "bar"}', Foo, JsonTransformerSymbol);
            expect(result.error).toBe(true);
            expect(result.errorDetail).toBeInstanceOf(TransformFailedException);
        });
    });

    describe('Json', () => {
        test('Single level, sync', () => {
            class Foo {
                @Json(Primitive(Type.String))
                public bar: any = 2;
            }
            transformAndCheck(new Foo(), JsonTransformerSymbol, {
                resultEqual: JSON.stringify({bar: '2'})
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: '2'}
            });
        });

        test('Deep, models, sync', () => {
            class Bar {
                @Json(Collection(Primitive(Type.String)))
                public baz: any[] = ['a', 2];
            }

            class Foo {
                @Json(Collection(T.Model()))
                @Relation(Bar)
                public bars: Bar[] = [new Bar(), new Bar()];
            }
            transformAndCheck(new Foo(), JsonTransformerSymbol, {
                resultEqual: JSON.stringify({bars: [{baz: ['a', '2']}, {baz: ['a', '2']}]})
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bars: [{baz: ['a', '2']}, {baz: ['a', '2']}]}
            });
        });
    });
});

describe('Property transformers', () => {
    describe('Primitive', () => {
        test('String', () => {
            class Foo {
                @Pojo(Primitive(Type.String))
                public bar: any = {'test': 2};
            }
            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: '{"test":2}'}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: '{"test":2}'}
            });
        });

        test('Different types depending on the direction', () => {
            class Foo {
                @Pojo(Primitive(Type.String, Type.Number))
                public bar: number = 2;
            }

            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: '2'}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 2}
            });
        });
    });

    describe('Collection', () => {
        test('Single level, sync', () => {
            class Foo {
                @Pojo(Collection(Primitive(Type.String)))
                public bar: any[] = ['a', 2];
            }

            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: ['a', '2']}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: ['a', '2']}
            });
        });

        test('Deep, models, sync', () => {
            class Bar {
                @Pojo(Collection(Primitive(Type.String)))
                public baz: any[] = ['a', 2];
            }

            class Foo {
                @Pojo(Collection(T.Model()))
                @Relation(Bar)
                public bars: Bar[] = [new Bar(), new Bar()];
            }

            transformAndCheck(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bars: [{baz: ['a', '2']}, {baz: ['a', '2']}]}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bars: [{baz: ['a', '2']}, {baz: ['a', '2']}]}
            });
        });

        test('Single level, async', async () => {
            class Foo {
                @Pojo(Collection(GenericTransformerTest({delay: 50, transform: null, inverse: null})))
                public bar: any[] = ['a', 2];
            }

            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bar: ['a', 2]}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: ['a', 2]}
            });
        });

        test('Deep, models, async', async () => {
            class Bar {
                @Pojo(Collection(GenericTransformerTest({delay: 50, transform: null, inverse: null})))
                public baz: any[] = ['a', 2];
            }

            class Foo {
                @Pojo(Collection(T.Model()))
                @Relation(Bar)
                public bars: Bar[] = [new Bar(), new Bar()];
            }

            await transformAndCheckAsync(new Foo(), PojoTransformerSymbol, {
                resultEqual: {bars: [{baz: ['a', 2]}, {baz: ['a', 2]}]}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bars: [{baz: ['a', 2]}, {baz: ['a', 2]}]}
            });
        });
    });
});

describe('Model inheritance', () => {
    test('Inherited properties can be transformed', () => {
        class A {
            @Pojo() public aProp: string = 'a';
        }

        class B extends A {
            @Pojo() public bProp: string = 'b';
        }

        class C extends B {
            @Pojo() public cProp: string = 'c';
        }

        transformAndCheck(new C(), PojoTransformerSymbol, {
            resultEqual: {aProp: 'a', bProp: 'b', cProp: 'c'}
        }, {
            resultInstanceOf: C,
            resultMatchObject: {aProp: 'a', bProp: 'b', cProp: 'c'}
        });
    });
});
