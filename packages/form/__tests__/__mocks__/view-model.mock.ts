import { proxy } from "@banquette/utils-misc";
import { FormControl, FormViewControlInterface } from "../../src";

export class ViewModelMock {
    public readonly value: any;

    /**
     * The control as normally seen by the view model.
     */
    public readonly control: FormViewControlInterface;

    /**
     * The "real" FormControl instance.
     * Only here for practicality when testing, a real view model must not interact directly with the control.
     */
    public readonly realControl: FormControl;

    public constructor(control: FormControl) {
        this.control = control.setViewModel({
            /**
             * Try to get the focus on the control.
             */
            focus: proxy(this.focus, this),

            /**
             * Inverse of `focus`.
             */
            blur: proxy(this.blur, this),

            /**
             * Update the view value with the value from the form control.
             */
            setValue: (controlValue: any): void => {
                (this as any).value = this.transformControlValueToViewValue(controlValue);
            },
            /**
             * Unset the form control assigned with the view model.
             */
            unsetControl: (): void => {
                (this as any).control = null;
            }
        });
        this.realControl = control;
    }

    /**
     * Give the focus to the html element.
     */
    public focus(): void {
        // Call the DOM
        if (this.control) {
            this.control.markAsFocused();
        }
    }

    /**
     * Remove the focus from the html element.
     */
    public blur(): void {
        // Call the DOM
        if (this.control) {
            this.control.markAsBlurred();
        }
    }

    /**
     * Mark the control as `busy`, if available.
     */
    public markAsBusy(): void {
        if (this.control) {
            this.control.markAsBusy();
        }
    }

    /**
     * Remove the `busy` state from the control.
     */
    public markAsNotBusy(): void {
        if (this.control) {
            this.control.markAsNotBusy();
        }
    }

    /**
     * Update the control value with the value from the view.
     */
    public setValue(viewValue: any): void {
        (this as any).value = viewValue;
        if (this.control) {
            this.control.setValue(this.transformViewValueToControlValue(viewValue));
        }
    }

    /**
     * A fake transform method to differentiate view and control values.
     */
    public transformControlValueToViewValue(controlValue: any): any {
        // Add a "#" in front to simulate a transformation from a control to a view value.
        return '#' + controlValue;
    }

    /**
     * A fake transform method to differentiate view and control values.
     */
    public transformViewValueToControlValue(viewValue: any): any {
        if (!viewValue) {
            return '';
        }
        return viewValue.substring(1);
    }
}
