/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../_virtual/_tslib.js';
import { HttpMethod } from '@banquette/http/constants';
import { ChoiceOrigin, SearchType } from '@banquette/ui/form/select/constant';
import { SelectedChoice } from '@banquette/ui/form/select/selected-choice';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { debounce } from '@banquette/utils-misc/debounce';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { isArray } from '@banquette/utils-type/is-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { IconRemixCloseCircle } from '@banquette/vue-remix-icons/close-circle';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { TemplateRef } from '@banquette/vue-typescript/decorator/template-ref.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import { useResizeObserver } from '@vueuse/core';
import '../../../dropdown/dropdown.component.vue.js';
import '../../../dropdown/dropdown-divider.component.vue.js';
import '../../../dropdown/dropdown-item.component.vue.js';
import '../../../misc/call/call.component.vue.js';
import '../../../misc/conditional-wrapper/conditional-wrapper.component.vue.js';
import '../../../misc/remote/remote.component.vue.js';
import '../../../misc/teleport/teleport.component.vue.js';
import { ClickOutsideDirective } from '../../../misc/click-outside.directive.js';
import '../../../misc/collapsable.directive.js';
import '../../../misc/stick-to.directive.js';
import '../../../misc/teleport.directive.js';
import '@banquette/api/api.service';
import '@banquette/dependency-injection/injector';
import '@banquette/utils-misc/proxy';
import '@banquette/vue-typescript/vue-builder';
import '../../../misc/client-only.component.vue.js';
import '../../../progress/progress-circular/progress-circular.component.vue.js';
import '../../../tag/tag.component.vue.js';
import { AbstractVueFormComponent } from '../../abstract-vue-form.component.js';
import '../../base-input/base-input.component.vue.js';
import { BaseInputComposable } from '../../base-input/base-input.composable.js';
import { ViewModelEvents } from '../../constant.js';
import { BeforeSlotOrigin, PropOrigin, AfterSlotOrigin } from '../constant.js';
import ChoiceSlotWrapperComponent from './choice-slot-wrapper.component.js';
import './choice/choice.component.vue.js';
import { I18nDefaults } from './i18n-defaults.js';
import { SelectViewModel } from './select.view-model.js';
import { ThemeConfiguration } from './theme-configuration.js';
import { WrappedSelectedChoice } from './wrapped-selected-choice.js';
import ChoiceComponent from './choice/choice.component.vue_vue_type_script_lang.vue.js';
import TagComponent from '../../../tag/tag.component.vue_vue_type_script_lang.vue.js';
import DropdownComponent from '../../../dropdown/dropdown.component.vue_vue_type_script_lang.vue.js';
import BaseFormInputComponent from '../../base-input/base-input.component.vue_vue_type_script_lang.vue.js';
import ProgressCircularComponent from '../../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js';

