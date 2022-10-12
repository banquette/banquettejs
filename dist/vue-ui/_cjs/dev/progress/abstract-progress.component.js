/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var isServer = require('@banquette/utils-misc/_cjs/dev/is-server');
var composable_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/composable.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var AbstractProgressComponent = /** @class */ (function (_super) {
    _tslib.__extends(AbstractProgressComponent, _super);
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
        if (newValue === null || isServer.isServer()) {
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
    _tslib.__decorate([
        prop_decorator.Prop({
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
        _tslib.__metadata("design:type", Object)
    ], AbstractProgressComponent.prototype, "progress", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Number, String], default: 0, transform: function (v) { return parseFloat(v); } }),
        _tslib.__metadata("design:type", Number)
    ], AbstractProgressComponent.prototype, "progressMin", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [Number, String], default: 100, transform: function (v) { return parseFloat(v); } }),
        _tslib.__metadata("design:type", Number)
    ], AbstractProgressComponent.prototype, "progressMax", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], AbstractProgressComponent.prototype, "showProgressText", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], AbstractProgressComponent.prototype, "animatedProgressText", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", Boolean)
    ], AbstractProgressComponent.prototype, "isIndeterminate", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", Object)
    ], AbstractProgressComponent.prototype, "progressPercent", null);
    _tslib.__decorate([
        watch_decorator.Watch('progress'),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Number]),
        _tslib.__metadata("design:returntype", void 0)
    ], AbstractProgressComponent.prototype, "onProgressChange", null);
    AbstractProgressComponent = _tslib.__decorate([
        composable_decorator.Composable()
    ], AbstractProgressComponent);
    return AbstractProgressComponent;
}(vue.Vue));

exports.AbstractProgressComponent = AbstractProgressComponent;
