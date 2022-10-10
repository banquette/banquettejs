import { FormViewControlInterface } from "@banquette/form/form-view-control.interface";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { HeadlessTextViewDataInterface } from "./headless-text-view-data.interface";
export declare class HeadlessTextViewModel<ViewDataType extends HeadlessTextViewDataInterface = HeadlessTextViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * If `true`, the view value "rows" will be automatically adjusted
     * based on the number of line breaks in the control's value.
     */
    private _autoSize;
    get autoSize(): boolean;
    set autoSize(value: boolean);
    /**
     * Control the manual resizing of the textarea.
     * Only applicable if type === "textarea".
     * If `autoSize` is `true`, the resize is automatically disabled.
     */
    resizable: boolean;
    /**
     * Height limit if the type of input is "textarea" and "autoSize" is `true`.
     */
    minRows: number | null;
    maxRows: number | null;
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
    private updateSize;
}
