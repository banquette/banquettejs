import 'reflect-metadata';
import { areEqual } from "@banquette/utils-misc/are-equal";
import { NotEmpty } from "@banquette/validation/type/not-empty";
import { NotEqual } from "@banquette/validation/type/not-equal";
import { ValidationResult } from "@banquette/validation/validation-result";
import { ValidateAfterDelay } from "../../validation/__tests__/__mocks__/type/validate-after-delay.test-validator";
import {
    FormGroupInterface,
    ValueChangedFormEvent,
    FormFactory,
    FormObject,
    StateChangedFormEvent,
    BasicState,
    FilterGroup,
    BeforeValueChangeFormEvent,
    ValidationStrategy,
    FormControl,
    ValidationEndFormEvent
} from "../src";
import { createTestForm, createConcreteControl } from "./__mocks__/utils";
import { ViewModelMock } from "./__mocks__/view-model.mock";

class Foo {}

/**
 * Before value change
 */
describe('BeforeValueChange', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('trigger before the value has changed', () => {
        const control = form.get<FormControl>('username');
        control.setValue('before');
        control.onBeforeValueChange((event: BeforeValueChangeFormEvent) => {
            expect(control.value).toEqual('before');
            expect(event.oldValue).toEqual('before');
            expect(event.newValue).toEqual('new');
        });
        control.setValue('new');
        expect.assertions(3);
    });

    test('the change can be canceled in the subscriber', () => {
        const control = form.get<FormControl>('username');
        control.setValue('before');
        control.onBeforeValueChange((event: BeforeValueChangeFormEvent) => {
            event.refuse();
        });
        control.setValue('new');
        expect(control.value).toEqual('before');
    });

    test('the value can be modified in the subscriber', () => {
        const control = form.get<FormControl>('username');
        control.setValue('before');
        control.onBeforeValueChange((event: BeforeValueChangeFormEvent) => {
            event.newValue = 'other';
        });
        control.setValue('new');
        expect(control.value).toEqual('other');
    });
});

/**
 * Value changed
 */
describe('ValueChanged', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('trigger on the control the change happened on', () => {
        let value = '';
        const control = form.get('username');
        control.onValueChanged((event) => {
            value = event.newValue;
        });
        control.setValue('new');
        expect(value).toEqual('new');
    });

    test('the event gives the previous and new value', () => {
        const control = form.get('username');
        control.setValue('previous');
        control.onValueChanged((event: ValueChangedFormEvent) => {
            expect(event.oldValue).toEqual('previous');
            expect(event.newValue).toEqual('new');
        });
        control.setValue('new');
        expect.assertions(2);
    });

    test('by default events only emit for component they have been set onto', () => {
        let value = '';
        const control = form.get('category/tags/1/name');
        form.onValueChanged((event) => {
            if (event.source === control) {
                value = event.newValue;
            }
        });
        control.setValue('new');
        expect(value).toEqual('');
    });

    test('the "selfOnly" argument can be set to false so events are triggered on parents too', () => {
        let value = '';
        let source = null;
        const control = form.get('category/tags/1/name');
        form.onValueChanged((event) => {
            if (event.source === control) {
                value = event.newValue;
                source = event.source;
            }
        }, 0, false);
        control.setValue('new');
        expect(value).toEqual('new');
        expect(source).toStrictEqual(control);
    });

    test('doesn\'t trigger when the value does not change', () => {
        const control = form.get('username');
        const changes: any[] = [];
        const defaultValue = control.value;
        control.onValueChanged((event: ValueChangedFormEvent) => {
            changes.push([event.oldValue, event.newValue]);
        });

        // First change
        control.setValue('new');
        control.setValue('new');

        // Second change
        control.setValue({test: 2});
        control.setValue({test: 2});

        // Third change
        const foo1 = new Foo();
        control.setValue(foo1);

        // Fourth change
        const foo2 = new Foo();
        control.setValue(foo2);
        control.setValue(foo2);

        expect(changes.length).toEqual(4);
        expect(areEqual([
            [defaultValue, 'new'],
            ['new', {test: 2}],
            [{test: 2}, foo1],
            [foo1, foo2]
        ], changes)).toEqual(true);
    });

    test('trigger when group change through a child', () => {
        const form = FormFactory.Create({username: 'previous'}) as FormObject;
        const control = form.get('username');

        form.getByPattern('**').markAsConcrete();
        form.setGroupFilters(FilterGroup.UpdateValue, {});
        form.onValueChanged((event: ValueChangedFormEvent) => {
            if (event.source === form) {
                expect(event.oldValue).toEqual({username: 'previous'});
                expect(event.newValue).toEqual({username: 'new'});
            } else if (event.source === control) {
                expect(event.oldValue).toEqual('previous');
                expect(event.newValue).toEqual('new');
            }
        }, 0, false);
        control.setValue('new');
        expect.assertions(4);
    });
});

/**
 * State changed
 */
