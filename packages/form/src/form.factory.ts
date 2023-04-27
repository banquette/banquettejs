import { ConfigurationService } from "@banquette/config";
import { Injector } from "@banquette/dependency-injection";
import { isNonEmptyString } from "@banquette/utils-string";
import { isArray, isObject, isUndefined } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { FormConfigurationSymbol } from "./config";
import { FormArray } from "./form-array";
import { FormComponentInterface } from "./form-component.interface";
import { FormConfigurationInterface } from "./form-configuration.interface";
import { FormControl } from "./form-control";
import { FormGroupInterface } from "./form-group.interface";
import { FormObject } from "./form-object";

/**
 * A key/value pair will create a FormObject.
 */
type FactoryObject = {[key: string]: FactoryValue};

/**
 * An array will create a FormArray.
 */
type FactoryArray = FactoryValue[];

/**
 * A factory control is any type of value that doesn't match any other expected type.
 */
type FactoryControl = FormControl | any;

/**
 * Regroup all types of values the factory can take.
 */
type FactoryValue = FactoryControl | FactoryObject | FactoryArray;

let Configuration: FormConfigurationInterface|null = null;
let InnerCount: number = 0;

/**
 * Offer an easier way to create a form manually.
 */
export class FormFactory {
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
    public static Create(input: FactoryObject|FormArray, validator?: ValidatorInterface): FormGroupInterface;
    public static Create(input: FactoryControl, validator?: ValidatorInterface): FormComponentInterface;
    public static Create(input: FactoryValue, validator?: ValidatorInterface): FormComponentInterface {
        ++InnerCount;
        try {
            if (isObject(input)) {
                if (input instanceof FormControl) {
                    if (!isUndefined(validator)) {
                        input.setValidator(validator);
                    }
                    return input;
                }
                const component: FormGroupInterface = isArray(input) ? new FormArray([], validator) : new FormObject({}, validator);
                for (const key of Object.keys(input)) {
                    const resolvedKey = FormFactory.ResolveKey(key);
                    const child: FormComponentInterface = FormFactory.Create(
                        resolvedKey.extended ? input[key][0] : input[key],
                        resolvedKey.extended ? input[key][1] : undefined
                    );
                    if (component instanceof FormArray) {
                        component.append(child);
                    } else {
                        component.set(resolvedKey.key, child);
                    }
                }
                return component;
            }
            return new FormControl(input, validator);
        } finally {
            // Little hack to know when we are out of the recursion so we can clear the configuration cache.
            // This is to avoid calling the injector multiple times for a single creation
            // while still reacting to changes in the configuration.
            --InnerCount;
            if (InnerCount === 0) {
                Configuration = null;
            }
        }
    }

    /**
     * Test if a key is an extended name.
     * Meaning the value corresponding to the key is a couple value/validator instead of a normal value.
     */
    private static ResolveKey(key: string): {key: string, extended: boolean} {
        if (Configuration === null) {
            Configuration = Injector.Get(ConfigurationService).get<FormConfigurationInterface>(FormConfigurationSymbol);
        }
        let extended: boolean = false;
        const prefix = Configuration.factory.extendedNamePrefix;
        const suffix = Configuration.factory.extendedNameSuffix;
        if (isNonEmptyString(prefix) || isNonEmptyString(suffix)) {
            if (prefix && key.substring(0, prefix.length) === prefix) {
                key = key.substring(prefix.length);
                extended = true;
            }
            if (suffix && key.substring(key.length - suffix.length) === suffix) {
                key = key.substring(0, key.length - suffix.length);
                extended = true;
            }
        }
        return {key, extended};
    }
}
