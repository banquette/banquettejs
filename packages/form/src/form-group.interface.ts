import { UnsubscribeFunction } from "@banquette/event";
import { FilterGroup } from "./constant";
import { FormEvent } from "./event/form-event";
import { FormComponentInterface } from "./form-component.interface";
import { FormComponentsCollection } from "./form-components-collection";
import { ForEachFilters } from "./type";

export interface FormGroupInterface<IdentifierType = unknown> extends FormComponentInterface {
    /**
     * Get a component by name.
     *
     * @throws ComponentNotFoundException
     */
    get<T extends FormComponentInterface>(identifier: IdentifierType): T;

    /**
     * Try to get a form component by path.
     *
     * @throws ComponentNotFoundException
     */
    getByPath<T extends FormComponentInterface>(path: string): T;

    /**
     * Get all components matching one of the patterns and wrap the result in a collection
     * object that you can interact with as if it was a single component.
     */
    getByPattern(pattern: string|string[]): FormComponentsCollection;

    /**
     * Get the name of a component in the group.
     */
    getNameOf(component: FormComponentInterface): IdentifierType|null;

    /**
     * Replace an existing control.
     */
    set(identifier: IdentifierType, component: FormComponentInterface): void;

    /**
     * Merge a group of the same type into the current one.
     */
    merge(source: this): void;

    /**
     * Remove a control from the collection.
     */
    remove(identifier: IdentifierType): FormComponentInterface|null;

    /**
     * Remove all controls from the collection.
     */
    clear(): void;

    /**
     * Check whether there is a control with the given name in the collection.
     */
    has(name: IdentifierType): boolean;

    /**
     * Count the number of children.
     */
    count(): number;

    /**
     * Call a function for each child.
     */
    forEach(cb: (component: FormComponentInterface, identifier: IdentifierType) => void, filters?: ForEachFilters): void;

    /**
     * Set the filters to apply in a certain type of access to the child components of the group.
     */
    setGroupFilters(type: FilterGroup, filters: ForEachFilters): void;

    /**
     * Register a callback that will be called when a control is added/set to the collection.
     */
    onControlAdded(cb: (event: FormEvent) => void, selfOnly?: boolean): UnsubscribeFunction;

    /**
     * Register a callback that will be called when a control is removed from the collection.
     */
    onControlRemoved(cb: (event: FormEvent) => void, selfOnly?: boolean): UnsubscribeFunction;
}
