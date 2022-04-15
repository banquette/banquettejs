import { FormError } from "@banquette/form/form-error";
import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { FormViewModelInterface } from "./form-view-model.interface";

/**
 * TODO: REMOVE
 */
export class FormViewModel implements FormViewModelInterface {
    /**
     * The current "view" value of the form control.
     */
    private _value: any;
    public get value(): any {
        return this._value;
    }
    public set value(value: any) {
        this._value = value;
        this.control.setValue(this.valueTransformer.viewToControl(value));
    }

    /**
     * Shortcuts to the control.
     */
    public get id()                     : number { return this.control.id }
    public get formId()                 : string { return this.control.formId }
    public get fullId()                 : string|null { return this.formId ? (this.formId + '_' + this.id) : null }
    public get valid()                  : boolean { return this.control.valid }
    public get invalid()                : boolean { return this.control.invalid }
    public get validated()              : boolean { return this.control.validated }
    public get notValidated()           : boolean { return this.control.notValidated }
    public get validating()             : boolean { return this.control.validating }
    public get notValidating()          : boolean { return this.control.notValidating }
    public get validatedAndValid()      : boolean { return this.control.validatedAndValid }
    public get busy()                   : boolean { return this.control.busy }
    public get notBusy()                : boolean { return this.control.notBusy }
    public get enabled()                : boolean { return this.control.enabled }
    public get disabled()               : boolean { return this.control.disabled }
    public get dirty()                  : boolean { return this.control.dirty }
    public get pristine()               : boolean { return this.control.pristine }
    public get touched()                : boolean { return this.control.touched }
    public get untouched()              : boolean { return this.control.untouched }
    public get changed()                : boolean { return this.control.changed }
    public get unchanged()              : boolean { return this.control.unchanged }
    public get focused()                : boolean { return this.control.focused }
    public get unfocused()              : boolean { return this.control.unfocused }
    public get errors()                 : FormError[] { return this.control.errors }
    public set busy(value: boolean)     { this.setWriteableFlag(value, 'markAsBusy', 'markAsNotBusy') }
    public set notBusy(value: boolean)  { this.setWriteableFlag(value, 'markAsNotBusy', 'markAsBusy') }
    public set enabled(value: boolean)  { this.setWriteableFlag(value, 'markAsEnabled', 'markAsDisabled') }
    public set disabled(value: boolean) { this.setWriteableFlag(value, 'markAsDisabled', 'markAsEnabled') }
    public get errorsMap()              : Record<string, string|null> {
        return this.control.errors.reduce((acc: Record<string, string|null>, item: FormError) => {
            acc[item.type] = item.message;
            return acc;
        }, {});
    }

    /**
     * HTML tab index (for keyboard navigation).
     */
    public tabindex: number = 0;

    /**
     * The transformer used to transform the value between the view and the control.
     */
    // public readonly valueTransformer: any /*ValueTransformerInterface*/;

    public constructor(public control: FormViewControlInterface, public valueTransformer: any = null) {
        this.valueTransformer = this.valueTransformer ? this.valueTransformer : {
            controlToView: (value: any) => value,
            viewToControl: (value: any) => value
        };
    }

    /**
     * @inheritDoc
     */
    public initialize(): Promise<void>|void {
        // Override me
    }

    /**
     * @inheritDoc
     */
    public dispose(): void {
        // Override me
    }

    /**
     * Update the value without triggering a control update.
     */
    public updateValueFromControl(value: any): void {
        this._value = value;
    }

    /**
     * Shortcut for `control.setState(VisualState.Focused, true)`.
     */
    public onFocus(): void {
        if (!this.disabled) {
            this.control.markAsFocused();
        }
    }

    /**
     * Shortcut for `control.setState(VisualState.Focused, false)`.
     */
    public onBlur(): void {
        this.control.markAsBlurred();
    }

    /**
     * Shorthand to call one method or the other depending on a flag.
     */
    private setWriteableFlag(value: boolean, ifTrue: keyof FormViewControlInterface, ifFalse: keyof FormViewControlInterface): void {
        this.control[value ? ifTrue : ifFalse]();
    }
}