describe('StateChanged', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    const tests = [
        {
            title: 'BasicState.Focused',
            action: () => {
                const vm = new ViewModelMock(form.get('username'));
                vm.focus();
                vm.blur();
            },
            expected: [
                [BasicState.Focused, true],
                [BasicState.Focused, false]
            ]
        },
        {
            title: 'BasicState.Touched',
            action: () => {
                const controlVM = new ViewModelMock(form.get('username'));
                controlVM.focus();
                controlVM.blur();

                // Should not trigger again.
                controlVM.focus();
                controlVM.blur();
            },
            expected: [[BasicState.Touched, true]]
        },
        {
            title: 'BasicState.Dirty',
            action: () => {
                const control = form.get('username');
                const oldValue = control.value;
                control.setValue('new');
                // Setting the control back to its original value should not trigger
                control.setValue(oldValue);

                // Setting it back to a new value too, because the control is already dirty
                control.setValue('new value');
            },
            expected: [[BasicState.Dirty, true]]
        },
        {
            title: 'BasicState.Changed',
            action: () => {
                const control = form.get('username');
                const oldValue = control.value;
                control.setValue('new');
                control.setValue(oldValue);
            },
            expected: [
                [BasicState.Changed, true],
                [BasicState.Changed, false]
            ]
        },
        {
            title: 'BasicState.Busy',
            action: () => {
                const vm = new ViewModelMock(form.get('username'));
                vm.markAsBusy();
                vm.markAsNotBusy();
            },
            expected: [
                [BasicState.Busy, true],
                [BasicState.Busy, false]
            ]
        },
        {
            title: 'BasicState.NotValidated / BasicState.Validating',
            action: () => {
                const control = form.get('username');
                control.markAsConcrete();
                control.setValidator(NotEmpty());
                control.validate();
            },
            expected: [
                [BasicState.NotValidated, true], // One for /username
                [BasicState.NotValidated, true], // One for / (when doing updateValidator())
                [BasicState.Validating, true],
                [BasicState.Validating, false],
                [BasicState.NotValidated, false]
            ]
        },
        {
            title: 'BasicState.Invalid',
            action: () => {
                const control = form.get('username');
                control.markAsConcrete();
                control.setValidator(NotEmpty());
                control.setValue('');
                control.validate();
                control.setValue('new');
                control.validate();
            },
            expected: [
                [BasicState.Invalid, true],
                [BasicState.Invalid, false]
            ]
        },
        {
            title: 'BasicState.Concrete',
            action: () => {
                const vm = new ViewModelMock(form.get('username'));
                vm.realControl.markAsVirtual();
            },
            expected: [
                [BasicState.Concrete, true],
                [BasicState.Concrete, false]
            ]
        }
    ];

    for (const testItem of tests) {
        test(testItem.title, () => {
            const changes: any[] = [];
            form.onStateChanged((event: StateChangedFormEvent) => {
                for (const expectedItem of testItem.expected) {
                    if (expectedItem[0] === event.state) {
                        changes.push([event.state, event.newValue]);
                        return ;
                    }
                }
            });
            testItem.action();
            testItem.expected.sort((a: any, b: any) => a[0].localeCompare(b[0]));
            changes.sort((a: any, b: any) => a[0].localeCompare(b[0]));
            expect(areEqual(testItem.expected, changes)).toEqual(true);
        });
    }
});

/**
 * Validation
 */
describe('Validation', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = new FormObject({
            syncAttr: createConcreteControl('default value', NotEqual('invalid')),
            asyncAttr: createConcreteControl('default value', ValidateAfterDelay(50, NotEqual('invalid'))),
            container: new FormObject({
                syncAttr: createConcreteControl('default value', NotEqual('invalid')),
                asyncAttr: createConcreteControl('default value', ValidateAfterDelay(50, NotEqual('invalid')))
            })
        });
        form.setValidationStrategy(ValidationStrategy.OnChange);
    });

    test('ValidationStart is called when a validation starts', () => {
        let sources: any = [];
        const control = form.get('syncAttr');
        control.onValidationStart((event) => {
            sources.push(event.source);
        });
        control.setValue('new');
        expect(sources.length).toEqual(1);
        expect(sources).toMatchObject([
            expect.objectContaining({path: '/syncAttr'})
        ]);
    });

    test('ValidationStart can be called when a child validation starts', () => {
        let sources: any = [];
        form.onValidationStart((event) => {
            sources.push(event.source);
        }, 0, false);
        form.get('syncAttr').setValue('new');
        expect(sources.length).toEqual(1);
        expect(sources).toMatchObject([
            expect.objectContaining({path: '/syncAttr'})
        ]);
    });

    test('ValidationStart doesn\'t trigger parent listeners by default (selfOnly is true)', () => {
        let sources: any = [];
        form.onValidationStart((event) => {
            sources.push(event.source);
        });
        form.get('syncAttr').setValue('new');
        expect(sources.length).toEqual(0);
        expect(sources).toMatchObject([]);
    });

    test('ValidationStart is called each time the validation starts, even if already running', async () => {
        const fn: any = jest.fn();
        form.onValidationStart(fn, 0, false);
        form.get('asyncAttr').setValue('new');
        form.get('asyncAttr').setValue('invalid');
        await form.validate();
        expect(form.invalid).toEqual(true);
        expect(fn).toBeCalledTimes(3);
    });

    test('ValidationStart is called even if there is no validator on the component', () => {
        const fn: any = jest.fn();
        form.get('syncAttr').onValidationStart(fn);
        form.get('syncAttr').setValue('new');
        expect(fn).toBeCalledTimes(1);
    });

    test('ValidationEnd contains the validation result', () => {
        form.get('syncAttr').onValidationEnd((event: ValidationEndFormEvent) => {
            expect(event.result).toBeInstanceOf(ValidationResult);
        });
        form.get('syncAttr').setValue('new');
        expect.assertions(1);
    });

    test('ValidationEnd always contains a non pending validation result', async () => {
        form.onValidationEnd((event: ValidationEndFormEvent) => {
            expect(event.result.waiting).toBe(false);
            expect(event.result.invalid).toBe(true);
        });
        form.setValidationStrategy(ValidationStrategy.None);
        form.get('asyncAttr').setValue('invalid');
        await form.validate();
        expect.assertions(2);
    });
});
