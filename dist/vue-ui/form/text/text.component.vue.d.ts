import { BaseInputComposable } from "../base-input/base-input.composable";
import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { TextViewDataInterface } from "./text-view-data.interface";
import { TextViewModel } from "./text.view-model";
export default class FormTextComponent extends AbstractVueFormComponent<TextViewDataInterface, TextViewModel> {
    /**
     * Holds the props exposed by the base input.
     */
    base: BaseInputComposable;
    /**
     * Input type.
     */
    type: string;
    /**
     * The value of the `autocomplete` HTML attribute.
     */
    autoComplete: string;
    /**
     * If `true`, the view value "rows" will be automatically adjusted
     * based on the number of line breaks in the control's value.
     */
    autoSize: boolean;
    /**
     * If `true`, the user can clear the value of the input via an icon.
     */
    clearable: boolean;
    /**
     * Control the manual resizing of the textarea.
     * If `autoSize` is `true`, the resize is automatically disabled.
     * Only applicable if type === "textarea".
     */
    resizable: boolean;
    /**
     * Define a specific number of rows.
     * Only applicable if type === "textarea".
     */
    rows: number | null;
    /**
     * Define the minimum number of rows of the textarea.
     * Only applicable if type === "textarea".
     */
    minRows: number | null;
    /**
     * Define the maximum number of rows of the textarea.
     * Only applicable if type === "textarea".
     */
    maxRows: number | null;
    inputWrapper: HTMLElement | null;
    private input;
    private textarea;
    v: TextViewDataInterface;
    get activeElement(): HTMLElement;
    /**
     * @inheritDoc
     */
    protected setupViewModel(): TextViewModel;
    /**
     * @inheritDoc
     */
    focus(): void;
    /**
     * @inheritDoc
     */
    blur(): void;
    /**
     * Copy applicable props into the view data.
     */
    protected syncConfigurationProps(): void;
}
