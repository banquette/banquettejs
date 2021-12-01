import { FormError } from "../form-error";
import { FormViewControlInterface } from "../form-view-control.interface";
import { NoopTransformer } from "./value-transformer/noop-transformer.interface";
import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";
import { ViewModelInterface } from "./view-model.interface";

export class ViewModel implements ViewModelInterface {
    /**
     * The current "view" value of the form control.
     */
    private _value: any;
    public get value(): any {
        return this._value;
    }
    public set value(value: any) {
        this._value = value;
        this.getControl().setValue(this.valueTransformer.viewToControl(value));
    }

    /**
     * Shortcuts to the control.
     */
    public get control()                : FormViewControlInterface { return this.getControl() }
    public get id()                     : number { return this.getControl().id }
    public get formId()                 : string { return this.getControl().formId }
    public get fullId()                 : string|null { return this.formId ? (this.formId + '_' + this.id) : null }
    public get valid()                  : boolean { return this.getControl().valid }
    public get invalid()                : boolean { return this.getControl().invalid }
    public get validated()              : boolean { return this.getControl().validated }
    public get notValidated()           : boolean { return this.getControl().notValidated }
    public get validating()             : boolean { return this.getControl().validating }
    public get notValidating()          : boolean { return this.getControl().notValidating }
    public get validatedAndValid()      : boolean { return this.getControl().validatedAndValid }
    public get busy()                   : boolean { return this.getControl().busy }
    public get notBusy()                : boolean { return this.getControl().notBusy }
    public get enabled()                : boolean { return this.getControl().enabled }
    public get disabled()               : boolean { return this.getControl().disabled }
    public get dirty()                  : boolean { return this.getControl().dirty }
    public get pristine()               : boolean { return this.getControl().pristine }
    public get touched()                : boolean { return this.getControl().touched }
    public get untouched()              : boolean { return this.getControl().untouched }
    public get changed()                : boolean { return this.getControl().changed }
    public get unchanged()              : boolean { return this.getControl().unchanged }
    public get focused()                : boolean { return this.getControl().focused }
    public get unfocused()              : boolean { return this.getControl().unfocused }
    public get errors()                 : FormError[] { return this.getControl().errors }
    public set busy(value: boolean)     { this.setWriteableFlag(value, 'markAsBusy', 'markAsNotBusy') }
    public set notBusy(value: boolean)  { this.setWriteableFlag(value, 'markAsNotBusy', 'markAsBusy') }
    public set enabled(value: boolean)  { this.setWriteableFlag(value, 'markAsEnabled', 'markAsDisabled') }
    public set disabled(value: boolean) { this.setWriteableFlag(value, 'markAsDisabled', 'markAsEnabled') }
    public get errorsMap()              : Record<string, string|null> {
        return this.getControl().errors.reduce((acc: Record<string, string|null>, item: FormError) => {
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
    public readonly valueTransformer: ValueTransformerInterface;

    /**
     * Wrap the control into a function so watchers put on the view model will not include it.
     */
    private getControl!: () => FormViewControlInterface;

    public constructor(control: FormViewControlInterface, valueTransformer: ValueTransformerInterface = NoopTransformer) {
        this.getControl = () => control;
        this.valueTransformer = valueTransformer;
    }

    /**
     * @inheritDoc
     */
    public initialize(): void {
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
        this.getControl().markAsFocused();
    }

    /**
     * Shortcut for `control.setState(VisualState.Focused, false)`.
     */
    public onBlur(): void {
        this.getControl().markAsBlurred();
    }

    /**
     * Shorthand to call one method or the other depending on a flag.
     */
    private setWriteableFlag(value: boolean, ifTrue: keyof FormViewControlInterface, ifFalse: keyof FormViewControlInterface): void {
        this.getControl()[value ? ifTrue : ifFalse]();
    }
}
