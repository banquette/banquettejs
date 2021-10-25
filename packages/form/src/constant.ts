import { enumToArray } from "@banquette/utils-array";

/**
 * Events emitted by form components.
 */
export const Events = {
    /**
     * Emitted after the value of a form component has changed.
     */
    ValueChanged: Symbol('value-changed'),

    /**
     * Emitted when any state of a component changes.
     */
    StateChanged: Symbol('state-changed'),

    /**
     * Form groups related events.
     */
    ComponentAdded: Symbol('component-added'),
    ComponentRemoved: Symbol('component-removed')
};

/**
 * Types of strategies available to form component to automatically trigger a validation round.
 * Calling `validate()` manually totally bypass this.
 */
export enum ValidationStrategy {
    /**
     * The control will never trigger a validation by itself.
     */
    None = 0,

    /**
     * The control will trigger a validation each time the value changes.
     */
    OnChange = 1,

    /**
     * The control will trigger a validation when the focus is gained.
     */
    OnFocus = 2,

    /**
     * The control will trigger a validation when the focus is lost.
     */
    OnBlur = 4,

    /**
     * The control will use the validation strategy of its parent.
     * If no parent, "ValidationStrategy.None" is used.
     */
    Inherit = 8
}

/**
 * The possible states of validation for a component.
 */
export enum ValidationStatus {
    /**
     * The validation has been executed and no error has been found.
     */
    Valid = 'valid',

    /**
     * The validation has been executed and one or more errors has been found.
     */
    Invalid = 'invalid',

    /**
     * The validation has not yet been executed.
     */
    Unknown = 'unknown'
}

/**
 * The list of states a form component can take.
 */
export enum BasicState {
    Focused         = 'focused',
    Touched         = 'touched',
    Dirty           = 'dirty',
    Changed         = 'changed',
    Busy            = 'busy',
    Invalid         = 'invalid',
    NotValidated    = 'notValidated',
    Validating      = 'validating',
    Concrete        = 'concrete'
}

/**
 * States that keep track of the call context.
 *
 * @see AbstractFormComponent.contextualizedStates
 */
export enum ContextualizedState {
    Disabled        = 'disabled'
}

/**
 * And their inverse.
 */
export enum InverseState {
    Enabled         = 'enabled',
    UnFocused       = 'unfocused',
    Pristine        = 'pristine',
    UnTouched       = 'untouched',
    NotBusy         = 'notBusy',
    UnChanged       = 'unchanged',
    Valid           = 'valid',
    Validated       = 'validated',
    NotValidating   = 'notValidating',
    Virtual         = 'virtual'
}

/**
 * Map between BasicState/ContextualizedState items and their InverseState.
 */
export const StatesInverseMap: Record<BasicState|ContextualizedState, InverseState> = {
    [ContextualizedState.Disabled]  : InverseState.Enabled,
    [BasicState.Focused]            : InverseState.UnFocused,
    [BasicState.Dirty]              : InverseState.Pristine,
    [BasicState.Touched]            : InverseState.UnTouched,
    [BasicState.Busy]               : InverseState.NotBusy,
    [BasicState.Changed]            : InverseState.UnChanged,
    [BasicState.Invalid]            : InverseState.Valid,
    [BasicState.NotValidated]       : InverseState.Validated,
    [BasicState.Validating]         : InverseState.NotValidating,
    [BasicState.Concrete]           : InverseState.Virtual
};

/**
 * An array containing all the basic states.
 */
export const BasicStates = enumToArray(BasicState);

/**
 * Define the different contexts from which a method can be called.
 *
 * @see AbstractFormComponent.buildChildComponentDecorator
 * @see AbstractFormGroup.buildParentComponentDecorator
 * @see FormControl.buildControlViewDecorator
 */
export enum CallContext {
    /**
     * The call is made from the userland.
     */
    External = 0,

    /**
     * The call is made from a parent object in the form hierarchy.
     */
    Parent = 1,

    /**
     * The call is made from a child object in the form hierarchy.
     */
    Child = 2,

    /**
     * The call is made by the view.
     */
    ViewModel = 4,

    /**
     * The call is made in the context of a reset.
     */
    Reset = 8
}

/**
 * The list of call context relative to a form component.
 */
export const ComponentRelatedCallContexts = [CallContext.Child, CallContext.Parent];

/**
 * The different type of internal accesses to the `forEach` method of groups.
 */
export enum ConfigurableChildrenFilterType {
    /**
     * Default filters to apply when iterating over the child components from outside.
     * Can be overridden on a per call basis using the second argument of `forEach`.
     */
    External,

    /**
     * Filters to apply when the value of a group is updated.
     */
    UpdateValue,

    /**
     * Filters to apply when building the validator of a group.
     */
    Validate,

    /**
     * Filters to apply when calculating the size of a group.
     */
    Size,

    /**
     * Filters to apply when getting children errors.
     */
    Errors
}
