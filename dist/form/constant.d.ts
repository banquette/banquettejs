/**
 * Events emitted by form components.
 */
export declare const FormEvents: {
    /**
     * Emitted before the value is changed, so modifications can be made bof a form component has changed.
     */
    BeforeValueChange: symbol;
    /**
     * Emitted after the value of a form component has changed.
     */
    ValueChanged: symbol;
    /**
     * Emitted when any state of a component changes.
     */
    StateChanged: symbol;
    /**
     * Form groups related events.
     */
    ComponentAdded: symbol;
    ComponentRemoved: symbol;
    /**
     * Validation related events.
     */
    ValidationStart: symbol;
    ValidationEnd: symbol;
    /**
     * Errors
     */
    ErrorsChanged: symbol;
};
/**
 * Events that are emitted from child to parent.
 */
export declare const InheritedFormEvents: {
    ValueChanged: symbol;
    StateChanged: symbol;
    ComponentAdded: symbol;
    ComponentRemoved: symbol;
    ValidationStart: symbol;
    ValidationEnd: symbol;
};
/**
 * A map facilitating the conversion between events and their inherited equivalent.
 */
export declare const EventsInheritanceMap: {
    [x: symbol]: symbol;
};
/**
 * Types of strategies available to form component to automatically trigger a validation round.
 * Calling `validate()` manually totally bypass this.
 */
export declare enum ValidationStrategy {
    /**
     * The component will never trigger a validation by itself.
     */
    None = 0,
    /**
     * The component will trigger a validation each time the value changes.
     */
    OnChange = 1,
    /**
     * The component will trigger a validation when the focus is gained.
     */
    OnFocus = 2,
    /**
     * The component will trigger a validation when the focus is lost.
     */
    OnBlur = 4,
    /**
     * The component will use the validation strategy of its parent.
     * If no parent, "ValidationStrategy.None" is used.
     */
    Inherit = 8
}
/**
 * The default validation to apply on the root level of the root,
 * if none is defined by the end user.
 */
export declare const DefaultValidationStrategy = ValidationStrategy.OnChange;
/**
 * Special validation group that makes the component use its parent's.
 */
export declare const InheritValidationGroup: unique symbol;
/**
 * The possible states of validation for a component.
 */
export declare enum ValidationStatus {
    /**
     * The validation has been executed and no error has been found.
     */
    Valid = "valid",
    /**
     * The validation has been executed and one or more errors has been found.
     */
    Invalid = "invalid",
    /**
     * The validation has not yet been executed.
     */
    Unknown = "unknown"
}
/**
 * The list of states a form component can take.
 */
export declare enum BasicState {
    Focused = "focused",
    Touched = "touched",
    Dirty = "dirty",
    Changed = "changed",
    Busy = "busy",
    Invalid = "invalid",
    NotValidated = "notValidated",
    Validating = "validating",
    Concrete = "concrete"
}
/**
 * States that keep track of the call context.
 *
 * @see AbstractFormComponent.contextualizedStates
 */
export declare enum ContextualizedState {
    Disabled = "disabled"
}
/**
 * And their inverse.
 */
export declare enum InverseState {
    Enabled = "enabled",
    UnFocused = "unfocused",
    Pristine = "pristine",
    UnTouched = "untouched",
    NotBusy = "notBusy",
    UnChanged = "unchanged",
    Valid = "valid",
    Validated = "validated",
    NotValidating = "notValidating",
    Virtual = "virtual"
}
/**
 * Map between BasicState/ContextualizedState items and their InverseState.
 */
export declare const StatesInverseMap: Record<BasicState | ContextualizedState, InverseState>;
/**
 * An array containing all the basic states.
 */
export declare const BasicStates: BasicState[];
/**
 * A special violation type that is set when the validation of a child component fails.
 *
 * This is because the validation of each part of the tree is totally separated and the
 * ValidationResult objects are not accessible between levels.
 */
export declare const VirtualViolationType = "dQ264Eeu019J8i5Fos4lBgj5iE1nOlhpNycl3n252";
/**
 * Define the different contexts from which a method can be called.
 *
 * @see AbstractFormComponent.buildChildComponentDecorator
 * @see AbstractFormGroup.buildParentComponentDecorator
 * @see FormControl.buildControlViewDecorator
 */
export declare enum CallContext {
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
export declare const ComponentRelatedCallContexts: CallContext[];
/**
 * The different type of internal accesses to the `forEach` method of groups.
 */
export declare enum FilterGroup {
    /**
     * Default filters to apply when iterating over the child components from outside.
     * Can be overridden on a per call basis using the second argument of `forEach`.
     */
    External = 0,
    /**
     * Filters to apply when the value of a group is updated.
     */
    UpdateValue = 1,
    /**
     * Filters to apply when building the validator of a group.
     */
    Validate = 2,
    /**
     * Filters to apply when calculating the size of a group.
     */
    Size = 3,
    /**
     * Filters to apply when getting children errors.
     */
    Errors = 4
}
