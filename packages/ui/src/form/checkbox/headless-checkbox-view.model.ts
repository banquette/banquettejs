import { UnsubscribeFunction } from "@banquette/event/type";
import { BeforeValueChangeFormEvent } from "@banquette/form/event/before-value-change.form-event";
import { ValueChangedFormEvent } from "@banquette/form/event/value-changed.form-event";
import { isArray } from "@banquette/utils-type/is-array";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { CheckboxGroupInterface } from "./checkbox-group.interface";
import { NullGroup } from "./constant";
import { HeadlessCheckboxViewDataInterface } from "./headless-checkbox-view-data.interface";

export class HeadlessCheckboxViewModel<ViewDataType extends HeadlessCheckboxViewDataInterface = HeadlessCheckboxViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    private static GroupsMap: Record<number, Record<string|symbol, HeadlessCheckboxViewModel[]>> = {};

    /**
     * The value to set to the control when the checkbox is checked.
     */
    public checkedValue: any = true;

    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    public uncheckedValue?: any;

    /**
     * If `true`, put the visual state of the checkbox as indeterminate.
     */
    public set indeterminate(value: boolean) {
        this.viewData.indeterminate = value;
    }

    /**
     * If `true` a radio group can be totally unchecked.
     */
    public uncheckable: boolean = false;

    private unsubscribeCallbacks: UnsubscribeFunction[] = [];

    /**
     * If the group is not `null`, the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     *
     * If multiple checkboxes are associated with the same control, an array
     * is automatically created to hold the selected values.
     */
    public _group: CheckboxGroupInterface = {name: NullGroup, controlId: this.control.viewData.id};
    public get group(): string|null {
        return isString(this._group.name) ? this._group.name : null;
    }
    public set group(name: string|null) {
        this.removeGroup();
        this._group = {
            name: name || NullGroup,
            controlId: this.control.viewData.id
        };
        if (this._group.controlId > 0) {
            const key = name === null ? NullGroup : name;
            if (isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId])) {
                HeadlessCheckboxViewModel.GroupsMap[this._group.controlId] = {};
            }
            if (isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][key])) {
                HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][key] = [];
            }
            HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][key].push(this);
        }
        this.viewData.hasGroup = this._group.name !== NullGroup;
        this.updateChecked(this.control.viewData.value);
    }

    /**
     * `true` if the checkbox stores an array of values.
     */
    public get multiple(): boolean {
        const map = this.getGroupsMap();
        const groups = (Object.getOwnPropertySymbols(map) as Array<string|symbol>).concat(Object.keys(map));
        return groups.length > 1 || (groups.length === 1 && groups[0] === NullGroup && map[groups[0]].length > 1);
    }

    /**
     * @inheritDoc
     */
    public initialize(): void {
        this.updateChecked(this.viewData.control.value);
        this.unsubscribeCallbacks.push(this.control.onBeforeValueChange((event: BeforeValueChangeFormEvent) => {
            if (this.multiple) {
                // Ensure the value being set is an array if the selection is multiple.
                if (!isArray(event.newValue)) {
                    event.newValue = [event.newValue];
                }
                // Ensure only one value of each group is present in the array.
                if (this._group.name !== NullGroup) {
                    const map = this.getGroupsMap();
                    const groupsWithValue: Array<string | symbol> = [];
                    event.newValue = event.newValue.filter((item: any) => {
                        for (const inst of map[this._group.name]) {
                            if (inst.checkedValue === item || (!isUndefined(inst.uncheckedValue) && inst.uncheckedValue === item)) {
                                if (groupsWithValue.indexOf(this._group.name) < 0) {
                                    groupsWithValue.push(this._group.name);
                                    return true;
                                }
                                return false;
                            }
                        }
                        return true;
                    });
                }
            }
        }));
        this.unsubscribeCallbacks.push(this.control.onValueChanged((event: ValueChangedFormEvent) => {
            if (this.multiple) {
                if (!isArray(event.newValue)) {
                    event.newValue = [event.newValue];
                }
            }
            this.updateChecked(event.newValue);
        }));
    }

    /**
     * @inheritDoc
     */
    public dispose() {
        super.dispose();
        this.removeGroup();
        for (const fn of this.unsubscribeCallbacks) {
            fn();
        }
        this.unsubscribeCallbacks = [];
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        super.setViewData(viewData);
        viewData.checked = false;
        viewData.hasGroup = false;
    }

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !this.viewData.control.disabled) {
            this.toggle();
        }
    }

    /**
     * Inverse the `checked` state.
     */
    public toggle(): void {
        if (this.viewData.checked) {
            this.uncheck();
        } else {
            this.check();
        }
    }

    /**
     * Check the checkbox.
     */
    public check(): void {
        this.viewData.checked = true;
        this.updateValue();
    }

    /**
     * Uncheck the checkbox.
     */
    public uncheck(): void {
        if (this.viewData.hasGroup && !this.uncheckable) {
            if (!this.multiple || !isArray(this.viewData.control.value)) {
                return;
            }
            const map = this.getGroupsMap();
            if (this.viewData.control.value.reduce((inc, i) => {
                for (const inst of map[this._group.name]) {
                    if (inst.checkedValue === i) {
                        return inc + 1;
                    }
                }
                return inc;
            }, 0) <= 1) {
                return ;
            }
        }
        this.viewData.checked = false;
        this.updateValue();
    }

    /**
     * Remove the view model from the groups map.
     */
    public removeGroup(): void {
        const gname = this._group.name;
        const gid = this._group.controlId;
        if (gid > 0 && !isUndefined(HeadlessCheckboxViewModel.GroupsMap[gid]) && !isUndefined(HeadlessCheckboxViewModel.GroupsMap[gid][gname])) {
            const pos = HeadlessCheckboxViewModel.GroupsMap[gid][gname].indexOf(this);
            if (pos > -1) {
                HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][gname].splice(pos, 1);
                if (!HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][gname].length) {
                    delete HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][gname];
                }
            }
        }
        this._group = {name: NullGroup, controlId: 0};
    }

    /**
     * Gets all the view models associated with the current control.
     */
    private getGroupsMap(): Record<string|symbol, HeadlessCheckboxViewModel[]> {
        if (this._group.controlId > 0 && !isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId])) {
            return HeadlessCheckboxViewModel.GroupsMap[this._group.controlId];
        }
        return {};
    }

    /**
     * Update the `checked` prop for a given value.
     */
    private updateChecked(value: any): void {
        let checked: boolean = false;
        if (this.multiple) {
            if (isArray(value)) {
                if (value.indexOf(this.checkedValue) > -1) {
                    checked = true;
                }
            }
        } else if (value === this.checkedValue) {
            checked = true;
        }
        this.viewData.checked = checked;
    }

    /**
     * Update the value of the control for a given checked state.
     */
    private updateValue(): void {
        if (this.multiple) {
            let newValue = this.viewData.control.value;
            const map = this.getGroupsMap();
            if (!isArray(newValue)) {
                newValue = !isUndefined(newValue) ? [newValue] : [];
            }

            // Remove old values of the same group.
            if (this._group.name !== NullGroup) {
                newValue = newValue.filter((item: any) => {
                    for (const inst of map[this._group.name]) {
                        if (inst.checkedValue === item || (!isUndefined(inst.uncheckedValue) && inst.uncheckedValue === item)) {
                            return false;
                        }
                    }
                    return true;
                });
            }

            // Remove existing value
            for (const candidate of [this.checkedValue, this.uncheckedValue]) {
                if (!isUndefined(candidate)) {
                    const pos = newValue.indexOf(candidate);
                    if (pos > -1) {
                        newValue.splice(pos, 1);
                    }
                }
            }

            // Maybe add a value
            if (this.viewData.checked) {
                newValue.push(this.checkedValue);
            } else if (!this.viewData.checked && !isUndefined(this.uncheckedValue)) {
                newValue.push(this.uncheckedValue);
            }
            this.viewData.control.value = newValue;
        } else if (this.viewData.checked) {
            this.viewData.control.value = this.checkedValue;
        } else {
            this.viewData.control.value = this.uncheckedValue;
        }
    }
}
