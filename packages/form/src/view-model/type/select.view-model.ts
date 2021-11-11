import { AbstractChoiceViewModel } from "./abstract-choice.view-model";

/**
 * The view model logic behind a generic select form control.
 */
export class SelectViewModel extends AbstractChoiceViewModel {
    /**
     * The label of the select field as a whole.
     */
    public label: string|null = null;

    /**
     * Text to show on the select if no value is selected.
     */
    public placeholder: string|null = null;

    /**
     * An optional help text to show to the user.
     */
    public help: string|null = null;

    /**
     * HTML tab index (for keyboard navigation).
     */
    public tabindex: number = 0;

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown(event: KeyboardEvent): void {
        this.choices.onKeyDown(event);
    }
}
