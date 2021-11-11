import { UnsubscribeFunction } from "@banquette/event";
import { MatchResult } from "@banquette/utils-glob";
import { ValidatorInterface } from "@banquette/validation";
import { ValidationStrategy } from "./constant";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormControlInterface } from "./form-control.interface";
import { FormParentComponentInterface } from "./form-parent-component.interface";
import { State } from "./type";
import { FormError } from "./form-error";
import { FormGroupInterface } from "./form-group.interface";

export interface FormComponentInterface<ValueType = unknown, ChildrenType = unknown> {
    /**
     * Unique id of the component.
     */
    readonly id: number;

    /**
     * Extended unique id for the whole form.
     *
     * This id is a longer string, guaranteed to be unique between forms and meant to be usable as id in the DOM.
     */
    readonly formId: string;

    /**
     * The absolute path of the component from the root of the form.
     *
     * The path is composed of each level name separated by "/".
     *
     * So the root node has a path of "/".
     * If if has a child named "name", its path will by "/name".
     */
    readonly path: string;

    /**
     * The name of the component (if not the root node).
     *
     * The name of a component is given by its parent, so the root node cannot be named.
     * The "name" of a root node is the name of the variable holding it.
     */
    readonly name: string|number|null;

    /**
     * The root instance of the form.
     */
    readonly root: FormComponentInterface;

    /**
     * The form control currently on focus.
     */
    readonly activeControl: FormControlInterface|null;

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
    readonly parent: FormParentComponentInterface|null;

    /**
     * The current validator in use.
     */
    readonly validator: ValidatorInterface|null;

    /**
     * A component is `valid` when the validation has run and no error has been found.
     */
    readonly valid: boolean;

    /**
     * A component is `invalid` when the validation has run and one or more errors has been found.
     */
    readonly invalid: boolean;

    /**
     * A component is `validated` when the validation has run, no matter if errors have been found or not.
     */
    readonly validated: boolean;

    /**
     * Inverse of `validated`.
     */
    readonly notValidated: boolean;

    /**
     * A component is `validating` when its validator is currently running.
     */
    readonly validating: boolean;

    /**
     * Inverse of `validating`.
     */
    readonly notValidating: boolean;

    /**
     * Only `true` when the component has been validated, has not validation running and no error have been found.
     */
    readonly validatedAndValid: boolean;

    /**
     * A component is `busy` when the view model of a component or one of its children is processing something.
     */
    readonly busy: boolean;

    /**
     * Inverse of `busy`.
     */
    readonly notBusy: boolean;

    /**
     * A disabled component is non-interactive and excluded from the validation.
     *
     * This is a "multi origin" flag, meaning it can be set multiple time by different sources.
     * All original sources must remove their flag for the component to become enabled again.
     */
    readonly disabled: boolean;

    /**
     * Inverse of `disabled`.
     */
    readonly enabled: boolean;

    /**
     * A component is `dirty` if the user has changed its value in the UI, no matter its current value.
     */
    readonly dirty: boolean;

    /**
     * Inverse of `dirty`.
     */
    readonly pristine: boolean;

    /**
     * True if the component is marked as `touched`.
     *
     * A component is marked `touched` once the user has triggered a `blur` event on it.
     */
    readonly touched: boolean;

    /**
     * Inverse of `touched`.
     */
    readonly untouched: boolean;

    /**
     * A component is `changed` when its value is different from the initial value.
     */
    readonly changed: boolean;

    /**
     * Inverse of `changed`.
     */
    readonly unchanged: boolean;

    /**
     * A component is `focused` when its the current field on edition.
     */
    readonly focused: boolean;

    /**
     * Inverse of `focused`.
     */
    readonly unfocused: boolean;

    /**
     * A component is virtual if:
     *
     *  - For a `FormControl`: it has no view,
     *  - For a `FromObject` or a `FormArray`: it is not accessed in any way from the view.
     *
     * A virtual component is not part of the validation process nor of the exported values,
     * so it will basically be invisible to the outside world.
     *
     * The goal is to be able to create a form where we don't know yet what
     * components will actually be used in the view.
     */
    readonly virtual: boolean;

    /**
     * Inverse of `virtual`.
     */
    readonly concrete: boolean;

    /**
     * Child components. Their type depends on the type of container.
     */
    readonly children: ChildrenType;

    /**
     * Get the "size" of the component.
     * Meaning the number of direct children + 1 to account for the component on which the call is made.
     *
     * A FormControlInterface will always have a size of "1", because it has no children.
     * An empty group will also have a size of "1".
     */
    readonly size: number;

    /**
     * Same as `size` but add to length of children instead of them counting for one.
     */
    readonly sizeDeep: number;

    /**
     * The list of the current states of the component.
     */
    readonly activeStates: State[];

    /**
     * The current validation strategy in use.
     */
    readonly validationStrategy: ValidationStrategy;

    /**
     * The list of errors found for this component.
     */
    readonly errors: FormError[];

    /**
     * Flattened array of errors found on the component itself and all its children (recursively).
     */
    readonly errorsDeep: FormError[];

    /**
     * A key/value pair object containing the path of each children component as index and the array of their errors as value.
     */
    readonly errorsDeepMap: Record<string, FormError[]>;

    /**
     * Sets the parent component.
     *
     * @internal to setup a parent/child relationship, add the child to the parent.
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
    setValidator(validator: ValidatorInterface|null): void;

    /**
     * Set the strategy to use to trigger the validation automatically.
     */
    setValidationStrategy(strategy: ValidationStrategy): void;

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
     * Update the value of the component.
     */
    setValue(value: ValueType): void;

    /**
     * Force validate the component and all its children.
     * By calling this method the validation will always run immediately, no matter the validation strategy.
     */
    validate(): boolean|Promise<boolean>;

    /**
     * Force the component to become virtual.
     */
    markAsVirtual(): void;

    /**
     * Force the component to become concrete.
     */
    markAsConcrete(): void;

    /**
     * Add an error to the component.
     */
    addError(type: string, message: string): void;

    /**
     * Remove all errors from the component.
     */
    clearErrors(): void;

    /**
     * Remove all errors from the component and its children.
     */
    clearErrorsDeep(): void;

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
    reset(): void;

    /**
     * Try the match to path of the component against one or multiple patterns.
     */
    matchPattern(pattern: string|string[]): MatchResult;

    /**
     * Register a callback that will be called when the value of the component changes.
     *
     * @return A method to call to unsubscribe.
     */
    onValueChanged(callback: (event: ValueChangedFormEvent) => void, selfOnly?: boolean): UnsubscribeFunction;

    /**
     * Register a callback that will be called when the value of a flag changes.
     *
     * @return A method to call to unsubscribe.
     */
    onStateChanged(callback: (event: StateChangedFormEvent) => void, selfOnly?: boolean): UnsubscribeFunction;
}
