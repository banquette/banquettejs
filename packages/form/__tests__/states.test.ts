import 'reflect-metadata';
import {
    BasicState,
    ContextualizedState,
    InverseState,
    FormArray,
    FormComponentInterface,
    FormControl,
    FormGroupInterface,
    FormObject,
    FormFactory
} from "../src";
import { checkStates, createTestForm } from "./__mocks__/utils";
import { ViewModelMock } from "./__mocks__/view-model.mock";

describe('global', () => {
    let form: FormGroupInterface;

    beforeAll(() => {
        form = createTestForm();
    });

    test('default states are correct', () => {
        checkStates(form, {
            [ContextualizedState.Disabled]: false,
            [BasicState.Focused]: false,
            [BasicState.Dirty]: false,
            [BasicState.Touched]: false,
            [BasicState.Busy]: false,
            [BasicState.Changed]: false,
            [BasicState.Concrete]: false
        });
    });
});

/**
 * Disabled
 */
describe('disabled', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });
    test('a FormControl is disabled if no view model', () => {
        checkStates(form.get('username'), {[ContextualizedState.Disabled]: true});
    });

    test('a FormObject is enabled by default, even if virtual', () => {
        checkStates(form, {[ContextualizedState.Disabled]: false});
    });

    test('a FormArray is enabled by default, even if virtual', () => {
        checkStates(form.get('category/tags'), {[ContextualizedState.Disabled]: false});
    });

    test('enabled after a view model is set', () => {
        const control: FormControl = form.get('username');
        new ViewModelMock(control);
        checkStates(form.get('username'), {[ContextualizedState.Disabled]: false});
    });

    test('disable from a view model', () => {
        const control: FormControl = form.get('username');
        const vm = new ViewModelMock(control);
        vm.control.markAsDisabled();
        checkStates(form.get('username'), {[ContextualizedState.Disabled]: true});
    });

    test('still disabled if not all sources of deactivation have re enabled it', () => {
        const control: FormControl = form.get('username');

        // Disable it manually
        control.disable();

        // Now set a view model, that will enable it
        new ViewModelMock(control);

        // Should still be disabled because we ask for it explicitly
        checkStates(control, {[ContextualizedState.Disabled]: true});

        // Now enable it
        control.enable();
        checkStates(control, {[ContextualizedState.Disabled]: false});
    });

    test('disabled doesn\'t change on reset', () => {
        const username = new ViewModelMock(form.get('username'));

        username.realControl.reset();
        checkStates(username.realControl, {[ContextualizedState.Disabled]: false});

        // Now enable it
        username.realControl.disable();
        username.realControl.reset();
        checkStates(username.realControl, {[ContextualizedState.Disabled]: true});
    });
});

/**
 * Focused
 */
