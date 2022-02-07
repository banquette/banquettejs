import 'reflect-metadata';
import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { Assert } from "@banquette/model-validation/decorator/assert";
import { Relation } from "@banquette/model/decorator/relation";
import { ModelTransformMetadataService } from "@banquette/model/model-transform-metadata.service";
import { TransformResult } from "@banquette/model/transform-result";
import { TransformService } from "@banquette/model/transformer/transform.service";
import { Primitive, Type } from "@banquette/model/transformer/type/primitive";
import { Min } from "@banquette/validation/type/min";
import { NotEmpty } from "@banquette/validation/type/not-empty";
import { transformAndCheck, transformAndCheckAsync } from "../../model/__tests__/utils";
import { FormTransformerSymbol, Form, FormControl, FormObject, FormArray } from "../src";
import { FormObject as FormObjectObject } from "@banquette/form/form-object";
import { FormControl as FormControlObject } from "@banquette/form/form-control";
import { FilterGroup } from "@banquette/form/constant";
import { GenericTransformerTest } from "../../model/__tests__/__mocks__/generic-transformer-test";

describe('General mechanics', () => {
    test('Multiple levels, sync', () => {
        class Bar {
            @Form()
            public baz: string = 'baz';
        }

        class Foo {
            @Form()
            public foo: string = 'a';

            @Relation(Bar)
            @Form(FormObject())
            public bar: Bar = new Bar();

            // No @Form, should be omitted.
            public ignored: string = 'b';
        }

        transformAndCheck(new Foo(), FormTransformerSymbol, {
            resultInstanceOf: FormObjectObject,
            resultMatchObject: {
                children: expect.objectContaining({
                    foo: expect.any(FormControlObject),
                    bar: expect.objectContaining({
                        children: expect.objectContaining({
                            baz: expect.any(FormControlObject)
                        })
                    })
                })
            }
        }, {
            resultInstanceOf: Foo,
            resultMatchObject: {foo: 'a', bar: {baz: 'baz'}}
        });
    });

    test('Multiple levels, async', async () => {
        class Bar {
            @Form(GenericTransformerTest({delay: 50, transform: null, inverse: null}))
            public baz: string = 'baz';
        }
        class Foo {
            @Form(GenericTransformerTest({delay: 50, transform: null, inverse: null}))
            public foo: string = 'a';

            @Relation(Bar)
            @Form(FormObject())
            public bar: Bar = new Bar();
        }
        await transformAndCheckAsync(new Foo(), FormTransformerSymbol, {
            resultInstanceOf: FormObjectObject,
            resultMatchObject: {
                children: expect.objectContaining({
                    foo: expect.any(FormControlObject),
                    bar: expect.objectContaining({
                        children: expect.objectContaining({
                            baz: expect.any(FormControlObject)
                        })
                    })
                })
            }
        }, {
            resultInstanceOf: Foo,
            resultMatchObject: {foo: 'a', bar: {baz: 'baz'}}
        });
    });

    test('Validator is applied on FormControl', () => {
        class Foo {
            @Assert(NotEmpty())
            @Form()
            public foo: string = '';
        }
        const form = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol).result as FormObjectObject;
        form.setGroupFilters(FilterGroup.Errors, {});
        form.setGroupFilters(FilterGroup.Validate, {});
        expect(form.validate() || form.valid).toEqual(false);
        expect(form.errorsDeepMap).toMatchObject({
            '/': expect.arrayContaining([]),
            '/foo': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})])
        });
    });

    test('Validator is applied on FormArray', () => {
        class Foo {
            @Assert(Min(3))
            @Form(FormArray())
            public foo: string[] = ['a', 'b'];
        }
        const form = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol).result as FormObjectObject;
        form.setGroupFilters(FilterGroup.Errors, {});
        form.setGroupFilters(FilterGroup.Validate, {});
        expect(form.validate() || form.valid).toEqual(false);
        expect(form.errorsDeepMap).toMatchObject({
            '/': expect.arrayContaining([]),
            '/foo': expect.arrayContaining([expect.objectContaining({type: 'min'})])
        });
    });

    test('Validator is applied on FormObject', () => {
        class Bar {
            public baz: string = 'baz';
        }
        class Foo {
            @Assert(NotEmpty())
            @Form(FormObject())
            public bar!: Bar;
        }
        const form = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol).result as FormObjectObject;
        form.setGroupFilters(FilterGroup.Errors, {});
        form.setGroupFilters(FilterGroup.Validate, {});
        expect(form.validate() || form.valid).toEqual(false);
        expect(form.errorsDeepMap).toMatchObject({
            '/': expect.arrayContaining([]),
            '/bar': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})])
        });
    });

    test('Wildcard transformer for literal objects', () => {
        const transformMetadata = Injector.Get(ModelTransformMetadataService);
        transformMetadata.registerWildcard(Object, FormTransformerSymbol, FormControl());
        const result: FormObjectObject = Injector.Get(TransformService).transform({
            foo: 'foo',
            bar: 'bar'
        }, FormTransformerSymbol).result;
        result.setGroupFilters(FilterGroup.Size, {});
        expect(result.sizeDeep).toEqual(3);
        expect(result.get('foo')).toBeInstanceOf(FormControlObject);
        expect(result.get('bar')).toBeInstanceOf(FormControlObject);
    });

    test('Incompatible transformer and value', () => {
        class Foo {
            @Form(FormObject())
            public bar: string = '';
        }
        const result = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol);
        expect(result.error).toEqual(true);
        expect(result.errorDetail).toBeInstanceOf(UsageException);
        expect(result.result).toBeUndefined();
    });

    test('A relation can be set as value of a FormControl', () => {
        class Bar {
            public baz: string = 'baz';
        }
        class Foo {
            @Form()
            @Relation(Bar)
            public bar: Bar = new Bar();
        }
        const form = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol).result as FormObjectObject;
        expect(form.get('bar').value).toBeInstanceOf(Bar);
    });

    test('A FormControl cannot contain another form transformer', () => {
        expect(() => {
            class Foo {
                @Form(FormControl(FormArray()))
                public bar: string[] = [];
            }
        }).toThrow(UsageException);
    });

    test('A property defined on the constructor can be a form component', () => {
        class Foo {
            public constructor(@Form() public foo: string) {
            }
        }
        const form = Injector.Get(TransformService).transform(new Foo('foo'), FormTransformerSymbol).result as FormObjectObject;
        expect(form.get('foo').value).toEqual('foo');
    });
});