var FormSelectComponent = /** @class */ (function (_super) {
    __extends(FormSelectComponent, _super);
    function FormSelectComponent() {
        var _this = _super.call(this) || this;
        _this.dropdownWidth = 0;
        _this.inputWrapperResizeUnsubscribe = null;
        _this.lastBlurTime = 0;
        _this.lastKeyStrokeTime = 0;
        _this.onInputChange = debounce(function () {
            if (!_this.v.isInputReadonly) {
                _this.vm.setSearchString(_this.v.inputValue);
            }
            if (_this.v.inputValue) {
                _this.v.base.placeholder = '';
            }
            else {
                _this.v.base.placeholder = _this.baseComposable.placeholder;
            }
            if (_this.vm.allowCreation) {
                _this.v.creationBuffer = _this.v.inputValue;
            }
        }, 100);
        // For the execution of all props watchers before the proxy is initialized
        // to ensure everything is configured before the proxy calls `updateValueFromControl`
        // to assign the value of the control.
        _this.eventPipeline.subscribe(ViewModelEvents.Configure, function () {
            _this.onBasePropsChange();
            _this.syncChoices();
            _this.updateSearchConfiguration();
            _this.updateSelectionVisibilityTracking();
        });
        return _this;
    }
    /**
     * Vue lifecycle.
     */
    FormSelectComponent.prototype.mounted = function () {
        var _this = this;
        _super.prototype.mounted.call(this);
        this.observerInputWrapperSize(function (entries) {
            _this.dropdownWidth = entries[0].contentRect.width;
            _this.updateTagsVisibility();
        });
    };
    /**
     * Vue lifecycle.
     */
    FormSelectComponent.prototype.beforeUnmount = function () {
        _super.prototype.beforeUnmount.call(this);
        if (this.inputWrapperResizeUnsubscribe) {
            this.inputWrapperResizeUnsubscribe();
        }
    };
    FormSelectComponent.prototype.onKeyDown = function (event) {
        this.lastKeyStrokeTime = (new Date()).getTime();
        this.vm.onKeyDown(event);
        this.updateInput();
        if (event.key === 'Enter' && this.allowCreation) {
            this.v.inputValue = this.v.creationBuffer = '';
        }
    };
    FormSelectComponent.prototype.selectChoice = function (choice) {
        this.vm.selectChoice(choice);
    };
    FormSelectComponent.prototype.deselectChoice = function (choice) {
        this.vm.deselectChoice(choice);
    };
    FormSelectComponent.prototype.deselectAll = function () {
        this.vm.deselectAll();
        this.v.base.placeholder = this.baseComposable.placeholder;
    };
    FormSelectComponent.prototype.removeItem = function (item) {
        for (var i = 0; i < this.v.control.value.length; ++i) {
            if (this.v.control.value[i].identifier === item.identifier) {
                this.v.control.value.splice(i, 1);
            }
        }
    };
    FormSelectComponent.prototype.toggleSelectedPopover = function () {
        this.v.selectedPopoverVisible = !this.v.selectedPopoverVisible;
    };
    FormSelectComponent.prototype.hideSelectedPopover = function () {
        this.v.selectedPopoverVisible = false;
    };
    FormSelectComponent.prototype.onInputWrapperClick = function () {
        // TODO: Remove the timer
        // Find a way to prevent the focus to be lost on the input when a click is made on the mask / input-wrapper.
        if ((new Date()).getTime() - this.lastBlurTime < 150) {
            return;
        }
        this.inputEl.focus();
        this.vm.showChoices();
        this.updateInput();
    };
    FormSelectComponent.prototype.onInputFocus = function () {
        // TODO: Remove the timer
        // Find a way to prevent the focus to be lost on the input when a click is made on the mask / input-wrapper.
        if ((new Date()).getTime() - this.lastBlurTime < 150) {
            return;
        }
        this.v.control.onFocus();
        this.v.isInputFocused = true;
    };
    FormSelectComponent.prototype.onInputBlur = function () {
        if (!this.v.isInputReadonly) {
            this.v.inputValue = this.v.inputPlaceholder;
        }
        this.v.control.onBlur();
        this.v.isInputFocused = false;
        this.lastBlurTime = (new Date()).getTime();
        // Check that the vm is still defined because this event can occur
        // while the component is being unmounted in certain edge cases.
        if (!isUndefined(this.vm)) {
            this.vm.hideChoices();
        }
    };
    /**
     * @inheritDoc
     */
    FormSelectComponent.prototype.setupViewModel = function () {
        var vm = new SelectViewModel(this.proxy, this.baseComposable);
        vm.choicesOriginOrdering = [
            BeforeSlotOrigin,
            ChoiceOrigin.User,
            PropOrigin,
            ChoiceOrigin.Default,
            ChoiceOrigin.Remote,
            AfterSlotOrigin
        ];
        return vm;
    };
    /**
     * @inheritDoc
     */
    FormSelectComponent.prototype.onFocusChanged = function (newValue) {
        _super.prototype.onFocusChanged.call(this, newValue);
        if (newValue) {
            this.v.selectedPopoverVisible = false;
        }
    };
    FormSelectComponent.prototype.onBasePropsChange = function () {
        this.vm.modelType = this.model;
        this.vm.choicesLabel = this.choicesLabel;
        this.vm.choicesIdentifier = this.choicesIdentifier;
        this.vm.choicesValue = this.choicesValue;
        this.vm.choicesDisabled = this.choicesDisabled;
        this.vm.choicesGroup = this.choicesGroup;
        this.vm.closeOnSelection = this.closeOnSelection;
        this.v.dropdownTeleport = this.dropdownTeleport;
        this.v.dropdownZIndex = this.dropdownZIndex;
    };
    FormSelectComponent.prototype.syncChoices = function () {
        this.vm.setChoices(this.choices || [], PropOrigin);
    };
    FormSelectComponent.prototype.onSelectionChange = function () {
        var _this = this;
        /**
         * Ugly tricky to only blur the input when the value has been selected using the mouse.
         * Keep the field focus for keyboard input.
         */
        if ((new Date()).getTime() - this.lastKeyStrokeTime > 50 && !this.v.multiple) {
            this.inputEl.blur();
        }
        this.updateInput();
        this.updateSelected();
        window.setTimeout(function () {
            _this.updateTagsVisibility();
        });
        this.$emit('change', this.v.control.value);
    };
    FormSelectComponent.prototype.onChoiceVisibilityChange = function (newValue) {
        if (newValue && !this.v.isInputReadonly) {
            this.v.inputValue = this.v.searchBuffer;
            this.v.base.placeholder = '';
        }
        else if (!newValue) {
            if (this.v.inputValue === this.v.searchBuffer) {
                this.v.inputValue = '';
            }
            this.v.base.placeholder = this.baseComposable.placeholder;
        }
    };
    /**
     * Reconfigure the view model to match the new search configuration.
     */
    FormSelectComponent.prototype.updateSearchConfiguration = function () {
        this.v.multiple = this.multiple;
        this.vm.searchType = this.searchType;
        this.vm.searchRemoteParamName = this.searchRemoteParamName;
        this.vm.searchMinLength = this.searchMinLength;
        this.vm.allowCreation = this.allowCreation;
        this.v.isInputReadonly = this.vm.searchType === SearchType.None && !this.allowCreation;
    };
    FormSelectComponent.prototype.syncRemoteProps = function () {
        this.vm.remote.updateConfiguration({
            url: this.url,
            endpoint: this.endpoint,
            method: this.method,
            urlParams: this.urlParams,
            headers: this.headers,
            model: this.model
        });
    };
    /**
     * Reconfigure the view and the value to match the couple multiple/lockHeight configuration.
     */
    FormSelectComponent.prototype.updateSelectionVisibilityTracking = function () {
        this.v.multiple = this.multiple;
        this.v.isHeightLocked = this.lockHeight;
        if (!this.v.needsSelectionPopover) {
            for (var _i = 0, _a = getObjectKeys(this.v.selected); _i < _a.length; _i++) {
                var id = _a[_i];
                this.v.selected[id].visible = true;
            }
            this.v.selectedPopoverVisible = false;
            this.v.selectedInPopover = [];
        }
        if (this.v.multiple) {
            if (!isArray(this.v.control.value)) {
                this.v.control.value = !isUndefined(this.v.control.value) ? [this.v.control.value] : [];
            }
            this.onSelectionChange();
        }
        else if (isArray(this.v.control.value)) {
            this.v.control.value = this.v.control.value.length > 0 ? this.v.control.value[0] : undefined;
        }
        if (this.v.multiple) {
            this.v.inputValue = '';
            this.v.inputPlaceholder = '';
        }
    };
    /**
     * Update the value of the input that holds the selection.
     */
    FormSelectComponent.prototype.updateInput = function () {
        if (!this.multiple) {
            var viewValue = this.v.control.value instanceof SelectedChoice ? this.v.control.value.label : '';
            this.v.inputPlaceholder = viewValue;
            if (!this.v.isInputReadonly && this.v.isInputFocused && this.v.choicesVisible && viewValue === this.v.inputValue && this.v.searchBuffer !== viewValue) {
                this.v.inputValue = '';
            }
            else if (!this.v.choicesVisible) {
                this.v.inputValue = viewValue;
            }
        }
    };
    /**
     * Duplicate the current selection into an array of `WrappedSelectedChoice`
     * that adds a `visible` attribute, specific to this implementation of the component.
     */
    FormSelectComponent.prototype.updateSelected = function () {
        var selected = {};
        if (isArray(this.v.control.value)) {
            for (var _i = 0, _a = this.v.control.value; _i < _a.length; _i++) {
                var item = _a[_i];
                if (isUndefined(this.v.selected[item.id])) {
                    selected[item.id] = new WrappedSelectedChoice(item, !this.v.needsSelectionPopover);
                }
                else {
                    selected[item.id] = this.v.selected[item.id];
                }
            }
        }
        this.v.selected = selected;
    };
    /**
     * Check for each tag in the view if it must be moved in the popover or not.
     * Only relevant if the selection is multiple and the height is locked.
     */
    FormSelectComponent.prototype.updateTagsVisibility = function () {
        if (!this.v.needsSelectionPopover || !this.tagSelectionWrapperEl || !isArray(this.v.control.value)) {
            return;
        }
        // The size taken by the '+ N" tag so it doesn't overlap with other tags.
        // This size can be very small because the text doesn't change much.
        var additionalTagWidth = 55;
        var previousId = 0;
        var selectionRect = this.tagSelectionWrapperEl.getBoundingClientRect();
        var childrenCount = this.tagSelectionWrapperEl.children.length;
        this.v.selectedInPopover = [];
        for (var i = 0; i < childrenCount; ++i) {
            var child = this.tagSelectionWrapperEl.children[i];
            var childId = parseInt(child.getAttribute('data-id') || '0', 10);
            if (isUndefined(this.v.selected[childId])) {
                continue;
            }
            var childRect = child.getBoundingClientRect();
            if (((i < childrenCount - 1 && selectionRect.right - childRect.right <= additionalTagWidth) ||
                (i === childrenCount - 1 && selectionRect.right - childRect.right < 0))) {
                this.v.selected[childId].visible = false;
                if (i === childrenCount - 1 && childRect.width < additionalTagWidth && previousId > 0 && this.v.selected[previousId].visible) {
                    this.v.selected[previousId].visible = false;
                    this.v.selectedInPopover.push(this.v.selected[previousId].choice);
                }
                this.v.selectedInPopover.push(this.v.selected[childId].choice);
            }
            else {
                this.v.selected[childId].visible = true;
            }
            previousId = childId;
        }
        if (!this.v.selectedInPopover.length) {
            this.v.selectedPopoverVisible = false;
        }
        else if (!this.$refs.additionalTagsAggregator) {
            //
            // Ugly fix to ensure the ref "additionalTagsAggregator" is updated in the view.
            // The ref is properly resolved in the component but not available in the view randomly.
            //
            // TODO: Investigate this issue for a proper fix.
            //
            window.setTimeout(this.$forceUpdate);
        }
    };
    /**
     * Observe size changes of the input wrapper to update tags visibility.
     * Only relevant if the selection is multiple and the height is locked.
     */
    FormSelectComponent.prototype.observerInputWrapperSize = function (cb) {
        var _this = this;
        if (this.inputWrapperResizeUnsubscribe) {
            this.inputWrapperResizeUnsubscribe();
        }
        var unsubscribe;
        this.inputWrapperResizeUnsubscribe = function () {
            unsubscribe();
            _this.inputWrapperResizeUnsubscribe = null;
        };
        if (this.inputWrapperEl) {
            this.dropdownTarget = this.inputWrapperEl.parentElement;
            unsubscribe = useResizeObserver(this.dropdownTarget, cb).stop;
        }
    };
    __decorate([
        Prop({ type: Array, default: null }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choices", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'label' }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesLabel", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'id' }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesIdentifier", void 0);
    __decorate([
        Prop({ type: [String, Function], default: null }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesValue", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'disabled' }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesDisabled", void 0);
    __decorate([
        Prop({ type: [String, Function], default: 'group' }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesGroup", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "multiple", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "lockHeight", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "allowCreation", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "clearable", void 0);
    __decorate([
        Prop({ type: [String, Boolean], default: 'auto' }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "closeOnSelection", void 0);
    __decorate([
        Import(BaseInputComposable, false),
        __metadata("design:type", BaseInputComposable)
    ], FormSelectComponent.prototype, "baseComposable", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "model", void 0);
    __decorate([
        Prop({ name: 'remoteUrl', type: String, default: null }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "url", void 0);
    __decorate([
        Prop({ name: 'remoteEndpoint', type: String, default: null }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "endpoint", void 0);
    __decorate([
        Prop({ name: 'remoteMethod', type: String, default: HttpMethod.GET, transform: function (value) { return ensureInEnum(value, HttpMethod, HttpMethod.GET); } }),
        __metadata("design:type", String)
    ], FormSelectComponent.prototype, "method", void 0);
    __decorate([
        Prop({ name: 'remoteUrlParams', type: Object, default: {} }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "urlParams", void 0);
    __decorate([
        Prop({ name: 'remoteHeaders', type: Object, default: {} }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "headers", void 0);
    __decorate([
        Prop({ name: 'searchType', type: String, transform: function (value) { return ensureInEnum(value, SearchType, SearchType.None); } }),
        __metadata("design:type", String)
    ], FormSelectComponent.prototype, "searchType", void 0);
    __decorate([
        Prop({ name: 'searchRemoteParamName', type: [String, Array], default: 'search' }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "searchRemoteParamName", void 0);
    __decorate([
        Prop({ name: 'searchMinLength', type: Number, default: 0 }),
        __metadata("design:type", Number)
    ], FormSelectComponent.prototype, "searchMinLength", void 0);
    __decorate([
        Prop({ name: 'dropdownTeleport', type: [Object, String], default: null }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "dropdownTeleport", void 0);
    __decorate([
        Prop({ name: 'dropdownZIndex', type: [Number, String], default: undefined, transform: function (v) { return !isUndefined(v) ? parseInt(v, 10) : undefined; } }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "dropdownZIndex", void 0);
    __decorate([
        Prop({ type: Object, default: I18nDefaults }),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "i18n", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "v", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Number)
    ], FormSelectComponent.prototype, "dropdownWidth", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], FormSelectComponent.prototype, "dropdownTarget", void 0);
    __decorate([
        TemplateRef('input'),
        __metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], FormSelectComponent.prototype, "inputEl", void 0);
    __decorate([
        TemplateRef('inputWrapper'),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "inputWrapperEl", void 0);
    __decorate([
        TemplateRef('tagSelectionWrapper'),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "tagSelectionWrapperEl", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onKeyDown", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "selectChoice", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "deselectChoice", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "deselectAll", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [SelectedChoice]),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "removeItem", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "toggleSelectedPopover", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "hideSelectedPopover", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onInputWrapperClick", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onInputFocus", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onInputBlur", null);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], FormSelectComponent.prototype, "onInputChange", void 0);
    __decorate([
        Watch([
            'model',
            'choicesLabel',
            'choicesIdentifier',
            'choicesValue',
            'choicesDisabled',
            'choicesGroup',
            'closeOnSelection',
            'dropdownTeleport',
            'dropdownZIndex'
        ], { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onBasePropsChange", null);
    __decorate([
        Watch('choices', { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "syncChoices", null);
    __decorate([
        Watch('v.control.value'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onSelectionChange", null);
    __decorate([
        Watch('v.choicesVisible', { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Boolean]),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onChoiceVisibilityChange", null);
    __decorate([
        Watch(['searchType', 'searchRemoteParamName', 'searchMinLength', 'allowCreation', 'multiple'], { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "updateSearchConfiguration", null);
    __decorate([
        Watch(['model', 'remoteUrl', 'remoteEndpoint', 'remoteMethod', 'remoteUrlParams', 'remoteHeaders'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "syncRemoteProps", null);
    __decorate([
        Watch(['multiple', 'lockHeight'], { immediate: false }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "updateSelectionVisibilityTracking", null);
    FormSelectComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-select',
            components: [BaseFormInputComponent, ChoiceComponent, ChoiceSlotWrapperComponent, TagComponent, DropdownComponent, ProgressCircularComponent, IconRemixCloseCircle],
            directives: [ClickOutsideDirective, BindThemeDirective],
            emits: ['focus', 'blur', 'change']
        }),
        __metadata("design:paramtypes", [])
    ], FormSelectComponent);
    return FormSelectComponent;
}(AbstractVueFormComponent));

export { FormSelectComponent as default };
