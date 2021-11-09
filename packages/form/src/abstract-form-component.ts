import { EventDispatcher, EventDispatcherInterface, UnsubscribeFunction } from "@banquette/event";
import { UsageException, ExceptionFactory } from "@banquette/exception";
import { removeFromArray } from "@banquette/utils-array";
import { matchBest, MatchResult } from "@banquette/utils-glob";
import { proxy } from "@banquette/utils-misc";
import { getObjectKeys } from "@banquette/utils-object";
import { ensureArray, GenericCallback, isUndefined, Writeable, isFunction } from "@banquette/utils-type";
import { ValidationResult, ValidatorInterface } from "@banquette/validation";
import {
    BasicState,
    BasicStates,
    CallContext,
    ComponentRelatedCallContexts,
    ContextualizedState,
    Events,
    InverseState,
    StatesInverseMap,
    ValidationStatus,
    ValidationStrategy, VirtualViolationType, EventsInheritanceMap, DefaultValidationStrategy
} from "./constant";
import { FormEvent } from "./event/form-event";
import { StateChangedFormEvent } from "./event/state-changed.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormChildComponentInterface } from "./form-child-component.interface";
import { FormComponentInterface } from "./form-component.interface";
import { FormControlInterface } from "./form-control.interface";
import { FormParentComponentInterface } from "./form-parent-component.interface";
import { ConcreteValidationStrategy, ContextStackItem, State } from "./type";
import { FormError } from "./form-error";
import { FormGroupInterface } from "./form-group.interface";

/**
 * Used to give a unique id to every new form component.
 */
let maxId: number = 0;

export abstract class AbstractFormComponent<ValueType = unknown, ChildrenType = unknown> implements FormComponentInterface<ValueType, ChildrenType> {
    /**
     * Unique id of the component.
     */
    public readonly id: number = ++maxId;

    /**
     * The absolute path of the component from the root of the form.
     *
     * The path is composed of each level name separated by "/".
     *
     * So the root node has a path of "/".
     * If if has a child named "name", its path will by "/name".
     */
    public get path(): string {
        if (this.parent) {
            const parentPath: string = this.parent.path;
            return parentPath + (parentPath !== '/' ? '/' : '') + this.name;
        }
        return '/';
    }

    /**
     * The current value of the component.
     *
     * For a `FormControl`: its current value.
     * For a `FormObject`: a key/value pair containing the values of each non virtual children.
     * For a `FormArray`: an array containing the values of each non virtual children.
     */
    public readonly value!: ValueType;

    /**
     * The parent form component.
     */
    public readonly parent: FormParentComponentInterface|null = null;

    /**
     * The validator to use to validate the current value of the component, if any.
     */
    public readonly validator: ValidatorInterface|null = null;

    /**
     * A component is `valid` when the validation has run and no error has been found.
     */
    public get valid(): boolean { return !this.invalid }

    /**
     * A component is `invalid` when the validation has run and one or more errors has been found.
     */
    public get invalid(): boolean { return this.basicStates[BasicState.Invalid].length > 0 }

    /**
     * Inverse of `validated`.
     */
    public get notValidated(): boolean { return this.basicStates[BasicState.NotValidated].length > 0 }

    /**
     * A component is `validated` when the validation has run, no matter if errors have been found or not.
     */
    public get validated(): boolean { return !this.notValidated }

    /**
     * A component is `validating` when its validator is currently running.
     */
    public get validating(): boolean { return this.basicStates[BasicState.Validating].length > 0 }

    /**
     * Inverse of `validating`.
     */
    public get notValidating(): boolean { return !this.validating }

    /**
     * Only `true` when the component has been validated, has no validation running and no error have been found.
     */
    public get validatedAndValid(): boolean { return this.validated && this.validated && !this.validating }

    /**
     * A component is `busy` when its view model or the one of its children is processing something.
     */
    public get busy(): boolean { return this.basicStates[BasicState.Busy].length > 0 }

    /**
     * Inverse of `busy`.
     */
    public get notBusy(): boolean { return !this.busy }

