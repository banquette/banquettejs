import { UnsubscribeFunction } from "@banquette/event/type";
import { UsageException } from "@banquette/exception/usage.exception";
import { areEqual } from "@banquette/utils-misc/are-equal";
import { cloneDeepPrimitive } from "@banquette/utils-object/clone-deep-primitive";
import { getObjectKeys } from "@banquette/utils-object/get-object-keys";
import { Writeable, GenericCallback } from "@banquette/utils-type/types";
import { ValidatorInterface } from "@banquette/validation/validator.interface";
import { AbstractFormComponent } from "./abstract-form-component";
import { BasicState, CallContext, FormEvents, ValidationStrategy } from "./constant";
import { BeforeValueChangeFormEvent } from "./event/before-value-change.form-event";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormControlInterface } from "./form-control.interface";
import { FormError } from "./form-error";
import { FormViewControlInterface } from "./form-view-control.interface";
import { FormViewModelInterface } from "./form-view-model.interface";

export class FormControl<ValueType = unknown> extends AbstractFormComponent<ValueType> implements FormControlInterface {
    /**
     * A FormControl has no child.
     */
    public readonly children: null = null;

    /**
     * The original value of this control.
     * That's the value given to the control before the user does anything.
     * If the current value equals this value, the control is considered "unchanged".
     *
     * Only form controls have a default value because parent components don't have their own value.
     * Their value is always deducted from the value of their children.
     */
    public readonly defaultValue: any;

    /**
     * The views of the control.
     * If none, the control is disabled, meaning its value will not automatically bubble up.
     *
     * This is done like this mainly so you can only use a part of a form created via an annotated model.
     */
    private viewModels: FormViewModelInterface[] = [];

    /**
     * A reference on the view models currently doing a call.
     */
    private currentViewModels: FormViewModelInterface[] = [];

    /**
     * A reference on the view model that have the focus.
     */
    private focusedViewModel?: FormViewModelInterface|null;

    /**
     * The last known value.
     */
    private lastValue: any;

    public constructor(value?: any, validator?: ValidatorInterface) {
        super();

        // Disable until a view model is set
        (this.proxifyWithContext(() => {
            this.disable();
        }, CallContext.ViewModel))();

        this.additionalPatternTags.push('control');
        (this as Writeable<FormControl>).value = value;
        this.lastValue = cloneDeepPrimitive(value);
        this.defaultValue = cloneDeepPrimitive(value);
        this.setValidator(validator || null);
    }

