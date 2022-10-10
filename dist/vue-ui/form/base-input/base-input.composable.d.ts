import { HeadlessInterface } from "@banquette/ui/headless.interface";
import { BaseInputViewDataInterface } from "./base-input-view-data.interface";
export declare class BaseInputComposable implements HeadlessInterface<BaseInputViewDataInterface> {
    /**
     * The label of the field.
     */
    label: string | null;
    /**
     * A placeholder value to show when there is no value selected.
     */
    placeholder: string | null;
    /**
     * A help text to show to the user.
     */
    help: string | null;
    /**
     * If `true` the label will float above the control and act as a placeholder is there is none.
     */
    floatingLabel: boolean;
    /**
     * If `true` the errors will appear as an icon on the right side of the input that show a popover.
     *
     * This value is overridden to `true` internally if the control is in a group to preserve layout integrity.
     */
    floatingErrors: boolean;
    /**
     * If `true` the help text will appear as an icon on the right side of the input that show a popover.
     *
     * This value is overridden to `true` internally if the control is in a group to preserve layout integrity.
     */
    floatingHelp: boolean;
    /**
     * If `true`, a little asterisk extras is shown, indicating to the user that the field is mandatory.
     */
    required: boolean;
    /**
     * If `true`, show the debug overlay.
     */
    debug: boolean;
    readonly viewData: BaseInputViewDataInterface;
    setViewData(viewData: BaseInputViewDataInterface): void;
    /**
     * Copy applicable props into the view data.
     */
    protected syncConfigurationProps(): void;
}
