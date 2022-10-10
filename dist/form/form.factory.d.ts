import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { FormArray } from "./form-array";
import { FormComponentInterface } from "./form-component.interface";
import { FormControl } from "./form-control";
import { FormGroupInterface } from "./form-group.interface";
/**
 * A key/value pair will create a FormObject.
 */
declare type FactoryObject = {
    [key: string]: FactoryValue;
};
/**
 * An array will create a FormArray.
 */
declare type FactoryArray = FactoryValue[];
/**
 * A factory control is any type of value that doesn't match any other expected type.
 */
declare type FactoryControl = FormControl | any;
/**
 * Regroup all types of values the factory can take.
 */
declare type FactoryValue = FactoryControl | FactoryObject | FactoryArray;
/**
 * Offer an easier way to create a form manually.
 */
export declare class FormFactory {
    private static Configuration;
    private static InnerCount;
    /**
     * Create any type of form component by setting their value.
     *
     *  - An object will create a FormObject
     *  - An array will create a FormArray
     *  - Any other value will create a FormControl
     *
     *  If a form component is found it will be returned as is.
     *
     *  Example:
     *
     *  `
     *    Factory.Create({
     *        firstName: 'John',
     *        lastName: 'Doe',
     *        birthDate: new FormControl(new Date()), // Give an instance of FormControl here so the factory doesn't try to create a form out of the Date object.
     *        tags: [
     *            {label: 'Customers'},
     *            {label: 'New'}
     *        ]
     *    });
     *  `
     *
     *  The validator on second parameter only apply to the first level.
     *  To define validators for sub levels please:
     *  @see FormConfigurationInterface.factory
     */
    static Create(input: FactoryObject | FormArray, validator?: ValidatorInterface): FormGroupInterface;
    static Create(input: FactoryControl, validator?: ValidatorInterface): FormComponentInterface;
    /**
     * Test if a key is an extended name.
     * Meaning the value corresponding to the key is a couple value/validator instead of a normal value.
     */
    private static ResolveKey;
}
export {};
