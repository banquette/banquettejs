import 'reflect-metadata';
import { SharedConfiguration } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { Min, NotEmpty } from "@banquette/validation";
import {
    FormConfigurationSymbol,
    ValidationStrategy,
    ComponentNotFoundException,
    FormArray,
    FormComponentInterface,
    FormComponentsCollection,
    FormConfigurationInterface,
    FormControl,
    FormGroupInterface,
    FormObject
} from "../src";
import { FormFactoryTest } from "./__mocks__/form-factory-test";
import { checkFormArrayContiguity, createConcreteControl, createTestForm, expectContents } from "./__mocks__/utils";
import { ViewModelMock } from "./__mocks__/view-model.mock";

/**
 * Form creation
 */
describe('Create manually', () => {
    const form = new FormObject({
        username: createConcreteControl('default username'),
        email: createConcreteControl(),
        tags: new FormArray([
            createConcreteControl('a'),
            createConcreteControl(),
            createConcreteControl('c')
        ])
    });
    test('FormObject value', () => {
        expect(form.value).toMatchObject({
            username: 'default username',
            email: undefined,
            tags: ['a', undefined, 'c']
        });
    });

    test('FormObject item value', () => {
        expect(form.get('username').value).toEqual('default username');
        expect(form.get('email').value).toEqual(undefined);
    });

    test('FormArray value', () => {
        expect(form.get<FormArray>('tags').value).toStrictEqual(['a', undefined, 'c']);
    });

    test('FormArray item value', () => {
        expect(form.get<FormArray>('tags').get<FormControl>(0).value).toEqual('a');
        expect(form.get<FormArray>('tags').get<FormControl>(1).value).toEqual(undefined);
        expect(form.get<FormArray>('tags').get<FormControl>(2).value).toEqual('c');
    });

    test('Invalid form group child name', () => {
        expect(() => form.set(`
          `, new FormControl())).toThrow(UsageException);
        expect(() => form.set('', new FormControl())).toThrow(UsageException);
        expect(() => form.set('test-path', new FormControl())).not.toThrow(UsageException);
    });
});

describe('Create single control', () => {
    test('FormControl', () => {
        const control = new FormControl('default value');
        expect(control.value).toEqual('default value');
        expect(control.name).toBeNull();
        expect(control.path).toEqual('/');
    })
});

/**
 * Factory
 */
describe('Create with factory', () => {
    test('Single control', () => {
        const control = FormFactoryTest.CreateAsConcrete('Hey!');
        expect(control).toBeInstanceOf(FormControl);
        expect(control.value).toEqual('Hey!');
    });

    test('Single control with validator', () => {
        const control = FormFactoryTest.CreateAsConcrete('Hey!', Min(5));
        expect(control).toBeInstanceOf(FormControl);
        expect(control.value).toEqual('Hey!');
        expect(control.validated).toEqual(false);
    });

    test('Deep form with no validators', () => {
        expect(FormFactoryTest.CreateAsConcrete({
            name: 'John',
            email: 'john@domain.tld',
            password: null,
            passwordConfirm: null,
            extra: new FormControl({attr1: 'val1', attr2: 'val2'}),
            tags: [
                {
                    name: 'Tag 1',
                    color: '#ff0000'
                },
                {
                    name: 'Tag 2',
                    color: '#00ff00'
                }
            ],
            category: {
                name: 'Category 1',
                description: null
            }
        }).value).toMatchObject({
            name: 'John',
            email: 'john@domain.tld',
            password: null,
            passwordConfirm: null,
            extra: {attr1: 'val1', attr2: 'val2'},
            tags: [
                {
                    name: 'Tag 1',
                    color: '#ff0000'
                },
                {
                    name: 'Tag 2',
                    color: '#00ff00'
                }
            ],
            category: {
                name: 'Category 1',
                description: null
            }
        });
    });

    for (const delimiters of [[null, '$'], ['$', null], ['PREFIX___', '__SUFFIX']]) {
        test(`Deep form with validators (${JSON.stringify(delimiters)}`, () => {
            // Ensure the conf is what the test expect.
            const sharedConfiguration = Injector.Get<SharedConfiguration>(SharedConfiguration);
            const formConfiguration: FormConfigurationInterface = sharedConfiguration.get(FormConfigurationSymbol);
            const oldExtendedNamePrefix = formConfiguration.factory.extendedNamePrefix;
            const oldExtendedNameSuffix = formConfiguration.factory.extendedNameSuffix;
            sharedConfiguration.modify<FormConfigurationInterface>(FormConfigurationSymbol, {
                factory: {
                    extendedNamePrefix: delimiters[0],
                    extendedNameSuffix: delimiters[1]
                }
            });
            const d = (name: string) => (delimiters[0] || '') + name + (delimiters[1] || '');
            const form = FormFactoryTest.CreateAsConcrete({
                name: 'John',
                [d('email')]: ['john@domain.tld', NotEmpty()],
                password: null,
                passwordConfirm: null,
                extra: new FormControl({attr1: 'val1', attr2: 'val2'}),
                tags: [
                    {
                        [d('name')]: ['Tag 1', NotEmpty()],
                        color: '#ff0000'
                    },
                    {
                        name: 'Tag 2',
                        color: '#00ff00'
                    }
                ],
                [d('category')]: [{
                    name: 'Category 1',
                    description: null
                }, NotEmpty()]
            }) as FormObject;
            expect(form.value).toMatchObject({
                name: 'John',
                email: 'john@domain.tld',
                password: null,
                passwordConfirm: null,
                extra: {attr1: 'val1', attr2: 'val2'},
                tags: [
                    {
                        name: 'Tag 1',
                        color: '#ff0000'
                    },
                    {
                        name: 'Tag 2',
                        color: '#00ff00'
                    }
                ],
                category: {
                    name: 'Category 1',
                    description: null
                }
            });
            expect(form.get('name').validator).toBeNull();  // No validator
            expect(form.get('email').validator).not.toBeNull(); // Validator
            expect(form.get('tags').validator).toBeNull(); // No validator
            expect(form.get('tags/0/name').validator).not.toBeNull(); // Validator
            expect(form.get('tags/0/color').validator).toBeNull(); // No validator
            expect(form.get('tags/1/name').validator).toBeNull(); // No validator
            expect(form.get('category').validator).not.toBeNull(); // Validator
            expect(form.get('category/name').validator).toBeNull(); // No validator

            // Restore the conf for the other tests
            sharedConfiguration.modify<FormConfigurationInterface>(FormConfigurationSymbol, {
                factory: {
                    extendedNamePrefix: oldExtendedNamePrefix,
                    extendedNameSuffix: oldExtendedNameSuffix
                }
            });
        });
    }
});