    /**
     * A `disabled` component is non-interactive and excluded from the validation.
     *
     * This is a "multi origin" flag, meaning it can be set multiple time by different sources.
     * All original sources must remove their flag for the component to become enabled again.
     */
    public get disabled(): boolean { return Object.keys(this.contextualizedStates[ContextualizedState.Disabled]).length > 0 }

    /**
     * Inverse of `disabled`.
     */
    public get enabled(): boolean { return !this.disabled }

    /**
     * A component is `dirty` if the user has changed its value in the UI, no matter its current value.
     */
    public get dirty(): boolean { return this.basicStates[BasicState.Dirty].length > 0 }

    /**
     * Inverse of `dirty`.
     */
    public get pristine(): boolean { return !this.dirty }

    /**
     * A component is marked `touched` once the user has triggered a `blur` event on it.
     */
    public get touched(): boolean { return this.basicStates[BasicState.Touched].length > 0 }

    /**
     * Inverse of `touched`.
     */
    public get untouched(): boolean { return !this.touched }

    /**
     * A component is `changed` when its value is different from the initial value.
     */
    public get changed(): boolean { return this.basicStates[BasicState.Changed].length > 0 }

    /**
     * Inverse of `changed`.
     */
    public get unchanged(): boolean { return !this.changed }

    /**
     * A component is `focused` when its the current field on edition.
     */
    public get focused(): boolean { return this.basicStates[BasicState.Focused].length > 0 }

    /**
     * Inverse of `focused`.
     */
    public get unfocused(): boolean { return !this.focused }

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
    public get concrete(): boolean { return this.basicStates[BasicState.Concrete].length > 0 }

    /**
     * Inverse of `concrete`.
     */
    public get virtual(): boolean { return !this.concrete }

    /**
     * The public validation strategy for this component.
     */
    public readonly validationStrategy: ValidationStrategy = ValidationStrategy.Inherit;

    /**
     * The name of the component (if not the root node).
     *
     * The name of a component is given by its parent, so the root node cannot be named.
     * The "name" of a root node is the name of the variable holding it.
     */
    public get name(): string|number|null {
        if (this.parent !== null) {
            return this.parent.decorated.getNameOf(this);
        }
        return null;
    }

    /**
     * The root instance of the form.
     */
    public get root(): FormComponentInterface {
        if (this.parent !== null) {
            return this.parent.root;
        }
        return this;
    }

    /**
     * By default, a form component has no child.
     */
    public abstract readonly children: ChildrenType;

    /**
     * Get the "size" of the component.
     * Meaning the number of direct children + 1 to account for the component on which the call is made.
     *
     * A FormControlInterface will always have a size of "1", because it has no children.
     * An empty group will also have a size of "1".
     */
    public get size(): number {
        return 1;
    }

    /**
     * Same as `size` but add to length of children instead of them counting for one.
     */
    public get sizeDeep(): number {
        return 1;
    }

    /**
     * The list of errors found for this component.
     */
    public readonly errors: FormError[] = [];

    /**
     * The whole list of errors found in the current component and all its children.
     */
    public get errorsDeep(): FormError[] {
        // No children at this level.
        // Overridden by groups.
        return this.errors;
    }

    /**
     * A key/value pair object containing the path of each children component as index and the array of their errors as value.
     */
    public get errorsDeepMap(): Record<string, FormError[]> {
        // No children at this level.
        // Overridden by groups.
        return {[this.path]: this.errors};
    }

    /**
     * The list of the current states of the component.
     */
    public readonly activeStates: State[] = [
        InverseState.Enabled,
        InverseState.UnFocused,
        InverseState.Pristine,
        InverseState.UnTouched,
        InverseState.NotBusy,
        InverseState.UnChanged,
        InverseState.Valid,
        InverseState.Validated,
        InverseState.NotValidating,
        InverseState.Virtual
    ];

    /**
     * Same as `activeStates` but filtered to only keep basic states.
     */
    protected get activeBasicStates(): BasicState[] {
        return this.activeStates.filter((state: any) => BasicStates.indexOf(state) > -1) as BasicState[];
    }

    /**
     * Additional tags that will be added to the active states when matching a pattern.
     */
    protected readonly additionalPatternTags: string[] = [];

