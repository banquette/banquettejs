import { FormViewControlInterface } from "../form-view-control.interface";
import { NoopTransformer } from "./value-transformer/noop-transformer.interface";
import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";
import { FormError } from "../form-error";
import { ViewModelInterface } from "./view-model.interface";

export abstract class AbstractViewModel implements ViewModelInterface {
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
     * Shortcuts to state flags of the form control.
     */
    public get id()                 : number { return this.getControl().id }
    public get formId()             : string { return this.getControl().formId }
    public get fullId()             : string { return this.formId + '_' + this.id }
    public get valid()              : boolean { return this.getControl().valid }
    public get invalid()            : boolean { return this.getControl().invalid }
    public get validated()          : boolean { return this.getControl().validated }
    public get notValidated()       : boolean { return this.getControl().notValidated }
    public get validating()         : boolean { return this.getControl().validating }
    public get notValidating()      : boolean { return this.getControl().notValidating }
    public get validatedAndValid()  : boolean { return this.getControl().validatedAndValid }
    public get busy()               : boolean { return this.getControl().busy }
    public get notBusy()            : boolean { return this.getControl().notBusy }
    public get disabled()           : boolean { return this.getControl().disabled }
    public get enabled()            : boolean { return this.getControl().enabled }
    public get dirty()              : boolean { return this.getControl().dirty }
    public get pristine()           : boolean { return this.getControl().pristine }
    public get touched()            : boolean { return this.getControl().touched }
    public get untouched()          : boolean { return this.getControl().untouched }
    public get changed()            : boolean { return this.getControl().changed }
    public get unchanged()          : boolean { return this.getControl().unchanged }
    public get focused()            : boolean { return this.getControl().focused }
    public get unfocused()          : boolean { return this.getControl().unfocused }
    public get errors()             : FormError[] { return this.getControl().errors }

    /**
     * Wrap the control into a function so watchers put on the view model will not include it.
     */
    private getControl!: () => FormViewControlInterface;

    /**
     * The value transformer in use.
     */
    public readonly valueTransformer: ValueTransformerInterface;

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
}