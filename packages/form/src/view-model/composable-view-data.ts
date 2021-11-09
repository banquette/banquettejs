import { FormViewControlInterface } from "../form-view-control.interface";
import { ComposablePluginViewData } from "./composable-plugin-view-data";
import { ValueTransformerInterface } from "./value-transformer/value-transformer.interface";

/**
 * The only part of a composable view model that should be exposed to the template.
 * That's the object the view should observe for change. It should contain everything the view needs to render properly.
 */
export class ComposableViewData {
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
     * Contain the view data of plugins.
     */
    public plugins: Record<string, ComposablePluginViewData> = {};

    /**
     * Shortcuts to state flags of the form control.
     */
    public get valid()             : boolean { return this.control.valid }
    public get invalid()           : boolean { return this.control.invalid }
    public get validated()         : boolean { return this.control.validated }
    public get notValidated()      : boolean { return this.control.notValidated }
    public get validating()        : boolean { return this.control.validating }
    public get notValidating()     : boolean { return this.control.notValidating }
    public get validatedAndValid() : boolean { return this.control.validatedAndValid }
    public get busy()              : boolean { return this.control.busy }
    public get notBusy()           : boolean { return this.control.notBusy }
    public get disabled()          : boolean { return this.control.disabled }
    public get enabled()           : boolean { return this.control.enabled }
    public get dirty()             : boolean { return this.control.dirty }
    public get pristine()          : boolean { return this.control.pristine }
    public get touched()           : boolean { return this.control.touched }
    public get untouched()         : boolean { return this.control.untouched }
    public get changed()           : boolean { return this.control.changed }
    public get unchanged()         : boolean { return this.control.unchanged }
    public get focused()           : boolean { return this.control.focused }
    public get unfocused()         : boolean { return this.control.unfocused }

    /**
     * The form control associated with the view.
     */
    public constructor(public control: FormViewControlInterface, private valueTransformer: ValueTransformerInterface) {

    }

    /**
     * Shortcut for `control.setState(VisualState.Focused, true)`.
     */
    public onFocus(): void {
        this.control.markAsFocused();
    }

    /**
     * Shortcut for `control.setState(VisualState.Focused, false)`.
     */
    public onBlur(): void {
        this.control.markAsBlurred();
    }
}
