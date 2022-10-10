/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { FormControl } from '@banquette/form/form-control';
import { Node } from '@banquette/ui/tree/node';
import { areEqual } from '@banquette/utils-misc/are-equal';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isPrimitive } from '@banquette/utils-type/is-primitive';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Ref } from '@banquette/vue-typescript/decorator/ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import '../../tree/tree.component.vue.js';
import '../base-input/base-input.component.vue.js';
import { BaseInputComposable } from '../base-input/base-input.composable.js';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';
import { UndefinedValue } from '../constant.js';
import { ThemeConfiguration } from './theme-configuration.js';
import { TreeViewModel } from './tree.view-model.js';
import TreeComponent from '../../tree/tree.component.vue_vue_type_script_lang.vue.js';
import BaseFormInputComponent from '../base-input/base-input.component.vue_vue_type_script_lang.vue.js';

var FormTreeComponent = /** @class */ (function (_super) {
    __extends(FormTreeComponent, _super);
    function FormTreeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Map of checkboxes data, indexed by Node id.
         */
        _this.checkboxesData = {};
        _this.unsubscribeFunctions = [];
        _this.nodesSelectionUpdateStack = [];
        return _this;
    }
    /**
     * Vue lifecycle.
     */
    FormTreeComponent.prototype.beforeMount = function () {
        var _this = this;
        _super.prototype.beforeMount.call(this);
        this.proxy.onReady(function () {
            _this.v.control.value = !isUndefined(_this.v.control.value) && _this.v.control.value !== UndefinedValue ? ensureArray(_this.v.control.value) : [];
        });
        this.base.floatingLabel = false;
    };
    /**
     * Vue lifecycle.
     */
    FormTreeComponent.prototype.beforeUnmount = function () {
        _super.prototype.beforeUnmount.call(this);
        for (var _i = 0, _a = this.unsubscribeFunctions; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsubscribeFunctions = [];
    };
    /**
     * Get the control corresponding to a Node.
     */
    FormTreeComponent.prototype.getCheckboxData = function (node) {
        if (isUndefined(this.checkboxesData[node.id])) {
            this.checkboxesData[node.id] = this.createCheckboxDataForNode(node);
        }
        return this.checkboxesData[node.id];
    };
    /**
     * @inheritDoc
     */
    FormTreeComponent.prototype.setupViewModel = function () {
        return new TreeViewModel(this.proxy, this.base);
    };
    /**
     * Add the value of a Node to the FormControl.
     */
    FormTreeComponent.prototype.addNodeValueToSelection = function (node) {
        var index = this.getNodeValueIndexInFormControlValue(node);
        if (index < 0) {
            var extractedValue = this.extractNodeValue(node);
            if (!isUndefined(extractedValue)) {
                this.v.control.value.push(extractedValue);
                this.v.control.value = this.v.control.value.slice(0);
            }
        }
    };
    /**
     * Remove the value of a Node from the FormControl.
     */
    FormTreeComponent.prototype.removeNodeValueFromSelection = function (node) {
        var index = this.getNodeValueIndexInFormControlValue(node);
        if (index > -1) {
            this.v.control.value.splice(index, 1);
            this.v.control.value = this.v.control.value.slice(0);
        }
    };
    FormTreeComponent.prototype.createCheckboxDataForNode = function (node) {
        var _this = this;
        var control = new FormControl();
        this.unsubscribeFunctions.push(control.onValueChanged(function (event) {
            if (event.newValue) {
                _this.addNodeValueToSelection(node);
            }
            else {
                _this.removeNodeValueFromSelection(node);
            }
            _this.updateChildNodes(node);
            _this.updateParentNodes(node);
        }));
        // Delay the check to let time for the node to finish its registering.
        queueMicrotask(function () {
            if (_this.getNodeValueIndexInFormControlValue(node) > -1 || (node.parent && !isUndefined(_this.checkboxesData[node.parent.id]) && _this.checkboxesData[node.parent.id].control.value)) {
                control.setValue(true);
            }
        });
        return { control: control, indeterminate: false };
    };
    /**
     * Update the selection state of the children of a node.
     */
    FormTreeComponent.prototype.updateChildNodes = function (node) {
        if (isUndefined(this.checkboxesData[node.id]) || this.nodesSelectionUpdateStack.indexOf(node.id) > -1) {
            return;
        }
        var checked = this.checkboxesData[node.id].control.value;
        this.nodesSelectionUpdateStack.push(node.id);
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (isUndefined(this.checkboxesData[child.id])) {
                continue;
            }
            // We need to check the child checkbox.
            // If it is not checked yet, just check it.
            if (this.checkboxesData[child.id].control.value !== checked) {
                this.checkboxesData[child.id].control.setValue(checked);
            }
            else {
                // Otherwise, we need to update the selection of related nodes
                // manually before the `onValueChanged` event would not trigger.
                this.updateChildNodes(child);
                this.updateParentNodes(node);
            }
        }
        this.nodesSelectionUpdateStack.pop();
    };
    /**
     * Update the selection state of the parents of a node.
     */
    FormTreeComponent.prototype.updateParentNodes = function (node) {
        if (isUndefined(this.checkboxesData[node.id]) || this.nodesSelectionUpdateStack.indexOf(node.id) > -1) {
            return;
        }
        this.nodesSelectionUpdateStack.push(node.id);
        var parent = node.parent;
        while (parent) {
            if (!isUndefined(this.checkboxesData[parent.id])) {
                var selectedCount = 0;
                var indeterminateCount = 0;
                var unselectedCount = 0;
                for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (isUndefined(this.checkboxesData[child.id])) {
                        continue;
                    }
                    if (this.checkboxesData[child.id].indeterminate) {
                        indeterminateCount++;
                    }
                    else if (this.checkboxesData[child.id].control.value) {
                        ++selectedCount;
                    }
                    else {
                        ++unselectedCount;
                    }
                }
                this.checkboxesData[parent.id].indeterminate = false;
                if (selectedCount && !unselectedCount && !indeterminateCount) {
                    this.checkboxesData[parent.id].control.setValue(true);
                }
                else {
                    this.nodesSelectionUpdateStack.push(parent.id);
                    this.checkboxesData[parent.id].indeterminate = indeterminateCount > 0 || (selectedCount > 0 && unselectedCount > 0);
                    this.checkboxesData[parent.id].control.setValue(false);
                    this.nodesSelectionUpdateStack.pop();
                }
            }
            parent = parent.parent;
        }
        this.nodesSelectionUpdateStack.pop();
    };
    /**
     * Confront a node value against the selected values in the FormControl,
     * and returns `true` if a match is found (meaning the node is selected).
     */
    FormTreeComponent.prototype.getNodeValueIndexInFormControlValue = function (node) {
        var nodeValue = this.extractNodeComparableValue(node);
        for (var i = 0; i < this.v.control.value.length; ++i) {
            var candidate = this.v.control.value[i];
            if (isPrimitive(candidate)) {
                if (nodeValue === candidate) {
                    return i;
                }
            }
            else {
                var identifier = this.extractValueIdentifier(candidate);
                if (identifier !== null) {
                    if (identifier === nodeValue) {
                        return i;
                    }
                }
                else if (areEqual(candidate, nodeValue)) {
                    return i;
                }
            }
        }
        return -1;
    };
    /**
     * Get the value to assign to the FormControl for a Node.
     */
    FormTreeComponent.prototype.extractNodeValue = function (node) {
        if (isFunction(this.nodesValue)) {
            return this.nodesValue(node.originalValue);
        }
        if (!isObject(node.originalValue) || !this.nodesValue) {
            return node.originalValue;
        }
        return node.originalValue[this.nodesValue];
    };
    /**
     * Extract from a Node object the value to use to compare it with other nodes.
     */
    FormTreeComponent.prototype.extractNodeComparableValue = function (node) {
        var value = this.extractNodeValue(node);
        if (isPrimitive(value)) {
            return value;
        }
        var identifier = this.extractValueIdentifier(value);
        if (identifier !== null) {
            return identifier;
        }
        return value;
    };
    /**
     * Try to get the identifier from an object value.
     */
    FormTreeComponent.prototype.extractValueIdentifier = function (value) {
        if (isFunction(this.valueIdentifier)) {
            return this.valueIdentifier(value);
        }
        if (!this.valueIdentifier || !isPrimitive(value[this.valueIdentifier])) {
            return null;
        }
        return value[this.valueIdentifier];
    };
    __decorate([
        Import(BaseInputComposable, {
            floatingLabel: false
        }),
        __metadata("design:type", BaseInputComposable)
    ], FormTreeComponent.prototype, "base", void 0);
    __decorate([
        Prop({ type: [String, Function], default: null }),
        __metadata("design:type", Object)
    ], FormTreeComponent.prototype, "nodesValue", void 0);
    __decorate([
        Prop({ type: [String, Function], default: null }),
        __metadata("design:type", Object)
    ], FormTreeComponent.prototype, "valueIdentifier", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormTreeComponent.prototype, "v", void 0);
    __decorate([
        Ref(),
        __metadata("design:type", Object)
    ], FormTreeComponent.prototype, "checkboxesData", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Node]),
        __metadata("design:returntype", Object)
    ], FormTreeComponent.prototype, "getCheckboxData", null);
    FormTreeComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-tree',
            components: [BaseFormInputComponent, TreeComponent],
            directives: [BindThemeDirective]
        })
    ], FormTreeComponent);
    return FormTreeComponent;
}(AbstractVueFormComponent));

export { FormTreeComponent as default };
