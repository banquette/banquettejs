import 'reflect-metadata';
import { HttpResponse } from "@banquette/http";
import { waitForDelay } from "@banquette/utils-misc";
import { Ajax, And, Invalid, Max, Min, NotEmpty, NotEqual, Valid, ValidationResult } from "@banquette/validation";
import { ValidationStrategy } from "../constant";
import { FormControl } from "../form-control";
import { FormGroupInterface } from "../form-group.interface";
import { FormObject } from "../form-object";
import { FormFactoryTest } from "./__mocks__/form-factory-test";
import { createConcreteControl, createTestForm } from "./__mocks__/utils";
import { buildTestUrl } from "../../../http/src/__tests__/__mocks__/utils";
import { ValidateAfterDelay } from "../../../validation/src/__tests__/__mocks__/type/validate-after-delay.test-validator";
import '../../../http/src/__tests__/__mocks__/xml-http-request.mock';
import { ViewModelMock } from "./__mocks__/view-model.mock";
import { FormError } from "../form-error";

/**
 * Assign validators
 */
describe('Assign validators', () => {
    let form: FormGroupInterface;

    beforeEach(() => {
        form = createTestForm();
    });

    test('the default validation strategy is `Inherit`', () => {
        const control: FormControl = new FormControl();
        expect(control.validationStrategy).toEqual(ValidationStrategy.Inherit);
    });

    test('a control with no validator is always validated', () => {
        const control: FormControl = new FormControl();
        expect(control.validated).toEqual(true);
    });

    test('a control with a validator is not validated by default', () => {
        const control: FormControl = new FormControl(null, NotEmpty());
        expect(control.validated).toEqual(false);
    });

    test('removing the validator of a control makes it validated', () => {
        const control: FormControl = new FormControl(null, NotEmpty());
        expect(control.validated).toEqual(false);
        control.setValidator(null);
        expect(control.validated).toEqual(true);
    });

    test('the validated status propagates up', () => {
        const control: FormControl = form.get('category/tags/1/name');
        expect(form.validated).toEqual(true);
        control.setValidator(NotEmpty());
        expect(form.validated).toEqual(false);
    });
});

/**
 * Explicit validation
 */
