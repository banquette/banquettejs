/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { isNumber } from '@banquette/utils-type/is-number';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Ref } from '@banquette/vue-typescript/decorator/ref.decorator';
import { Vue } from '@banquette/vue-typescript/vue';

var ColumnComponent = /** @class */ (function (_super) {
    __extends(ColumnComponent, _super);
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
            throw new UsageException("A \"<bt-table-column>\" component must be placed inside a \"<bt-table>\".");
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
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "id", void 0);
    __decorate([
        Prop({ type: String, default: '' }),
        __metadata("design:type", String)
    ], ColumnComponent.prototype, "title", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "orderingName", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "visible", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], ColumnComponent.prototype, "hideable", void 0);
    __decorate([
        Prop({ type: [String, Number], default: null, transform: function (v) { return isNumber(v) ? (v + 'px') : v; } }),
        __metadata("design:type", String)
    ], ColumnComponent.prototype, "width", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ColumnComponent.prototype, "readyToRender", null);
    __decorate([
        Ref(),
        __metadata("design:type", Object)
    ], ColumnComponent.prototype, "parent", void 0);
    ColumnComponent = __decorate([
        Component('bt-table-column')
    ], ColumnComponent);
    return ColumnComponent;
}(Vue));

export { ColumnComponent as default };
