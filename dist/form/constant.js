/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { enumToArray } from '@banquette/utils-array/enum-to-array';

var _a, _b;
/**
 * Events emitted by form components.
 */
var FormEvents = {
    /**
     * Emitted before the value is changed, so modifications can be made bof a form component has changed.
     */
    BeforeValueChange: Symbol('before-value-change'),
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
    ComponentRemoved: Symbol('component-removed'),
    /**
     * Validation related events.
     */
    ValidationStart: Symbol('validation-start'),
    ValidationEnd: Symbol('validation-end'),
    /**
     * Errors
     */
    ErrorsChanged: Symbol('error-changed')
};
/**
 * Events that are emitted from child to parent.
 */
var InheritedFormEvents = {
    ValueChanged: Symbol('inherited-value-changed'),
    StateChanged: Symbol('inherited-state-changed'),
    ComponentAdded: Symbol('inherited-component-added'),
    ComponentRemoved: Symbol('inherited-component-removed'),
    ValidationStart: Symbol('inherited-validation-start'),
    ValidationEnd: Symbol('inherited-validation-end'),
};
/**
 * A map facilitating the conversion between events and their inherited equivalent.
 */
var EventsInheritanceMap = (_a = {},
    _a[FormEvents.ValueChanged] = InheritedFormEvents.ValueChanged,
    _a[FormEvents.StateChanged] = InheritedFormEvents.StateChanged,
    _a[FormEvents.ComponentAdded] = InheritedFormEvents.ComponentAdded,
    _a[FormEvents.ComponentRemoved] = InheritedFormEvents.ComponentRemoved,
    _a[FormEvents.ValidationStart] = InheritedFormEvents.ValidationStart,
    _a[FormEvents.ValidationEnd] = InheritedFormEvents.ValidationEnd,
    // So the map can be used with already inherited events
    _a[InheritedFormEvents.ValueChanged] = InheritedFormEvents.ValueChanged,
    _a[InheritedFormEvents.StateChanged] = InheritedFormEvents.StateChanged,
    _a[InheritedFormEvents.ComponentAdded] = InheritedFormEvents.ComponentAdded,
    _a[InheritedFormEvents.ComponentRemoved] = InheritedFormEvents.ComponentRemoved,
    _a[InheritedFormEvents.ValidationStart] = InheritedFormEvents.ValidationStart,
    _a[InheritedFormEvents.ValidationEnd] = InheritedFormEvents.ValidationEnd,
    _a);
/**
 * Types of strategies available to form component to automatically trigger a validation round.
 * Calling `validate()` manually totally bypass this.
 */
var ValidationStrategy;
(function (ValidationStrategy) {
    /**
     * The component will never trigger a validation by itself.
     */
    ValidationStrategy[ValidationStrategy["None"] = 0] = "None";
    /**
     * The component will trigger a validation each time the value changes.
     */
    ValidationStrategy[ValidationStrategy["OnChange"] = 1] = "OnChange";
    /**
     * The component will trigger a validation when the focus is gained.
     */
    ValidationStrategy[ValidationStrategy["OnFocus"] = 2] = "OnFocus";
    /**
     * The component will trigger a validation when the focus is lost.
     */
    ValidationStrategy[ValidationStrategy["OnBlur"] = 4] = "OnBlur";
    /**
     * The component will use the validation strategy of its parent.
     * If no parent, "ValidationStrategy.None" is used.
     */
    ValidationStrategy[ValidationStrategy["Inherit"] = 8] = "Inherit";
})(ValidationStrategy || (ValidationStrategy = {}));
/**
 * The default validation to apply on the root level of the root,
 * if none is defined by the end user.
 */
var DefaultValidationStrategy = ValidationStrategy.OnChange;
/**
 * Special validation group that makes the component use its parent's.
 */
var InheritValidationGroup = Symbol('inherit');
/**
 * The possible states of validation for a component.
 */
var ValidationStatus;
(function (ValidationStatus) {
    /**
     * The validation has been executed and no error has been found.
     */
    ValidationStatus["Valid"] = "valid";
    /**
     * The validation has been executed and one or more errors has been found.
     */
    ValidationStatus["Invalid"] = "invalid";
    /**
     * The validation has not yet been executed.
     */
    ValidationStatus["Unknown"] = "unknown";
})(ValidationStatus || (ValidationStatus = {}));
/**
 * The list of states a form component can take.
 */
var BasicState;
(function (BasicState) {
    BasicState["Focused"] = "focused";
    BasicState["Touched"] = "touched";
    BasicState["Dirty"] = "dirty";
    BasicState["Changed"] = "changed";
    BasicState["Busy"] = "busy";
    BasicState["Invalid"] = "invalid";
    BasicState["NotValidated"] = "notValidated";
    BasicState["Validating"] = "validating";
    BasicState["Concrete"] = "concrete";
})(BasicState || (BasicState = {}));
/**
 * States that keep track of the call context.
 *
 * @see AbstractFormComponent.contextualizedStates
 */
