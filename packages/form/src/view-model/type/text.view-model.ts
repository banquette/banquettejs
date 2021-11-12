import { AbstractViewModel } from "../abstract-view-model";

/**
 * The view model logic behind a generic text form control.
 */
export class TextViewModel extends AbstractViewModel {
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
     * Input type.
     * Only applicable if not multiline.
     */
    public inputType: string|null = 'text';

    /**
     * If `true` the component visible must be a textarea.
     */
    public multiline: boolean = false;

    /**
     * Number of rows of the textarea.
     */
    public rows: string|null = null;
}