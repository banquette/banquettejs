/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __decorate, __metadata } from '../../_virtual/_tslib.js';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';

var BaseInputComposable = /** @class */ (function () {
    function BaseInputComposable() {
        this.viewData = {};
    }
    BaseInputComposable.prototype.setViewData = function (viewData) {
        this.viewData = viewData;
        this.syncConfigurationProps();
    };
    /**
     * Copy applicable props into the view data.
     */
    BaseInputComposable.prototype.syncConfigurationProps = function () {
        this.viewData.label = this.label;
        this.viewData.placeholder = this.placeholder;
        this.viewData.help = this.help;
        this.viewData.floatingLabel = this.floatingLabel;
        this.viewData.floatingErrors = this.floatingErrors;
        this.viewData.floatingHelp = this.floatingHelp;
        this.viewData.required = this.required;
        this.viewData.showDebug = this.debug;
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], BaseInputComposable.prototype, "label", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], BaseInputComposable.prototype, "placeholder", void 0);
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], BaseInputComposable.prototype, "help", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "floatingLabel", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "floatingErrors", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "floatingHelp", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "required", void 0);
    __decorate([
        Prop({ type: Boolean, default: false }),
        __metadata("design:type", Boolean)
    ], BaseInputComposable.prototype, "debug", void 0);
    __decorate([
        Watch(['label', 'placeholder', 'help', 'floatingLabel', 'floatingErrors', 'floatingHelp', 'required', 'debug'], { immediate: ImmediateStrategy.BeforeMount }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseInputComposable.prototype, "syncConfigurationProps", null);
    BaseInputComposable = __decorate([
        Composable()
    ], BaseInputComposable);
    return BaseInputComposable;
}());

export { BaseInputComposable };
