/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { isArray } from '@banquette/utils-type/is-array';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { HeadlessControlViewModel } from '../headless-control.view-model.js';
import { NullGroup } from './constant.js';

var HeadlessCheckboxViewModel = /** @class */ (function (_super) {
    __extends(HeadlessCheckboxViewModel, _super);
    function HeadlessCheckboxViewModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The value to set to the control when the checkbox is checked.
         */
        _this.checkedValue = true;
        /**
         * If `true` a radio group can be totally unchecked.
         */
        _this.uncheckable = false;
        _this.unsubscribeCallbacks = [];
        /**
         * If the group is not `null`, the component will behave like a radio button.
         * Only one value can be selected for a given group.
         *
         * If `null` the component will behave like a checkbox.
         *
         * If multiple checkboxes are associated with the same control, an array
         * is automatically created to hold the selected values.
         */
        _this._group = { name: NullGroup, controlId: _this.control.viewData.id };
        return _this;
    }
    Object.defineProperty(HeadlessCheckboxViewModel.prototype, "indeterminate", {
        /**
         * If `true`, put the visual state of the checkbox as indeterminate.
         */
        set: function (value) {
            this.viewData.indeterminate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeadlessCheckboxViewModel.prototype, "group", {
        get: function () {
            return isString(this._group.name) ? this._group.name : null;
        },
        set: function (name) {
            this.removeGroup();
            this._group = {
                name: name || NullGroup,
                controlId: this.control.viewData.id
            };
            if (this._group.controlId > 0) {
                var key = name === null ? NullGroup : name;
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HeadlessCheckboxViewModel.prototype, "multiple", {
        /**
         * `true` if the checkbox stores an array of values.
         */
        get: function () {
            var map = this.getGroupsMap();
            var groups = Object.getOwnPropertySymbols(map).concat(Object.keys(map));
            return groups.length > 1 || (groups.length === 1 && groups[0] === NullGroup && map[groups[0]].length > 1);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    HeadlessCheckboxViewModel.prototype.initialize = function () {
        var _this = this;
        this.updateChecked(this.viewData.control.value);
        this.unsubscribeCallbacks.push(this.control.onBeforeValueChange(function (event) {
            if (_this.multiple) {
                // Ensure the value being set is an array if the selection is multiple.
                if (!isArray(event.newValue)) {
                    event.newValue = [event.newValue];
                }
                // Ensure only one value of each group is present in the array.
                if (_this._group.name !== NullGroup) {
                    var map_1 = _this.getGroupsMap();
                    var groupsWithValue_1 = [];
                    event.newValue = event.newValue.filter(function (item) {
                        for (var _i = 0, _a = map_1[_this._group.name]; _i < _a.length; _i++) {
                            var inst = _a[_i];
                            if (inst.checkedValue === item || (!isUndefined(inst.uncheckedValue) && inst.uncheckedValue === item)) {
                                if (groupsWithValue_1.indexOf(_this._group.name) < 0) {
                                    groupsWithValue_1.push(_this._group.name);
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
        this.unsubscribeCallbacks.push(this.control.onValueChanged(function (event) {
            if (_this.multiple) {
                if (!isArray(event.newValue)) {
                    event.newValue = [event.newValue];
                }
            }
            _this.updateChecked(event.newValue);
        }));
    };
    /**
     * @inheritDoc
     */
    HeadlessCheckboxViewModel.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.removeGroup();
        for (var _i = 0, _a = this.unsubscribeCallbacks; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsubscribeCallbacks = [];
    };
    /**
     * @inheritDoc
     */
    HeadlessCheckboxViewModel.prototype.setViewData = function (viewData) {
        _super.prototype.setViewData.call(this, viewData);
        viewData.checked = false;
        viewData.hasGroup = false;
    };
    /**
     * To call when a keydown event is emitted for the component.
     */
    HeadlessCheckboxViewModel.prototype.onKeyDown = function (event) {
        if (event.key === 'Enter' && !this.viewData.control.disabled) {
            this.toggle();
        }
    };
    /**
     * Inverse the `checked` state.
     */
    HeadlessCheckboxViewModel.prototype.toggle = function () {
        if (this.viewData.checked) {
            this.uncheck();
        }
        else {
            this.check();
        }
    };
    /**
     * Check the checkbox.
     */
    HeadlessCheckboxViewModel.prototype.check = function () {
        this.viewData.checked = true;
        this.updateValue();
    };
    /**
     * Uncheck the checkbox.
     */
    HeadlessCheckboxViewModel.prototype.uncheck = function () {
        var _this = this;
        if (this.viewData.hasGroup && !this.uncheckable) {
            if (!this.multiple || !isArray(this.viewData.control.value)) {
                return;
            }
            var map_2 = this.getGroupsMap();
            if (this.viewData.control.value.reduce(function (inc, i) {
                for (var _i = 0, _a = map_2[_this._group.name]; _i < _a.length; _i++) {
                    var inst = _a[_i];
                    if (inst.checkedValue === i) {
                        return inc + 1;
                    }
                }
                return inc;
            }, 0) <= 1) {
                return;
            }
        }
        this.viewData.checked = false;
        this.updateValue();
    };
    /**
     * Remove the view model from the groups map.
     */
    HeadlessCheckboxViewModel.prototype.removeGroup = function () {
        var gname = this._group.name;
        var gid = this._group.controlId;
        if (gid > 0 && !isUndefined(HeadlessCheckboxViewModel.GroupsMap[gid]) && !isUndefined(HeadlessCheckboxViewModel.GroupsMap[gid][gname])) {
            var pos = HeadlessCheckboxViewModel.GroupsMap[gid][gname].indexOf(this);
            if (pos > -1) {
                HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][gname].splice(pos, 1);
                if (!HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][gname].length) {
                    delete HeadlessCheckboxViewModel.GroupsMap[this._group.controlId][gname];
                }
            }
        }
        this._group = { name: NullGroup, controlId: 0 };
    };
    /**
     * Gets all the view models associated with the current control.
     */
    HeadlessCheckboxViewModel.prototype.getGroupsMap = function () {
        if (this._group.controlId > 0 && !isUndefined(HeadlessCheckboxViewModel.GroupsMap[this._group.controlId])) {
            return HeadlessCheckboxViewModel.GroupsMap[this._group.controlId];
        }
        return {};
    };
    /**
     * Update the `checked` prop for a given value.
     */
    HeadlessCheckboxViewModel.prototype.updateChecked = function (value) {
        var checked = false;
        if (this.multiple) {
            if (isArray(value)) {
                if (value.indexOf(this.checkedValue) > -1) {
                    checked = true;
                }
            }
        }
        else if (value === this.checkedValue) {
            checked = true;
        }
        this.viewData.checked = checked;
    };
    /**
     * Update the value of the control for a given checked state.
     */
    HeadlessCheckboxViewModel.prototype.updateValue = function () {
        var _this = this;
        if (this.multiple) {
            var newValue = this.viewData.control.value;
            var map_3 = this.getGroupsMap();
            if (!isArray(newValue)) {
                newValue = !isUndefined(newValue) ? [newValue] : [];
            }
            // Remove old values of the same group.
            if (this._group.name !== NullGroup) {
                newValue = newValue.filter(function (item) {
                    for (var _i = 0, _a = map_3[_this._group.name]; _i < _a.length; _i++) {
                        var inst = _a[_i];
                        if (inst.checkedValue === item || (!isUndefined(inst.uncheckedValue) && inst.uncheckedValue === item)) {
                            return false;
                        }
                    }
                    return true;
                });
            }
            // Remove existing value
            for (var _i = 0, _a = [this.checkedValue, this.uncheckedValue]; _i < _a.length; _i++) {
                var candidate = _a[_i];
                if (!isUndefined(candidate)) {
                    var pos = newValue.indexOf(candidate);
                    if (pos > -1) {
                        newValue.splice(pos, 1);
                    }
                }
            }
            // Maybe add a value
            if (this.viewData.checked) {
                newValue.push(this.checkedValue);
            }
            else if (!this.viewData.checked && !isUndefined(this.uncheckedValue)) {
                newValue.push(this.uncheckedValue);
            }
            this.viewData.control.value = newValue;
        }
        else if (this.viewData.checked) {
            this.viewData.control.value = this.checkedValue;
        }
        else {
            this.viewData.control.value = this.uncheckedValue;
        }
    };
    HeadlessCheckboxViewModel.GroupsMap = {};
    return HeadlessCheckboxViewModel;
}(HeadlessControlViewModel));

export { HeadlessCheckboxViewModel };
