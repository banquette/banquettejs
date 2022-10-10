/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var constant$1 = require('@banquette/form/_cjs/dev/constant');
var formObject = require('@banquette/form/_cjs/dev/form-object');
var form_factory = require('@banquette/form/_cjs/dev/form.factory');
var constant$2 = require('@banquette/ui/_cjs/dev/table/constant');
var constant = require('@banquette/ui/_cjs/dev/table/pagination/constant');
var tableViewModel = require('@banquette/ui/_cjs/dev/table/table-view-model');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var ensureInteger = require('@banquette/utils-type/_cjs/dev/ensure-integer');
var keyboardBackspace = require('@banquette/vue-material-icons/_cjs/dev/keyboard-backspace');
var chevronLeft = require('@banquette/vue-material-icons/_cjs/dev/chevron-left');
var chevronRight = require('@banquette/vue-material-icons/_cjs/dev/chevron-right');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../../form/select/component/select.component.vue.js');
require('../../form/select/component/choice/choice.component.vue.js');
require('../../form/select/component/group/group.component.vue.js');
require('../../form/text/text.component.vue.js');
var text_component_vue_vue_type_script_lang = require('../../form/text/text.component.vue_vue_type_script_lang.vue.js');
var select_component_vue_vue_type_script_lang = require('../../form/select/component/select.component.vue_vue_type_script_lang.vue.js');

var PaginationComponent = /** @class */ (function (_super) {
    _tslib.__extends(PaginationComponent, _super);
    function PaginationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.form = form_factory.FormFactory.Create({
            page: 1,
            itemsPerPage: 20
        });
        /**
         * Events' unsubscribe callbacks.
         */
        _this.unsubscribeCallbacks = [];
        return _this;
    }
    Object.defineProperty(PaginationComponent.prototype, "isOffset", {
        get: function () {
            return this.vm.pagination.strategy === constant.PaginationStrategy.Offset;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle hook.
     */
    PaginationComponent.prototype.mounted = function () {
        this.bindPageControl();
        this.bindItemsPerPageControl();
        this.observeUpdates();
    };
    /**
     * Vue lifecycle hook.
     */
    PaginationComponent.prototype.unmounted = function () {
        for (var _i = 0, _a = this.unsubscribeCallbacks; _i < _a.length; _i++) {
            var cb = _a[_i];
            cb();
        }
        this.unsubscribeCallbacks = [];
    };
    /**
     * Called when the user press a key with the page input text focused.
     */
    PaginationComponent.prototype.onPageTextControlKeyDown = function (event) {
        if (event.key === 'Enter' && event.target instanceof HTMLElement) {
            event.target.blur();
        }
    };
    /**
     * Set the default value and observe the control that defines the current page number.
     */
    PaginationComponent.prototype.bindPageControl = function () {
        var _this = this;
        var control = this.form.get('page');
        control.setValue(this.vm.pagination.page);
        this.unsubscribeCallbacks.push(control.onStateChanged(function (event) {
            if (event.state === constant$1.BasicState.Focused && !event.newValue && event.source.value) {
                _this.vm.pagination.goTo(ensureInteger.ensureInteger(event.source.value));
            }
        }));
        this.unsubscribeCallbacks.push(control.onBeforeValueChange(function (event) {
            event.newValue = String(event.newValue).replace(/\s*/, '');
            if (event.newValue) {
                if (!String(event.newValue).match(/^[0-9]+$/)) {
                    event.refuse();
                }
                else {
                    event.newValue = Math.max(1, ensureInteger.ensureInteger(event.newValue));
                    if (_this.vm.pagination.currentState) {
                        event.newValue = Math.min(event.newValue, _this.vm.pagination.currentState.totalPagesCount);
                    }
                    if (event.newValue === event.source.value) {
                        event.refuse();
                    }
                }
            }
        }));
    };
    /**
     * Set the default value and observe the control that defines the number of items per page.
     */
    PaginationComponent.prototype.bindItemsPerPageControl = function () {
        var _this = this;
        var control = this.form.get('itemsPerPage');
        control.setValue(this.vm.pagination.itemsPerPage);
        this.unsubscribeCallbacks.push(control.onValueChanged(function (event) {
            _this.vm.pagination.itemsPerPage = ensureInteger.ensureInteger(event.newValue);
        }));
    };
    /**
     * Observe external updates and act accordingly.
     */
    PaginationComponent.prototype.observeUpdates = function () {
        var _this = this;
        this.unsubscribeCallbacks.push(this.vm.localDispatcher.subscribe(constant$2.TableEvents.UpdateView, function () {
            _this.$forceUpdate();
        }));
        this.unsubscribeCallbacks.push(this.vm.pagination.onChange(proxy.proxy(this.syncForm, this)));
        this.unsubscribeCallbacks.push(this.vm.pagination.onInvalidate(proxy.proxy(this.syncForm, this)));
    };
    /**
     * Synchronize the value of the form with the current state of the pagination.
     */
    PaginationComponent.prototype.syncForm = function () {
        this.form.get('page').setValue(this.vm.pagination.page);
        this.form.get('itemsPerPage').setValue(this.vm.pagination.itemsPerPage);
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, required: true }),
        _tslib.__metadata("design:type", tableViewModel.TableViewModel)
    ], PaginationComponent.prototype, "vm", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], PaginationComponent.prototype, "isOffset", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", formObject.FormObject)
    ], PaginationComponent.prototype, "form", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], PaginationComponent.prototype, "onPageTextControlKeyDown", null);
    PaginationComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-table-pagination',
            components: [text_component_vue_vue_type_script_lang, select_component_vue_vue_type_script_lang, chevronRight.IconMaterialChevronRight, chevronLeft.IconMaterialChevronLeft, keyboardBackspace.IconMaterialKeyboardBackspace],
        })
    ], PaginationComponent);
    return PaginationComponent;
}(vue.Vue));

module.exports = PaginationComponent;
