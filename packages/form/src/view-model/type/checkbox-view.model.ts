import { isArray } from "@banquette/utils-type/is-array";
import { isString } from "@banquette/utils-type/is-string";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { BeforeValueChangeFormEvent } from "../../event/before-value-change.form-event";
import { ValueChangedFormEvent } from "../../event/value-changed.form-event";
import { ViewModel } from "../view-model";

interface GroupInterface {
    name: string|symbol;
    controlId: number;
}

export class CheckboxViewModel extends ViewModel {
    private static NullGroup = Symbol('null');
    private static GroupsMap: Record<number, Record<string|symbol, CheckboxViewModel[]>> = {};

    /**
     * The text to show next to the checkbox.
     */
    public label: string|null = null;

    /**
     * The value to set to the control when the checkbox is checked.
     */
    public checkedValue: any = true;

    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    public uncheckedValue?: any;

    /**
     * Is the checkbox checked?
     */
    public checked: boolean = false;

    /**
     * If `true` a radio group can be totally unchecked.
     */
    public uncheckable: boolean = false;

    /**
     * If the group is not `null`, the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     *
     * If multiple checkboxes are associated with the same control, an array
     * is automatically created to hold the selected values.
     */
    public _group: GroupInterface = {name: CheckboxViewModel.NullGroup, controlId: this.control.id};
    public get group(): string|null {
        return isString(this._group.name) ? this._group.name : null;
    }
    public set group(name: string|null) {
        this.removeGroup();
        this._group = {
            name: name || CheckboxViewModel.NullGroup,
            controlId: this.control.id
        };
        if (this._group.controlId > 0) {
            const key = name === null ? CheckboxViewModel.NullGroup : name;
            if (isUndefined(CheckboxViewModel.GroupsMap[this._group.controlId])) {
                CheckboxViewModel.GroupsMap[this._group.controlId] = {};
            }
            if (isUndefined(CheckboxViewModel.GroupsMap[this._group.controlId][key])) {
                CheckboxViewModel.GroupsMap[this._group.controlId][key] = [];
            }
            CheckboxViewModel.GroupsMap[this._group.controlId][key].push(this);
        }
        this.updateChecked(this.value);
    }

    /**
     * `true` if the checkbox stores an array of values.
     */
    public get multiple(): boolean {
        const map = this.getGroupsMap();
        const groups = (Object.getOwnPropertySymbols(map) as Array<string|symbol>).concat(Object.keys(map));
        return groups.length > 1 || (groups.length === 1 && groups[0] === CheckboxViewModel.NullGroup && map[groups[0]].length > 1);
    }

    /**
     * `true` if there is a custom group set.
     */
    public get hasGroup(): boolean {
        return this._group.name !== CheckboxViewModel.NullGroup;
    }

    /**
     * @inheritDoc
     */
    public initialize(): void {
        this.updateChecked(this.value);
        this.control.onBeforeValueChange((event: BeforeValueChangeFormEvent) => {
            // Ensure the value being set is an array if the selection is multiple.
            if (this.multiple) {
                if (!isArray(event.newValue)) {
                    event.newValue = [event.newValue];
                }
                // Ensure only one value of each group is present in the array.
                if (this._group.name !== CheckboxViewModel.NullGroup) {
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
        });
        this.control.onValueChanged((event: ValueChangedFormEvent) => {
            if (this.multiple) {
                if (!isArray(event.newValue)) {
                    event.newValue = [event.newValue];
                }
            }
            this.updateChecked(event.newValue);
        });
    }

    /**
     * @inheritDoc
     */
    public dispose() {
        super.dispose();
        this.removeGroup();
    }

    /**
     * To call when a keydown event is emitted for the component.
     */
    public onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter' && !this.disabled) {
            this.toggle();
        }
    }

    /**
     * Inverse the `checked` state.
     */
    public toggle(): void {
        if (this.checked) {
            this.uncheck();
        } else{
            this.check();
        }
    }

    /**
     * Check the checkbox.
     */
    public check(): void {
        this.checked = true;
        this.updateValue();
    }

    /**
     * Uncheck the checkbox.
     */
    public uncheck(): void {
        if (this.hasGroup && !this.uncheckable) {
            if (!this.multiple || !isArray(this.value)) {
                return;
            }
            const map = this.getGroupsMap();
            if (this.value.reduce((inc, i) => {
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
        this.checked = false;
        this.updateValue();
    }

    /**
     * Remove the view model from the groups map.
     */
    public removeGroup(): void {
        const gname = this._group.name;
        const gid = this._group.controlId;
        if (gid > 0 && !isUndefined(CheckboxViewModel.GroupsMap[gid]) && !isUndefined(CheckboxViewModel.GroupsMap[gid][gname])) {
            const pos = CheckboxViewModel.GroupsMap[gid][gname].indexOf(this);
            if (pos > -1) {
                CheckboxViewModel.GroupsMap[this._group.controlId][gname].splice(pos, 1);
                if (!CheckboxViewModel.GroupsMap[this._group.controlId][gname].length) {
                    delete CheckboxViewModel.GroupsMap[this._group.controlId][gname];
                }
            }
        }
        this._group = {name: CheckboxViewModel.NullGroup, controlId: 0};
    }

    /**
     * Gets all the view models associated with the current control.
     */
    private getGroupsMap(): Record<string|symbol, CheckboxViewModel[]> {
        if (this._group.controlId > 0 && !isUndefined(CheckboxViewModel.GroupsMap[this._group.controlId])) {
            return CheckboxViewModel.GroupsMap[this._group.controlId];
        }
        return {};
    }

    /**
     * Update the value of `checked` for a given value.
     */
    private updateChecked(value: any): void {
        if (this.multiple) {
            this.checked = isArray(value) ? value.indexOf(this.checkedValue) > -1 : false;
        } else {
            this.checked = this.checkedValue === value;
        }
    }

    /**
     * Update the value of the control for a given checked state.
     */
    private updateValue(): void {
        let newValue = this.value;
        if (this.multiple) {
            const map = this.getGroupsMap();
            if (!isArray(newValue)) {
                newValue = !isUndefined(newValue) ? [newValue] : [];
            }

            // Remove old values of the same group.
            if (this._group.name !== CheckboxViewModel.NullGroup) {
                newValue = newValue.filter((item: any) => {
                    for (const inst of map[this._group.name]) {
                        if (inst.checkedValue === item || (!isUndefined(inst.uncheckedValue) && inst.uncheckedValue === item)) {
                            return false;
                        }
                    }
                    return true;
                });
            }

            // Maybe add a value
            if (this.checked && newValue.indexOf(this.checkedValue) < 0) {
                newValue.push(this.checkedValue);
            } else if (!this.checked) {
                const pos = newValue.indexOf(this.checkedValue);
                if (pos > -1) {
                    newValue.splice(pos, 1);
                }
                if (!isUndefined(this.uncheckedValue)) {
                    newValue.push(this.uncheckedValue);
                }
            }
            this.value = newValue;
        } else if (this.checked) {
            this.value = this.checkedValue;
        } else {
            this.value = this.uncheckedValue;
        }
    }
}