describe('Explicit validation', () => {
    test('a FormControl can be validated manually', () => {
        const control = new FormControl('', NotEmpty());
        expect(control.validated).toEqual(false);
        control.validate();
        expect(control.validated).toEqual(true);
    });

    test('a FormControl is validated when its value change if the strategy is `ValidationStrategy.OnChange`', () => {
        const control = new FormControl('', NotEmpty());
        control.setValidationStrategy(ValidationStrategy.OnChange);
        expect(control.validated).toEqual(false);
        control.setValue('new');
        expect(control.validated && control.valid).toEqual(true);
    });

    test('validate a FormControl (sync)', () => {
        const control = new FormControl('', Invalid());
        expect(control.valid).toEqual(true);
        control.validate();
        expect(control.valid).toEqual(false);
    });

    test('validate a FormControl (async)', async () => {
        const control = new FormControl('', ValidateAfterDelay(20, Invalid()));
        expect(control.valid).toEqual(true);
        await control.validate();
        expect(control.valid).toEqual(false);
    });

    test('re validate a FormControl while another async validator is still running (with race condition)', async () => {
        let waitDelay = {duration: 200};
        const control = new FormControl('valid', ValidateAfterDelay(waitDelay, NotEqual('invalid')));
        expect(control.valid).toEqual(true);
        control.validate();
        // Change the delay so the second validate() finishes before the first one.
        // The result should still be of the last call, no matter the order in which results are obtained.
        // That's a race condition that may occur with real ajax requests.
        waitDelay.duration = 50;
        control.setValue('invalid');
        await control.validate();
        expect(control.valid).toEqual(false);
    });

    test('re validate async validator while still running FormControl', async () => {
        const control = new FormControl('', Ajax({
            url: buildTestUrl({delay: 2000, timeout: 300000})
        }, (response: HttpResponse<any>, result: ValidationResult) => {
            if (control.value === 'invalid') {
                result.addViolation('test');
            }
        }));
        control.validate();
        control.setValue('invalid');
        await waitForDelay(50);
        await control.validate();
        expect(control.valid).toEqual(false);
    });

    test('replace sync validator while async validator is running on a FormControl', async () => {
        const control = new FormControl('', ValidateAfterDelay(50, Invalid()));
        const promise = control.validate();

        control.setValidator(Valid());
        control.validate();
        await promise;
        expect(control.valid).toEqual(true);
    });

    test('remove validator while async validator is running on a FormControl', async () => {
        const control = new FormControl('', ValidateAfterDelay(50, Invalid()));
        const promise = control.validate();

        control.setValidator(null);
        control.validate();
        await promise;
        expect(control.valid).toEqual(true);
    });

    test('validate a FormObject (self sync)', () => {
        const formObject = new FormObject({}, Min(1, 'number'));
        expect(formObject.valid).toEqual(true);
        formObject.validate();
        expect(formObject.valid).toEqual(false);
    });

    test('validate a FormObject (self async)', async () => {
        const formObject = new FormObject({}, ValidateAfterDelay(50, Min(1, 'number')));
        expect(formObject.valid).toEqual(true);
        await formObject.validate();
        expect(formObject.valid).toEqual(false);
    });

    test('validate a FormObject (self sync + children sync)', () => {
        const formObject = new FormObject({
            category: new FormObject({
                name: createConcreteControl('', NotEmpty())
            })
        }, Min(1));
        expect(formObject.valid).toEqual(true);
        expect(formObject.get('category/name').valid).toEqual(true);
        formObject.validate();
        expect(formObject.valid).toEqual(false);
        expect(formObject.get('category/name').valid).toEqual(false);
    });

    test('validate a FormObject (self sync + children async)', async () => {
        const formObject = new FormObject({
            name: createConcreteControl('', ValidateAfterDelay(50, NotEmpty()))
        }, Min(1));
        await formObject.validate();
        expect(formObject.valid).toEqual(false);
        expect(formObject.get('name').valid).toEqual(false);
    });

    test('validate a FormObject (self async + children async)', async () => {
        const formObject = new FormObject({
            name: createConcreteControl('', ValidateAfterDelay(50, NotEmpty()))
        }, ValidateAfterDelay(50, Min(1)));
        await formObject.validate();
        expect(formObject.valid).toEqual(false);
        expect(formObject.get('name').valid).toEqual(false);
    });

    test('re validate a FormObject (self async + children async multiple + race condition)', async () => {
        let waitDelay = {duration: 200};
        const formObject = new FormObject({
            name: createConcreteControl('', ValidateAfterDelay(waitDelay, NotEqual('invalid')))
        }, ValidateAfterDelay(waitDelay, Min(1)));
        formObject.validate();
        expect(formObject.validating).toEqual(true);
        expect(formObject.get('name').validating).toEqual(true);
        waitDelay.duration = 50;
        formObject.get('name').setValue('invalid');
        await formObject.validate();
        expect(formObject.validating).toEqual(false);
        expect(formObject.get('name').validating).toEqual(false);
        expect(formObject.valid).toEqual(false);
    });

    test('validate a FormObject deep async invalid becomes valid', async () => {
        const formObject = new FormObject({
            category: new FormObject({
                name: createConcreteControl('valid', ValidateAfterDelay(50, NotEmpty()))
            })
        }, ValidateAfterDelay(50, Min(1)));
        formObject.validate();
        formObject.get('category/name').setValue('');
        await formObject.validate();
        expect(formObject.valid).toEqual(false);
        expect(formObject.get('category').valid).toEqual(false);
        expect(formObject.get('category/name').valid).toEqual(false);
    });

    test('parent becomes invalid when a child validation fails', () => {
        const formObject = new FormObject({
            name: createConcreteControl('', NotEmpty())
        });
        expect(formObject.validate()).toEqual(false);
        expect(formObject.valid).toEqual(false);
        expect(formObject.errors.length).toEqual(0);
        expect(formObject.errorsDeepMap).toMatchObject({
            '/': expect.arrayContaining([]),
            '/name': expect.arrayContaining([expect.objectContaining({type: 'not-empty'})])
        });
    });
});

