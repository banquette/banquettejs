import { HeadlessControlViewModel } from "../headless-control.view-model";
import { CheckboxGroupInterface } from "./checkbox-group.interface";
import { HeadlessCheckboxViewDataInterface } from "./headless-checkbox-view-data.interface";
export declare class HeadlessCheckboxViewModel<ViewDataType extends HeadlessCheckboxViewDataInterface = HeadlessCheckboxViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    private static GroupsMap;
    /**
     * The value to set to the control when the checkbox is checked.
     */
    checkedValue: any;
    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    uncheckedValue?: any;
    /**
     * If `true`, put the visual state of the checkbox as indeterminate.
     */
    set indeterminate(value: boolean);
    /**
     * If `true` a radio group can be totally unchecked.
     */
    uncheckable: boolean;
    private unsubscribeCallbacks;
    /**
     * If the group is not `null`, the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     *
     * If multiple checkboxes are associated with the same control, an array
     * is automatically created to hold the selected values.
     */
    _group: CheckboxGroupInterface;
    get group(): string | null;
    set group(name: string | null);
    /**
     * `true` if the checkbox stores an array of values.
     */
    get multiple(): boolean;
    /**
     * @inheritDoc
     */
    initialize(): void;
    /**
     * @inheritDoc
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    setViewData(viewData: ViewDataType): void;
    /**
     * To call when a keydown event is emitted for the component.
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * Inverse the `checked` state.
     */
    toggle(): void;
    /**
     * Check the checkbox.
     */
    check(): void;
    /**
     * Uncheck the checkbox.
     */
    uncheck(): void;
    /**
     * Remove the view model from the groups map.
     */
    removeGroup(): void;
    /**
     * Gets all the view models associated with the current control.
     */
    private getGroupsMap;
    /**
     * Update the `checked` prop for a given value.
     */
    private updateChecked;
    /**
     * Update the value of the control for a given checked state.
     */
    private updateValue;
}
