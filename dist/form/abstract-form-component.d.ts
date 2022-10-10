import { UnsubscribeFunction } from "@banquette/event/type";
import { MatchResult } from "@banquette/utils-glob/match-result";
import { GenericCallback } from "@banquette/utils-type/types";
import { ValidationResult } from "@banquette/validation/validation-result";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { BasicState, CallContext, ContextualizedState, ValidationStrategy } from "./constant";
import { ErrorsChangedFormEvent } from "./event/errors-changed.form-event";
import { FormEvent } from "./event/form-event";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ValidationEndFormEvent } from "./event/validation-end.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { FormControlInterface } from "./form-control.interface";
import { FormError } from "./form-error";
import { FormGroupInterface } from "./form-group.interface";
import { FormParentComponentInterface } from "./form-parent-component.interface";
import { ConcreteValidationStrategy, State } from "./type";
export declare abstract class AbstractFormComponent<ValueType = any, ChildrenType = unknown> implements FormComponentInterface<ValueType, ChildrenType> {
    /**
     * Used to give a unique id to every new form component.
     */
    private static MaxId;
    /**
     * Unique numerical id of the component.
     */
    readonly id: number;
    /**
     * Extended unique id for the whole form.
     *
     * This id is a longer string, guaranteed to be unique between forms and meant to be usable as id in the DOM.
     */
    get formId(): string;
    /**
     * The absolute path of the component from the root of the form.
     *
     * The path is composed of each level name separated by "/".
     *
     * So the root node has a path of "/".
     * If if has a child named "name", its path will by "/name".
     */
    get path(): string;
    /**
     * The current value of the component.
     *
     * For a `FormControl`: its current value.
     * For a `FormObject`: a key/value pair containing the values of each non virtual children.
     * For a `FormArray`: an array containing the values of each non virtual children.
     */
    readonly value: ValueType;
    /**
     * The parent form component.
     */
    readonly parent: FormParentComponentInterface | null;
    /**
     * The validator to use to validate the current value of the component, if any.
     */
    readonly validator: ValidatorInterface | null;
    /**
     * A component is `valid` when the validation has run and no error has been found.
     */
    get valid(): boolean;
    /**
     * A component is `invalid` when the validation has run and one or more errors has been found.
     */
    get invalid(): boolean;
    /**
     * Inverse of `validated`.
     */
    get notValidated(): boolean;
    /**
     * A component is `validated` when the validation has run, no matter if errors have been found or not.
     */
    get validated(): boolean;
    /**
     * A component is `validating` when its validator is currently running.
     */
    get validating(): boolean;
    /**
     * Inverse of `validating`.
     */
    get notValidating(): boolean;
    /**
     * Only `true` when the component has been validated, has no validation running and no error have been found.
     */
    get validatedAndValid(): boolean;
    /**
     * A component is `busy` when its view model or the one of its children is processing something.
     */
    get busy(): boolean;
    /**
     * Inverse of `busy`.
     */
    get notBusy(): boolean;
    /**
     * A `disabled` component is non-interactive and excluded from the validation.
     *
     * This is a "multi origin" flag, meaning it can be set multiple time by different sources.
     * All original sources must remove their flag for the component to become enabled again.
     */
    get disabled(): boolean;
    /**
     * Inverse of `disabled`.
     */
    get enabled(): boolean;
    /**
     * A component is `dirty` if the user has changed its value in the UI, no matter its current value.
     */
    get dirty(): boolean;
    /**
     * Inverse of `dirty`.
     */
    get pristine(): boolean;
    /**
     * A component is marked `touched` once the user has triggered a `blur` event on it.
     */
    get touched(): boolean;
    /**
     * Inverse of `touched`.
     */
    get untouched(): boolean;
    /**
     * A component is `changed` when its value is different from the initial value.
     */
    get changed(): boolean;
    /**
     * Inverse of `changed`.
     */
    get unchanged(): boolean;
    /**
     * A component is `focused` when its the current field on edition.
     */
    get focused(): boolean;
    /**
     * Inverse of `focused`.
     */
    get unfocused(): boolean;
    /**
     * A component is concrete if:
     *
     *  - For a `FormControl`: it has a view model,
     *  - For a `FromObject`: at least one of its children is concrete,
     *  - For a `FormArray`: it has been accessed from the view
     *
     * A virtual component is not part of the validation process nor of the exported values,
     * so it will basically be invisible from outside of the form.
     *
     * The goal is to be able to create a form where we don't know yet what
     * components will actually be used in the view.
     */
    get concrete(): boolean;
    /**
     * Inverse of `concrete`.
     */
    get virtual(): boolean;
    /**
     * The public validation strategy for this component.
     */
    readonly validationStrategy: ValidationStrategy;
    /**
     * The validation groups to use for this component.
     */
    readonly validationGroups: symbol | string[] | null;
    /**
     * The name of the component (if not the root node).
     *
     * The name of a component is given by its parent, so the root node cannot be named.
     * The "name" of a root node is the name of the variable holding it.
     */
    get name(): string | number | null;
    /**
     * The root instance of the form.
     */
    get root(): FormComponentInterface;
    /**
     * By default, a form component has no child.
     */
    abstract readonly children: ChildrenType;
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
     * The list of errors found for this component.
     */
    readonly errors: FormError[];
    /**
     * The whole list of errors found in the current component and all its children.
     */
    get errorsDeep(): FormError[];
    /**
     * A key/value pair object containing the path of each children component as index and the array of their errors as value.
     */
    get errorsDeepMap(): Record<string, FormError[]>;
    /**
     * The list of the current states of the component.
     */
    readonly activeStates: State[];
    /**
     * Same as `activeStates` but filtered to only keep basic states.
     */
    protected get activeBasicStates(): BasicState[];
    /**
     * Additional tags that will be added to the active states when matching a pattern.
     */
    protected readonly additionalPatternTags: string[];
    /**
     * The call context is used to pass the info on the origin
     * of a call to methods that modify their behavior depending on where they are called.
     */
    private readonly contextsStack;
    /**
     * The current state of the validation.
     */
    private validationStatus;
    /**
     * If the component's validator is running, this holds its validation result
     * so it can easily be canceled if needed.
     */
    private currentValidationResult;
    /**
     * An object containing the ids of all components that have marked each state.
     */
    private basicStates;
    /**
     * An object containing a list of call context for each state that can be set
     * by multiple sources at the same time.
     *
     * Not all states qualify for this.
     *
     * Take for example `disabled`, it can be set by:
     *
     *   - the end user (`CallContext.External`)
     *   - a parent component (`CallContext.Parent`)
     *   - the view model (`CallContext.ViewModel`)
     *
     * For each conflictual state, an object stores the call contexts from which is have been set,
     * as well as the ids of the components that set it.
     * If the call context doesn't include a component id, 0 is stored instead.
     *
     * To check if the state is `true`, we simply have to check if there is at least one CallContext in the object.
     */
    private contextualizedStates;
    /**
     * Used to handle events emitted by the component.
     * Will stay null until a subscription is made for performance reason.
     */
    private eventDispatcher;
    /**
     * Extended unique id for the whole tree.
     * This is only defined if the id is requested through `formId` and if the component has no parent.
     *
     * This id is a longer string, guaranteed to be unique between forms and meant to be usable as id in the DOM.
     */
    private treeId;
    /**
     * An object containing any extra data from the outside.
     * These values are not used internally.
     */
    private extras;
    /**
     * Get/Set the FormControl currently on focus.
     * Only one FormControl can have the focus at any given time.
     */
    private activeControl_;
    get activeControl(): FormControlInterface | null;
    protected set activeControl(control: FormControlInterface | null);
    /**
     * Update the value of the component.
     */
    abstract setValue(value: ValueType, context?: CallContext): void;
    /**
     * Set the default value of the control.
     *
     * Calling this method will also set the field back an "unchanged" state.
     * Further reset of the control will set this value back into the "real" value of the control.
     */
    abstract setDefaultValue(value: ValueType): void;
    /**
     * Sets the parent component.
     */
    setParent(parent: FormParentComponentInterface): FormChildComponentInterface;
    /**
     * Test if the component is a group.
     */
    isGroup(): this is FormGroupInterface;
    /**
     * Set the validator to use to the validate the component.
     *
     * The validator should only validate the current component because only the value will be exposed,
     * not the component itself.
     *
     * If child components need validation, give them their own validators.
     */
    setValidator(validator: ValidatorInterface | null): void;
    /**
     * Set the strategy to use to trigger the validation automatically.
     *
     * By default, the strategy is to inherit from the parent strategy (`ValidationStrategy.Inherit`).
     * If the root node as the `ValidationStrategy.Inherit`, it default to `ValidationStrategy.None`.
     *
     * This means that by default, the only way to trigger a validation is to call `validate()` manually.
     */
    setValidationStrategy(strategy: ValidationStrategy): void;
    /**
     * Sets the validations groups to use when validating the component.
     * Custom groups can replace those if passed to the `validate()` method directly.
     */
    setValidationGroups(groups: string | string[] | null): void;
    /**
     * Detach the component from its parent.
     */
    detach(): void;
    /**
     * Test if the form component is the root level.
     */
    isRoot(): boolean;
    /**
     * Disable the component, removing it from the validation process.
     */
    disable(): void;
    /**
     * Enable the component.
     */
    enable(): void;
    /**
     * Force the validation of the component and all its children.
     * By calling this method the validation will always run immediately, no matter the validation strategy.
     */
    validate(): boolean | Promise<boolean>;
    /**
     * Force the component to become virtual.
     */
    markAsVirtual(): void;
    /**
     * Force the component to become concrete.
     */
    markAsConcrete(): void;
    /**
     * Add one or multiple errors to the component.
     */
    addError(type: string, message?: string | null): void;
    /**
     * Remove all errors from the component.
     */
    clearErrors(silent?: boolean): void;
    /**
     * Remove all errors from the component and its children.
     */
    clearErrorsDeep(silent?: boolean): void;
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
    reset: any;
    /**
     * Try the match to path of the component against one or multiple patterns.
     */
    matchPattern(pattern: string | string[]): MatchResult;
    /**
     * Get all extra data.
     */
    getExtras(): Record<string, any>;
    /**
     * Replace all extra data.
     */
    setExtras(extras: Record<string, any>): void;
    /**
     * Get a single extra value.
     */
    getExtra<T = any>(name: string, defaultValue?: any): T;
    /**
     * Set a single extra value.
     */
    setExtra(name: string, value: any): void;
    /**
     * Register a callback that will be called when the value of the component changes.
     *
     * @return A method to call to unsubscribe.
     */
    onValueChanged(callback: (event: ValueChangedFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Register a callback that will be called when the value of a flag changes.
     *
     * @return A method to call to unsubscribe.
     */
    onStateChanged(callback: (event: StateChangedFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Register a callback that will be called each time the validation is started.
     *
     * @return A method to call to unsubscribe.
     */
    onValidationStart(callback: (event: FormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Register a callback that will be called each time a validation ends.
     *
     * @return A method to call to unsubscribe.
     */
    onValidationEnd(callback: (event: ValidationEndFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Register a callback that will be called when an error is added of removed from the component.
     *
     * @return A method to call to unsubscribe.
     */
    onErrorsChanged(callback: (event: ErrorsChangedFormEvent) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Subscribe to an event.
     * You can alternatively use shortcut methods (like "onValueChange") to subscribe to events.
     */
    subscribe<T extends FormEvent>(type: symbol, callback: (event: T) => void, priority?: number, selfOnly?: boolean): UnsubscribeFunction;
    /**
     * Refresh the value of the component.
     */
    protected updateValue(): void;
    /**
     * Refresh the internal validator of the component.
     */
    protected updateValidator(): void;
    /**
     * The actual implementation of reset(), contextualized.
     */
    protected doReset(): void;
    /**
     * Only validate if the active validation strategy matches the one in parameter.
     */
    protected validateIfStrategyMatches(strategy: ConcreteValidationStrategy): void;
    /**
     * Get the "usable" validation strategy by resolving the inherit if set.
     */
    protected getConcreteValidationStrategy(): ConcreteValidationStrategy;
    /**
     * Get the real validation groups, considering the parents.
     */
    protected getConcreteValidationGroups(): string[];
    /**
     * Dispatch an event.
     */
    protected dispatch(type: symbol, event: FormEvent | (() => FormEvent)): void;
    /**
     * Do the actual validation, for the validator in parameter.
     */
    protected doValidate(validator: ValidatorInterface | null, isDeep?: boolean): boolean | Promise<boolean>;
    /**
     * Do what needs to be done with a ValidationResult that just got settled.
     */
    protected handleValidationResult(result: ValidationResult, isDeep: boolean): void;
    /**
     * Set the current call context.
     */
    protected pushContext(context: CallContext): void;
    /**
     * Remove the last call context.
     */
    protected popContext(): void;
    /**
     * Test if a context is part of the current context.
     */
    protected hasContext(context: CallContext): boolean;
    /**
     * Get the component id corresponding to a call context.
     * This is simply the id of the current instance if the call context is component related, 0 otherwise.
     */
    protected getCallContextComponentId(context: CallContext): number;
    /**
     * Extract the call context usable for states from the current context.
     *
     * Also ensure that only one suitable context is set, or throw an exception.
     * The exception is more like an assert, if it happens there is a bug, it should never throw.
     *
     * @throws
     */
    protected resolveStateCallContext(): CallContext;
    /**
     * Shortcut method that calls `proxifyWithContext` for each aliased method.
     */
    protected buildContextualizedApi<T>(exposedMethodsMap: Record<keyof T, GenericCallback>, context: CallContext): T;
    /**
     * Create a proxy that ensures a call context is added to the stack before the callback is called and removed after.
     */
    protected proxifyWithContext(fn: GenericCallback, context: CallContext): any;
    /**
     * Mark the component as `disabled` for the current call context.
     */
    protected markAsDisabled(): void;
    /**
     * Unmark the `disabled` state of the component for the current call context.
     */
    protected markAsEnabled(): void;
    /**
     * Dispatch a `FormEvents.StateChanged` form event if something is listening.
     */
    protected dispatchStateChange(state: State, newValue: boolean): void;
    /**
     * Add a component id to the basic states object of all the parents until the root node.
     */
    protected markBasicState(state: BasicState | BasicState[], id: number): void;
    /**
     * Remove a component id from the basic states object of all the parents until the root node.
     */
    protected unmarkBasicState(state: BasicState | BasicState[], id: number): void;
    /**
     * Add the current call context to a contextualized state.
     */
    protected markContextualizedState(state: ContextualizedState): void;
    /**
     * Add the current call context to a contextualized state.
     */
    protected unmarkContextualizedState(state: ContextualizedState): void;
    /**
     * Propagate the basic states of the component to its parents.
     */
    protected propagateStatesToParent(): void;
    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    protected removeStatesFromParent(): void;
    /**
     * Update the `activeStates` array to reflect the inversion of the state in parameter.
     */
    private updateActiveState;
    /**
     * Ensure an instance is returned, creating it if necessary.
     */
    private getEventDispatcher;
    /**
     * Unset the parent component.
     */
    private unsetParent;
    /**
     * Create the decorator that will be used by the parent component.
     *
     * Doing this instead of exposing the instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the parent only (like `unsetParent`).
     *   2) By wrapping the methods we can set a call context before the call and remove it after.
     *
     * Overall, it gives a better control over the capabilities given to parent and avoid exposing them to the outside world.
     */
    private buildChildComponentDecorator;
}
