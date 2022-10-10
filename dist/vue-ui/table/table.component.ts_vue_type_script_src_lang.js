/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { Injector } from '@banquette/dependency-injection/injector';
import { UsageException } from '@banquette/exception/usage.exception';
import { TableEvents } from '@banquette/ui/table/constant';
import { TableViewModel } from '@banquette/ui/table/table-view-model';
import { throttle } from '@banquette/utils-misc/throttle';
import { ltrim } from '@banquette/utils-string/format/ltrim';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isNullOrUndefined } from '@banquette/utils-type/is-null-or-undefined';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { IconMaterialReport } from '@banquette/vue-material-icons/report';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Import } from '@banquette/vue-typescript/decorator/import.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { anyToTsInst } from '@banquette/vue-typescript/utils/converters';
import { Vue } from '@banquette/vue-typescript/vue';
import '../form/form/form.component.vue.js';
import { RemoteComposable } from '../misc/remote/remote.composable.js';
import { TeleportDirective } from '../misc/teleport.directive.js';
import '../progress/progress-circular/progress-circular.component.vue.js';
import './column/column.component.vue.js';
import { FilteringComposable } from './composable/filtering.composable.js';
import { OrderingComposable } from './composable/ordering.composable.js';
import { PaginationComposable } from './composable/pagination.composable.js';
import './filter/filter.component.vue.js';
import './pagination/pagination.component.vue.js';
import ColumnComponent from './column/column.component.ts_vue_type_script_src_lang.js';
import PaginationComponent from './pagination/pagination.component.ts_vue_type_script_src_lang.js';
import FilterComponent from './filter/filter.component.ts_vue_type_script_src_lang.js';
import FormComponent from '../form/form/form.component.vue_vue_type_script_lang.vue.js';
import ProgressCircularComponent from '../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js';

