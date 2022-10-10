/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var FilterComponent = /** @class */ (function (_super) {
    _tslib.__extends(FilterComponent, _super);
    function FilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FilterComponent.prototype, "readyToRender", {
        /**
         * If `false`, the slot is not rendered.
         */
        get: function () {
            return !!this.parent && this.parent.vm.ready;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    FilterComponent.prototype.mounted = function () {
        var parent = this.getParent('bt-table');
        if (!parent) {
            throw new usage_exception.UsageException("A \"<bt-table-filter>\" component must be placed inside a \"<bt-table>\".");
        }
        this.parent = parent;
        this.parent.addFilter(this.column, this);
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, required: true }),
        _tslib.__metadata("design:type", String)
    ], FilterComponent.prototype, "column", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], FilterComponent.prototype, "readyToRender", null);
    FilterComponent = _tslib.__decorate([
        component_decorator.Component('bt-table-filter')
    ], FilterComponent);
    return FilterComponent;
}(vue.Vue));

module.exports = FilterComponent;
