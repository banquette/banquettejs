/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../_virtual/_tslib.js');
var constants = require('@banquette/http/_cjs/dev/constants');
var constant$1 = require('@banquette/ui/_cjs/dev/form/select/constant');
var selectedChoice = require('@banquette/ui/_cjs/dev/form/select/selected-choice');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var debounce = require('@banquette/utils-misc/_cjs/dev/debounce');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var closeCircle = require('@banquette/vue-remix-icons/_cjs/dev/close-circle');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var templateRef_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/template-ref.decorator');
var themeable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/themeable.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var bindTheme_directive = require('@banquette/vue-typescript/_cjs/dev/theme/bind-theme.directive');
var core = require('@vueuse/core');
require('../../../dropdown/dropdown.component.vue.js');
require('../../../dropdown/dropdown-divider.component.vue.js');
require('../../../dropdown/dropdown-item.component.vue.js');
require('../../../misc/call/call.component.vue.js');
require('../../../misc/conditional-wrapper/conditional-wrapper.component.vue.js');
require('../../../misc/remote/remote.component.vue.js');
require('../../../misc/teleport/teleport.component.vue.js');
var clickOutside_directive = require('../../../misc/click-outside.directive.js');
require('../../../misc/collapsable.directive.js');
require('../../../misc/stick-to.directive.js');
require('../../../misc/teleport.directive.js');
require('@banquette/api/_cjs/dev/api.service');
require('@banquette/dependency-injection/_cjs/dev/injector');
require('@banquette/utils-misc/_cjs/dev/proxy');
require('@banquette/vue-typescript/_cjs/dev/vue-builder');
require('../../../misc/client-only.component.vue.js');
require('../../../progress/progress-circular/progress-circular.component.vue.js');
require('../../../tag/tag.component.vue.js');
var abstractVueForm_component = require('../../abstract-vue-form.component.js');
require('../../base-input/base-input.component.vue.js');
var baseInput_composable = require('../../base-input/base-input.composable.js');
var constant$2 = require('../../constant.js');
var constant = require('../constant.js');
var choiceSlotWrapper_component = require('./choice-slot-wrapper.component.js');
require('./choice/choice.component.vue.js');
var i18nDefaults = require('./i18n-defaults.js');
var select_viewModel = require('./select.view-model.js');
var themeConfiguration = require('./theme-configuration.js');
var wrappedSelectedChoice = require('./wrapped-selected-choice.js');
var choice_component_vue_vue_type_script_lang = require('./choice/choice.component.vue_vue_type_script_lang.vue.js');
var tag_component_vue_vue_type_script_lang = require('../../../tag/tag.component.vue_vue_type_script_lang.vue.js');
var dropdown_component_vue_vue_type_script_lang = require('../../../dropdown/dropdown.component.vue_vue_type_script_lang.vue.js');
var baseInput_component_vue_vue_type_script_lang = require('../../base-input/base-input.component.vue_vue_type_script_lang.vue.js');
var progressCircular_component_vue_vue_type_script_lang = require('../../../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js');

var FormSelectComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormSelectComponent, _super);
    function FormSelectComponent() {
        var _this = _super.call(this) || this;
        _this.dropdownWidth = 0;
        _this.inputWrapperResizeUnsubscribe = null;
        _this.lastBlurTime = 0;
        _this.lastKeyStrokeTime = 0;
        _this.onInputChange = debounce.debounce(function () {
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
        _this.eventPipeline.subscribe(constant$2.ViewModelEvents.Configure, function () {
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
        if (!isUndefined.isUndefined(this.vm)) {
            this.vm.hideChoices();
        }
    };
    /**
     * @inheritDoc
     */
    FormSelectComponent.prototype.setupViewModel = function () {
        var vm = new select_viewModel.SelectViewModel(this.proxy, this.baseComposable);
        vm.choicesOriginOrdering = [
            constant.BeforeSlotOrigin,
            constant$1.ChoiceOrigin.User,
            constant.PropOrigin,
            constant$1.ChoiceOrigin.Default,
            constant$1.ChoiceOrigin.Remote,
            constant.AfterSlotOrigin
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
        this.vm.setChoices(this.choices || [], constant.PropOrigin);
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
        this.v.isInputReadonly = this.vm.searchType === constant$1.SearchType.None && !this.allowCreation;
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
            for (var _i = 0, _a = getObjectKeys.getObjectKeys(this.v.selected); _i < _a.length; _i++) {
                var id = _a[_i];
                this.v.selected[id].visible = true;
            }
            this.v.selectedPopoverVisible = false;
            this.v.selectedInPopover = [];
        }
        if (this.v.multiple) {
            if (!isArray.isArray(this.v.control.value)) {
                this.v.control.value = !isUndefined.isUndefined(this.v.control.value) ? [this.v.control.value] : [];
            }
            this.onSelectionChange();
        }
        else if (isArray.isArray(this.v.control.value)) {
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
            var viewValue = this.v.control.value instanceof selectedChoice.SelectedChoice ? this.v.control.value.label : '';
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
        if (isArray.isArray(this.v.control.value)) {
            for (var _i = 0, _a = this.v.control.value; _i < _a.length; _i++) {
                var item = _a[_i];
                if (isUndefined.isUndefined(this.v.selected[item.id])) {
                    selected[item.id] = new wrappedSelectedChoice.WrappedSelectedChoice(item, !this.v.needsSelectionPopover);
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
        if (!this.v.needsSelectionPopover || !this.tagSelectionWrapperEl || !isArray.isArray(this.v.control.value)) {
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
            if (isUndefined.isUndefined(this.v.selected[childId])) {
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
            unsubscribe = core.useResizeObserver(this.dropdownTarget, cb).stop;
        }
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Array, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choices", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'label' }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesLabel", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'id' }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesIdentifier", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesValue", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'disabled' }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesDisabled", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Function], default: 'group' }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "choicesGroup", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "multiple", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "lockHeight", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "allowCreation", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: false }),
        _tslib.__metadata("design:type", Boolean)
    ], FormSelectComponent.prototype, "clearable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Boolean], default: 'auto' }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "closeOnSelection", void 0);
    _tslib.__decorate([
        import_decorator.Import(baseInput_composable.BaseInputComposable, false),
        _tslib.__metadata("design:type", baseInput_composable.BaseInputComposable)
    ], FormSelectComponent.prototype, "baseComposable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "model", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteUrl', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "url", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteEndpoint', type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "endpoint", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteMethod', type: String, default: constants.HttpMethod.GET, transform: function (value) { return ensureInEnum.ensureInEnum(value, constants.HttpMethod, constants.HttpMethod.GET); } }),
        _tslib.__metadata("design:type", String)
    ], FormSelectComponent.prototype, "method", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteUrlParams', type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "urlParams", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'remoteHeaders', type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "headers", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'searchType', type: String, transform: function (value) { return ensureInEnum.ensureInEnum(value, constant$1.SearchType, constant$1.SearchType.None); } }),
        _tslib.__metadata("design:type", String)
    ], FormSelectComponent.prototype, "searchType", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'searchRemoteParamName', type: [String, Array], default: 'search' }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "searchRemoteParamName", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'searchMinLength', type: Number, default: 0 }),
        _tslib.__metadata("design:type", Number)
    ], FormSelectComponent.prototype, "searchMinLength", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'dropdownTeleport', type: [Object, String], default: null }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "dropdownTeleport", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'dropdownZIndex', type: [Number, String], default: undefined, transform: function (v) { return !isUndefined.isUndefined(v) ? parseInt(v, 10) : undefined; } }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "dropdownZIndex", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: i18nDefaults.I18nDefaults }),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "i18n", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "v", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Number)
    ], FormSelectComponent.prototype, "dropdownWidth", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], FormSelectComponent.prototype, "dropdownTarget", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('input'),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? HTMLElement : Object)
    ], FormSelectComponent.prototype, "inputEl", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('inputWrapper'),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "inputWrapperEl", void 0);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('tagSelectionWrapper'),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "tagSelectionWrapperEl", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onKeyDown", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "selectChoice", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "deselectChoice", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "deselectAll", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [selectedChoice.SelectedChoice]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "removeItem", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "toggleSelectedPopover", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "hideSelectedPopover", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onInputWrapperClick", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onInputFocus", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onInputBlur", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], FormSelectComponent.prototype, "onInputChange", void 0);
    _tslib.__decorate([
        watch_decorator.Watch([
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
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onBasePropsChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('choices', { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "syncChoices", null);
    _tslib.__decorate([
        watch_decorator.Watch('v.control.value'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onSelectionChange", null);
    _tslib.__decorate([
        watch_decorator.Watch('v.choicesVisible', { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Boolean]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "onChoiceVisibilityChange", null);
    _tslib.__decorate([
        watch_decorator.Watch(['searchType', 'searchRemoteParamName', 'searchMinLength', 'allowCreation', 'multiple'], { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "updateSearchConfiguration", null);
    _tslib.__decorate([
        watch_decorator.Watch(['model', 'remoteUrl', 'remoteEndpoint', 'remoteMethod', 'remoteUrlParams', 'remoteHeaders'], { immediate: watch_decorator.ImmediateStrategy.BeforeMount }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "syncRemoteProps", null);
    _tslib.__decorate([
        watch_decorator.Watch(['multiple', 'lockHeight'], { immediate: false }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormSelectComponent.prototype, "updateSelectionVisibilityTracking", null);
    FormSelectComponent = _tslib.__decorate([
        themeable_decorator.Themeable(themeConfiguration.ThemeConfiguration),
        component_decorator.Component({
            name: 'bt-form-select',
            components: [baseInput_component_vue_vue_type_script_lang, choice_component_vue_vue_type_script_lang, choiceSlotWrapper_component, tag_component_vue_vue_type_script_lang, dropdown_component_vue_vue_type_script_lang, progressCircular_component_vue_vue_type_script_lang, closeCircle.IconRemixCloseCircle],
            directives: [clickOutside_directive.ClickOutsideDirective, bindTheme_directive.BindThemeDirective],
            emits: ['focus', 'blur', 'change']
        }),
        _tslib.__metadata("design:paramtypes", [])
    ], FormSelectComponent);
    return FormSelectComponent;
}(abstractVueForm_component.AbstractVueFormComponent));

module.exports = FormSelectComponent;