    /**
     * The call context is used to pass the info on the origin
     * of a call to methods that modify their behavior depending on where they are called.
     */
    private readonly contextsStack: ContextStackItem[] = [];

    /**
     * The current state of the validation.
     */
    private validationStatus: ValidationStatus = ValidationStatus.Unknown;

    /**
     * The global validation promise of the component.
     *
     * This promise will only be created if there an asynchronous validation running,
     * and it will always be at most one instance at a time.
     *
     * If multiple validation occurs, they are stacked in the `validationPromisesStack` array,
     * this promise will only resolve when the stack is empty.
     */
    private validationPromise: Promise<boolean>|null = null;

    /**
     * The "resolve" function of the `validationPromise`.
     */
    private validationPromiseResolve: ((result: boolean) => void)|null = null;

    /**
     * The stack of ValidationResult's promises currently running.
     */
    private validationResultsStack: ValidationResult[] = [];

    /**
     * An object containing the ids of all components that have marked each state.
     */
    private basicStates: Record<BasicState, number[]> = {
        [BasicState.Dirty]: [],
        [BasicState.Touched]: [],
        [BasicState.Changed]: [],
        [BasicState.Busy]: [],
        [BasicState.Invalid]: [],
        [BasicState.NotValidated]: [],
        [BasicState.Validating]: [],
        [BasicState.Focused]: [],
        [BasicState.Concrete]: []
    };

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
    private contextualizedStates: Record<ContextualizedState, Partial<Record<CallContext, number[]>>> = {
        [ContextualizedState.Disabled]: {}
    };

    /**
     * Used to handle events emitted by the component.
     * Will stay null until a subscription is made for performance reason.
     */
    private eventDispatcher: EventDispatcherInterface|null = null;

    /**
     * Get/Set the FormControl currently on focus.
     * Only one FormControl can have the focus at any given time.
     */
    private activeControl_: FormControlInterface|null = null;
    public get activeControl(): FormControlInterface|null {
        if (this.parent !== null) {
            return this.parent.activeControl;
        }
        return this.activeControl_;
    }
    protected set activeControl(control: FormControlInterface|null) {
        if (this.parent !== null) {
            (this.parent as Writeable<FormParentComponentInterface>).activeControl = control;
        } else {
            this.activeControl_ = control;
        }
    }

    /**
     * Update the value of the component.
     */
    public abstract setValue(value: ValueType, context?: CallContext): void;

    /**
     * Sets the parent component.
     */
    public setParent(parent: FormParentComponentInterface): FormChildComponentInterface {
        if (this.parent !== null) {
            this.unsetParent();
        }
        (this as Writeable<AbstractFormComponent>).parent = parent;
        return this.buildChildComponentDecorator();
    }

    /**
     * Test if the component is a group.
     */
    public isGroup(): this is FormGroupInterface {
        return this.children !== null;
    }

    /**
     * Set the validator to use to the validate the component.
     *
     * The validator should only validate the current component because only the value will be exposed,
     * not the component itself.
     *
     * If child components need validation, give them their own validators.
     */
    public setValidator(validator: ValidatorInterface|null): void {
        (this as Writeable<AbstractFormComponent>).validator = validator;
        if (this.validator !== null) {
            this.markBasicState(BasicState.NotValidated, this.id);
        } else {
            this.unmarkBasicState(BasicState.NotValidated, this.id);
        }
    }

    /**
     * Set the strategy to use to trigger the validation automatically.
     *
     * By default, the strategy is to inherit from the parent strategy (`ValidationStrategy.Inherit`).
     * If the root node as the `ValidationStrategy.Inherit`, it default to `ValidationStrategy.None`.
     *
     * This means that by default, the only way to trigger a validation is to call `validate()` manually.
     */
    public setValidationStrategy(strategy: ValidationStrategy): void {
        (this as Writeable<AbstractFormComponent>).validationStrategy = strategy;
    }

    /**
     * Detach the component from its parent.
     */
    public detach(): void {
        if (this.parent !== null) {
            this.parent.remove(this);
        }
    }

    /**
     * Test if the form component is the root level.
     */
    public isRoot(): boolean {
        return this.parent === null;
    }

    /**
     * Disable the component, removing it from the validation process.
     */
    public disable(): void {
        this.markAsDisabled();
    }

