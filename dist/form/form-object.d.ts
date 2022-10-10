import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractFormGroup } from "./abstract-form-group";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { ForEachFilters } from "./type";
export declare class FormObject extends AbstractFormGroup<string, Record<string, any>, Record<string, FormComponentInterface>> {
    /**
     * Get all the children as a plain object.
     */
    get children(): Record<string, FormComponentInterface>;
    /**
     * A set of components stored as a key/value pair.
     */
    private children_;
    constructor(children?: Record<string, FormComponentInterface>, validator?: ValidatorInterface);
    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     *
     * @throws ComponentNotFoundException
     */
    get<T extends FormComponentInterface>(identifier: string): T;
    /**
     * Get the name of a component in the group.
     */
    getNameOf(component: FormComponentInterface): string | null;
    /**
     * Replace an existing component.
     *
     * @throws UsageException If the identifier is invalid
     */
    set(identifier: string, component: FormComponentInterface): void;
    /**
     * Set a component deep into the form tree, creating missing containers if necessary.
     */
    setByPath(path: string, component: FormComponentInterface): void;
    /**
     * Merge a group of the same type into the current one.
     */
    merge(source: FormObject): void;
    /**
     * Remove a component from the collection.
     */
    remove(identifier: string): FormComponentInterface | null;
    /**
     * Remove all components from the collection.
     */
    clear(): void;
    /**
     * Check whether there is a component with the given name in the collection.
     */
    has(identifier: string): boolean;
    /**
     * Count the number of children.
     */
    count(): number;
    /**
     * Sets the value of the `FormObject`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * If a control present in the form group is missing from the input value,
     * the value of the control will not be modified.
     *
     * If a value of the input doesn't match any control, it will be ignored.
     *
     * @usageNotes
     * ```
     * const form = new FormObject({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({last: 'Drew'});
     *
     * console.log(form.value);   // {first: null, last: 'Drew'}
     * ```
     */
    setValue(values: Record<string, any>): void;
    /**
     * Set the default value of child defined in the input object.
     */
    setDefaultValue(values: Record<string, any>): void;
    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    forEach(cb: (component: FormComponentInterface, identifier: string) => void | false, filters?: ForEachFilters): void;
    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    protected forEachDecorated(cb: (decorator: FormChildComponentInterface, identifier: string) => void | false): void;
    /**
     * Refresh the value from the children.
     */
    protected updateValue(): void;
    /**
     * Do the actual update of the value.
     */
    private doUpdateValue;
    /**
     * Wrap the modifications to the collection to ensure
     * the value is correctly updated and events are triggered.
     */
    private updateCollection;
    /**
     * Clone the current value.
     */
    private cloneValue;
    /**
     * Throws an exception if the identifier is invalid.
     *
     * @return the cleaned up identifier
     *
     * @throws UsageException
     */
    private static ValidateIdentifier;
}
