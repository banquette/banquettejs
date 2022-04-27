import { HeadlessSelectViewDataInterface } from "@banquette/ui/form/select/headless-select-view-data.interface";
import { SelectedChoice } from "@banquette/ui/form/select/selected-choice";
import { BaseInputViewDataInterface } from "../../base-input/base-input-view-data.interface";
import { WrappedSelectedChoice } from "./wrapped-selected-choice";

export interface SelectViewDataInterface extends HeadlessSelectViewDataInterface {
    /**
     * The view data object of the base input component.
     */
    base: BaseInputViewDataInterface;

    /**
     * The list of selected choices.
     *
     * A value can be present in the array of selected choices without being part of the available choices.
     * This can occur if the FormControl assign a value manually (via `setValue`) or if the select
     * allow for custom values (in which case the value could be added by the end-user directly).
     */
    selected: Record<number, WrappedSelectedChoice>;

    /**
     * Selected items hidden from the default view.
     * They are visible through a popover.
     *
     * Height must be locked for this to work.
     */
    selectedInPopover: SelectedChoice[];

    /**
     * Control the visibility of the selected choices moved in the popover.
     */
    selectedPopoverVisible: boolean;

    /**
     * If `true`, the height of the component will not expand with the selection.
     * Only relevant if the selection is multiple.
     */
    isHeightLocked: boolean;

    /**
     *
     */
    isInputReadonly: boolean;

    /**
     *
     */
    isInputFocused: boolean;

    /**
     *
     */
    inputValue: string;

    /**
     *
     */
    inputPlaceholder: string;

    /**
     * A shortcut to `multiple && isHeightLocked`.
     */
    readonly needsSelectionPopover: boolean;
}
