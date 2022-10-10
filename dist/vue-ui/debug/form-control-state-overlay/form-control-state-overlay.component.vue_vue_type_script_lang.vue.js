/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { areEqual } from '@banquette/utils-misc/are-equal';
import { isArray } from '@banquette/utils-type/is-array';
import { isBoolean } from '@banquette/utils-type/is-boolean';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { IconMaterialBugReport } from '@banquette/vue-material-icons/bug-report';
import { IconMaterialClose } from '@banquette/vue-material-icons/close';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Computed } from '@banquette/vue-typescript/decorator/computed.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { TemplateRef } from '@banquette/vue-typescript/decorator/template-ref.decorator';
import { Vue } from '@banquette/vue-typescript/vue';
import '../../misc/call/call.component.vue.js';
import '../../misc/conditional-wrapper/conditional-wrapper.component.vue.js';
import '../../misc/remote/remote.component.vue.js';
import '../../misc/teleport/teleport.component.vue.js';
import '../../misc/click-outside.directive.js';
import '../../misc/collapsable.directive.js';
import { StickToDirective } from '../../misc/stick-to.directive.js';
import '../../misc/teleport.directive.js';
import '@banquette/api/api.service';
import '@banquette/dependency-injection/injector';
import '@banquette/utils-misc/proxy';
import '@banquette/vue-typescript/vue-builder';
import '../../misc/client-only.component.vue.js';

var FormControlStateOverlayComponent = /** @class */ (function (_super) {
    __extends(FormControlStateOverlayComponent, _super);
    function FormControlStateOverlayComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visible = false;
        _this.knownKeys = [];
        _this._groups = [];
        return _this;
    }
    Object.defineProperty(FormControlStateOverlayComponent.prototype, "overlayOptions", {
        get: function () {
            return {
                target: this.target,
                placement: 'right',
                popper: {
                    modifiers: {
                        name: 'offset',
                        options: {
                            offset: [0, 5]
                        }
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormControlStateOverlayComponent.prototype, "groups", {
        get: function () {
            var _this = this;
            // Check the keys of the first 2 levels
            var keys = Object.keys(this.v).reduce(function (acc, k) {
                acc.push("".concat(k, ":").concat(typeof (_this.v[k])));
                if (isObject(_this.v[k])) {
                    return acc.concat(Object.keys(_this.v[k]).map(function (i) { return "".concat(k, ".").concat(i, ":").concat(typeof (_this.v[k][i])); }));
                }
                return acc;
            }, []).sort();
            // If there is no change we don't need to do anything.
            if (areEqual(keys, this.knownKeys)) {
                return this._groups;
            }
            var defaultGroupValues = {};
            this._groups = [];
            var _loop_1 = function (key) {
                var v = this_1.v[key];
                var shouldBeASeparateGroup = isObject(v) && !isArray(v);
                if (shouldBeASeparateGroup) {
                    var newGroup = { name: key, values: Object.keys(v).sort(function (a, b) {
                            // Order by type + alpha
                            var typesIncrementMap = {
                                'string': 0,
                                'number': 1000,
                                'bigint': 1000,
                                'boolean': 2000,
                                'object': 3000,
                                'symbol': 4000,
                                'undefined': 5000
                            };
                            var av = typesIncrementMap[typeof (v[a])] + a.localeCompare(b) + 1;
                            var bv = typesIncrementMap[typeof (v[b])] + b.localeCompare(a) + 1;
                            return av - bv;
                        }).reduce(function (obj, subKey) {
                            _this.createValueProxy(obj, [key, subKey]);
                            return obj;
                        }, {}) };
                    if (Object.keys(newGroup.values).length > 0) {
                        this_1._groups.push(newGroup);
                    }
                }
                else {
                    this_1.createValueProxy(defaultGroupValues, [key]);
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = Object.keys(this.v); _i < _a.length; _i++) {
                var key = _a[_i];
                _loop_1(key);
            }
            this._groups.sort(function (a, b) { return a.name.localeCompare(b.name); });
            if (Object.keys(defaultGroupValues).length > 0) {
                this._groups.push({ name: 'Type specific', values: defaultGroupValues });
            }
            this.knownKeys = keys;
            return this._groups;
        },
        enumerable: false,
        configurable: true
    });
    FormControlStateOverlayComponent.prototype.toggle = function () {
        this.visible = !this.visible;
    };
    FormControlStateOverlayComponent.prototype.hide = function () {
        this.visible = false;
    };
    FormControlStateOverlayComponent.prototype.toggleValueDetail = function (value) {
        value.fullValueVisible = !value.fullValueVisible;
        this.$forceUpdate();
    };
    FormControlStateOverlayComponent.prototype.createValueProxy = function (target, path) {
        var _this = this;
        var getValue = function () {
            var obj = _this.v;
            for (var i = 0; i < path.length - 1; ++i) {
                if (isObject(obj)) {
                    obj = obj[path[i]];
                }
                else {
                    return undefined;
                }
            }
            return obj[path[path.length - 1]];
        };
        if (isFunction(getValue())) {
            return;
        }
        var obj = {
            name: path[path.length - 1],
            rawValue: undefined,
            shortValue: undefined,
            fullValue: undefined,
            fullValueVisible: false,
            isBoolean: false
        };
        Object.defineProperty(target, path[path.length - 1], {
            configurable: true,
            enumerable: true,
            get: function () {
                obj.rawValue = getValue();
                var normalized = _this.normalizeValue(obj.rawValue);
                obj.shortValue = normalized.length > 50 ? (normalized.substring(0, 50) + ' [...]') : normalized;
                obj.fullValue = normalized.length > 50 ? normalized : null;
                obj.isBoolean = isBoolean(obj.rawValue);
                return obj;
            }
        });
    };
    FormControlStateOverlayComponent.prototype.normalizeValue = function (value) {
        if (isUndefined(value)) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (isObject(value)) {
            return JSON.stringify(value, null, 4);
        }
        return String(value);
    };
    __decorate([
        Prop({ type: Object, required: true }),
        __metadata("design:type", Object)
    ], FormControlStateOverlayComponent.prototype, "v", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Boolean)
    ], FormControlStateOverlayComponent.prototype, "visible", void 0);
    __decorate([
        Computed(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormControlStateOverlayComponent.prototype, "overlayOptions", null);
    __decorate([
        Computed(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], FormControlStateOverlayComponent.prototype, "groups", null);
    __decorate([
        TemplateRef('target'),
        __metadata("design:type", typeof(window) !== 'undefined' ? Element : Object)
    ], FormControlStateOverlayComponent.prototype, "target", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormControlStateOverlayComponent.prototype, "toggle", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FormControlStateOverlayComponent.prototype, "hide", null);
    __decorate([
        Expose(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FormControlStateOverlayComponent.prototype, "toggleValueDetail", null);
    FormControlStateOverlayComponent = __decorate([
        Component({
            name: 'bt-form-control-state-overlay',
            components: [IconMaterialBugReport, IconMaterialClose],
            directives: [StickToDirective]
        })
    ], FormControlStateOverlayComponent);
    return FormControlStateOverlayComponent;
}(Vue));

export { FormControlStateOverlayComponent as default };
