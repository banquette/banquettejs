/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var areEqual = require('@banquette/utils-misc/_cjs/dev/are-equal');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isBoolean = require('@banquette/utils-type/_cjs/dev/is-boolean');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var bugReport = require('@banquette/vue-material-icons/_cjs/dev/bug-report');
var close = require('@banquette/vue-material-icons/_cjs/dev/close');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var computed_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/computed.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var templateRef_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/template-ref.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
require('../../misc/call/call.component.vue.js');
require('../../misc/conditional-wrapper/conditional-wrapper.component.vue.js');
require('../../misc/remote/remote.component.vue.js');
require('../../misc/teleport/teleport.component.vue.js');
require('../../misc/click-outside.directive.js');
require('../../misc/collapsable.directive.js');
var stickTo_directive = require('../../misc/stick-to.directive.js');
require('../../misc/teleport.directive.js');
require('@banquette/api/_cjs/dev/api.service');
require('@banquette/dependency-injection/_cjs/dev/injector');
require('@banquette/utils-misc/_cjs/dev/proxy');
require('@banquette/vue-typescript/_cjs/dev/vue-builder');
require('../../misc/client-only.component.vue.js');

var FormControlStateOverlayComponent = /** @class */ (function (_super) {
    _tslib.__extends(FormControlStateOverlayComponent, _super);
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
                if (isObject.isObject(_this.v[k])) {
                    return acc.concat(Object.keys(_this.v[k]).map(function (i) { return "".concat(k, ".").concat(i, ":").concat(typeof (_this.v[k][i])); }));
                }
                return acc;
            }, []).sort();
            // If there is no change we don't need to do anything.
            if (areEqual.areEqual(keys, this.knownKeys)) {
                return this._groups;
            }
            var defaultGroupValues = {};
            this._groups = [];
            var _loop_1 = function (key) {
                var v = this_1.v[key];
                var shouldBeASeparateGroup = isObject.isObject(v) && !isArray.isArray(v);
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
                if (isObject.isObject(obj)) {
                    obj = obj[path[i]];
                }
                else {
                    return undefined;
                }
            }
            return obj[path[path.length - 1]];
        };
        if (isFunction.isFunction(getValue())) {
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
                obj.isBoolean = isBoolean.isBoolean(obj.rawValue);
                return obj;
            }
        });
    };
    FormControlStateOverlayComponent.prototype.normalizeValue = function (value) {
        if (isUndefined.isUndefined(value)) {
            return 'undefined';
        }
        if (value === null) {
            return 'null';
        }
        if (isObject.isObject(value)) {
            return JSON.stringify(value, null, 4);
        }
        return String(value);
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, required: true }),
        _tslib.__metadata("design:type", Object)
    ], FormControlStateOverlayComponent.prototype, "v", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Boolean)
    ], FormControlStateOverlayComponent.prototype, "visible", void 0);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Object),
        _tslib.__metadata("design:paramtypes", [])
    ], FormControlStateOverlayComponent.prototype, "overlayOptions", null);
    _tslib.__decorate([
        computed_decorator.Computed(),
        _tslib.__metadata("design:type", Object),
        _tslib.__metadata("design:paramtypes", [])
    ], FormControlStateOverlayComponent.prototype, "groups", null);
    _tslib.__decorate([
        templateRef_decorator.TemplateRef('target'),
        _tslib.__metadata("design:type", typeof(window) !== 'undefined' ? Element : Object)
    ], FormControlStateOverlayComponent.prototype, "target", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormControlStateOverlayComponent.prototype, "toggle", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], FormControlStateOverlayComponent.prototype, "hide", null);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", [Object]),
        _tslib.__metadata("design:returntype", void 0)
    ], FormControlStateOverlayComponent.prototype, "toggleValueDetail", null);
    FormControlStateOverlayComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-form-control-state-overlay',
            components: [bugReport.IconMaterialBugReport, close.IconMaterialClose],
            directives: [stickTo_directive.StickToDirective]
        })
    ], FormControlStateOverlayComponent);
    return FormControlStateOverlayComponent;
}(vue.Vue));

module.exports = FormControlStateOverlayComponent;
