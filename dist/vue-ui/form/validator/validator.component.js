/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../_virtual/_tslib.js';
import { trimArray } from '@banquette/utils-array/trim-array';
import { proxy } from '@banquette/utils-misc/proxy';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { ensureString } from '@banquette/utils-type/ensure-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isFunction } from '@banquette/utils-type/is-function';
import { isObject } from '@banquette/utils-type/is-object';
import { isType } from '@banquette/utils-type/is-type';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Watch, ImmediateStrategy } from '@banquette/vue-typescript/decorator/watch.decorator';
import { maybeResolveTsInst } from '@banquette/vue-typescript/utils/converters';
import { Vue } from '@banquette/vue-typescript/vue';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';

/**
 * Base class for validator components.
 */
var ValidatorComponent = /** @class */ (function (_super) {
    __extends(ValidatorComponent, _super);
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
            form.onControlAdded(proxy(this.updateFromTargets, this), 0, false);
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
            $parent = maybeResolveTsInst($parent);
            if ($parent instanceof AbstractVueFormComponent) {
                return $parent.proxy.setValidator(this.buildValidator());
            }
            if (isType($parent, function () { return isFunction($parent.registerChild); })) {
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
        return isObject(value) && 'get' in value && 'getByPath' in value && 'getByPattern' in value;
    };
    __decorate([
        Prop({ type: Object, default: null }),
        __metadata("design:type", Object)
    ], ValidatorComponent.prototype, "form", void 0);
    __decorate([
        Prop({ name: 'target', type: [String, Array], default: [], transform: function (value) {
                return trimArray(isArray(value) ? value : ensureString(value).split(',')).filter(function (i) { return !!i; });
            } }),
        __metadata("design:type", Array)
    ], ValidatorComponent.prototype, "targetsPaths", void 0);
    __decorate([
        Prop({ name: 'message', type: String, default: undefined }),
        __metadata("design:type", String)
    ], ValidatorComponent.prototype, "messageProp", void 0);
    __decorate([
        Prop({ type: String, default: undefined }),
        __metadata("design:type", String)
    ], ValidatorComponent.prototype, "type", void 0);
    __decorate([
        Prop({ type: [String, Array], default: [], transform: function (value) { return ensureArray(value); } }),
        __metadata("design:type", Array)
    ], ValidatorComponent.prototype, "tags", void 0);
    __decorate([
        Prop({ type: [String, Array], default: [], transform: function (value) { return ensureArray(value); } }),
        __metadata("design:type", Array)
    ], ValidatorComponent.prototype, "groups", void 0);
    __decorate([
        Watch('target', { immediate: ImmediateStrategy.NextTick }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ValidatorComponent.prototype, "updateFromTargets", null);
    return ValidatorComponent;
}(Vue));

export { ValidatorComponent };
