/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Vue } from '@banquette/vue-typescript/vue';

var FilterComponent = /** @class */ (function (_super) {
    __extends(FilterComponent, _super);
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
            throw new UsageException("A \"<bt-table-filter>\" component must be placed inside a \"<bt-table>\".");
        }
        this.parent = parent;
        this.parent.addFilter(this.column, this);
    };
    __decorate([
        Prop({ type: String, required: true }),
        __metadata("design:type", String)
    ], FilterComponent.prototype, "column", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], FilterComponent.prototype, "readyToRender", null);
    FilterComponent = __decorate([
        Component('bt-table-filter')
    ], FilterComponent);
    return FilterComponent;
}(Vue));

export { FilterComponent as default };
