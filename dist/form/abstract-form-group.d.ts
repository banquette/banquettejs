import { UnsubscribeFunction } from "@banquette/event/type";
import { ValidationResult } from "@banquette/validation/validation-result";
import { ValidatorContainerInterface } from "@banquette/validation/validator-container.interface";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractFormComponent } from "./abstract-form-component";
import { FilterGroup } from "./constant";
import { FormEvent } from "./event/form-event";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { FormComponentsCollection } from "./form-components-collection";
import { FormError } from "./form-error";
import { FormGroupInterface } from "./form-group.interface";
import { FormParentComponentInterface } from "./form-parent-component.interface";
import { ForEachFilters, UnassignedFormError, ConcreteValidationStrategy } from "./type";
export declare abstract class AbstractFormGroup<IdentifierType = unknown, ValueType = unknown, ChildrenType = unknown> extends AbstractFormComponent<ValueType, ChildrenType> implements FormGroupInterface<IdentifierType> {
    /**
     * The filters to apply in the different type iteration over child components.
     * This is configurable using the `setChildrenFilters`.
     */
    protected readonly foreachFilters: Record<FilterGroup, ForEachFilters>;
    /**
     * A reference on the "Container" part of the validator, so we can mutate it with the group.
     */
    private containerValidator;
    /**
     * The validator of the group component itself.
     * The public `validator` is in fact a Container (or Compose) validator that contains child validators.
     */
    private selfValidator;
    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     */
    abstract get<T extends FormComponentInterface>(identifier: IdentifierType | string): T;
    /**
     * Get the name of a component in the group.
     */
    abstract getNameOf(component: FormComponentInterface): IdentifierType | null;
    /**
     * Replace an existing component.
     */
    abstract set(identifier: IdentifierType, component: FormComponentInterface): void;
    /**
     * Merge a group of the same type into the current one.
     */
    abstract merge(source: this): void;
    /**
     * Check whether there is a component with the given name in the collection.
     */
    abstract has(name: IdentifierType): boolean;
    /**
     * Remove a component from the collection.
     */
    abstract remove(identifier: IdentifierType): FormComponentInterface | null;
    /**
     * Remove all components from the collection.
     */
    abstract clear(): void;
    /**
     * Count the number of children.
     */
    abstract count(): number;
    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    abstract forEach(cb: (component: FormComponentInterface, identifier: IdentifierType) => void | false, filters?: ForEachFilters): void;
    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    protected abstract forEachDecorated(cb: (decorator: FormChildComponentInterface, identifier: IdentifierType) => void | false): void;
    protected constructor();
    /**
     * Alias of `count()`.
     */
    get length(): number;
    /**
     * Get the "size" of the component.
     * Meaning the number of direct children + 1 to account for the component on which the call is made.
     *
     * A FormControlInterface will always have a size of "1", because it has no children.
     * An empty group will also have a size of "1".
     */
    get size(): number;
    /**
     * Same as `size` but add to length of children instead of them counting for one.
     */
    get sizeDeep(): number;
    /**
     * The whole list of errors found in the current component and all its children.
     */
    get errorsDeep(): FormError[];
    /**
     * A key/value pair object containing the path of each children component as index and the array of their errors as value.
     */
    get errorsDeepMap(): Record<string, FormError[]>;
    /**
     * Add an error to a child component.
     * `name` can be a component name of a path to a deeper child.
     */
    addChildError(name: string, error: UnassignedFormError | UnassignedFormError[]): void;
    /**
     * Assign a map of errors to child components.
     * The map is a key/value pair where the key can be the name of a direct child or the path to a deeper one.
     */
    addChildrenErrors(map: Record<string, UnassignedFormError | UnassignedFormError[]>): void;
    /**
     * Remove all errors from the component and its children.
     */
    clearErrorsDeep(silent?: boolean): void;
    /**
     * Get all components matching one of the patterns and wrap the result in a collection
     * object that you can interact with as if it was a single component.
     */
    getByPattern(pattern: string | string[]): FormComponentsCollection;
    /**
     * Try to get a form component by path.
     *
     * @throws ComponentNotFoundException
     */
    getByPath<T extends FormComponentInterface>(path: string): T;
    /**
     * Set the filters to apply in a certain type of access to the child components of the group.
     */
    setGroupFilters(type: FilterGroup, filters: ForEachFilters): void;
    /**
     * Reset the control. It has the following effects:
     *
     *   - Set the value to the "default value",
     *   - Unmark the following states: `BasicState.Changed`, `BasicState.Touched`, `BasicState.Dirty`, `BasicState.Validated`,
     *   - Blur the control if focused,
     *   - Clear validation errors.
     *
     * Resetting the control does not impact the following states: `ContextualizedState.Disabled`, `BasicState.Busy`, `BasicState.Validating`, `BasicState.Concrete`.
     *
     * If the component has children, they will be reset as well.
     */
    doReset(): void;
    /**
     * @inheritDoc
     */
    setValidator(validator: ValidatorInterface | null): void;
    /**
     * Register a callback that will be called when a component is added/set to the collection.
     */
    onControlAdded(cb: (event: FormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Register a callback that will be called when a component is removed from the collection.
     */
    onControlRemoved(cb: (event: FormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Run the "self" validator of the group, alone, if there is one.
     */
    protected validateSelf(): void;
    /**
     * Only validate if the active validation strategy matches the one in parameter.
     */
    protected validateSelfIfStrategyMatches(strategy: ConcreteValidationStrategy): void;
    /**
     * Rebuild the internal validator.
     */
    protected updateValidator(): void;
    /**
     * Wrapper to call to update the container validator,
     * to ensure the required operations are performed afterward.
     */
    protected updateContainerValidator(cb: (validator: ValidatorContainerInterface) => void): void;
    /**
     * Do what needs to be done with a ValidationResult that just got settled.
     */
    protected handleValidationResult(result: ValidationResult, isDeep: boolean): void;
    /**
     * Mark the component as `disabled` for the current call context.
     */
    protected markAsDisabled(): void;
    /**
     * Unmark the `disabled` state of the component for the current call context.
     */
    protected markAsEnabled(): void;
    /**
     * Try to get the identifier of a child component.
     */
    protected getIndexOf(component: FormComponentInterface): IdentifierType | null;
    /**
     * Remove an element from the collection using a reference on the control instead of an identifier.
     */
    protected removeByRef(component: FormComponentInterface): void;
    /**
     * Propagate the basic states of the component to its parents.
     */
    protected propagateStatesToParent(): void;
    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    protected removeStatesFromParent(): void;
    /**
     * Create the decorator that will be used a child component.
     *
     * Doing this instead of exposing the instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the child only (like `updateValue`).
     *   2) By wrapping the methods we can set a call context before the call and remove it after.
     *
     * Overall, it gives a better control over the capabilities given to child and avoid exposing them to the outside world.
     */
    protected buildParentComponentDecorator(): FormParentComponentInterface;
}