    /**
     * Enable the component.
     */
    public enable(): void {
        this.markAsEnabled();
    }

    /**
     * Force validate the component and all its children.
     * By calling this method the validation will always run immediately, no matter the validation strategy.
     */
    public validate(): boolean|Promise<boolean> {
        return this.doValidate(this.validator);
    }

    /**
     * Force the component to become virtual.
     */
    public markAsVirtual(): void {
        this.unmarkBasicState(BasicState.Concrete, this.id);
    }

    /**
     * Force the component to become concrete.
     */
    public markAsConcrete(): void {
        this.markBasicState(BasicState.Concrete, this.id);
    }

    /**
     * Add one or multiple errors to the component.
     */
    public addError(type: string, message?: string): void {
        const error = new FormError(this.path, type, message);
        this.errors.push(error);
        this.markBasicState(BasicState.Invalid, this.id);
    }

    /**
     * Remove all errors from the component.
     */
    public clearErrors(): void {
        (this as Writeable<AbstractFormComponent>).errors = [];
        this.unmarkBasicState(BasicState.Invalid, this.id);
    }

    /**
     * Remove all errors from the component and its children.
     */
    public clearErrorsDeep(): void {
        this.clearErrors();
    }

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
    /* final */ public reset = (() => {
        return this.proxifyWithContext(proxy(this.doReset, this), CallContext.Reset);
    })();

    /**
     * Try the match to path of the component against one or multiple patterns.
     */
    public matchPattern(pattern: string|string[]): MatchResult {
        return matchBest(ensureArray(pattern), this.path, (this.activeStates as string[]).concat(this.additionalPatternTags));
    }

    /**
     * Register a callback that will be called when the value of the component changes.
     *
     * @return A method to call to unsubscribe.
     */
    public onValueChanged(callback: (event: ValueChangedFormEvent) => void, selfOnly: boolean = true): UnsubscribeFunction {
        return this.subscribe<ValueChangedFormEvent>(Events.ValueChanged, callback, selfOnly);
    }

    /**
     * Register a callback that will be called when the value of a flag changes.
     *
     * @return A method to call to unsubscribe.
     */
    public onStateChanged(callback: (event: StateChangedFormEvent) => void, selfOnly: boolean = true): UnsubscribeFunction {
        return this.subscribe<StateChangedFormEvent>(Events.StateChanged, callback, selfOnly);
    }

    /**
     * Subscribe to an event.
     * You can alternatively use shortcut methods (like "onValueChange") to subscribe to events.
     */
    public subscribe<T extends FormEvent>(type: symbol, callback: (event: T) => void, selfOnly: boolean = true): UnsubscribeFunction {
        const unsubscribeFunctions: Function[] = [];
        const dispatcher = this.getEventDispatcher();

        unsubscribeFunctions.push(dispatcher.subscribe(type, callback));
        if (!selfOnly && !isUndefined(EventsInheritanceMap[type])) {
            unsubscribeFunctions.push(dispatcher.subscribe(EventsInheritanceMap[type], callback));
        }
        return () => {
            for (const fn of unsubscribeFunctions) {
                fn();
            }
        };
    }

    /**
     * Refresh the value of the component.
     */
    protected updateValue(): void {
        if (this.parent !== null) {
            this.parent.updateValue();
        }
    }

    /**
     * The actual implementation of reset(), contextualized.
     */
    protected doReset(): void {
        if (this.activeControl !== null && this.activeControl.id === this.id) {
            this.activeControl.blur();
        }
        this.unmarkBasicState([BasicState.Touched, BasicState.Dirty], this.id);
        this.validationStatus = ValidationStatus.Unknown;
        this.clearErrors();
    }

    /**
     * Only validate if the active validation strategy matches the one in parameter.
     */
    protected validateIfStrategyMatches(strategy: ConcreteValidationStrategy): void {
        const candidate = this.getConcreteValidationStrategy();
        if ((candidate & strategy) === strategy) {
            this.doValidate(this.validator);
        }
    }

