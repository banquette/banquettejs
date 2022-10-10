/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var isNumber = require('@banquette/utils-type/_cjs/dev/is-number');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var ref_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/ref.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var ColumnComponent = /** @class */ (function (_super) {
    _tslib.__extends(ColumnComponent, _super);
    function ColumnComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ColumnComponent.prototype, "readyToRender", {
        /**
         * If `false`, the slot is not rendered.
         * This is used in the initialization phase of the list, when columns are being registered.
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
    ColumnComponent.prototype.mounted = function () {
        var parent = this.getParent('bt-table');
        if (!parent) {
            throw new usage_exception.UsageException("A \"<bt-table-column>\" component must be placed inside a \"<bt-table>\".");
        }
        this.parent = parent;
        if (this.parent.vm.initializing) {
            this.parent.vm.addColumn({
                id: this.id,
                title: this.title,
                orderingName: this.orderingName,
                visible: this.visible,
                hideable: this.hideable,
                width: this.width
            });
        }
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "id", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: '' }),
        _tslib.__metadata("design:type", String)
    ], ColumnComponent.prototype, "title", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "orderingName", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "visible", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "hideable", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Number], default: null, transform: function (v) { return isNumber.isNumber(v) ? (v + 'px') : v; } }),
        _tslib.__metadata("design:type", String)
    ], ColumnComponent.prototype, "width", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Boolean),
        _tslib.__metadata("design:paramtypes", [])
    ], ColumnComponent.prototype, "readyToRender", null);
    _tslib.__decorate([
        ref_decorator.Ref(),
        _tslib.__metadata("design:type", Object)
    ], ColumnComponent.prototype, "parent", void 0);
    ColumnComponent = _tslib.__decorate([
        component_decorator.Component('bt-table-column')
    ], ColumnComponent);
    return ColumnComponent;
}(vue.Vue));

module.exports = ColumnComponent;
