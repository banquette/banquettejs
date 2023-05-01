import { FormViewControlInterface } from "@banquette/form";
import { ensureString } from "@banquette/utils-type";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { HeadlessTextViewDataInterface } from "./headless-text-view-data.interface";

export class HeadlessTextViewModel<ViewDataType extends HeadlessTextViewDataInterface = HeadlessTextViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * If `true`, the view value "rows" will be automatically adjusted
     * based on the number of line breaks in the control's value.
     */
    private _autoSize: boolean = false;
    public get autoSize(): boolean {
        return this._autoSize;
    }
    public set autoSize(value: boolean) {
        this._autoSize = value;
        if (value) {
            this.viewData.resizable = false;
        } else {
            this.viewData.resizable = this.resizable;
        }
        this.updateSize(ensureString(this.viewData.control.value));
    }

    /**
     * Control the manual resizing of the textarea.
     * Only applicable if type === "textarea".
     * If `autoSize` is `true`, the resize is automatically disabled.
     */
    public resizable: boolean = true;

    /**
     * Height limit if the type of input is "textarea" and "autoSize" is `true`.
     */
    private _minRows: number|null = null;
    public get minRows(): number|null {
        return this._minRows;
    }
    public set minRows(value: number|null) {
        this._minRows = value;
        this.updateSize(ensureString(this.viewData.control.value));
    }

    private _maxRows: number|null = null;
    public get maxRows(): number|null {
        return this._maxRows;
    }
    public set maxRows(value: number|null) {
        this._maxRows = value;
        this.updateSize(ensureString(this.viewData.control.value));
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        super.setViewData(viewData);
        viewData.rows = null;
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
        this.updateSize(ensureString(controlValue));
        return controlValue;
    }

    /**
     * Convert the value of the view into what is expected by the FormControl.
     * No processing by default, override this method with your logic.
     */
    public viewValueToControlValue(viewValue: any): any {
        this.updateSize(ensureString(viewValue));
        return viewValue;
    }

    private updateSize(value: string): void {
        if (this.autoSize) {
            this.viewData.rows = value.split(/\r\n|\r|\n/).length;
        }
        if (this.viewData.rows !== null) {
            if (this.minRows !== null) {
                this.viewData.rows = Math.max(this.minRows, this.viewData.rows);
            }
            if (this.maxRows !== null) {
                this.viewData.rows = Math.min(this.maxRows, this.viewData.rows);
            }
        }
    }
}
