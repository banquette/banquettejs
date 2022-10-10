import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractFormGroup } from "./abstract-form-group";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { ForEachFilters } from "./type";
export declare class FormArray extends AbstractFormGroup<number, any[], FormComponentInterface[]> {
    /**
     * Get all the children as an array.
     */
    get children(): FormComponentInterface[];
    /**
     * A set of components stored as an array.
     */
    private children_;
    constructor(children?: FormComponentInterface[], validator?: ValidatorInterface);
    /**
     * Append a form component to the end of the collection.
     *
     * Use the `set` method to replace an existing component.
     */
    append(component: FormComponentInterface): void;
    /**
     * Add a form component to the beginning of the collection.
     *
     * Use the `set` method to replace an existing component.
     */
    prepend(component: FormComponentInterface): void;
    /**
     * Insert a form component at a specific index, moving all elements after it.
     *
     * Use the `set` method to replace an existing component.
     */
    insert(index: number, component: FormComponentInterface): void;
    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     *
     * @throws ComponentNotFoundException
     */
    get<T extends FormComponentInterface>(identifier: number | string): T;
    /**
     * Get the index of a component in the array.
     */
    getNameOf(component: FormComponentInterface): number | null;
    /**
     * Replace an existing component.
     */
    set(index: number, component: FormComponentInterface): void;
    /**
     * Merge a group of the same type into the current one.
     */
    merge(source: FormArray): void;
    /**
     * Remove a component from the collection.
     */
    remove(index: number): FormComponentInterface | null;
    /**
     * Remove all components from the collection.
     */
    clear(): void;
    /**
     * Check whether there is a component with the given name in the collection.
     */
    has(index: number): boolean;
    /**
     * Count the number of children.
     */
    count(): number;
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches the internal array of controls.
     *
     * If a control present in the form array is missing from the input value (or set to undefined),
     * the value of the control will not be modified.
     *
     * If a value of the input doesn't match any control, it will be ignored.
     */
    setValue(values: any[]): void;
    /**
     * Set the default value of child defined in the input object.
     */
    setDefaultValue(values: Record<string, any>): void;
    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    forEach(cb: (component: FormComponentInterface, identifier: number) => void | false, filters?: ForEachFilters): void;
    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    protected forEachDecorated(cb: (decorator: FormChildComponentInterface, identifier: number) => void | false): void;
    /**
     * Refresh the value from the children.
     */
    protected updateValue(): void;
    /**
     * Do the actual update of the value.
     */
    private doUpdateValue;
    /**
     * Wrap the modifications to the components collection to ensure
     * the value is correctly updated and events are triggered.
     */
    private updateCollection;
    /**
     * Clone the current value.
     */
    private cloneValue;
}
