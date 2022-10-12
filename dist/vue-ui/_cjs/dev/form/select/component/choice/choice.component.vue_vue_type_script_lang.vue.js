/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var trim = require('@banquette/utils-string/_cjs/dev/format/trim');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var check = require('@banquette/vue-material-icons/_cjs/dev/check');
var _delete = require('@banquette/vue-material-icons/_cjs/dev/delete');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var injectProvided_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/inject-provided.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var vue$1 = require('@banquette/vue-typescript/_cjs/dev/vue');
var vue = require('vue');
var constant = require('../../../constant.js');
var constant$1 = require('../../constant.js');

var ChoiceComponent = /** @class */ (function (_super) {
    _tslib.__extends(ChoiceComponent, _super);
    function ChoiceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The actual `Choice` item this component is responsible for.
         */
        _this.choice = null;
        /**
         * Scroll the choice into the view.
         */
        _this.scrollIntoView = (function () {
            var tries = 0;
            var timer = null;
            var tryToScroll = function () {
                // Test if the element or one of its parent has a display: none
                // @see https://stackoverflow.com/a/53068496
                if (!!_this.$el.offsetParent) {
                    var ph = _this.$el.parentNode.offsetHeight;
                    var ch = _this.$el.offsetHeight;
                    _this.$el.parentNode.scrollTop = _this.$el.offsetTop - ((ph / 2) - (ch / 2));
                    if (timer !== null) {
                        clearTimeout(timer);
                    }
                    timer = null;
                }
                else if (tries < 20) {
                    timer = setTimeout(tryToScroll);
                    ++tries;
                }
            };
            return function () {
                if (timer !== null || !_this.choice || isUndefined.isUndefined(_this.$el.scrollIntoView)) {
                    return;
                }
                tries = 0;
                tryToScroll();
            };
        })();
        return _this;
    }
    /**
     * Vue lifecycle hook.
     */
    ChoiceComponent.prototype.beforeMount = function () {
        var $parent = this.getParent('bt-form-select');
        if ($parent === null) {
            throw new usage_exception.UsageException("A \"<bt-form-select-choice>\" component must be placed inside a \"<bt-form-select>\".");
        }
        this.parent = $parent;
        this.parentGroup = this.getParent('bt-form-select-group');
    };
    /**
     * Vue lifecycle hook.
     */
    ChoiceComponent.prototype.unmounted = function () {
        if (this.internalChoice === null && this.choice !== null && this.parent && this.parent.vm) {
            this.parent.vm.removeChoice(this.choice);
        }
    };
    /**
     * Toggle the selection of the choice.
     */
    ChoiceComponent.prototype.select = function () {
        if (!this.choice) {
            return;
        }
        this.parent.vm.selectChoice(this.choice);
    };
    ChoiceComponent.prototype.deselect = function () {
        if (!this.choice) {
            return;
        }
        this.parent.vm.deselectChoice(this.choice.identifier);
    };
    ChoiceComponent.prototype.remove = function () {
        if (!this.choice) {
            return;
        }
        if (this.choice.selected) {
            this.deselect();
        }
        this.parent.vm.removeChoice(this.choice);
    };
    /**
     * Try to get a label to use in the selection resume for the current item.
     */
    ChoiceComponent.prototype.resolveLabel = function (choice) {
        if (this.label !== null) {
            return this.label;
        }
        if (!isUndefined.isUndefined(this.$slots.default)) {
            var slotLabel = trim.trim(this.getVNodesText(this.$slots.default()));
            if (slotLabel.length > 0) {
                return slotLabel;
            }
            if (choice.label) {
                return choice.label;
            }
            console.warn('No text could be extracted from the slot content. Please define a label using the "label" prop for choice with value:', this.value);
            return '(empty label)';
        }
        if (choice.label) {
            return choice.label;
        }
        console.warn('No label have been found for choice with value:', this.value, 'Please define one using the "label" prop.');
        return '(missing label)';
    };
    ChoiceComponent.prototype.onInternalChoiceChange = function (newValue) {
        if (this.choice && newValue && vue.toRaw(this.choice) === vue.toRaw(newValue)) {
            return;
        }
        // If internalChoice is not defined, this means the choice comes from a slot.
        if (!newValue) {
            this.choice = this.parent.vm.normalizeChoice(this.value === constant.UndefinedValue ? this.getSlotTextContent('default') : this.value, this.position === 'before' ? constant$1.BeforeSlotOrigin : constant$1.AfterSlotOrigin);
            /**
             * If the returned value is `null` the template will not show anything
             * because of the `v-if` on the root node.
             */
            if (this.choice !== null) {
                this.choice.external = true;
                this.choice.label = this.resolveLabel(this.choice);
                this.choice.disabled = !!this.disabled;
                // Force the group to `null` because the choice comes from a slot.
                // To group a choice in a slot, the `bt-form-select-group` component must be used directly.
                // "group" could be defined if the value is an object from which a group has been extracted by `normalizeChoice()`.
                // But it cannot work because the render is delegated to the slot.
                // By forcing it to null we ensure no group is created from this choice.
                this.choice.group = null;
                if (this.parent) {
                    // Always append to the end because each origin have a separate collection of items in the view model.
                    this.parent.vm.appendChoices([this.choice]);
                }
            }
        }
        else {
            this.choice = newValue;
        }
    };
    ChoiceComponent.prototype.onFocusChange = function (newValue) {
        if (newValue) {
            this.scrollIntoView();
        }
    };
    ChoiceComponent.prototype.onVisibilityChange = function () {
        if (!this.parentGroup || !this.choice) {
            return;
        }
        this.parentGroup.updateChoice(this.choice);
    };
    ChoiceComponent.prototype.onChoicePropsChange = function () {
        if (!this.choice) {
            return;
        }
        if (!isUndefined.isUndefined(this.disabled)) {
            this.choice.disabled = this.disabled;
        }
        if (!isUndefined.isUndefined(this.selected)) {
            // If the selection state changed.
            if (this.selected && !this.choice.selected) {
                this.parent.selectChoice(this.choice);
            }
            else if (!this.selected && this.choice.selected) {
                this.parent.deselectChoice(this.choice.identifier);
            }
        }
    };
    _tslib.__decorate([
        prop_decorator.Prop({ default: constant.UndefinedValue }),
        _tslib.__metadata("design:type", Object)
    ], ChoiceComponent.prototype, "value", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ChoiceComponent.prototype, "label", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: undefined }),
        _tslib.__metadata("design:type", Boolean)
    ], ChoiceComponent.prototype, "disabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: undefined }),
        _tslib.__metadata("design:type", Boolean)
    ], ChoiceComponent.prototype, "selected", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ChoiceComponent.prototype, "internalChoice", void 0);
    _tslib.__decorate([
        injectProvided_decorator.InjectProvided('position', null),
        _tslib.__metadata("design:type", Object)
    ], ChoiceComponent.prototype, "position", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], ChoiceComponent.prototype, "choice", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "select", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "deselect", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "remove", null);
    _tslib.__decorate([
        watch_decorator.Watch('internalChoice', { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onInternalChoiceChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('choice.focused', { immediate: watch_decorator.ImmediateStrategy.Mounted }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onFocusChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('choice.visible', { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onVisibilityChange", null);
    _tslib.__decorate([
        watch_decorator.Watch(function () {
            // Only watch the props if there is no choice given as prop.
            return this.internalChoice === null ? ['value', 'label', 'disabled', 'selected'] : [];
        }, { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onChoicePropsChange", null);
    ChoiceComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-form-select-choice',
            components: [check.IconMaterialCheck, _delete.IconMaterialDelete]
        })
    ], ChoiceComponent);
    return ChoiceComponent;
}(vue$1.Vue));

module.exports = ChoiceComponent;
