import { enumToArray } from "@banquette/utils-array/enum-to-array";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import {
    BasicState,
    ContextualizedState,
    StatesInverseMap,
    ComponentNotFoundException,
    FormArray,
    FormComponentInterface,
    FormControl,
    FormGroupInterface,
    FormObject
} from "../../src";
import { ViewModelMock } from "./view-model.mock";

class Foo {}

/**
 * Shortcut function to check multiple states in one call.
 * Example:
 * `
 *  checkStates(control, {
 *      [ContextualizedState.Disabled]: false,
 *      [BasicState.Dirty]: false
 *  });
 * `
 */
export function checkStates(component: FormComponentInterface, expectedStates: Partial<Record<BasicState|ContextualizedState, boolean>>) {
    for (const state of getObjectKeys(expectedStates)) {
        expect({state, value: component[state]}).toMatchObject({state, value: expectedStates[state]});
        expect({state: StatesInverseMap[state], value: component[StatesInverseMap[state]]}).toMatchObject({state: StatesInverseMap[state], value: !expectedStates[state]});
    }
    checkActivesStatesAreInSync(component);
}

/**
 * Check that the `activeStates` array is in sync with the real state of the component.
 */
export function checkActivesStatesAreInSync(component: FormComponentInterface): void {
    const activeStates = component.activeStates;
    const states = (enumToArray(BasicState) as Array<BasicState|ContextualizedState>).concat(enumToArray(ContextualizedState));
    for (const state of states) {
        expect(activeStates).toContain((component[state]) ? state : StatesInverseMap[state]);
    }
}

/**
 * Check the values of a form component, ensuring its values match the input.
 */
export function expectContents(form: FormComponentInterface, content: any): void {
    if (isObject(content)) {
        for (const k of Object.keys(content)) {
            if (!isUndefined(content[k])) {
                const sub = (form as FormGroupInterface).get(k);
                expect(sub.value).toEqual(content[k]);
                expectContents(sub, content[k]);
            } else {
                expect(((_k) => () => (form as FormGroupInterface).get(_k))(k)).toThrow(ComponentNotFoundException);
            }
        }
    }
    expect(form.value).toEqual(content);
}

/**
 * Check that the children of a FormArray form a contiguous array list.
 */
export function checkFormArrayContiguity(formArr: FormArray): void {
    let i = 0;
    formArr.forEach((cur: FormComponentInterface, index: number) => {
        expect(index).toEqual(i);
        expect(cur.path).toEqual(`/${i}`);
        expect(cur.name).toEqual(i);
        ++i;
    });
}

/**
 * Create a form control and assign it to a view model mock to make it concrete.
 */
export function createConcreteControl(value?: any, validator?: ValidatorInterface): FormControl {
    const control = new FormControl(value, validator);
    new ViewModelMock(control);
    return control;
}


/**
 * A complex test form.
 */
export function createTestForm(createViewModels: boolean = false): FormGroupInterface {
    const form = new FormObject({
        username: new FormControl('default username'),
        email: new FormControl(),
        category: new FormObject({
            name: new FormControl('Category 1'),
            tags: new FormArray([
                new FormObject({
                    name: new FormControl('a'),
                    color: new FormControl('#ff0000'),
                }),
                new FormObject({
                    name: new FormControl(),
                    color: new FormControl('#00ff00'),
                }),
                new FormObject({
                    name: new FormControl('c'),
                    color: new FormControl('#0000ff'),
                })
            ])
        }),
        extras: new FormControl({a: 'a', b: {
                b1: 'b1',
                b2: 'b2',
                b3: ['b3a', 'b3b'],
                b4: new Foo()
            }, c: ['c1', 'c2', {
                c3: 'c3',
                c4: ['c4a', 'c4b']
            }]})
    });
    if (createViewModels) {
        form.getByPattern(':control').forEach((control: FormComponentInterface) => {
            new ViewModelMock(control as FormControl);
        });
    }
    return form;
}
