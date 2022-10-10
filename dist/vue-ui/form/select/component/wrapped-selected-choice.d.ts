import { SelectedChoice } from "@banquette/ui/form/select/selected-choice";
/**
 * Wrap a SelectedChoice to add a `visible` flag.
 */
export declare class WrappedSelectedChoice {
    readonly choice: SelectedChoice;
    visible: boolean;
    constructor(choice: SelectedChoice, visible: boolean);
}