/**
 * Naming
 */
describe('Naming', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    })
    test('Components paths', () => {
        expect(form.path).toEqual('/');
        expect(form.get('email').path).toEqual('/email');
        expect(form.get<FormGroupInterface>('category/tags').path).toEqual('/category/tags');
        expect(form.get<FormGroupInterface>('category/tags').get(1).path).toEqual('/category/tags/1');
    });
});

/**
 * Tree mutation
 */
describe('Manipulate groups', () => {
    /**
     * FormObject
     */
    test('get() (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({name: 'John'}) as FormObject;
        expect(formObj.get('name')).toBeInstanceOf(FormControl);
    });

    test('get() can take a path (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({category: {name: 'John'}}) as FormObject;
        expect(formObj.get('/category/name')).toBeInstanceOf(FormControl);
    });

    test('get() called with "/" returns the current component (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({category: {name: 'John'}}) as FormObject;
        expect(formObj.get('/')).toBeInstanceOf(FormObject);
    });

    test('get() called for an non existing control throw an exception (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({name: 'John'}) as FormObject;
        expect(() => formObj.get('nonExisting')).toThrow(ComponentNotFoundException);
    });

    test('set() (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({name: 'John'}) as FormObject;
        expectContents(formObj, {name: 'John', email: undefined});
        formObj.set('email', createConcreteControl('test@domain.tld'));
        expectContents(formObj, {name: 'John', email: 'test@domain.tld'});
    });

    test('set() deep (FormObject)', () => {
        const formObj: FormObject = new FormObject();
        formObj.set('category/name', createConcreteControl('test'));
        formObj.getByPattern('**').markAsConcrete();
        expectContents(formObj, {category: {name: 'test'}});
    });

    test('set() deep with array (FormObject)', () => {
        const formObj: FormObject = new FormObject();
        formObj.set('tags/0/name', createConcreteControl('test'));
        formObj.getByPattern('**').markAsConcrete();
        expectContents(formObj, {tags: {'0': {name: 'test'}}});
    });

    test('merge() (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({email: 'test@domain.tld'}) as FormObject;
        const formObj2: FormObject = FormFactoryTest.CreateAsConcrete({firstName: 'John', lastName: 'Doe'}) as FormObject
        expectContents(formObj, {firstName: undefined, lastName: undefined, email: 'test@domain.tld'});
        expectContents(formObj2, {firstName: 'John', lastName: 'Doe', email: undefined});
        expect(formObj.length).toEqual(1);
        expect(formObj2.length).toEqual(2);
        formObj.merge(formObj2);
        expectContents(formObj, {firstName: 'John', lastName: 'Doe', email: 'test@domain.tld'});
        expectContents(formObj2, {firstName: undefined, lastName: undefined, email: undefined});
        expect(formObj2.value).toStrictEqual({});
        expect(formObj.length).toEqual(3);
        expect(formObj2.length).toEqual(0);
    });

    test('remove() (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({firstName: 'John', lastName: 'Doe', email: 'test@domain.tld'}) as FormObject;
        expectContents(formObj, {firstName: 'John', lastName: 'Doe', email: 'test@domain.tld'});
        formObj.remove('lastName');
        expectContents(formObj, {firstName: 'John', lastName: undefined, email: 'test@domain.tld'});
        expect(formObj.length).toEqual(2);
    });

    test('clear() (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({name: 'John', email: 'test@domain.tld'}) as FormObject;
        formObj.clear();
        expectContents(formObj, {name: undefined, email: undefined});
        expect(formObj.value).toStrictEqual({});
        expect(formObj.length).toEqual(0);
    });

    test('children (FormObject)', () => {
        const formObj: FormObject = FormFactoryTest.CreateAsConcrete({name: 'John', email: 'test@domain.tld'}) as FormObject;
        expect(formObj.children).toMatchObject({
            name: expect.any(FormControl),
            email: expect.any(FormControl)
        });
    });

    /**
     * FormArray
     */
    test('get() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a']) as FormArray;
        expect(formArr.get(0)).toBeInstanceOf(FormControl);
    });

    test('get() can take a path (FormArray)', () => {
        const formArray: FormArray = FormFactoryTest.CreateAsConcrete([{name: 'John'}]) as FormArray;
        expect(formArray.get('/0/name')).toBeInstanceOf(FormControl);
    });

    test('get() called with "/" returns the current component (FormArray)', () => {
        const formArray: FormArray = FormFactoryTest.CreateAsConcrete([{name: 'John'}]) as FormArray;
        expect(formArray.get('/')).toBeInstanceOf(FormArray);
    });

    test('get() called for an non existing control throw an exception (FormArray)', () => {
        const formArray: FormArray = FormFactoryTest.CreateAsConcrete(['a']) as FormArray;
        expect(() => formArray.get(1)).toThrow(ComponentNotFoundException);
    });

    test('append() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a']) as FormArray;
        expectContents(formArr, ['a']);
        formArr.append(createConcreteControl('b'));
        expectContents(formArr, ['a', 'b']);
    });

    test('append() existing item (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a', 'c', 'b']) as FormArray;
        expectContents(formArr, ['a', 'c', 'b']);
        formArr.append(formArr.get(1));
        expectContents(formArr, ['a', 'b', 'c']);
    });

    test('prepend() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a']) as FormArray;
        expectContents(formArr, ['a']);
        formArr.prepend(createConcreteControl('b'));
        expectContents(formArr, ['b', 'a']);
    });

    test('prepend() existing item (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['b', 'c', 'a']) as FormArray;
        expectContents(formArr, ['b', 'c', 'a']);
        formArr.prepend(formArr.get(2));
        expectContents(formArr, ['a', 'b', 'c']);
    });

    test('insert() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a', 'c', 'd']) as FormArray;
        expectContents(formArr, ['a', 'c', 'd']);
        formArr.insert(1, createConcreteControl('b'));
        expectContents(formArr, ['a', 'b', 'c', 'd']);
        checkFormArrayContiguity(formArr);
    });

    test('merge() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a']) as FormArray;
        const formArr2: FormArray = FormFactoryTest.CreateAsConcrete(['b', 'c']) as FormArray
        expectContents(formArr, ['a']);
        expectContents(formArr2, ['b', 'c']);
        expect(formArr.length).toEqual(1);
        expect(formArr2.length).toEqual(2);
        formArr.merge(formArr2);
        expectContents(formArr, ['a', 'b', 'c']);
        expectContents(formArr2, []);
        expect(formArr2.value).toStrictEqual([]);
        expect(formArr.length).toEqual(3);
        expect(formArr2.length).toEqual(0);
    });

    test('remove() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a', 'b', 'c']) as FormArray;
        expectContents(formArr, ['a', 'b', 'c']);
        formArr.remove(1);
        expectContents(formArr, ['a', 'c']);
        expect(formArr.length).toEqual(2);
        checkFormArrayContiguity(formArr);
    });

    test('clear() (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a', 'b']) as FormArray;
        formArr.clear();
        expectContents(formArr, []);
        expect(formArr.value).toStrictEqual([]);
        expect(formArr.length).toEqual(0);
    });

    test('children (FormArray)', () => {
        const formArr: FormArray = FormFactoryTest.CreateAsConcrete(['a', 'b']) as FormArray;
        expect(formArr.children).toMatchObject([
            expect.any(FormControl),
            expect.any(FormControl)
        ]);
    });
});