describe('focused', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });
    test('not focused if no view model', () => {
        checkStates(form.get('username'), {[BasicState.Focused]: false});
    });

    test('not focused if view model', () => {
        const control: FormControl = form.get('username');
        new ViewModelMock(control);
        checkStates(control, {[BasicState.Focused]: false});
    });

    test('focus() does not work without a view model', () => {
        const control: FormControl = form.get('username');
        control.focus();
        checkStates(control, {[BasicState.Focused]: false});
    });

    test('focused when the view model get the focus', () => {
        const control: FormControl = form.get('username');
        const vm = new ViewModelMock(control);
        vm.focus();
        checkStates(control, {[BasicState.Focused]: true});
    });

    test('lose focus when blur() is called', () => {
        const username = new ViewModelMock(form.get<FormControl>('username'));
        username.focus();
        checkStates(username.realControl, {[BasicState.Focused]: true});
        username.blur();
        checkStates(username.realControl, {[BasicState.Focused]: false});
    });

    test('lose focus when another field gets it', () => {
        const username = new ViewModelMock(form.get<FormControl>('username'));
        const email = new ViewModelMock(form.get<FormControl>('email'));

        username.focus();
        checkStates(username.realControl, {[BasicState.Focused]: true});
        checkStates(email.realControl, {[BasicState.Focused]: false});

        email.focus();
        checkStates(username.realControl, {[BasicState.Focused]: false});
        checkStates(email.realControl, {[BasicState.Focused]: true});
    });

    test('parent has focus when a child gets it', () => {
        const username = new ViewModelMock(form.get<FormControl>('username'));
        checkStates(form, {[BasicState.Focused]: false});
        username.focus();
        checkStates(form, {[BasicState.Focused]: true});
        checkStates(username.realControl, {[BasicState.Focused]: true});
    });

    test('lose focus when the focused control is removed (FormObject)', () => {
        const tag1Name = new ViewModelMock(form.get<FormControl>('category/tags/1/name'));
        tag1Name.focus();
        expect(form.focused).toEqual(true);
        tag1Name.realControl.detach();
        expect(form.focused).toEqual(false);
    });

    test('lose focus when the focused control is removed (FormArray)', () => {
        const tags = form.get<FormArray>('category/tags');
        const tag1Name = new ViewModelMock(tags.get<FormControl>('1/name'));
        tag1Name.focus();
        expect(form.focused).toEqual(true);
        tags.remove(1);
        expect(form.focused).toEqual(false);
    });

    test('gain focus when a focused child is added (FormObject::set)', () => {
        const category = form.get<FormObject>('category');
        const categoryColor = new ViewModelMock(new FormControl()); // wrap it in a view model so we can focus it.
        categoryColor.focus();
        expect(form.focused).toEqual(false);
        category.set('color', categoryColor.realControl);
        expect(form.focused).toEqual(true);
        categoryColor.blur();
        expect(form.focused).toEqual(false);
    });

    test('gain focus when a focused child is added (FormObject::constructor)', () => {
        const control = new ViewModelMock(new FormControl());
        control.focus();
        const group = new FormObject({sub: control.realControl});
        expect(group.focused).toEqual(true);
    });

    const testsConfigs = [
        {
            title: 'FormObject::set',
            set: (component: FormComponentInterface) => form.get<FormObject>('category').set('color', component)
        },
        {
            title: 'FormArray::set',
            set: (component: FormComponentInterface) => form.get<FormArray>('category/tags').set(1, component)
        },
        {
            title: 'FormArray::append',
            set: (component: FormComponentInterface) => form.get<FormArray>('category/tags').append(component)
        },
        {
            title: 'FormArray::prepend',
            set: (component: FormComponentInterface) => form.get<FormArray>('category/tags').prepend(component)
        },
        {
            title: 'FormArray::insert',
            set: (component: FormComponentInterface) => form.get<FormArray>('category/tags').insert(1, component)
        },
    ];
    for (const conf of testsConfigs) {
        test(`gain focus when the parent of a focused child is added (${conf.title})`, () => {
            const categoryColor = new ViewModelMock(new FormControl()); // wrap it in a view model so we can focus it.
            const colorWrapper = new FormObject({color: categoryColor.realControl});
            const username = new ViewModelMock(form.get('username'));

            // Focus a control already part of the form to increase the difficulty of the test.
            categoryColor.focus();
            expect(form.focused).toEqual(false);
            username.focus();
            expect(form.focused).toEqual(true);

            // When the new component is set here, "username" should lose focus
            // and the new component should keep it.
            conf.set(colorWrapper);
            expect(form.focused).toEqual(true);

            // Simply blurring "categoryColor" must be enough,
            // because "username" should already be blurred at this point.
            categoryColor.blur();
            expect(form.focused).toEqual(false);
        });
    }
});

/**
 * Changed
 */
describe('changed', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });
    test('not changed when initialized', () => {
        checkStates(form, {[BasicState.Changed]: false});
        checkStates(form.get('username'), {[BasicState.Changed]: false});
    });

    test('not changed when default value changes', () => {
        const username: FormControl = form.get('username');
        username.setDefaultValue('new value');
        checkStates(username, {[BasicState.Changed]: false});
        checkStates(form, {[BasicState.Changed]: false});
    });

    test('changed when value changes', () => {
        const username: FormControl = form.get('username');
        username.setValue('new value');
        checkStates(username, {[BasicState.Changed]: true});
        checkStates(form, {[BasicState.Changed]: true});
    });

    test('not changed when value set back to default value', () => {
        const username: FormControl = form.get('username');
        username.setDefaultValue('original value');
        username.setValue('new value');
        username.setValue('original value');
        checkStates(username, {[BasicState.Changed]: false});
        checkStates(form, {[BasicState.Changed]: false});
    });

    test('changed when value changes', () => {
        const username: FormControl = form.get('username');
        username.setValue('new value');
        checkStates(username, {[BasicState.Changed]: true});
        checkStates(form, {[BasicState.Changed]: true});
    });

    test('changed when a value changes deep in an object', () => {
        const control: FormControl = form.get('extras');
        (control.value as any).c[2].c3 = 'new';
        control.setValue(control.value);
        checkStates(control, {[BasicState.Changed]: true});
        checkStates(form, {[BasicState.Changed]: true});
    });

    test('not changed when a value deep in an object it set back to default value', () => {
        const control: FormControl = form.get('extras');
        (control.value as any).c[2].c3 = 'new';
        control.setValue(control.value);
        checkStates(control, {[BasicState.Changed]: true});
        checkStates(form, {[BasicState.Changed]: true});

        (control.value as any).c[2].c3 = 'c3';
        control.setValue(control.value);

        checkStates(control, {[BasicState.Changed]: false});
        checkStates(form, {[BasicState.Changed]: false});
    });
});

/**
 * Touched
 */
describe('touched', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('untouched when created', () => {
        checkStates(form.get('username'), {[BasicState.Touched]: false});
    });

    test('touched when a blurred', () => {
        const username = new ViewModelMock(form.get('username'));
        username.focus();
        username.blur();
        checkStates(username.realControl, {[BasicState.Touched]: true});
    });

    test('not touched when a blurred while not in focus', () => {
        const username = new ViewModelMock(form.get('username'));
        username.blur();
        checkStates(username.realControl, {[BasicState.Touched]: false});
    });

    test('touched when view model says so', () => {
        const username = new ViewModelMock(form.get('username'));
        username.realControl.reset();
        checkStates(username.realControl, {[BasicState.Touched]: false});
    });
});

