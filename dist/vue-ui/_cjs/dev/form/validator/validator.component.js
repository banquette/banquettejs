/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.js');
var trimArray = require('@banquette/utils-array/_cjs/dev/trim-array');
var proxy = require('@banquette/utils-misc/_cjs/dev/proxy');
var ensureArray = require('@banquette/utils-type/_cjs/dev/ensure-array');
var ensureString = require('@banquette/utils-type/_cjs/dev/ensure-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isType = require('@banquette/utils-type/_cjs/dev/is-type');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var watch_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/watch.decorator');
var converters = require('@banquette/vue-typescript/_cjs/dev/utils/converters');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');
var abstractVueForm_component = require('../abstract-vue-form.component.js');

/**
 * Base class for validator components.
 */
var ValidatorComponent = /** @class */ (function (_super) {
    _tslib.__extends(ValidatorComponent, _super);
    function ValidatorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The form automagically extracted from a parent "bt-form" component.
         */
        _this.autoDetectedParentFormGroup = null;
        /**
         * Optional parent validator component.
         */
        _this.parentValidator = null;
        _this.isMounted = false;
        /**
         * List of targets that have their validator set.
         */
        _this.assignedTargets = [];
        _this.unsetValidatorCallbacks = [];
        /**
         * Assign the validator to a parent validator component (must be a container).
         */
        _this.assignToParentValidator = (function () {
            var unsubscribe = null;
            return function (parent) {
                if (unsubscribe !== null) {
                    unsubscribe();
                    unsubscribe = null;
                }
                unsubscribe = parent.registerChild(_this.buildValidator());
                parent.rebuild();
                _this.unsetValidatorCallbacks.push(function () {
                    if (unsubscribe !== null) {
                        unsubscribe();
                        unsubscribe = null;
                    }
                    parent.rebuild();
                });
            };
        })();
        return _this;
    }
    Object.defineProperty(ValidatorComponent.prototype, "message", {
        /**
         * Get the custom error message either from the default slot or from the prop.
         */
        get: function () {
            if (this.hasSlot('default')) {
                var slotMessage = this.getVNodesText(this.$slots.default());
                if (slotMessage.length > 0) {
                    return slotMessage;
                }
            }
            return this.messageProp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ValidatorComponent.prototype, "parentFormGroup", {
        /**
         * A getter returning either the parent form group given as prop or the one detected automatically,
         * depending on their availability.
         */
        get: function () {
            if (this.form !== null) {
                return this.form;
            }
            return this.autoDetectedParentFormGroup;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    ValidatorComponent.prototype.mounted = function () {
        this.isMounted = true;
        this.rebuild();
        var parent = this.getParent('bt-form');
        if (parent && this.isFormGroupInterface(parent.vm.form)) {
            var form = parent.vm.form;
            this.autoDetectedParentFormGroup = form;
            form.onControlAdded(proxy.proxy(this.updateFromTargets, this), 0, false);
        }
        this.updateFromTargets();
    };
    /**
     * @inheritDoc
     */
    ValidatorComponent.prototype.unmounted = function () {
        for (var _i = 0, _a = this.unsetValidatorCallbacks; _i < _a.length; _i++) {
            var fn = _a[_i];
            fn();
        }
        this.unsetValidatorCallbacks = [];
    };
    /**
     * Rebuild the validator.
     */
    ValidatorComponent.prototype.rebuild = function () {
        if (!this.isMounted) {
            return;
        }
        var $parent = this.$parent;
        while ($parent) {
            $parent = converters.maybeResolveTsInst($parent);
            if ($parent instanceof abstractVueForm_component.AbstractVueFormComponent) {
                return $parent.proxy.setValidator(this.buildValidator());
            }
            if (isType.isType($parent, function () { return isFunction.isFunction($parent.registerChild); })) {
                this.parentValidator = $parent;
                return this.assignToParentValidator($parent);
            }
            $parent = $parent.$parent;
        }
    };
    ValidatorComponent.prototype.updateFromTargets = function () {
        var _this = this;
        // If we have no parent FormGroup, this means either that the component is badly placed,
        // or that the validator has already been set by another mean (parent validator or form component).
        if (!this.parentFormGroup) {
            return;
        }
        var newTargets = [];
        var _loop_1 = function (target) {
            this_1.parentFormGroup.getByPattern(target).forEach(function (component) {
                if (_this.assignedTargets.indexOf(target) < 0) {
                    component.setValidator(_this.buildValidator());
                    _this.unsetValidatorCallbacks.push(function () {
                        component.setValidator(null);
                    });
                }
                newTargets.push(target);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.targetsPaths; _i < _a.length; _i++) {
            var target = _a[_i];
            _loop_1(target);
        }
        this.assignedTargets = newTargets;
    };
    /**
     * Test if a value is an FormGroupInterface object.
     */
    ValidatorComponent.prototype.isFormGroupInterface = function (value) {
        return isObject.isObject(value) && 'get' in value && 'getByPath' in value && 'getByPattern' in value;
    };
    _tslib.__decorate([
        prop_decorator.Prop({ type: Object, default: null }),
        _tslib.__metadata("design:type", Object)
    ], ValidatorComponent.prototype, "form", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'target', type: [String, Array], default: [], transform: function (value) {
                return trimArray.trimArray(isArray.isArray(value) ? value : ensureString.ensureString(value).split(',')).filter(function (i) { return !!i; });
            } }),
        _tslib.__metadata("design:type", Array)
    ], ValidatorComponent.prototype, "targetsPaths", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ name: 'message', type: String, default: undefined }),
        _tslib.__metadata("design:type", String)
    ], ValidatorComponent.prototype, "messageProp", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: undefined }),
        _tslib.__metadata("design:type", String)
    ], ValidatorComponent.prototype, "type", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Array], default: [], transform: function (value) { return ensureArray.ensureArray(value); } }),
        _tslib.__metadata("design:type", Array)
    ], ValidatorComponent.prototype, "tags", void 0);
    _tslib.__decorate([
        prop_decorator.Prop({ type: [String, Array], default: [], transform: function (value) { return ensureArray.ensureArray(value); } }),
        _tslib.__metadata("design:type", Array)
    ], ValidatorComponent.prototype, "groups", void 0);
    _tslib.__decorate([
        watch_decorator.Watch('target', { immediate: watch_decorator.ImmediateStrategy.NextTick }),
        _tslib.__metadata("design:type", Function),
        _tslib.__metadata("design:paramtypes", []),
        _tslib.__metadata("design:returntype", void 0)
    ], ValidatorComponent.prototype, "updateFromTargets", null);
    return ValidatorComponent;
}(vue.Vue));

exports.ValidatorComponent = ValidatorComponent;
