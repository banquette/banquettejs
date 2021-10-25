import { UsageException } from "@banquette/exception";
import { areEqual } from "@banquette/utils-misc";
import { cloneDeepPrimitive } from "@banquette/utils-object";
import { Writeable } from "@banquette/utils-type";
import { ValidatorInterface } from "@banquette/validation";
import { AbstractFormComponent } from "./abstract-form-component";
import { BasicState, CallContext, Events, ValidationStrategy } from "./constant";
import { ValueChangedFormEvent } from "./event/value-changed.form-event";
import { FormControlInterface } from "./form-control.interface";
import { FormViewControlInterface } from "./form-view-control.interface";
import { FormViewModelInterface } from "./form-view-model.interface";

export class FormControl extends AbstractFormComponent implements FormControlInterface {
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
     * The view of the control.
     * If null, the form is locked as disabled, meaning its value will not automatically bubble up.
     *
     * This is done like this mainly so you can only use a part of a form created via an annotated model.
     */
    private viewModel: FormViewModelInterface|null = null;

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
    public setValue(value: any): void {
        if (areEqual(this.lastValue, value)) {
            return ;
        }
        (this as Writeable<FormControl>).value = value;
        if (this.shouldDispatch) {
            this.dispatch(Events.ValueChanged, new ValueChangedFormEvent(this, this.lastValue, this.value));
        }
        if (this.viewModel && (!this.hasContext(CallContext.ViewModel) || this.hasContext(CallContext.Reset))) {
            this.viewModel.setValue(value);
        }
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.updateValue();
        }
        this.markBasicState(BasicState.Dirty);
        if (!areEqual(this.defaultValue, value)) {
            this.markBasicState(BasicState.Changed);
        } else {
            this.unmarkBasicState(BasicState.Changed);
        }
        this.lastValue = cloneDeepPrimitive(this.value);
        this.validateIfStrategyMatches(ValidationStrategy.OnChange);
    }

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
        if (this.viewModel === viewModel) {
            throw new UsageException('The view model is already associated with this control.');
        }
        if (this.viewModel) {
            this.viewModel.unsetControl();
        }
        this.viewModel = viewModel;
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
        return this.buildControlViewDecorator();
    }

    /**
     * Unset the view model assigned with the form control.
     */
    public unsetViewModel(viewModel: FormViewModelInterface): void {
        // Ensure that we don't unassign another view model in case
        // it has already been replaced when one ask for removal.
        if (this.viewModel === viewModel) {
            this.viewModel = null;
        }
        if (this.viewModel === null) {
            this.markAsVirtual();
        }
    }

    /**
     * Ask the view to get the focus on the control.
     */
    public focus(): void {
        if (this.viewModel) {
            this.viewModel.focus();
        }
    }

    /**
     * Inverse of `focus()`.
     */
    public blur(): void {
        if (this.viewModel) {
            this.viewModel.blur();
        }
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
        this.setValue(this.defaultValue);
        super.doReset();
    }

    /**
     * Change the `focused` state of the control to `true`.
     * Only exposed to the view model.
     */
    private markAsFocused(): void {
        if (this.activeControl === this) {
            return ;
        }
        if (this.activeControl !== null) {
            this.activeControl.blur();
        }
        this.activeControl = this;
        this.markBasicState(BasicState.Focused);
        this.validateIfStrategyMatches(ValidationStrategy.OnFocus);
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
    private buildControlViewDecorator(): FormViewControlInterface {
        const that = this;
        return Object.assign({
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
            get defaultValue():      any { return that.defaultValue }
        },
            this.buildContextualizedApi<Omit<FormViewControlInterface,
                'valid' | 'invalid' | 'validated' | 'notValidated' | 'validating' | 'notValidating' | 'validatedAndValid' |
                'busy' | 'notBusy' | 'disabled' | 'enabled' | 'dirty' | 'pristine' | 'touched' | 'untouched' | 'changed' |
                'unchanged' | 'focused' | 'unfocused' | 'defaultValue'>>({
                setValue: this.setValue,
                markAsDisabled: this.markAsDisabled,
                markAsEnabled: this.markAsEnabled,
                markAsFocused: this.markAsFocused,
                markAsBlurred: this.markAsBlurred,
                markAsBusy: this.markAsBusy,
                markAsNotBusy: this.markAsNotBusy,
                unsetViewModel: this.unsetViewModel,
                setDefaultValue: this.setDefaultValue,
                reset: this.reset
            }, CallContext.ViewModel)
        ) as FormViewControlInterface;
    }
}
