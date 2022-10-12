/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../_virtual/_tslib.js';
import { isServer } from '@banquette/utils-misc/is-server';
import { Composable } from '@banquette/vue-typescript/decorator/composable.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch } from '@banquette/vue-typescript/decorator/watch.decorator';
import { Vue } from '@banquette/vue-typescript/vue';

var AbstractProgressComponent = /** @class */ (function (_super) {
    __extends(AbstractProgressComponent, _super);
    function AbstractProgressComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Progress text (animated).
         */
        _this.animatedProgressText = 0;
        _this.progressTimeout = null;
        return _this;
    }
    AbstractProgressComponent.prototype.isIndeterminate = function () {
        return this.progress === null;
    };
    AbstractProgressComponent.prototype.progressPercent = function () {
        if (this.progress === null) {
            return null;
        }
        return (this.progress - this.progressMin) * 100 / (this.progressMax - this.progressMin);
    };
    AbstractProgressComponent.prototype.onProgressChange = function (newValue) {
        var _this = this;
        if (newValue === null || isServer()) {
            this.animatedProgressText = null;
            return;
        }
        if (this.progressTimeout !== null) {
            window.cancelAnimationFrame(this.progressTimeout);
        }
        var t = 0;
        var duration = 300;
        var start = this.animatedProgressText || 0;
        var startTime = null;
        var next = function () {
            _this.progressTimeout = window.requestAnimationFrame(function (timestamp) {
                var progressPercent = _this.progressPercent();
                if (progressPercent === null) {
                    return;
                }
                if (!startTime) {
                    startTime = timestamp;
                }
                t = timestamp - startTime;
                _this.animatedProgressText = Math.round((((progressPercent - start) * (t * (1 / duration)))) + start);
                if (t < duration) {
                    next();
                }
                else {
                    _this.animatedProgressText = Math.round(progressPercent);
                }
            });
        };
        next();
    };
    __decorate([
        Prop({
            type: [Number, String],
            default: null,
            transform: function (v) {
                if (v === null) {
                    return null;
                }
                v = parseFloat(v);
                return Math.max(this.progressMin, Math.min(this.progressMax, v));
            }
        }),
        __metadata("design:type", Object)
    ], AbstractProgressComponent.prototype, "progress", void 0);
    __decorate([
        Prop({ type: [Number, String], default: 0, transform: function (v) { return parseFloat(v); } }),
        __metadata("design:type", Number)
    ], AbstractProgressComponent.prototype, "progressMin", void 0);
    __decorate([
        Prop({ type: [Number, String], default: 100, transform: function (v) { return parseFloat(v); } }),
        __metadata("design:type", Number)
    ], AbstractProgressComponent.prototype, "progressMax", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], AbstractProgressComponent.prototype, "showProgressText", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], AbstractProgressComponent.prototype, "animatedProgressText", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], AbstractProgressComponent.prototype, "isIndeterminate", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], AbstractProgressComponent.prototype, "progressPercent", null);
    __decorate([
        Watch('progress'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AbstractProgressComponent.prototype, "onProgressChange", null);
    AbstractProgressComponent = __decorate([
        Composable()
    ], AbstractProgressComponent);
    return AbstractProgressComponent;
}(Vue));

export { AbstractProgressComponent };
