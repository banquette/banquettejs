import { cloneDeepPrimitive } from "@banquette/utils-object";
import { isArray, isObject } from "@banquette/utils-type";
import { FormArray, FormControl, FormGroupInterface, FormObject } from "../src";
import { createTestForm } from "./__mocks__/utils";
import { ViewModelMock } from "./__mocks__/view-model.mock";

/**
 * Check that the current value of the component found at "targetPath" in "baseComponent"
 * is correctly set in all its parents.
 */
function checkValueInParents(baseComponent: FormGroupInterface, targetPath: string, targetValue: any): void {
    const targetParts: string[] = targetPath.split('/');
    for (let i = 0; i < targetParts.length - 1; ++i) {
        const current = baseComponent.get(targetParts.slice(0, i + 1).join('/'));
        let valueContainer: any = current.value;
        for (let j = i + 1; j < targetParts.length - 1; ++j) {
            expect(typeof(valueContainer)).toBe('object');
            valueContainer = valueContainer[targetParts[j]];
        }
        expect(valueContainer[targetParts[targetParts.length - 1]]).toEqual(targetValue);
    }
}

/**
 * Check that the current value a component matches the value of its children.
 */
function checkValueInChildren(container: FormGroupInterface, targetValue: any): void {
    for (const childName of Object.keys(targetValue)) {
        if (isObject(targetValue[childName])) {
            checkValueInChildren(container.get(childName), targetValue[childName]);
        } else {
            expect(container.get(childName).value).toEqual(targetValue[childName]);
        }
    }
}

function expectPartialObjectMatch(expected: any): any {
    if (isArray(expected)) {
        const output = [];
        for (const item of expected) {
            output.push(expectPartialObjectMatch(item));
        }
        return expect.arrayContaining(output);
    }
    if (isObject(expected)) {
        const output: any = {};
        for (const k of Object.keys(expected)) {
            output[k] = expectPartialObjectMatch(expected[k]);
        }
        return expect.objectContaining(output);
    }
    return expected;
}

describe('Control value', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm(true);
    });

    test('the value of a control changes when setValue() is called', () => {
        const control: FormControl = form.get('username');
        expect(control.value).not.toEqual('new');
        control.setValue('new');
        expect(control.value).toEqual('new');
    });

    test('when a the value of a control changes, all parents are updated', () => {
        const target: string = 'category/tags/1/name';
        const targetNewValue = 'new';
        const control: FormControl = form.get(target);

        control.setValue(targetNewValue);
        checkValueInParents(form, target, targetNewValue);
    });

    test('reset() will set the current value to the default value', () => {
        const username = form.get<FormControl>('username');
        const newDefaultValue = 'new default';
        username.setDefaultValue(newDefaultValue);
        expect(username.value).not.toEqual(newDefaultValue);
        username.reset();
        expect(username.value).toEqual(newDefaultValue);
    });

    test('the value of a FormObject does not include its virtual children', () => {
        const formObject = new FormObject({
            name: new FormControl()
        });
        expect(Object.keys(formObject.value).length).toEqual(0);
    });

    test('setting a value of a FormObject reflects on its children', () => {
        const targetNewValue: any = {
            username: 'new',
            email: 'new',
            category: {tags: [{name: 'new'}]}
        };
        form.setValue(targetNewValue);
        expect(form.value).toEqual(expectPartialObjectMatch(targetNewValue));
        checkValueInChildren(form, targetNewValue);
    });

    test('setValue() on a FormGroup only impact children with a new value in the input', () => {
        const targetNewValue: any = {username: 'new'};
        const emailValue = form.get('email').value;
        form.setValue({username: 'new'});
        expect(form.value).toEqual(expectPartialObjectMatch(Object.assign(targetNewValue, {email: emailValue})));
        checkValueInChildren(form, targetNewValue);
    });

    test('setting a value of a FormArray reflects on its children', () => {
        const targetNewValue: any = [{name: 'new'}];
        const tags = form.get<FormArray>('category/tags');
        tags.setValue(targetNewValue);
        expect(tags.value).toEqual(expectPartialObjectMatch(targetNewValue));
        checkValueInChildren(tags, targetNewValue);
    });

    test('"undefined" is ignored when setting the value of a FormArray', () => {
        const targetNewValue: any = [undefined, {name: 'new'}, null];
        const tags = form.get<FormArray>('category/tags');
        const targetExpectedValue = [
            cloneDeepPrimitive(form.get('category/tags/0').value),
            targetNewValue[1],
            cloneDeepPrimitive(form.get('category/tags/2').value)
        ];
        tags.setValue(targetNewValue);
        expect(tags.value).toEqual(expectPartialObjectMatch(targetExpectedValue));
        checkValueInChildren(tags, targetExpectedValue);
    });

    test('set default value from a FormObject', () => {
        const modifiedValues = {username: 'new username', email: 'new email', category: {name: 'new category name'}};
        const defaultValues = {username: 'default username', category: {name: 'default cat name'}};

        // Modify some values
        form.setValue(modifiedValues);
        form.setDefaultValue(defaultValues);

        // Expect no modification at this point
        expect(form.value).toEqual(expectPartialObjectMatch(modifiedValues));

        // Reset to apply default values.
        form.reset();

        // Now we should have the default values and controls must have been reset.
        expect(form.value).toEqual(expectPartialObjectMatch(defaultValues));
    });
});

describe('View model value', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('the view model value is synchronized with the control on creation', () => {
        const usernameVM = new ViewModelMock(form.get('username'));
        expect(usernameVM.value).toEqual(usernameVM.transformControlValueToViewValue(usernameVM.realControl.value));
    });

    test('the value is updated on the view when changed in the control', () => {
        const usernameVM = new ViewModelMock(form.get('username'));
        const newViewValue = usernameVM.transformControlValueToViewValue('new');
        usernameVM.setValue(newViewValue);
        expect(usernameVM.value).toEqual(newViewValue);
        expect(usernameVM.realControl.value).toEqual(usernameVM.transformViewValueToControlValue(newViewValue));
    });

    test('the view value is updated when the control is reset', () => {
        const usernameVM = new ViewModelMock(form.get('username'));
        usernameVM.control.setDefaultValue('new');
        usernameVM.control.reset();
        expect(usernameVM.value).toEqual(usernameVM.transformControlValueToViewValue('new'));
    });
});