describe('Individual transformers', () => {
    describe('FormControl', () => {
        test('Single attribute, sync', () => {
            class Foo {
                @Form()
                public bar: string = 'a';
            }

            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({bar: expect.any(FormControlObject)})}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'a'}
            });
        });

        test('Multiple attributes, sync', () => {
            class Foo {
                @Form()
                public foo: string = 'foo';

                @Form()
                public bar: string = 'bar';
            }

            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({
                    foo: expect.any(FormControlObject),
                    bar: expect.any(FormControlObject)
                })}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {foo: 'foo', bar: 'bar'}
            });
        });

        test('With explicit FormControl transformer', () => {
            class Foo {
                @Form(FormControl(Primitive(Type.Number)))
                public bar: string = '1';
            }

            const result: TransformResult<FormObjectObject> = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol);
            expect(result.result).toBeInstanceOf(FormObjectObject);
            expect(result.result.get('bar').value).toStrictEqual(1);
        });

        test('FormControl transformer is implicit when another type non form related transformer is given to @Form', () => {
            class Foo {
                @Form(Primitive(Type.Number))
                public bar: string = '1';
            }

            const result: TransformResult<FormObjectObject> = Injector.Get(TransformService).transform(new Foo(), FormTransformerSymbol);
            expect(result.result).toBeInstanceOf(FormObjectObject);
            expect(result.result.get('bar').value).toStrictEqual(1);
        });

        test('Single attribute, async', async () => {
            class Foo {
                @Form(GenericTransformerTest({delay: 50, transform: null, inverse: null}))
                public bar: string = 'a';
            }

            await transformAndCheckAsync(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({bar: expect.any(FormControlObject)})}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: 'a'}
            });
        });

        test('Multiple attributes, sync', async () => {
            class Foo {
                @Form(GenericTransformerTest({delay: 50, transform: null, inverse: null}))
                public foo: string = 'foo';

                @Form(GenericTransformerTest({delay: 150, transform: null, inverse: null}))
                public bar: string = 'bar';
            }

            await transformAndCheckAsync(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({
                    foo: expect.any(FormControlObject),
                    bar: expect.any(FormControlObject)
                })}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {foo: 'foo', bar: 'bar'}
            });
        });
    });

    describe('FormObject', () => {
        test('Single attribute, sync', () => {
            class Bar {
                @Form()
                public a: string = 'a';
            }
            class Foo {
                @Form(FormObject())
                @Relation(Bar)
                public bar: Bar = new Bar();
            }

            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({
                        bar: expect.objectContaining({
                            children: expect.objectContaining({
                                a: expect.any(FormControlObject)
                            })
                        })
                    })}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: {a: 'a'}}
            });
        });

        test('No child object instance', () => {
            class Bar {
                @Form()
                public a: string = 'a';
            }
            class Foo {
                @Form(FormObject())
                @Relation(Bar)
                public bar: Bar|null = null;
            }

            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({
                    bar: expect.any(FormObjectObject)
                })}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: null}
            });
        });

        test('Single attribute, async', async () => {
            class Bar {
                @Form(GenericTransformerTest({delay: 50, transform: null, inverse: null}))
                public a: string = 'a';
            }
            class Foo {
                @Form(FormObject())
                @Relation(Bar)
                public bar: Bar = new Bar();
            }

            await transformAndCheckAsync(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {children: expect.objectContaining({
                    bar: expect.objectContaining({
                        children: expect.objectContaining({
                            a: expect.any(FormControlObject)
                        })
                    })
                })}
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: {a: 'a'}}
            });
        });
    });

    describe('FormArray', () => {
        test('Primitive values, sync', () => {
            class Foo {
                @Form(FormArray(FormControl(Primitive(Type.String))))
                public bar: Array<string|number> = ['a', 2, 'c'];
            }
            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {
                    children: expect.objectContaining({
                        bar: expect.objectContaining({
                            children: expect.arrayContaining([
                                expect.objectContaining({value: 'a'}),
                                expect.objectContaining({value: '2'}),
                                expect.objectContaining({value: 'c'})
                            ])
                        })
                    })
                }
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: ['a', '2', 'c']}
            });
        });

        test('FormControl is can be implicit', () => {
            class Foo {
                @Form(FormArray(Primitive(Type.String)))
                public bar: Array<string|number> = ['a', 2, 'c'];
            }
            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {
                    children: expect.objectContaining({
                        bar: expect.objectContaining({
                            children: expect.arrayContaining([
                                expect.objectContaining({value: 'a'}),
                                expect.objectContaining({value: '2'}),
                                expect.objectContaining({value: 'c'})
                            ])
                        })
                    })
                }
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: ['a', '2', 'c']}
            });
        });

        test('Array of FormObject, sync', () => {
            class Bar {
                @Form()
                public baz: string = 'a';
            }
            class Foo {
                @Form(FormArray(FormObject()))
                @Relation(Bar)
                public bar: Bar[] = [new Bar(), new Bar()];
            }
            transformAndCheck(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {
                    children: expect.objectContaining({
                        bar: expect.objectContaining({
                            children: expect.arrayContaining([
                                expect.objectContaining({
                                    children: expect.objectContaining({
                                        baz: expect.objectContaining({value: 'a'})
                                    })
                                }),
                                expect.objectContaining({
                                    children: expect.objectContaining({
                                        baz: expect.objectContaining({value: 'a'})
                                    })
                                })
                            ])
                        })
                    })
                }
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: [{baz: 'a'}, {baz: 'a'}]}
            });
        });

        test('Primitive values, async', async () => {
            class Foo {
                @Form(FormArray(FormControl(GenericTransformerTest({delay: 50, transform: null, inverse: null}))))
                public bar: Array<string|number> = ['a', 2, 'c'];
            }
            await transformAndCheckAsync(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {
                    children: expect.objectContaining({
                        bar: expect.objectContaining({
                            children: expect.arrayContaining([
                                expect.objectContaining({value: 'a'}),
                                expect.objectContaining({value: 2}),
                                expect.objectContaining({value: 'c'})
                            ])
                        })
                    })
                }
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: ['a', 2, 'c']}
            });
        });

        test('Array of FormObject, async', async () => {
            class Bar {
                @Form(GenericTransformerTest({delay: 50, transform: null, inverse: null}))
                public baz: string = 'a';
            }
            class Foo {
                @Form(FormArray(FormObject()))
                @Relation(Bar)
                public bar: Bar[] = [new Bar(), new Bar()];
            }
            await transformAndCheckAsync(new Foo(), FormTransformerSymbol, {
                resultInstanceOf: FormObjectObject,
                resultMatchObject: {
                    children: expect.objectContaining({
                        bar: expect.objectContaining({
                            children: expect.arrayContaining([
                                expect.objectContaining({
                                    children: expect.objectContaining({
                                        baz: expect.objectContaining({value: 'a'})
                                    })
                                }),
                                expect.objectContaining({
                                    children: expect.objectContaining({
                                        baz: expect.objectContaining({value: 'a'})
                                    })
                                })
                            ])
                        })
                    })
                }
            }, {
                resultInstanceOf: Foo,
                resultMatchObject: {bar: [{baz: 'a'}, {baz: 'a'}]}
            });
        });
    });
});
