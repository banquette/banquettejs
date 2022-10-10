/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../_virtual/_tslib.js');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var constant = require('@banquette/ui/_cjs/dev/table/constant');
var tableViewModel = require('@banquette/ui/_cjs/dev/table/table-view-model');
var throttle = require('@banquette/utils-misc/_cjs/dev/throttle');
var ltrim = require('@banquette/utils-string/_cjs/dev/format/ltrim');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var report = require('@banquette/vue-material-icons/_cjs/dev/report');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var import_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/import.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var converters = require('@banquette/vue-typescript/_cjs/dev/utils/converters');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../form/form/form.component.vue.js');
var remote_composable = require('../misc/remote/remote.composable.js');
var teleport_directive = require('../misc/teleport.directive.js');
require('../progress/progress-circular/progress-circular.component.vue.js');
require('./column/column.component.vue.js');
var filtering_composable = require('./composable/filtering.composable.js');
var ordering_composable = require('./composable/ordering.composable.js');
var pagination_composable = require('./composable/pagination.composable.js');
require('./filter/filter.component.vue.js');
require('./pagination/pagination.component.vue.js');
var column_component_ts_vue_type_script_src_lang = require('./column/column.component.ts_vue_type_script_src_lang.js');
var pagination_component_ts_vue_type_script_src_lang = require('./pagination/pagination.component.ts_vue_type_script_src_lang.js');
var filter_component_ts_vue_type_script_src_lang = require('./filter/filter.component.ts_vue_type_script_src_lang.js');
var form_component_vue_vue_type_script_lang = require('../form/form/form.component.vue_vue_type_script_lang.vue.js');
var progressCircular_component_vue_vue_type_script_lang = require('../progress/progress-circular/progress-circular.component.vue_vue_type_script_lang.vue.js');

var TableComponent = /** @class */ (function (_super) {
    _tslib.__extends(TableComponent, _super);
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
            if (isUndefined.isUndefined(this.vm) || !this.filterFormReady) {
                return false;
            }
            for (var _i = 0, _a = this.vm.visibleColumns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (!isUndefined.isUndefined(this.filtersMap[column.id])) {
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
            return isObject.isObject(this.$refs) && !isUndefined.isUndefined(this.$refs.form);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Vue lifecycle method.
     */
    TableComponent.prototype.beforeMount = function () {
        this.vm = injector.Injector.Get(tableViewModel.TableViewModel);
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
        this.vm.localDispatcher.subscribe(constant.TableEvents.UpdateView, throttle.throttle(function () {
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
        var formComponent = converters.anyToTsInst(this.$refs.form);
        if (!formComponent) {
            throw new usage_exception.UsageException('Failed to bind filtering form.');
        }
        var form = formComponent.vm.form;
        var computeChangesAndFetch = function () {
            var map = {};
            for (var _i = 0, _a = Object.keys(_this.filters); _i < _a.length; _i++) {
                var key = _a[_i];
                map[key] = _this.filters[key];
            }
            form.getByPattern('**:control:valid').forEach(function (component) {
                var parts = ltrim.ltrim(component.path, '/').split('/');
                var lastKey = parts.pop();
                if (!lastKey || !component.valid) {
                    return;
                }
                var container = map;
                for (var i = 0; i < parts.length; ++i) {
                    if (!isObject.isObject(container[parts[i]])) {
                        container[parts[i]] = {};
                    }
                    container = container[parts[i]];
                }
                if (!isNullOrUndefined.isNullOrUndefined(component.value) && component.value !== '') {
                    container[lastKey] = component.value;
                }
                else if (!isUndefined.isUndefined(container[lastKey])) {
                    delete container[lastKey];
                }
            });
            for (var _b = 0, _c = Object.keys(map); _b < _c.length; _b++) {
                var key = _c[_b];
                var aliases = ensureArray.ensureArray(_this.filtersNames[key]);
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
    _tslib.__decorate([
        prop_decorator.Prop({ default: null, transform: function (input) { return ensureArray.ensureArray(input); } }),
        _tslib.__metadata("design:type", Object)
    ], TableComponent.prototype, "items", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], TableComponent.prototype, "filtersNames", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: {} }),
        _tslib.__metadata("design:type", Object)
    ], TableComponent.prototype, "filters", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], TableComponent.prototype, "id", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], TableComponent.prototype, "syncUrl", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], TableComponent.prototype, "saveState", void 0);
    _tslib.__decorate([
        import_decorator.Import(pagination_composable.PaginationComposable),
        _tslib.__metadata("design:type", pagination_composable.PaginationComposable)
    ], TableComponent.prototype, "pagination", void 0);
    _tslib.__decorate([
        import_decorator.Import(filtering_composable.FilteringComposable, { remote: 'filteringRemote', filters: false }),
        _tslib.__metadata("design:type", filtering_composable.FilteringComposable)
    ], TableComponent.prototype, "filtering", void 0);
    _tslib.__decorate([
        import_decorator.Import(ordering_composable.OrderingComposable),
        _tslib.__metadata("design:type", ordering_composable.OrderingComposable)
    ], TableComponent.prototype, "order", void 0);
    _tslib.__decorate([
        import_decorator.Import(remote_composable.RemoteComposable, false),
        _tslib.__metadata("design:type", remote_composable.RemoteComposable)
    ], TableComponent.prototype, "remote", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], TableComponent.prototype, "filtersMap", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], TableComponent.prototype, "hasActiveFilters", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], TableComponent.prototype, "filterFormReady", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", tableViewModel.TableViewModel)
    ], TableComponent.prototype, "vm", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [String]),
        _tslib.__metadata("design:returntype", Boolean)
    ], TableComponent.prototype, "hasSlot", null);
    _tslib.__decorate([
        watch_decorator.Watch(['id', 'syncUrl', 'saveState'], { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], TableComponent.prototype, "syncConfigurationProps", null);
    _tslib.__decorate([
        watch_decorator.Watch('items', { immediate: watch_decorator.ImmediateStrategy.Mounted }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Array]),
        _tslib.__metadata("design:returntype", void 0)
    ], TableComponent.prototype, "onItemsChange", null);
    TableComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-table',
            components: [column_component_ts_vue_type_script_src_lang, pagination_component_ts_vue_type_script_src_lang, filter_component_ts_vue_type_script_src_lang, teleport_directive.TeleportDirective, form_component_vue_vue_type_script_lang, report.IconMaterialReport, progressCircular_component_vue_vue_type_script_lang]
        })
    ], TableComponent);
    return TableComponent;
}(vue.Vue));

module.exports = TableComponent;
