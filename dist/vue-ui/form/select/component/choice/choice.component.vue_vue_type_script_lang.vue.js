/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { trim } from '@banquette/utils-string/format/trim';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { IconMaterialCheck } from '@banquette/vue-material-icons/check';
import { IconMaterialDelete } from '@banquette/vue-material-icons/delete';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { InjectProvided } from '@banquette/vue-typescript/decorator/inject-provided.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { toRaw } from 'vue';
import { UndefinedValue } from '../../../constant.js';
import { BeforeSlotOrigin, AfterSlotOrigin } from '../../constant.js';

var ChoiceComponent = /** @class */ (function (_super) {
    __extends(ChoiceComponent, _super);
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
                    if (timer) {
                        window.clearTimeout(timer);
                    }
                    timer = null;
                }
                else if (tries < 20) {
                    timer = window.setTimeout(tryToScroll);
                    ++tries;
                }
            };
            return function () {
                if (timer !== null || !_this.choice || isUndefined(_this.$el.scrollIntoView)) {
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
            throw new UsageException("A \"<bt-form-select-choice>\" component must be placed inside a \"<bt-form-select>\".");
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
        if (!isUndefined(this.$slots.default)) {
            var slotLabel = trim(this.getVNodesText(this.$slots.default()));
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
        if (this.choice && newValue && toRaw(this.choice) === toRaw(newValue)) {
            return;
        }
        // If internalChoice is not defined, this means the choice comes from a slot.
        if (!newValue) {
            this.choice = this.parent.vm.normalizeChoice(this.value === UndefinedValue ? this.getSlotTextContent('default') : this.value, this.position === 'before' ? BeforeSlotOrigin : AfterSlotOrigin);
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
        if (!isUndefined(this.disabled)) {
            this.choice.disabled = this.disabled;
        }
        if (!isUndefined(this.selected)) {
            // If the selection state changed.
            if (this.selected && !this.choice.selected) {
                this.parent.selectChoice(this.choice);
            }
            else if (!this.selected && this.choice.selected) {
                this.parent.deselectChoice(this.choice.identifier);
            }
        }
    };
    __decorate([
        Prop({ default: UndefinedValue }),
        __metadata("design:type", Object)
    ], ChoiceComponent.prototype, "value", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ChoiceComponent.prototype, "label", void 0);
    __decorate([
        Prop({ type: Boolean, default: undefined }),
        __metadata("design:type", Boolean)
    ], ChoiceComponent.prototype, "disabled", void 0);
    __decorate([
        Prop({ type: Boolean, default: undefined }),
        __metadata("design:type", Boolean)
    ], ChoiceComponent.prototype, "selected", void 0);
    __decorate([
        Prop({ type: Object, default: null }),
        __metadata("design:type", Object)
    ], ChoiceComponent.prototype, "internalChoice", void 0);
    __decorate([
        InjectProvided('position', null),
        __metadata("design:type", Object)
    ], ChoiceComponent.prototype, "position", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], ChoiceComponent.prototype, "choice", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "select", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "deselect", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "remove", null);
    __decorate([
        Watch('internalChoice', { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onInternalChoiceChange", null);
    __decorate([
        Watch('choice.focused', { immediate: ImmediateStrategy.Mounted }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onFocusChange", null);
    __decorate([
        Watch('choice.visible', { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onVisibilityChange", null);
    __decorate([
        Watch(function () {
            // Only watch the props if there is no choice given as prop.
            return this.internalChoice === null ? ['value', 'label', 'disabled', 'selected'] : [];
        }, { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ChoiceComponent.prototype, "onChoicePropsChange", null);
    ChoiceComponent = __decorate([
        Component({
            name: 'bt-form-select-choice',
            components: [IconMaterialCheck, IconMaterialDelete]
        })
    ], ChoiceComponent);
    return ChoiceComponent;
}(Vue));

export { ChoiceComponent as default };