/**
 * Implicit validation
 */
describe('Implicit validation', () => {
    let form: FormObject;
    beforeEach(() => {
        form = FormFactoryTest.CreateAsConcrete({
            name$: ['', NotEqual('invalid')],
            category$: [{
                name$: ['', NotEqual('invalid')]
            }, And(Min(1), Max(1))],
            tags$: [
                [{
                    name$: ['', NotEqual('invalid')],
                    color$: ['', NotEqual('invalid')]
                }]
            , And(Min(1), Max(2))]
        }) as FormObject;
    });

    test('setting the validation strategy on the root node propagates down', () => {
        const categoryName = form.get('category/name');
        expect(form.validationStrategy).toEqual(ValidationStrategy.Inherit);
        expect(categoryName.validationStrategy).toEqual(ValidationStrategy.Inherit);
        expect(form.validated || categoryName.validated).toEqual(false);

        // Drop tags as we're not interested in them here.
        form.getByPattern('{name,tags}').detach();

        // Change the value of "category/name"
        categoryName.setValue('new value');

        // Add a new component to make the category invalid.
        form.get<FormObject>('category').set('other', createConcreteControl());

        // Still expect both to be valid and not validated
        expect(form.validated || categoryName.validated).toEqual(false);
        expect(form.valid && categoryName.valid).toEqual(true);

        // Now change the strategy and update the value again
        form.setValidationStrategy(ValidationStrategy.OnChange);
        categoryName.setValue('other value');

        // This time a validation should have occurred for both.
        expect(form.validated && categoryName.validated).toEqual(true);

        // And the form should have an error
        expect(form.valid).toEqual(false);

        // Not the category
        expect(categoryName.valid).toEqual(true);
    });

    /**
     * OnChange
     */
    describe('OnChange', () => {
        test('validate when changed', () => {
            const categoryName = form.get('category/name');
            categoryName.setValidationStrategy(ValidationStrategy.OnChange);
            categoryName.setValue('invalid');
            expect(categoryName.valid).toEqual(false);
            expect(categoryName.validated).toEqual(true);
        });

        test('propagates up when set everywhere', () => {
            const categoryName = form.get('category/name');
            form.getByPattern('{name,tags}').detach();
            form.setValidationStrategy(ValidationStrategy.OnChange);
            expect(form.validated || categoryName.validated).toBe(false);
            categoryName.setValue('invalid');
            expect(form.valid || categoryName.valid).toEqual(false);
            expect(form.validated && categoryName.validated).toEqual(true);
        });

        test('must not validate parent when only set on control', () => {
            const categoryName = form.get('category/name');
            form.getByPattern(':control').setValidationStrategy(ValidationStrategy.OnChange);
            expect(form.validated || categoryName.validated).toBe(false);
            categoryName.setValue('invalid');
            expect(form.valid || categoryName.valid).toEqual(false);
            expect(categoryName.validated).toEqual(true);
            expect(form.validated).toBe(false);
        });

        test('don\'t affect siblings', () => {
            const name = form.get('name');
            const category = form.get('category');
            category.setValidationStrategy(ValidationStrategy.OnChange);
            name.setValue('invalid');
            expect(form.valid && name.valid).toEqual(true);
            expect(form.validated || name.validated).toEqual(false);
            expect(category.validated).toEqual(false); // Because "category/name" is still to be validated
            expect(category.valid).toEqual(true); // Because the category itself is valid, only its child when validated will be invalid
        });
    });

    /**
     * OnFocus
     */
    describe('OnFocus', () => {
        test('validate when focused', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.OnFocus);
            categoryNameVM.focus();
            expect(categoryName.validated).toEqual(true);
        });

        test('does not validate if already focused', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.OnFocus);
            categoryNameVM.focus();
            expect(categoryName.validated).toEqual(true);
            categoryName.setValue('invalid');
            categoryNameVM.focus();
            expect(categoryName.valid).toEqual(true);
        });

        test('does not validate on value change', () => {
            const categoryName = form.get('category/name');
            categoryName.setValidationStrategy(ValidationStrategy.OnFocus);
            categoryName.setValue('invalid');
            expect(categoryName.validated).toEqual(false);
        });

        test('does not validate on blur', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.OnFocus);
            categoryNameVM.focus();
            categoryName.setValue('invalid');
            categoryNameVM.blur();
            expect(categoryName.validated).toEqual(true);
            expect(categoryName.valid).toEqual(true);
        });
    });

    /**
     * OnBlur
     */
    describe('OnBlur', () => {
        test('validate when blurred', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.OnBlur);
            categoryNameVM.focus();
            categoryNameVM.blur();
            expect(categoryName.validated).toEqual(true);
        });

        test('does not validate when not already focused', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.OnBlur);
            categoryNameVM.blur();
            expect(categoryName.validated).toEqual(false);
        });

        test('does not validate on value change', () => {
            const categoryName = form.get('category/name');
            categoryName.setValidationStrategy(ValidationStrategy.OnBlur);
            categoryName.setValue('invalid');
            expect(categoryName.validated).toEqual(false);
        });

        test('does not validate on focus', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.OnBlur);
            categoryNameVM.focus();
            expect(categoryName.validated).toEqual(false);
            expect(categoryName.valid).toEqual(true);
        });
    });

    /**
     * None
     */
    describe('None', () => {
        test('does not validate on focus, blur or value change', () => {
            const categoryNameVM = new ViewModelMock(form.get('category/name'));
            const categoryName = categoryNameVM.realControl;
            categoryName.setValidationStrategy(ValidationStrategy.None);
            categoryName.setValue('invalid');
            categoryNameVM.focus();
            categoryNameVM.blur();
            expect(categoryName.validated).toEqual(false);
            expect(categoryName.valid).toEqual(true);
        });
    });
});

