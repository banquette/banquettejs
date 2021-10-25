/**
 * Bridge between a FormControl and a view in the direction "FormControl -> View".
 */
export interface FormViewModelInterface {
    /**
     * Update the view value with the value from the form control.
     */
    setValue(controlValue: any): void;

    /**
     * Unset the form control assigned with the view model.
     */
    unsetControl(): void;

    /**
     * Try to get the focus on the control.
     */
    focus(): void;

    /**
     * Inverse of `focus`.
     */
    blur(): void;
}