var ContextualizedState;
(function (ContextualizedState) {
    ContextualizedState["Disabled"] = "disabled";
})(ContextualizedState || (ContextualizedState = {}));
/**
 * And their inverse.
 */
var InverseState;
(function (InverseState) {
    InverseState["Enabled"] = "enabled";
    InverseState["UnFocused"] = "unfocused";
    InverseState["Pristine"] = "pristine";
    InverseState["UnTouched"] = "untouched";
    InverseState["NotBusy"] = "notBusy";
    InverseState["UnChanged"] = "unchanged";
    InverseState["Valid"] = "valid";
    InverseState["Validated"] = "validated";
    InverseState["NotValidating"] = "notValidating";
    InverseState["Virtual"] = "virtual";
})(InverseState || (InverseState = {}));
/**
 * Map between BasicState/ContextualizedState items and their InverseState.
 */
var StatesInverseMap = (_b = {},
    _b[ContextualizedState.Disabled] = InverseState.Enabled,
    _b[BasicState.Focused] = InverseState.UnFocused,
    _b[BasicState.Dirty] = InverseState.Pristine,
    _b[BasicState.Touched] = InverseState.UnTouched,
    _b[BasicState.Busy] = InverseState.NotBusy,
    _b[BasicState.Changed] = InverseState.UnChanged,
    _b[BasicState.Invalid] = InverseState.Valid,
    _b[BasicState.NotValidated] = InverseState.Validated,
    _b[BasicState.Validating] = InverseState.NotValidating,
    _b[BasicState.Concrete] = InverseState.Virtual,
    _b);
/**
 * An array containing all the basic states.
 */
var BasicStates = enumToArray(BasicState);
/**
 * A special violation type that is set when the validation of a child component fails.
 *
 * This is because the validation of each part of the tree is totally separated and the
 * ValidationResult objects are not accessible between levels.
 */
var VirtualViolationType = 'dQ264Eeu019J8i5Fos4lBgj5iE1nOlhpNycl3n252';
/**
 * Define the different contexts from which a method can be called.
 *
 * @see AbstractFormComponent.buildChildComponentDecorator
 * @see AbstractFormGroup.buildParentComponentDecorator
 * @see FormControl.buildControlViewDecorator
 */
var CallContext;
(function (CallContext) {
    /**
     * The call is made from the userland.
     */
    CallContext[CallContext["External"] = 0] = "External";
    /**
     * The call is made from a parent object in the form hierarchy.
     */
    CallContext[CallContext["Parent"] = 1] = "Parent";
    /**
     * The call is made from a child object in the form hierarchy.
     */
    CallContext[CallContext["Child"] = 2] = "Child";
    /**
     * The call is made by the view.
     */
    CallContext[CallContext["ViewModel"] = 4] = "ViewModel";
    /**
     * The call is made in the context of a reset.
     */
    CallContext[CallContext["Reset"] = 8] = "Reset";
})(CallContext || (CallContext = {}));
/**
 * The list of call context relative to a form component.
 */
var ComponentRelatedCallContexts = [CallContext.Child, CallContext.Parent];
/**
 * The different type of internal accesses to the `forEach` method of groups.
 */
var FilterGroup;
(function (FilterGroup) {
    /**
     * Default filters to apply when iterating over the child components from outside.
     * Can be overridden on a per call basis using the second argument of `forEach`.
     */
    FilterGroup[FilterGroup["External"] = 0] = "External";
    /**
     * Filters to apply when the value of a group is updated.
     */
    FilterGroup[FilterGroup["UpdateValue"] = 1] = "UpdateValue";
    /**
     * Filters to apply when building the validator of a group.
     */
    FilterGroup[FilterGroup["Validate"] = 2] = "Validate";
    /**
     * Filters to apply when calculating the size of a group.
     */
    FilterGroup[FilterGroup["Size"] = 3] = "Size";
    /**
     * Filters to apply when getting children errors.
     */
    FilterGroup[FilterGroup["Errors"] = 4] = "Errors";
})(FilterGroup || (FilterGroup = {}));

export { BasicState, BasicStates, CallContext, ComponentRelatedCallContexts, ContextualizedState, DefaultValidationStrategy, EventsInheritanceMap, FilterGroup, FormEvents, InheritValidationGroup, InheritedFormEvents, InverseState, StatesInverseMap, ValidationStatus, ValidationStrategy, VirtualViolationType };
