import { AbstractVueFormComponent } from "../abstract-vue-form.component";
import { BaseInputComposable } from "../base-input/base-input.composable";
import { CheckboxViewDataInterface } from "./checkbox-view-data.interface";
import { CheckboxViewModel } from "./checkbox.view-model";
export default class FormCheckboxComponent extends AbstractVueFormComponent<CheckboxViewDataInterface, CheckboxViewModel> {
    private static ModelValuesMap;
    /**
     * Holds the props exposed by the base input.
     */
    base: BaseInputComposable;
    /**
     * The text to show next to the checkbox.
     *
     * The label of the composable is not used to voluntarily to keep it undefined
     * so the label can be shown in the checkbox component's template instead.
     */
    label: string | null;
    /**
     * If `true` or `false` the checkbox will be checked or unchecked respectively
     * upon initialization or when a change is detected on the prop.
     */
    checked: boolean | null;
    /**
     * The value to set to the control when the checkbox is checked.
     */
    checkedValue: any;
    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    uncheckedValue: any;
    /**
     * If `true`, force the checkbox to be visually indeterminate.
     *
     * The indeterminate status will be lost each time the checkbox changes state,
     * and will be restored if the prop changes to `true`.
     */
    indeterminate: boolean;
    /**
     * If `true` a radio group can be totally unchecked.
     */
    uncheckable: any;
    /**
     * If defined the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     */
    group: string | null;
    get hasDefaultSlot(): boolean;
    get hasLabelSlot(): boolean;
    inputWrapper: HTMLElement;
    vm: CheckboxViewModel;
    private unsubscribeMethods;
    constructor();
    /**
     * @inheritDoc
     */
    beforeUnmount(): void;
    onKeyDown(event: KeyboardEvent): void;
    toggle(): void;
    /**
     * @inheritDoc
     */
    protected setupViewModel(): CheckboxViewModel;
    /**
     * @inheritDoc
     */
    protected onModelValueChange(newValue: any): void;
    /**
     * Copy applicable props into the view data.
     */
    protected syncConfigurationProps(): void;
    private onCheckedChange;
    private onGroupChange;
    private onIndeterminateChange;
}