    /**
     * Get the "usable" validation strategy by resolving the inherit if set.
     */
    protected getConcreteValidationStrategy(): ConcreteValidationStrategy {
        if (this.validationStrategy === ValidationStrategy.Inherit) {
            return this.parent !== null ? this.parent.getConcreteValidationStrategy() : DefaultValidationStrategy;
        }
        return this.validationStrategy;
    }

    /**
     * Dispatch an event.
     */
    protected dispatch(type: symbol, event: FormEvent|(() => FormEvent)): void {
        if (this.eventDispatcher !== null) {
            if (isFunction(event)) {
                event = event();
            }
            const result = this.getEventDispatcher().dispatch(type, event);
            if (result.error) {
                throw result.errorDetail;
            }
        }
        if (this.parent !== null) {
            this.parent.dispatch(type, event);
        }
    }

    /**
     * Do the actual validation.
     * The validation type determine if children will be validated too or not.
     *
     * "type" is only used by sub classes that have children.
     * Here we simply validate the current validator if we have one.
     */
    protected doValidate(validator: ValidatorInterface|null): Promise<boolean>|boolean {
        this.markBasicState(BasicState.Validating, this.id);
        // If no validator, we can consider the value as valid.
        if (validator === null) {
            // An empty validation result is always sync and valid.
            const result = new ValidationResult('/');
            this.clearResultFromValidationResultsStack(result, true);
            this.handleValidationResult(result);
            return result.valid;
        }
        const result: ValidationResult = validator.validate(this.value);
        if (result.promise === null) {
            this.clearResultFromValidationResultsStack(result, true);
            this.handleValidationResult(result);
            return result.valid;
        }
        this.queueAsyncValidationResult(result);
        if (this.validationPromise !== null) {
            return this.validationPromise;
        }
        return result.valid;

    }

    /**
     * Add a waiting ValidationResult to the stack of results behind a single promise.
     */
    protected queueAsyncValidationResult(result: ValidationResult): void {
        if (result.promise === null) {
            throw new UsageException('The ValidationResult is not asynchronous.');
        }
        if (this.validationPromise === null) {
            this.validationPromise = new Promise<boolean>((resolve) => {
                this.validationPromiseResolve = resolve;
            });
        }
        const resultPromise = result.promise as Promise<ValidationResult>;
        if (this.validationResultsStack.length > 0) {
            this.validationResultsStack[this.validationResultsStack.length - 1].cancel();
        }
        this.validationResultsStack.push(result);
        resultPromise
            .then(proxy(this.handleValidationResult, this))
            .catch(() => {
                this.handleValidationResult(result);
            });
    }

    /**
     * Do what needs to be done with a ValidationResult that just got settled.
     */
    protected handleValidationResult(result: ValidationResult): void {
        if (result.waiting) {
            throw new UsageException('The ValidationResult is still waiting.');
        }
        this.clearResultFromValidationResultsStack(result);
        if (result.valid) {
            this.unmarkBasicState(BasicState.Invalid, this.id);
        } else {
            (this as Writeable<AbstractFormComponent>).errors = [];
            for (const violation of result.violations) {
                if (violation.type !== VirtualViolationType) {
                    this.addError(violation.type, violation.message);
                }
            }
            this.markBasicState(BasicState.Invalid, this.id);
        }
        this.unmarkBasicState(BasicState.NotValidated, this.id);
        this.unmarkBasicState(BasicState.Validating, this.id);
    }

    /**
     * Check if a ValidationResult is part of the queue, and removes it if so.
     *
     * Only async validators are part of the queue, but this method will not trigger an error if
     * the result given as input is not part of the stack.
     */
    private clearResultFromValidationResultsStack(result: ValidationResult, forceClear: boolean = false): void {
        if (!forceClear) {
            const pos = this.validationResultsStack.indexOf(result);
            if (pos < 0) {
                return;
            }
            this.validationResultsStack.splice(pos, 1);
            // Here we check if the result we just received is the last on the stack.
            // If so, we don't need to wait for the others, we can skip the return and
            // go straight to using the result and end the validation process.
            if (pos < this.validationResultsStack.length && this.validationResultsStack.length > 0) {
                return;
            }
        }
        // Because we may still have pending results in the stack, clear them, because we will ignore their result anyway.
        // When they are done, they will not be found in the array and
        // thus will return in the first condition above.
        this.validationResultsStack = [];
        if (this.validationPromiseResolve !== null) {
            this.validationPromiseResolve(result.valid);
            this.validationPromiseResolve = null;
            this.validationPromise = null;
        }
    }