/**
 * Form components collection
 */
describe('Form components collection', () => {
    test('we can group multiple components in a collection', () => {
        const collection = createTestForm().getByPattern('/**/name');
        expect(collection.paths.sort()).toMatchObject([
            '/category/name',
            '/category/tags/0/name',
            '/category/tags/1/name',
            '/category/tags/2/name',
        ].sort());
    });

    test('we can add a tag to the pattern', () => {
        const collection = (FormFactoryTest.CreateAsConcrete({
            name$: [null, NotEmpty()],
            category: {
                name: 'no validator here'
            }
        }) as FormObject).getByPattern('/**/name:validated');
        expect(collection.paths).toMatchObject(['/category/name']);
    });

    test('relative patterns have their parent path added automatically', () => {
        const form = FormFactoryTest.CreateAsConcrete({
            name$: [null, NotEmpty()],
            category: {
                name: 'no validator here'
            }
        }) as FormObject;
        expect(form.getByPattern('category/name').length).toEqual(1);
        expect(form.get<FormGroupInterface>('category').getByPattern('name').length).toEqual(1);
    });

    test('if multiple tags are added to the pattern, they all must match', () => {
        const form = FormFactoryTest.CreateAsConcrete({
            name$: [null, NotEmpty()],
            category: {name: 'no validator here'},
            other: {name$: [null, NotEmpty()]}
        }) as FormObject;
        new ViewModelMock(form.get('/other/name')).focus();
        const collection = form.getByPattern('/**/name:notValidated:focused');
        expect(collection.paths).toMatchObject(['/other/name']);
    });

    test('"**" should match everything expect the component on which the call is made', () => {
        const form = createTestForm(true /* to make form controls concrete */);
        const collection = form.getByPattern('**:concrete');
        expect(collection.length).toEqual(form.sizeDeep - 1); // -1 because the root of the form is not in the collection.
    });

    describe('Calling a method applies to all components of the collection', () => {
        const tests = [
            {
                title: 'enable()',
                pattern: '**',
                state: 'enabled',
                actions: ['enable', 'disable']
            },
            {
                title: 'markAsConcrete()',
                pattern: '**',
                state: 'concrete',
                actions: ['markAsConcrete', 'markAsVirtual']
            }
        ];

        const checkValueOfEachMatchingPattern = (form: FormGroupInterface,
                                                 pattern: string,
                                                 property: keyof FormComponentInterface,
                                                 value: any): void => {
            form.getByPattern(pattern).forEach((component: FormComponentInterface) => {
                expect({
                    path: component.path,
                    value: component[property]
                }).toEqual({path: component.path, value})
            });
        };

        for (const testItem of tests) {
            test(testItem.title, () => {
                const form = createTestForm(true);
                const collection = form.getByPattern(testItem.pattern);
                (collection as any)[testItem.actions[0]]();
                checkValueOfEachMatchingPattern(
                    form,
                    testItem.pattern,
                    testItem.state as keyof FormComponentInterface,
                    true
                );
                expect({
                    path: '[collection]',
                    value: collection[testItem.state as keyof FormComponentsCollection]
                }).toEqual({path: '[collection]', value: true});
                (collection.get(0) as any)[testItem.actions[1]]();
                expect({
                    path: '[collection]',
                    value: collection[testItem.state as keyof FormComponentsCollection]
                }).toEqual({path: '[collection]', value: false});
            });
        }

        test('setValue()', () => {
            const form = createTestForm();
            const collection = form.getByPattern('**/name');
            collection.setValue('new');
            checkValueOfEachMatchingPattern(form, '**/name', 'value', 'new');
        });

        test('setValidator()', () => {
            const form = createTestForm();
            form.getByPattern('**').markAsConcrete();
            checkValueOfEachMatchingPattern(form, ':control', 'validated', true);
            form.getByPattern(':control').setValidator(NotEmpty());
            checkValueOfEachMatchingPattern(form, ':control', 'validated', false);
        });

        test('setValidationStrategy()', () => {
            const form = createTestForm();
            checkValueOfEachMatchingPattern(form, ':control', 'validationStrategy', ValidationStrategy.Inherit);
            form.getByPattern(':control').setValidationStrategy(ValidationStrategy.OnChange);
            checkValueOfEachMatchingPattern(form, ':control', 'validationStrategy', ValidationStrategy.OnChange);
        });
    });
});
