import { UnsubscribeFunction } from "@banquette/event";
import { BeforeValueChangeFormEvent, ValueChangedFormEvent } from "@banquette/form";
import { waitForNextCycle } from "@banquette/utils-misc";
import { isArray, isFunction, isObject, isPrimitive, isScalar, isString, isUndefined, Primitive } from "@banquette/utils-type";
import { HeadlessControlViewModel } from "../headless-control.view-model";
import { CheckboxGroupInterface } from "./checkbox-group.interface";
import { NullGroup, ValueIdentifierResolver } from "./constant";
import { HeadlessCheckboxViewDataInterface } from "./headless-checkbox-view-data.interface";

const GroupsMap: Record<number, Record<string|symbol, HeadlessCheckboxViewModel[]>> = {};

export class HeadlessCheckboxViewModel<ViewDataType extends HeadlessCheckboxViewDataInterface = HeadlessCheckboxViewDataInterface> extends HeadlessControlViewModel<ViewDataType> {
    /**
     * The value to set to the control when the checkbox is checked.
     */
    private _checkedValue: any = true;
    private _checkedValueNormalized?: Primitive;
    public get checkedValue(): any {
        return this._checkedValue;
    }
    public set checkedValue(value: any) {
        this._checkedValue = value;
        this._checkedValueNormalized = this.normalizeValue(value);
    }
    public get checkedValueNormalized(): Primitive|undefined {
        return this._checkedValueNormalized;
    }

    /**
     * The value to set to the control when the checkbox is unchecked.
     */
    private _uncheckedValue?: any;
    private _uncheckedValueNormalized?: Primitive;
    public get uncheckedValue(): any {
        return this._uncheckedValue;
    }
    public set uncheckedValue(value: any) {
        this._uncheckedValue = value;
        this._uncheckedValueNormalized = this.normalizeValue(value);
    }
    public get uncheckedValueNormalized(): Primitive|undefined {
        return this._uncheckedValueNormalized;
    }

    /**
     * Defines how to convert the checked value to a primitive when it's an object.
     * Needed for equality tests.
     *
     * Can be:
     *   - the name of a property in the object.
     *   - a function that takes the object and returns the value to use.
     */
    public valueIdentifier: ValueIdentifierResolver<Primitive> = null;

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

    /**
     * By default, the checkbox will automatically become "multiple" if there are
     * multiple checkboxes associated with the same control.
     *
     * But in some cases, you may have only one checkbox associated with the control
     * but still want the value to be considered an array, as other checkboxes may
     * be added later on dynamically.
     *
     * That's when you can set this property to `true`.
     */
    public forceMultiple: boolean = false;

    /**
     * If the group is not `null`, the component will behave like a radio button.
     * Only one value can be selected for a given group.
     *
     * If `null` the component will behave like a checkbox.
     *
     * If multiple checkboxes are associated with the same control, an array
     * is automatically created to hold the selected values.
     */
    private _group: CheckboxGroupInterface = {name: NullGroup, controlId: this.control.viewData.id};
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
            if (isUndefined(GroupsMap[this._group.controlId])) {
                GroupsMap[this._group.controlId] = {};
            }
            if (isUndefined(GroupsMap[this._group.controlId][key])) {
                GroupsMap[this._group.controlId][key] = [];
            }
            GroupsMap[this._group.controlId][key].push(this);
        }
        this.viewData.hasGroup = this._group.name !== NullGroup;
        // Wait a cycle so other checkboxes have time to initialize.
        // If we update synchronously we may have a wrong value for `multiple` because
        // other checkboxes have not yet registered their group.
        waitForNextCycle().then(() => {
            this.updateChecked(this.control.viewData.value);
        });
    }

    private unsubscribeCallbacks: UnsubscribeFunction[] = [];

    /**
     * `true` if the checkbox stores an array of values.
     */
    public get multiple(): boolean {
        if (this.forceMultiple) {
            return true;
        }
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
                        const itemNormalized = this.normalizeValue(item);
                        for (const inst of map[this._group.name]) {
                            if (inst.checkedValueNormalized === itemNormalized || (!isUndefined(inst.uncheckedValueNormalized) && inst.uncheckedValueNormalized === itemNormalized)) {
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
                const iNormalized = this.normalizeValue(i);
                for (const inst of map[this._group.name]) {
                    if (inst.checkedValueNormalized === iNormalized) {
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
        if (gid > 0 && !isUndefined(GroupsMap[gid]) && !isUndefined(GroupsMap[gid][gname])) {
            const pos = GroupsMap[gid][gname].indexOf(this);
            if (pos > -1) {
                GroupsMap[this._group.controlId][gname].splice(pos, 1);
                if (!GroupsMap[this._group.controlId][gname].length) {
                    delete GroupsMap[this._group.controlId][gname];
                }
            }
        }
        this._group = {name: NullGroup, controlId: 0};
    }

    /**
     * Gets all the view models associated with the current control.
     */
    private getGroupsMap(): Record<string|symbol, HeadlessCheckboxViewModel[]> {
        if (this._group.controlId > 0 && !isUndefined(GroupsMap[this._group.controlId])) {
            return GroupsMap[this._group.controlId];
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
                for (const candidate of value) {
                    if (this.checkedValueNormalized === this.normalizeValue(candidate)) {
                        checked = true;
                        break ;
                    }
                }
            }
        } else {
            checked = this.normalizeValue(value) === this.checkedValueNormalized;
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
                    const itemNormalized = this.normalizeValue(item);
                    for (const inst of map[this._group.name]) {
                        if (inst.checkedValueNormalized === itemNormalized || (!isUndefined(inst.uncheckedValueNormalized) && inst.uncheckedValueNormalized === itemNormalized)) {
                            return false;
                        }
                    }
                    return true;
                });
            }

            // Remove existing value
            for (const candidate of [this.checkedValueNormalized, this.uncheckedValueNormalized]) {
                if (!isUndefined(candidate)) {
                    for (let i = 0; i < newValue.length; ++i) {
                        if (this.normalizeValue(newValue[i]) === candidate) {
                            newValue.splice(i, 1);
                            break ;
                        }
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

    /**
     * Ensure the input is normalized into a primitive or undefined value.
     */
    private normalizeValue(input: any): Primitive|undefined {
        if (isFunction(this.valueIdentifier)) {
            const value = this.valueIdentifier(input);
            if (isPrimitive(value)) {
                return value;
            }
        }
        if (isUndefined(input) || isScalar(input)) {
            return input;
        }
        if (!isObject(input)) {
            console.warn(`Unsupported value of type "${typeof(input)}".`);
            return undefined;
        }
        if (this.valueIdentifier !== null && !isFunction(this.valueIdentifier)) {
            if (!isUndefined(input[this.valueIdentifier])) {
                return input[this.valueIdentifier];
            }
        }
        if (this.valueIdentifier) {
            console.warn(`No property "${this.valueIdentifier}" to use as identifier has been found. You can control it using the "valueIdentifier" attribute, for:`, input);
        } else {
            console.warn('Please define what property to use as identifier using the "valueIdentifier" attribute, for:', input);
        }
        return undefined;
    }
}