var TableComponent = /** @class */ (function (_super) {
    __extends(TableComponent, _super);
    function TableComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A map between columns ids and FilterComponent instances.
         */
        _this.filtersMap = {};
        return _this;
    }
    Object.defineProperty(TableComponent.prototype, "hasActiveFilters", {
        /**
         * Returns `true` if at least one filter is found for the visible columns.
         */
        get: function () {
            if (isUndefined(this.vm) || !this.filterFormReady) {
                return false;
            }
            for (var _i = 0, _a = this.vm.visibleColumns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (!isUndefined(this.filtersMap[column.id])) {
                    return true;
                }
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "filterFormReady", {
        get: function () {
            return isObject(this.$refs) && !isUndefined(this.$refs.form);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle method.
     */
    TableComponent.prototype.beforeMount = function () {
        this.vm = Injector.Get(TableViewModel);
        this.pagination.module = this.vm.pagination;
        this.filtering.module = this.vm.filtering;
        this.order.module = this.vm.ordering;
        this.remote.module = this.vm.remote;
    };
    /**
     * Vue lifecycle method.
     */
    TableComponent.prototype.mounted = function () {
        var _this = this;
        // It's important to only fetch on mounted to let the columns register.
        // And we let a tick pass to let time for the watchers to trigger.
        this.$nextTick(function () {
            window.setTimeout(function () {
                _this.filteringForm = _this.watchFilteringForm();
                if (!Object.keys(_this.filters).length) {
                    _this.vm.fetch();
                }
            });
            _this.$forceUpdateComputed();
        });
        this.vm.localDispatcher.subscribe(TableEvents.UpdateView, throttle(function () {
            _this.$forceUpdate();
        }, 50));
    };
    /**
     * Register a FilterComponent instance so it can be rendered by the table.
     */
    TableComponent.prototype.addFilter = function (columnId, filter) {
        this.filtersMap[columnId] = filter;
    };
    /**
     * @inheritDoc
     */
    TableComponent.prototype.hasSlot = function (name) {
        return _super.prototype.hasSlot.call(this, name);
    };
    /**
     * Watch props.
     */
    TableComponent.prototype.syncConfigurationProps = function () {
        this.vm.id = this.id;
        this.vm.syncUrl = this.syncUrl;
        this.vm.saveState = this.saveState;
    };
    TableComponent.prototype.onItemsChange = function (newValue) {
        this.vm.items = newValue;
    };
    /**
     * Watch changes on the filters form components.
     */
    TableComponent.prototype.watchFilteringForm = function () {
        var _this = this;
        var formComponent = anyToTsInst(this.$refs.form);
        if (!formComponent) {
            throw new UsageException('Failed to bind filtering form.');
        }
        var form = formComponent.vm.form;
        var computeChangesAndFetch = function () {
            var map = {};
            for (var _i = 0, _a = Object.keys(_this.filters); _i < _a.length; _i++) {
                var key = _a[_i];
                map[key] = _this.filters[key];
            }
            form.getByPattern('**:control:valid').forEach(function (component) {
                var parts = ltrim(component.path, '/').split('/');
                var lastKey = parts.pop();
                if (!lastKey || !component.valid) {
                    return;
                }
                var container = map;
                for (var i = 0; i < parts.length; ++i) {
                    if (!isObject(container[parts[i]])) {
                        container[parts[i]] = {};
                    }
                    container = container[parts[i]];
                }
                if (!isNullOrUndefined(component.value) && component.value !== '') {
                    container[lastKey] = component.value;
                }
                else if (!isUndefined(container[lastKey])) {
                    delete container[lastKey];
                }
            });
            for (var _b = 0, _c = Object.keys(map); _b < _c.length; _b++) {
                var key = _c[_b];
                var aliases = ensureArray(_this.filtersNames[key]);
                if (aliases.length) {
                    var value = map[key];
                    delete map[key];
                    for (var _d = 0, aliases_1 = aliases; _d < aliases_1.length; _d++) {
                        var alias = aliases_1[_d];
                        map[alias] = value;
                    }
                }
            }
            _this.vm.filtering.setFilters(map);
        };
        form.setDefaultValue(this.filters);
        form.reset();
        form.onValueChanged(computeChangesAndFetch);
        computeChangesAndFetch();
        return form;
    };
    __decorate([
        Prop({ default: null, transform: function (input) { return ensureArray(input); } }),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "items", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "filtersNames", void 0);
    __decorate([
        Prop({ type: Object, default: {} }),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "filters", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "id", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], TableComponent.prototype, "syncUrl", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], TableComponent.prototype, "saveState", void 0);
    __decorate([
        Import(PaginationComposable),
        __metadata("design:type", PaginationComposable)
    ], TableComponent.prototype, "pagination", void 0);
    __decorate([
        Import(FilteringComposable, { remote: 'filteringRemote', filters: false }),
        __metadata("design:type", FilteringComposable)
    ], TableComponent.prototype, "filtering", void 0);
    __decorate([
        Import(OrderingComposable),
        __metadata("design:type", OrderingComposable)
    ], TableComponent.prototype, "order", void 0);
    __decorate([
        Import(RemoteComposable, false),
        __metadata("design:type", RemoteComposable)
    ], TableComponent.prototype, "remote", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "filtersMap", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TableComponent.prototype, "hasActiveFilters", null);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], TableComponent.prototype, "filterFormReady", null);
    __decorate([
        Expose(),
        __metadata("design:type", TableViewModel)
    ], TableComponent.prototype, "vm", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Boolean)
    ], TableComponent.prototype, "hasSlot", null);
    __decorate([
        Watch(['id', 'syncUrl', 'saveState'], { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TableComponent.prototype, "syncConfigurationProps", null);
    __decorate([
        Watch('items', { immediate: ImmediateStrategy.Mounted }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Array]),
        __metadata("design:returntype", void 0)
    ], TableComponent.prototype, "onItemsChange", null);
    TableComponent = __decorate([
        Component({
            name: 'bt-table',
            components: [ColumnComponent, PaginationComponent, FilterComponent, TeleportDirective, FormComponent, IconMaterialReport, ProgressCircularComponent]
        })
    ], TableComponent);
    return TableComponent;
}(Vue));

export { TableComponent as default };
