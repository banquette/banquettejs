import 'reflect-metadata';
import { FormGroupInterface } from "../form-group.interface";
import { createTestForm } from "./__mocks__/utils";
import { ValueChangedFormEvent } from "../event/value-changed.form-event";
import { areEqual } from "@banquette/utils-misc";
import { FormFactory } from "../form.factory";
import { FormObject } from "../form-object";
import { StateChangedFormEvent } from "../event/state-changed.form-event";
import { ViewModelMock } from "./__mocks__/view-model.mock";
import { BasicState, ConfigurableChildrenFilterType } from "../constant";
import { NotEmpty } from "@banquette/validation";

class Foo {}

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
        }, false);
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
        form.setChildrenFilters(ConfigurableChildrenFilterType.UpdateValue, {});
        form.onValueChanged((event: ValueChangedFormEvent) => {
            if (event.source === form) {
                expect(event.oldValue).toEqual({username: 'previous'});
                expect(event.newValue).toEqual({username: 'new'});
            } else if (event.source === control) {
                expect(event.oldValue).toEqual('previous');
                expect(event.newValue).toEqual('new');
            }
        }, false);
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
                control.setValidator(NotEmpty());
                control.validate();
            },
            expected: [
                [BasicState.NotValidated, true],
                [BasicState.Validating, true],
                [BasicState.Validating, false],
                [BasicState.NotValidated, false]
            ]
        },
        {
            title: 'BasicState.Invalid',
            action: () => {
                const control = form.get('username');
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
        },
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