    /**
     * Set the new value of the control.
     */
    public setValue = (() => {
        let locked: boolean = false;
        return (value: any): void => {
            try {
                if (areEqual(this.lastValue, value) || locked) {
                    return;
                }
                locked = true;
                const beforeValueChangeEvent = new BeforeValueChangeFormEvent(this, this.lastValue, value);
                this.dispatch(FormEvents.BeforeValueChange, beforeValueChangeEvent);
                if (!beforeValueChangeEvent.changeAccepted) {
                    this.viewModels.forEach((vm) => {
                        vm.setValue(this.lastValue);
                    });
                    return;
                }
                if (!areEqual(beforeValueChangeEvent.newValue, value)) {
                    this.viewModels.forEach((vm) => {
                        vm.setValue(beforeValueChangeEvent.newValue);
                    });
                }
                // The value may have been overridden in the event.
                value = beforeValueChangeEvent.newValue;
                (this as Writeable<FormControl>).value = value;
                this.dispatch(FormEvents.ValueChanged, () => new ValueChangedFormEvent(this, this.lastValue, this.value));
                this.lastValue = cloneDeepPrimitive(this.value);
                this.viewModels.forEach((vm) => {
                    if (vm !== this.focusedViewModel) {
                        vm.setValue(value);
                    }
                });
                this.markBasicState(BasicState.Dirty);
                if (!areEqual(this.defaultValue, value)) {
                    this.markBasicState(BasicState.Changed);
                } else {
                    this.unmarkBasicState(BasicState.Changed);
                }
                if (!this.hasContext(CallContext.Reset)) {
                    this.validateIfStrategyMatches(ValidationStrategy.OnChange);
                }
                if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
                    this.updateValue();
                }
            } finally {
                locked = false;
            }
        };
    })();

    /**
     * Set the default value of the control.
     *
     * Calling this method will also set the field back an "unchanged" state.
     * Further reset of the control will set this value back into the "real" value of the control.
     */
    public setDefaultValue(value: any): void {
        (this as Writeable<FormControl>).defaultValue = cloneDeepPrimitive(value);
    }

    /**
     * Set the view model the control will communicate with.
     *
     * @return A object the view model must use to interact with the control.
     */
    public setViewModel(viewModel: FormViewModelInterface): FormViewControlInterface {
        if (this.viewModels.indexOf(viewModel) > -1) {
            throw new UsageException('The view model is already associated with this control.');
        }
        this.viewModels.push(viewModel);
        try {
            // Because we are still setting the connection between the control and the view model
            // at this point, we have no call context yet, so we have to push it manually.
            // That's the only time this should happen.
            this.pushContext(CallContext.ViewModel);
            this.enable();
            this.markAsConcrete();
            if (this.parent !== null) {
                this.parent.updateValue();
            }
        } finally {
            this.popContext();
        }
        viewModel.setValue(this.value);
        return this.buildControlViewDecorator(viewModel);
    }

    /**
     * Unset the view model assigned with the form control.
     */
    public unsetViewModel(viewModel: FormViewModelInterface): void {
        const pos = this.viewModels.indexOf(viewModel);
        if (pos > -1) {
            this.viewModels.splice(pos, 1);
        }
        if (!this.viewModels.length) {
            this.markAsVirtual();
        }
    }

    /**
     * Ask the view to get the focus on the control.
     */
    public focus(): void {
        if (this.viewModels.length > 0) {
            this.viewModels[0].focus();
        }
    }

    /**
     * Inverse of `focus()`.
     */
    public blur(): void {
        this.viewModels.forEach((vm) => {
            vm.blur();
        });
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
     */
    public doReset(): void {
        if (this.parent !== null) {
            this.parent.pushContext(CallContext.Reset, true);
        }
        this.setValue(this.defaultValue);
        super.doReset();
        if (this.parent !== null) {
            this.parent.popContext(true)
        }
    }

    /**
     * @inheritDoc
     */
    public setValidator(validator: ValidatorInterface|null): void {
        super.setValidator(validator);

        // Rebuild the parent validator, if there is one.
        this.updateValidator();
    }

    /**
     * Register a callback that will be called before the value of the control changes.
     *
     * @return A method to call to unsubscribe.
     */
    public onBeforeValueChange(callback: (event: BeforeValueChangeFormEvent) => void, priority?: number): UnsubscribeFunction {
        return this.subscribe<BeforeValueChangeFormEvent>(FormEvents.BeforeValueChange, callback, priority, true);
    }

    /**
     * Change the `focused` state of the control to `true`.
     * Only exposed to the view model.
     */
    private markAsFocused(): void {
        if (this.activeControl === this) {
            return ;
        }
        if (this.activeControl !== null && this.activeControl.id !== this.id) {
            this.activeControl.blur();
        }
        this.activeControl = this;
        this.markBasicState(BasicState.Focused);
        this.validateIfStrategyMatches(ValidationStrategy.OnFocus);
        if (this.currentViewModels.length) {
            this.focusedViewModel = this.currentViewModels[this.currentViewModels.length - 1];
        }
    }

    /**
     * Change the `focused` state of the control to `false`.
     * Only exposed to the view model.
     */
    private markAsBlurred(): void {
        if (this.activeControl === this) {
            this.activeControl = null;

            // Only mark the control "touched" if it was focused.
            this.markBasicState(BasicState.Touched);
            this.validateIfStrategyMatches(ValidationStrategy.OnBlur);
        }
        this.unmarkBasicState(BasicState.Focused);
        if (!this.currentViewModels.length || this.currentViewModels[this.currentViewModels.length - 1] === this.focusedViewModel) {
            this.focusedViewModel = null;
        }
    }

    /**
     * Change the `busy` state of the control to `true`.
     * Only exposed to the view model.
     */
    private markAsBusy(): void {
        this.markBasicState(BasicState.Busy);
    }

    /**
     * Change the `busy` state of the control to `false`.
     * Only exposed to the view model.
     */
    private markAsNotBusy(): void {
        this.unmarkBasicState(BasicState.Busy);
    }

    /**
     * Override to ensure the id is correctly set.
     */
    protected markBasicState(state: BasicState|BasicState[]): void {
        super.markBasicState(state, this.id);
    }

    /**
     * Override to ensure the id is correctly set.
     */
    protected unmarkBasicState(state: BasicState|BasicState[]): void {
        super.unmarkBasicState(state, this.id);
    }

    /**
     * Create the decorator that will be used by the view model to communicate with the control.
     *
     * Doing this instead of exposing the FormControl instance directly has several advantages:
     *
     *   1) It's possible to expose methods to the view model only.
     *      For example `markAsFocused` and `markAsFocused` are only available to the view model
     *      as only the view model have the ability to give the focus to the actual html element.
     *
     *   2) By wrapping certain methods like `setValue` we can know it is called from the view model,
     *      thus avoiding updating the value in the view model which would result in an infinite recursion.
     *
     * Overall, it gives a better control over the capabilities given to the view model.
     */
    private buildControlViewDecorator(viewModel: FormViewModelInterface): FormViewControlInterface {
        const that = this;
        return Object.assign({
            get id():                number { return that.id },
            get formId():            string { return that.formId },
            get path():              string { return that.path },
            get valid():             boolean { return that.valid },
            get invalid():           boolean { return that.invalid },
            get validated():         boolean { return that.validated },
            get notValidated():      boolean { return that.notValidated },
            get validating():        boolean { return that.validating },
            get notValidating():     boolean { return that.notValidating },
            get validatedAndValid(): boolean { return that.validatedAndValid },
            get busy():              boolean { return that.busy },
            get notBusy():           boolean { return that.notBusy },
            get disabled():          boolean { return that.disabled },
            get enabled():           boolean { return that.enabled },
            get dirty():             boolean { return that.dirty },
            get pristine():          boolean { return that.pristine },
            get touched():           boolean { return that.touched },
            get untouched():         boolean { return that.untouched },
            get changed():           boolean { return that.changed },
            get unchanged():         boolean { return that.unchanged },
            get focused():           boolean { return that.focused },
            get unfocused():         boolean { return that.unfocused },
            get errors():            FormError[] { return that.errors },
            get defaultValue():      any { return that.defaultValue },
            get value():             any { return that.value },
            get focusedViewModel():  FormViewModelInterface|null { return that.focusedViewModel || null }
        },
            this.buildContextualizedViewModelApi<Omit<FormViewControlInterface,
                'id' | 'formId' | 'path' | 'valid' | 'invalid' | 'validated' | 'notValidated' | 'validating' | 'notValidating' | 'validatedAndValid' |
                'busy' | 'notBusy' | 'disabled' | 'enabled' | 'dirty' | 'pristine' | 'touched' | 'untouched' | 'changed' |
                'unchanged' | 'focused' | 'unfocused' | 'errors' | 'defaultValue' | 'value' | 'focusedViewModel'>>({
                setValue: this.setValue,
                markAsDisabled: this.markAsDisabled,
                markAsEnabled: this.markAsEnabled,
                markAsFocused: this.markAsFocused,
                markAsBlurred: this.markAsBlurred,
                markAsBusy: this.markAsBusy,
                markAsNotBusy: this.markAsNotBusy,
                unsetViewModel: this.unsetViewModel,
                setDefaultValue: this.setDefaultValue,
                reset: this.reset,
                setExtras: this.setExtras,
                getExtras: this.getExtras,
                setExtra: this.setExtra,
                getExtra: this.getExtra,
                setValidator: this.setValidator,
                onStateChanged: this.onStateChanged,
                onValueChanged: this.onValueChanged,
                onBeforeValueChange: this.onBeforeValueChange,
                onErrorsChanged: this.onErrorsChanged
            }, viewModel)
        ) as FormViewControlInterface;
    }

    /**
     * Proxify each call to retain the source view model and apply the ViewModel call context.
     */
    private buildContextualizedViewModelApi<T>(map: Record<keyof T, GenericCallback>, viewModel: FormViewModelInterface): T {
        const wrapped: any = {};
        for (const key of getObjectKeys(map)) {
            wrapped[key] = ((_key, _decorated) => (...args: any[]) => {
                try {
                    this.currentViewModels.push(viewModel);
                    return _decorated.apply(this, args);
                } finally {
                    this.currentViewModels.pop();
                }
            })(key, this.proxifyWithContext(map[key], CallContext.ViewModel));
        }
        return wrapped;
    }
}