    /**
     * Set the current call context.
     */
    protected pushContext(context: CallContext): void {
        this.contextsStack.push({context, component: this.id});
    }

    /**
     * Remove the last call context.
     */
    protected popContext(): void {
        this.contextsStack.pop();
    }

    /**
     * Test if a context is part of the current context.
     */
    protected hasContext(context: CallContext): boolean {
        for (const candidate of this.contextsStack) {
            if (context === CallContext.External) {
                if (candidate.context === context) {
                    return true;
                }
            } else if ((candidate.context & context) === context) {
                return true;

            }
        }
        return false;
    }

    /**
     * Get the component id corresponding to a call context.
     * This is simply the id of the current instance if the call context is component related, 0 otherwise.
     */
    protected getCallContextComponentId(context: CallContext): number {
        return ComponentRelatedCallContexts.indexOf(context) > -1 ? this.id : 0;
    }

    /**
     * Extract the call context usable for states from the current context.
     *
     * Also ensure that only one suitable context is set, or throw an exception.
     * The exception is more like an assert, if it happens there is a bug, it should never throw.
     *
     * @throws
     */
    protected resolveStateCallContext(): CallContext {
        const contexts = [];
        for (const candidate of [CallContext.ViewModel, CallContext.Parent, CallContext.Child]) {
            if (this.hasContext(candidate)) {
                contexts.push(candidate);
            }
        }
        if (contexts.length > 1) {
            throw new UsageException('Try to update a state while multiple suitable call contexts are available.');
        }
        return contexts.length > 0 ? contexts[0] : CallContext.External;
    }

    /**
     * Shortcut method that calls `proxifyWithContext` for each aliased method.
     */
    protected buildContextualizedApi<T>(exposedMethodsMap: Record<keyof T, GenericCallback>, context: CallContext): T {
        const api: any = {};
        for (const alias of getObjectKeys(exposedMethodsMap)) {
            api[alias] = this.proxifyWithContext(exposedMethodsMap[alias], context);
        }
        return api;
    }

    /**
     * Create a proxy that ensures a call context is added to the stack before the callback is called and removed after.
     */
    protected proxifyWithContext(fn: GenericCallback, context: CallContext): any {
        return (...args: any[]) => {
            try {
                this.pushContext(context);
                return fn.apply(this, args);
            } finally {
                this.popContext();
            }
        };
    }

    /**
     * Mark the component as `disabled` for the current call context.
     */
    protected markAsDisabled(): void {
        this.markContextualizedState(ContextualizedState.Disabled);
    }

    /**
     * Unmark the `disabled` state of the component for the current call context.
     */
    protected markAsEnabled(): void {
        this.unmarkContextualizedState(ContextualizedState.Disabled);
    }

    /**
     * Dispatch a `Events.StateChanged` form event if something is listening.
     */
    protected dispatchStateChange(state: State, newValue: boolean): void {
        this.dispatch(Events.StateChanged, () => new StateChangedFormEvent(this, state, newValue));
    }

    /**
     * Add a component id to the basic states object of all the parents until the root node.
     */
    protected markBasicState(state: BasicState|BasicState[], id: number): void {
        const states: BasicState[] = ensureArray(state);
        for (const state of states) {
            if (this.basicStates[state].indexOf(id) < 0) {
                this.basicStates[state].push(id);
                this.updateActiveState(state, false);
                this.dispatch(Events.StateChanged, () => new StateChangedFormEvent(this, state, true));
            }
            if (this.parent !== null) {
                this.parent.markBasicState(state, id);
            }
        }
    }

    /**
     * Remove a component id from the basic states object of all the parents until the root node.
     */
    protected unmarkBasicState(state: BasicState|BasicState[], id: number): void {
        const states: BasicState[] = ensureArray(state);
        for (const state of states) {
            const pos: number = this.basicStates[state].indexOf(id);
            if (pos > -1) {
                this.basicStates[state].splice(pos, 1);
                if (this.basicStates[state].length === 0) {
                    this.updateActiveState(state, true);
                }
                this.dispatch(Events.StateChanged, () => new StateChangedFormEvent(this, state, false));
            }
            if (this.parent !== null) {
                this.parent.unmarkBasicState(state, id);
            }
        }
    }

