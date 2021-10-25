import { FormComponentInterface } from "./form-component.interface";
import { FormViewControlInterface } from "./form-view-control.interface";
import { FormViewModelInterface } from "./form-view-model.interface";

export interface FormControlInterface extends FormComponentInterface {
    /**
     * Set the default value of the control.
     *
     * Calling this method will also set the field back an "unchanged" state.
     * Further reset of the control will set this value back into the "real" value of the control.
     */
    setDefaultValue(value: any): void;

    /**
     * Set the view model the control will communicate with.
     *
     * @return A object the view model must use to interact with the control.
     */
    setViewModel(viewModel: FormViewModelInterface): FormViewControlInterface;

    /**
     * Unset the view model assigned with the form control.
     */
    unsetViewModel(viewModel: FormViewModelInterface): void;

    /**
     * Ask the view to get the focus on the control.
     */
    focus(): void;

    /**
     * Inverse of `focus()`.
     */
    blur(): void;
}
