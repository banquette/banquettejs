/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../_virtual/_tslib.js');
var inject_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/inject.decorator');
var module_decorator = require('@banquette/dependency-injection/_cjs/dev/decorator/module.decorator');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var eventDispatcher_service = require('@banquette/event/_cjs/dev/event-dispatcher.service');
var ensureInEnum = require('@banquette/utils-array/_cjs/dev/ensure-in-enum');
var enumToArray = require('@banquette/utils-array/_cjs/dev/enum-to-array');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var constant = require('../../constant.js');
require('../alert/alert.component.vue.js');
var alert_component_vue_vue_type_script_lang = require('../alert/alert.component.vue_vue_type_script_lang.vue.js');

var AlertsStackComponent = /** @class */ (function (_super) {
    _tslib.__extends(AlertsStackComponent, _super);
    function AlertsStackComponent(eventDispatcher) {
        var _this = _super.call(this) || this;
        _this.eventDispatcher = eventDispatcher;
        _this.stack = Object.fromEntries(enumToArray.enumToArray(constant.StackPosition).map(function (k) { return [k, []]; }));
        _this.eventDispatcher.subscribe(constant.AlertEvents.Show, proxy.proxy(_this.onShow, _this));
        _this.eventDispatcher.subscribe(constant.AlertEvents.HideAll, proxy.proxy(_this.onHideAll, _this));
        return _this;
    }
    AlertsStackComponent_1 = AlertsStackComponent;
    /**
     * Remove an alert by id.
     */
    AlertsStackComponent.prototype.remove = function (id) {
        for (var _i = 0, _a = getObjectKeys.getObjectKeys(this.stack); _i < _a.length; _i++) {
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
            var position = ensureInEnum.ensureInEnum(event.options.position, constant.StackPosition, constant.StackPosition.TopRight);
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], AlertsStackComponent.prototype, "id", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: Boolean, default: true }),
        _tslib.__metadata("design:type", Boolean)
    ], AlertsStackComponent.prototype, "fixed", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Object)
    ], AlertsStackComponent.prototype, "stack", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Number]),
        _tslib.__metadata("design:returntype", void 0)
    ], AlertsStackComponent.prototype, "remove", null);
    AlertsStackComponent = AlertsStackComponent_1 = _tslib.__decorate([
        module_decorator.Module(),
        component_decorator.Component({
            name: 'bt-alerts-stack',
            components: [alert_component_vue_vue_type_script_lang],
            factory: function () { return injector.Injector.Get(AlertsStackComponent_1); }
        }),
        _tslib.__param(0, inject_decorator.Inject(eventDispatcher_service.EventDispatcherService)),
        _tslib.__metadata("design:paramtypes", [eventDispatcher_service.EventDispatcherService])
    ], AlertsStackComponent);
    return AlertsStackComponent;
}(vue.Vue));

module.exports = AlertsStackComponent;
