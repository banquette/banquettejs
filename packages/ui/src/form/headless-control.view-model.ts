import { FormViewControlInterface } from "@banquette/form";
import { proxy } from "@banquette/utils-misc";
import { Writeable } from "@banquette/utils-type";
import { HeadlessInterface } from "../headless.interface";
import { ControlModule } from "./control.module";
import { HeadlessControlViewDataInterface } from "./headless-control-view-data.interface";

export class HeadlessControlViewModel<ViewDataType extends HeadlessControlViewDataInterface> implements HeadlessInterface<ViewDataType> {
    /**
     * The object holding the data exposed to the view.
     */
    public readonly viewData: ViewDataType;

    /**
     * A headless module creating a bridge between a form control and a view data object.
     */
    public readonly control!: ControlModule;

    public constructor(control: FormViewControlInterface) {
        this.control = new ControlModule(control, {
            controlToView: proxy(this.controlValueToViewValue, this),
            viewToControl: proxy(this.viewValueToControlValue, this)
        });
        this.viewData = {control: this.control.viewData} as ViewDataType;
    }

    /**
     * Do some initialization logic that must be done before the view model
     * is used but that cannot be done in the constructor.
     */
    /* virtual */ public initialize(): void {
        // Override me
    }

    /**
     * Prepare the view model for destruction.
     */
    /* virtual */ public dispose(): void {
        // Override me
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        (this as any /* Writeable<HeadlessControlViewModel<ViewDataType>> */).viewData = viewData;
        this.control.setViewData(this.viewData.control);
    }

    /**
     * Set the control to interact with.
     */
    public setControl(control: FormViewControlInterface): void {
        this.control.setControl(control);
    }

    /**
     * Convert the value of the FormControl into what is expected by the view.
     * No processing by default, override this method with your logic.
     */
    public controlValueToViewValue(controlValue: any): any {
        return controlValue;
    }

    /**
     * Convert the value of the view into what is expected by the FormControl.
     * No processing by default, override this method with your logic.
     */
    public viewValueToControlValue(viewValue: any): any {
        return viewValue;
    }
}