/**
 * Errors
 */
describe('Errors', () => {
    let form: FormObject;

    beforeEach(() => {
        form = FormFactoryTest.CreateAsConcrete({
            name$: ['', NotEqual('invalid', true, 'Name is invalid.')],
            category$: [{
                name$: ['', NotEqual('invalid', true, 'Category name is invalid.')],
                invalid: ''
            }, And(Min(1), Max(1))]
        }) as FormObject;
    });

    test('errors are added when a validation fails', () => {
        const control = form.get('name');
        control.setValue('invalid');
        control.validate();
        expect(control.errors).toMatchObject([
            {path: '/name', type: 'not-equal', message: 'Name is invalid.'}
        ]);
    });

    test('errorsDeep returns errors of child components', () => {
        form.get('name').setValue('invalid');
        form.validate();
        expect(form.errorsDeep).toMatchObject([
            {path: '/name', type: 'not-equal', message: 'Name is invalid.'},
            {path: '/category', type: 'max'}
        ]);
    });

    test('errorsDeepMap returns errors of child components indexed by path', () => {
        form.getByPattern(':control').setValue('invalid');
        form.validate();
        expect(form.errorsDeepMap).toMatchObject({
            '/category/name': expect.arrayContaining([expect.objectContaining({type: 'not-equal', message: 'Category name is invalid.'})]),
            '/name': expect.arrayContaining([expect.objectContaining({type: 'not-equal', message: 'Name is invalid.'})]),
            '/category': expect.arrayContaining([expect.objectContaining({type: 'max'})])
        });
    });
});
