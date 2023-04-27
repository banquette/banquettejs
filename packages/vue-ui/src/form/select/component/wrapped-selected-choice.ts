import { SelectedChoice } from "@banquette/ui";

/**
 * Wrap a SelectedChoice to add a `visible` flag.
 */
export class WrappedSelectedChoice {
    public constructor(public readonly choice: SelectedChoice, public visible: boolean) {

    }
}
