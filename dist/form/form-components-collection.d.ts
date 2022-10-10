import { UnsubscribeFunction } from "@banquette/event/type";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { ValidationStrategy } from "./constant";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormComponentInterface } from "./form-component.interface";
/**
 * A collection that behave like a single component.
 */
export declare class FormComponentsCollection {
    private collection;
    /**
     * `true` if the collection is `validated` and all components of the collection are `valid`.
     */
    get valid(): boolean;
    /**
     * `true` if the collection is `validated` and any of its components is `invalid`.
     */
    get invalid(): boolean;
    /**
     * `true` if all components of the collection are `validated`.
     */
    get validated(): boolean;
    /**
     * Inverse of `validated`.
     */
    get notValidated(): boolean;
    /**
     * Inverse of `notValidating`.
     */
    get validating(): boolean;
    /**
     * `true` if all components of the collection are `notValidating`.
     */
    get notValidating(): boolean;
    /**
     * Inverse of `notBusy`.
     */
    get busy(): boolean;
    /**
     * `true` if all components of the collection are `notBusy`.
     */
    get notBusy(): boolean;
    /**
     * Inverse of `enabled`.
     */
    get disabled(): boolean;
    /**
     * `true` if all components of the collection are `enabled`.
     */
    get enabled(): boolean;
    /**
     * Inverse of `pristine`.
     */
    get dirty(): boolean;
    /**
     * `true` if all components of the collection are `pristine`.
     */
    get pristine(): boolean;
    /**
     * Inverse of `untouched`.
     */
    get touched(): boolean;
    /**
     * `true` if all components of the collection are `untouched`.
     */
    get untouched(): boolean;
    /**
     * Inverse of `unchanged`.
     */
    get changed(): boolean;
    /**
     * `true` if all components of the collection are `unchanged`.
     */
    get unchanged(): boolean;
    /**
     * Inverse of `unfocused`.
     */
    get focused(): boolean;
    /**
     * `true` if all components of the collection are `unfocused`.
     */
    get unfocused(): boolean;
    /**
     * Inverse of `concrete`.
     */
    get virtual(): boolean;
    /**
     * `true` if all components of the collection are `concrete`.
     */
    get concrete(): boolean;
    /**
     * Get an array containing the path of all the components found in the collection.
     */
    get paths(): string[];
    /**
     * Get the number of items in the collection.
     */
    get length(): number;
    /**
     * Combine all the values of the components of the collection into an array.
     */
    get value(): any[];
    constructor(collection?: FormComponentInterface[]);
    /**
     * Get a component of the collection.
     */
    get(index: number): FormComponentInterface | null;
    /**
     * Add a component to the collection.
     */
    append(component: FormComponentInterface): void;
    /**
     * Add a component to the beginning of the collection.
     */
    prepend(component: FormComponentInterface): void;
    /**
     * Insert a component at a specific index, moving all elements after it.
     */
    insert(index: number, component: FormComponentInterface): void;
    /**
     * Remove a component from the collection.
     */
    remove(component: FormComponentInterface): void;
    /**
     * Remove all components of the collection from their parent.
     */
    detach(): void;
    /**
     * Iterate through the content of the collection.
     */
    forEach(cb: (component: FormComponentInterface) => void | false): void;
    /**
     * Append all the children of another collection into this one.
     */
    concat(collection: FormComponentsCollection): void;
    /**
     * Test if every item in the collection is `true` for a given flag.
     */
    private combineFlags;
    /**
     * Call a function of each component in the collection.
     */
    private callForEach;
    /**
     * Subscribe to an event for each item of the collection.
     */
    private subscribeForEach;
    /**
     * Disable all components of the collection.
     */
    disable(): FormComponentsCollection;
    /**
     * Enable all components of the collection.
     */
    enable(): FormComponentsCollection;
    /**
     * Mark all the components of the collection as `concrete`.
     */
    markAsConcrete(): FormComponentsCollection;
    /**
     * Mark all the components of the collection as `virtual`.
     */
    markAsVirtual(): FormComponentsCollection;
    /**
     * Set the same value to all items of the collection.
     */
    setValue(value: unknown): FormComponentsCollection;
    /**
     * Set the validator to use to all items of the collection.
     */
    setValidator(validator: ValidatorInterface | null): FormComponentsCollection;
    /**
     * Set the validation strategy to use to all items of the collection.
     */
    setValidationStrategy(strategy: ValidationStrategy): FormComponentsCollection;
    /**
     * Validate each item of the collection.
     */
    validate(): FormComponentsCollection;
    /**
     * Subscribe to the `FormEvents.StateChanged` form event of all components in the collection.
     */
    onStateChanged(callback: (event: StateChangedFormEvent) => void): UnsubscribeFunction;
    /**
     * Subscribe to the `FormEvents.ValueChanged` form event of all components in the collection.
     */
    onValueChanged(callback: (event: ValueChangedFormEvent) => void): UnsubscribeFunction;
}
