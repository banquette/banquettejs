/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata, __param } from '../../../_virtual/_tslib.js';
import { Inject } from '@banquette/dependency-injection/decorator/inject.decorator';
import { Module } from '@banquette/dependency-injection/decorator/module.decorator';
import { Injector } from '@banquette/dependency-injection/injector';
import { EventDispatcherService } from '@banquette/event/event-dispatcher.service';
import { ensureInEnum } from '@banquette/utils-array/ensure-in-enum';
import { enumToArray } from '@banquette/utils-array/enum-to-array';
import { proxy } from '@banquette/utils-misc/proxy';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import { StackPosition, AlertEvents } from '../../constant.js';
import '../alert/alert.component.vue.js';
import AlertComponent from '../alert/alert.component.vue_vue_type_script_lang.vue.js';

var AlertsStackComponent = /** @class */ (function (_super) {
    __extends(AlertsStackComponent, _super);
    function AlertsStackComponent(eventDispatcher) {
        var _this = _super.call(this) || this;
        _this.eventDispatcher = eventDispatcher;
        _this.stack = Object.fromEntries(enumToArray(StackPosition).map(function (k) { return [k, []]; }));
        _this.eventDispatcher.subscribe(AlertEvents.Show, proxy(_this.onShow, _this));
        _this.eventDispatcher.subscribe(AlertEvents.HideAll, proxy(_this.onHideAll, _this));
        return _this;
    }
    AlertsStackComponent_1 = AlertsStackComponent;
    /**
     * Remove an alert by id.
     */
    AlertsStackComponent.prototype.remove = function (id) {
        for (var _i = 0, _a = getObjectKeys(this.stack); _i < _a.length; _i++) {
            var position = _a[_i];
            var visibleCount = 0;
            for (var i = 0; i < this.stack[position].length; ++i) {
                if (this.stack[position][i].id === id) {
                    this.stack[position][i].visible = false;
                }
                else if (this.stack[position][i].visible) {
                    ++visibleCount;
                }
            }
            if (!visibleCount) {
                this.stack[position] = [];
            }
        }
    };
    /**
     * Add an alert to the alerts stack.
     */
    AlertsStackComponent.prototype.onShow = function (event) {
        if ((!this.id && !event.options.stack) || this.id === event.options.stack) {
            var position = ensureInEnum(event.options.position, StackPosition, StackPosition.TopRight);
            this.stack[position].push(Object.assign(event.options, { id: ++AlertsStackComponent_1.MaxId, visible: true }));
            return true;
        }
        return false;
    };
    /**
     * Clear all alerts that have been added using the event dispatcher.
     */
    AlertsStackComponent.prototype.onHideAll = function () {
    };
    var AlertsStackComponent_1;
    /**
     * Id increment for the alerts.
     */
    AlertsStackComponent.MaxId = 0;
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], AlertsStackComponent.prototype, "id", void 0);
    __decorate([
        Prop({ type: Boolean, default: true }),
        __metadata("design:type", Boolean)
    ], AlertsStackComponent.prototype, "fixed", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Object)
    ], AlertsStackComponent.prototype, "stack", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], AlertsStackComponent.prototype, "remove", null);
    AlertsStackComponent = AlertsStackComponent_1 = __decorate([
        Module(),
        Component({
            name: 'bt-alerts-stack',
            components: [AlertComponent],
            factory: function () { return Injector.Get(AlertsStackComponent_1); }
        }),
        __param(0, Inject(EventDispatcherService)),
        __metadata("design:paramtypes", [EventDispatcherService])
    ], AlertsStackComponent);
    return AlertsStackComponent;
}(Vue));

export { AlertsStackComponent as default };
