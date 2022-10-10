import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessInterface } from "../headless.interface";
import { ControlModule } from "./control.module";
import { HeadlessControlViewDataInterface } from "./headless-control-view-data.interface";
export declare class HeadlessControlViewModel<ViewDataType extends HeadlessControlViewDataInterface> implements HeadlessInterface<ViewDataType> {
    /**
     * The object holding the data exposed to the view.
     */
    readonly viewData: ViewDataType;
    /**
     * A headless module creating a bridge between a form control and a view data object.
     */
    readonly control: ControlModule;
    constructor(control: FormViewControlInterface);
    /**
     * Do some initialization logic that must be done before the view model
     * is used but that cannot be done in the constructor.
     */
    initialize(): void;
    /**
     * Prepare the view model for destruction.
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    setViewData(viewData: ViewDataType): void;
    /**
     * Set the control to interact with.
     */
    setControl(control: FormViewControlInterface): void;
    /**
     * Convert the value of the FormControl into what is expected by the view.
     * No processing by default, override this method with your logic.
     */
    controlValueToViewValue(controlValue: any): any;
    /**
     * Convert the value of the view into what is expected by the FormControl.
     * No processing by default, override this method with your logic.
     */
    viewValueToControlValue(viewValue: any): any;
}