    /**
     * Add the current call context to a contextualized state.
     */
    protected markContextualizedState(state: ContextualizedState): void {
        const context: CallContext = this.resolveStateCallContext();
        if (isUndefined(this.contextualizedStates[state][context])) {
            this.contextualizedStates[state][context] = [];
        }
        const id: number = this.getCallContextComponentId(context);
        if ((this.contextualizedStates[state][context] as number[]).indexOf(id) < 0) {
            (this.contextualizedStates[state][context] as number[]).push(id);

            // Meaning the state has changed
            if (Object.keys(this.contextualizedStates[state]).length === 1) {
                this.dispatchStateChange(state, true);
                this.updateActiveState(state, false);
            }
        }
    }

    /**
     * Add the current call context to a contextualized state.
     */
    protected unmarkContextualizedState(state: ContextualizedState): void {
        const context: CallContext = this.resolveStateCallContext();
        const id: number = this.getCallContextComponentId(context);

        if (!isUndefined(this.contextualizedStates[state][context])) {
            const pos: number = (this.contextualizedStates[state][context] as number[]).indexOf(id);
            if (pos >= 0) {
                (this.contextualizedStates[state][context] as number[]).splice(pos, 1);
                if ((this.contextualizedStates[state][context] as number[]).length === 0) {
                    delete this.contextualizedStates[state][context];

                    // Meaning the state has changed
                    if (Object.keys(this.contextualizedStates[state]).length === 0) {
                        this.dispatchStateChange(state, false);
                        this.updateActiveState(state, true);
                    }
                }
            }
        }
    }

    /**
     * Propagate the basic states of the component to its parents.
     */
    protected propagateStatesToParent(): void {
        if (this.parent !== null) {
            // Special case for focus because only one element can have the focus at the same time.
            // If another component is focused, clear it.
            if (this.activeControl !== null) {
                this.activeControl.blur();
            }
            this.parent.markBasicState(this.activeBasicStates, this.id);
        }
    }

    /**
     * Remove the marking of the component on the basic states of its parents.
     */
    protected removeStatesFromParent(): void {
        if (this.parent !== null) {
            this.parent.unmarkBasicState(this.activeBasicStates, this.id);
        }
    }

    /**
     * Update the `activeStates` array to reflect the inversion of the state in parameter.
     */
    private updateActiveState(state: BasicState | ContextualizedState, inverted: boolean): void {
        const toRemove: State = inverted ? state : StatesInverseMap[state];
        const toAdd: State = inverted ? StatesInverseMap[state] : state;

        if (this.activeStates.indexOf(toAdd) < 0) {
            this.activeStates.push(toAdd);
        }
        removeFromArray(this.activeStates, toRemove);
    }

    /**
     * Ensure an instance is returned, creating it if necessary.
     */
    private getEventDispatcher(): EventDispatcherInterface {
        if (this.eventDispatcher === null) {
            this.eventDispatcher = new EventDispatcher();
        }
        return this.eventDispatcher;
    }

    /**
     * Unset the parent component.
     */
    private unsetParent(): void {
        if (this.parent !== null && this.name !== null) {
            this.parent.decorated.remove(this.name);
        }
        (this as Writeable<AbstractFormComponent>).parent = null;
    }

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
    private buildChildComponentDecorator(): FormChildComponentInterface {
        const that = this;
        return Object.assign({
                get decorated(): FormComponentInterface { return that }
            }, this.buildContextualizedApi<Omit<FormChildComponentInterface, 'decorated'>>({
                setValue: this.setValue,
                unsetParent: this.unsetParent,
                enable: this.enable,
                disable: this.disable,
                propagateStatesToParent: this.propagateStatesToParent,
                removeStatesFromParent: this.removeStatesFromParent,
                validate: this.doValidate,
                handleValidationResult: this.handleValidationResult
            }, CallContext.Parent)
        ) as FormChildComponentInterface;
    }
}
