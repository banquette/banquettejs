/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { BasicState } from '@banquette/form/constant';
import { FormObject } from '@banquette/form/form-object';
import { FormFactory } from '@banquette/form/form.factory';
import { TableEvents } from '@banquette/ui/table/constant';
import { PaginationStrategy } from '@banquette/ui/table/pagination/constant';
import { TableViewModel } from '@banquette/ui/table/table-view-model';
import { proxy } from '@banquette/utils-misc/proxy';
import { ensureInteger } from '@banquette/utils-type/ensure-integer';
import { IconMaterialKeyboardBackspace } from '@banquette/vue-material-icons/keyboard-backspace';
import { IconMaterialChevronLeft } from '@banquette/vue-material-icons/chevron-left';
import { IconMaterialChevronRight } from '@banquette/vue-material-icons/chevron-right';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import '../../form/select/component/select.component.vue.js';
import '../../form/select/component/choice/choice.component.vue.js';
import '../../form/select/component/group/group.component.vue.js';
import '../../form/text/text.component.vue.js';
import FormTextComponent from '../../form/text/text.component.vue_vue_type_script_lang.vue.js';
import FormSelectComponent from '../../form/select/component/select.component.vue_vue_type_script_lang.vue.js';

var PaginationComponent = /** @class */ (function (_super) {
    __extends(PaginationComponent, _super);
    function PaginationComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.form = FormFactory.Create({
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
            return this.vm.pagination.strategy === PaginationStrategy.Offset;
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
            if (event.state === BasicState.Focused && !event.newValue && event.source.value) {
                _this.vm.pagination.goTo(ensureInteger(event.source.value));
            }
        }));
        this.unsubscribeCallbacks.push(control.onBeforeValueChange(function (event) {
            event.newValue = String(event.newValue).replace(/\s*/, '');
            if (event.newValue) {
                if (!String(event.newValue).match(/^[0-9]+$/)) {
                    event.refuse();
                }
                else {
                    event.newValue = Math.max(1, ensureInteger(event.newValue));
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
            _this.vm.pagination.itemsPerPage = ensureInteger(event.newValue);
        }));
    };
    /**
     * Observe external updates and act accordingly.
     */
    PaginationComponent.prototype.observeUpdates = function () {
        var _this = this;
        this.unsubscribeCallbacks.push(this.vm.localDispatcher.subscribe(TableEvents.UpdateView, function () {
            _this.$forceUpdate();
        }));
        this.unsubscribeCallbacks.push(this.vm.pagination.onChange(proxy(this.syncForm, this)));
        this.unsubscribeCallbacks.push(this.vm.pagination.onInvalidate(proxy(this.syncForm, this)));
    };
    /**
     * Synchronize the value of the form with the current state of the pagination.
     */
    PaginationComponent.prototype.syncForm = function () {
        this.form.get('page').setValue(this.vm.pagination.page);
        this.form.get('itemsPerPage').setValue(this.vm.pagination.itemsPerPage);
    };
    __decorate([
        Prop({ type: Object, required: true }),
        __metadata("design:type", TableViewModel)
    ], PaginationComponent.prototype, "vm", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], PaginationComponent.prototype, "isOffset", null);
    __decorate([
        Expose(),
        __metadata("design:type", FormObject)
    ], PaginationComponent.prototype, "form", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof(window) !== 'undefined' ? KeyboardEvent : Object]),
        __metadata("design:returntype", void 0)
    ], PaginationComponent.prototype, "onPageTextControlKeyDown", null);
    PaginationComponent = __decorate([
        Component({
            name: 'bt-table-pagination',
            components: [FormTextComponent, FormSelectComponent, IconMaterialChevronRight, IconMaterialChevronLeft, IconMaterialKeyboardBackspace],
        })
    ], PaginationComponent);
    return PaginationComponent;
}(Vue));

export { PaginationComponent as default };
