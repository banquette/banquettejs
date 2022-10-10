/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var formControl = require('@banquette/form/_cjs/dev/form-control');
var node = require('@banquette/ui/_cjs/dev/tree/node');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isPrimitive = require('@banquette/utils-type/_cjs/dev/is-primitive');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var ref_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
require('../../tree/tree.component.vue.js');
require('../base-input/base-input.component.vue.js');
var baseInput_composable = require('../base-input/base-input.composable.js');
var abstractVueForm_component = require('../abstract-vue-form.component.js');
var constant = require('../constant.js');
var themeConfiguration = require('./theme-configuration.js');
var tree_viewModel = require('./tree.view-model.js');
var tree_component_vue_vue_type_script_lang = require('../../tree/tree.component.vue_vue_type_script_lang.vue.js');
var baseInput_component_vue_vue_type_script_lang = require('../base-input/base-input.component.vue_vue_type_script_lang.vue.js');

var FormTreeComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormTreeComponent, _super);
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
            _this.v.control.value = !isUndefined.isUndefined(_this.v.control.value) && _this.v.control.value !== constant.UndefinedValue ? ensureArray.ensureArray(_this.v.control.value) : [];
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
        if (isUndefined.isUndefined(this.checkboxesData[node.id])) {
            this.checkboxesData[node.id] = this.createCheckboxDataForNode(node);
        }
        return this.checkboxesData[node.id];
    };
    /**
     * @inheritDoc
     */
    FormTreeComponent.prototype.setupViewModel = function () {
        return new tree_viewModel.TreeViewModel(this.proxy, this.base);
    };
    /**
     * Add the value of a Node to the FormControl.
     */
    FormTreeComponent.prototype.addNodeValueToSelection = function (node) {
        var index = this.getNodeValueIndexInFormControlValue(node);
        if (index < 0) {
            var extractedValue = this.extractNodeValue(node);
            if (!isUndefined.isUndefined(extractedValue)) {
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
        var control = new formControl.FormControl();
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
            if (_this.getNodeValueIndexInFormControlValue(node) > -1 || (node.parent && !isUndefined.isUndefined(_this.checkboxesData[node.parent.id]) && _this.checkboxesData[node.parent.id].control.value)) {
                control.setValue(true);
            }
        });
        return { control: control, indeterminate: false };
    };
    /**
     * Update the selection state of the children of a node.
     */
    FormTreeComponent.prototype.updateChildNodes = function (node) {
        if (isUndefined.isUndefined(this.checkboxesData[node.id]) || this.nodesSelectionUpdateStack.indexOf(node.id) > -1) {
            return;
        }
        var checked = this.checkboxesData[node.id].control.value;
        this.nodesSelectionUpdateStack.push(node.id);
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (isUndefined.isUndefined(this.checkboxesData[child.id])) {
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
        if (isUndefined.isUndefined(this.checkboxesData[node.id]) || this.nodesSelectionUpdateStack.indexOf(node.id) > -1) {
            return;
        }
        this.nodesSelectionUpdateStack.push(node.id);
        var parent = node.parent;
        while (parent) {
            if (!isUndefined.isUndefined(this.checkboxesData[parent.id])) {
                var selectedCount = 0;
                var indeterminateCount = 0;
                var unselectedCount = 0;
                for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (isUndefined.isUndefined(this.checkboxesData[child.id])) {
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
            if (isPrimitive.isPrimitive(candidate)) {
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
                else if (areEqual.areEqual(candidate, nodeValue)) {
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
        if (isFunction.isFunction(this.nodesValue)) {
            return this.nodesValue(node.originalValue);
        }
        if (!isObject.isObject(node.originalValue) || !this.nodesValue) {
            return node.originalValue;
        }
        return node.originalValue[this.nodesValue];
    };
    /**
     * Extract from a Node object the value to use to compare it with other nodes.
     */
    FormTreeComponent.prototype.extractNodeComparableValue = function (node) {
        var value = this.extractNodeValue(node);
        if (isPrimitive.isPrimitive(value)) {
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
        if (isFunction.isFunction(this.valueIdentifier)) {
            return this.valueIdentifier(value);
        }
        if (!this.valueIdentifier || !isPrimitive.isPrimitive(value[this.valueIdentifier])) {
            return null;
        }
        return value[this.valueIdentifier];
    };
    _tslib.__decorate([
        import_decorator.Import(baseInput_composable.BaseInputComposable, {
            floatingLabel: false
        }),
        _tslib.__metadata("design:type", baseInput_composable.BaseInputComposable)
    ], FormTreeComponent.prototype, "base", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormTreeComponent.prototype, "nodesValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormTreeComponent.prototype, "valueIdentifier", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormTreeComponent.prototype, "v", void 0);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Object)
    ], FormTreeComponent.prototype, "checkboxesData", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [node.Node]),
        _tslib.__metadata("design:returntype", Object)
    ], FormTreeComponent.prototype, "getCheckboxData", null);
    FormTreeComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-form-tree',
            components: [baseInput_component_vue_vue_type_script_lang, tree_component_vue_vue_type_script_lang],
            directives: [bindTheme_directive.BindThemeDirective]
        })
    ], FormTreeComponent);
    return FormTreeComponent;
}(abstractVueForm_component.AbstractVueFormComponent));

module.exports = FormTreeComponent;