/**
 * Dirty
 */
describe('dirty', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('pristine when created', () => {
        checkStates(form.get('username'), {[BasicState.Dirty]: false});
    });

    test('dirty when value changes', () => {
        const username = form.get('username');
        username.setValue('new');
        checkStates(username, {[BasicState.Dirty]: true});
    });

    test('pristine after reset', () => {
        const username = form.get('username');
        username.setValue('new');
        username.reset();
        checkStates(username, {[BasicState.Dirty]: false});
    });
});

/**
 * Busy
 */
describe('busy', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('not busy when created', () => {
        checkStates(form.get('username'), {[BasicState.Busy]: false});
    });

    test('busy when the view model says so', () => {
        const username = new ViewModelMock(form.get('username'));
        username.markAsBusy();
        checkStates(username.realControl, {[BasicState.Busy]: true});
    });

    test('not busy when the view model says so', () => {
        const username = new ViewModelMock(form.get('username'));
        username.markAsBusy();
        username.markAsNotBusy();
        checkStates(username.realControl, {[BasicState.Busy]: false});
    });

    test('busy propagates to parents', () => {
        const username = new ViewModelMock(form.get('username'));
        username.markAsBusy();
        checkStates(form, {[BasicState.Busy]: true});
        username.markAsNotBusy();
        checkStates(form, {[BasicState.Busy]: false});
    });

    test('busy unaffected by reset', () => {
        const username = new ViewModelMock(form.get('username'));
        username.markAsBusy();
        username.realControl.reset();
        checkStates(username.realControl, {[BasicState.Busy]: true});
    });
});

/**
 * Virtual
 */
describe('virtual', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('a form control with no view model is virtual', () => {
        checkStates(form.get('username'), {[BasicState.Concrete]: false});
    });

    test('a form control with a view model is concrete', () => {
        const username = new ViewModelMock(form.get('username'));
        checkStates(username.realControl, {[BasicState.Concrete]: true});
    });

    test('a form control can be set as concrete without a view model', () => {
        const username = form.get('username');
        username.markAsConcrete();
        checkStates(username, {[BasicState.Concrete]: true});
    });

    test('a group is concrete when a child is concrete', () => {
        checkStates(form, {[BasicState.Concrete]: false});
        const username = new ViewModelMock(form.get('username'));
        checkStates(form, {[BasicState.Concrete]: true});
    });

    test('a group becomes virtual when the last concrete child is removed', () => {
        checkStates(form, {[BasicState.Concrete]: false});
        const username = new ViewModelMock(form.get('username'));
        checkStates(form, {[BasicState.Concrete]: true});
        form.remove(username.realControl.name);
        checkStates(form, {[BasicState.Concrete]: false});
    });

    test('a group does not become virtual when a concrete child is removed if there is another one', () => {
        checkStates(form, {[BasicState.Concrete]: false});
        const username = new ViewModelMock(form.get('username'));
        const email = new ViewModelMock(form.get('email'));
        checkStates(form, {[BasicState.Concrete]: true});
        form.remove(username.realControl.name);
        checkStates(form, {[BasicState.Concrete]: true});
        form.remove(email.realControl.name);
        checkStates(form, {[BasicState.Concrete]: false});
    });

    test('a group becomes concrete when a concrete child is added', () => {
        const newControl = new FormControl();
        newControl.markAsConcrete();
        form.set('new', newControl);
        checkStates(form, {[BasicState.Concrete]: true});
    });

    test('a FormArray DOES NOT become concrete when its children are access by the getter', () => {
        const formArr: any = FormFactory.Create(['a', 'b']) as FormArray;
        checkStates(formArr, {[BasicState.Concrete]: false});

        //
        // A previous solution was to pass the form array "concrete" when its children are accessed.
        // This is a BAD solution because it creates many side effects.
        // A getter that trigger a mutation is generally bad practice anyway.
        //
        // This test is here to ensure this solution of detecting the usage of
        // a form array in the view is never used again.
        //
        expect(formArr.children.length).toEqual(2);
        checkStates(formArr, {[BasicState.Concrete]: false});
    });
});

/**
 * Active states
 */
describe('activeStates', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('a control after construction has the correct active states', () => {
        expect(form.get('username').activeStates).toEqual(expect.arrayContaining([
            ContextualizedState.Disabled,
            InverseState.UnFocused,
            InverseState.Pristine,
            InverseState.UnTouched,
            InverseState.NotBusy,
            InverseState.UnChanged,
            InverseState.Valid,
            InverseState.Validated,
            InverseState.Virtual
        ]));
    });

    test('active states correctly reflect the "disabled" state', () => {
        const control = new ViewModelMock(form.get('username'));
        control.realControl.disable();
        expect(control.realControl.activeStates).toEqual(expect.arrayContaining([ContextualizedState.Disabled]));
        control.realControl.enable();
        expect(control.realControl.activeStates).toEqual(expect.arrayContaining([InverseState.Enabled]));
    });
});
