/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { proxy } from '@banquette/utils-misc/proxy';
import { isFunction } from '@banquette/utils-type/is-function';
import { isType } from '@banquette/utils-type/is-type';

/**
 * A collection that behave like a single component.
 */
var FormComponentsCollection = /** @class */ (function () {
    function FormComponentsCollection(collection) {
        if (collection === void 0) { collection = []; }
        this.collection = collection;
    }
    Object.defineProperty(FormComponentsCollection.prototype, "valid", {
        /**
         * `true` if the collection is `validated` and all components of the collection are `valid`.
         */
        get: function () { return this.validated && this.combineFlags('valid'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "invalid", {
        /**
         * `true` if the collection is `validated` and any of its components is `invalid`.
         */
        get: function () { return this.validated && !this.valid; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "validated", {
        /**
         * `true` if all components of the collection are `validated`.
         */
        get: function () { return !this.notValidated; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "notValidated", {
        /**
         * Inverse of `validated`.
         */
        get: function () { return this.combineFlags('validated'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "validating", {
        /**
         * Inverse of `notValidating`.
         */
        get: function () { return !this.notValidating; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "notValidating", {
        /**
         * `true` if all components of the collection are `notValidating`.
         */
        get: function () { return this.combineFlags('notValidating'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "busy", {
        /**
         * Inverse of `notBusy`.
         */
        get: function () { return !this.notBusy; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "notBusy", {
        /**
         * `true` if all components of the collection are `notBusy`.
         */
        get: function () { return this.combineFlags('notBusy'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "disabled", {
        /**
         * Inverse of `enabled`.
         */
        get: function () { return !this.enabled; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "enabled", {
        /**
         * `true` if all components of the collection are `enabled`.
         */
        get: function () { return this.combineFlags('enabled'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "dirty", {
        /**
         * Inverse of `pristine`.
         */
        get: function () { return !this.pristine; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "pristine", {
        /**
         * `true` if all components of the collection are `pristine`.
         */
        get: function () { return this.combineFlags('pristine'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "touched", {
        /**
         * Inverse of `untouched`.
         */
        get: function () { return !this.untouched; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "untouched", {
        /**
         * `true` if all components of the collection are `untouched`.
         */
        get: function () { return this.combineFlags('untouched'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "changed", {
        /**
         * Inverse of `unchanged`.
         */
        get: function () { return !this.unchanged; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "unchanged", {
        /**
         * `true` if all components of the collection are `unchanged`.
         */
        get: function () { return this.combineFlags('unchanged'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "focused", {
        /**
         * Inverse of `unfocused`.
         */
        get: function () { return !this.unfocused; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "unfocused", {
        /**
         * `true` if all components of the collection are `unfocused`.
         */
        get: function () { return this.combineFlags('unfocused'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "virtual", {
        /**
         * Inverse of `concrete`.
         */
        get: function () { return !this.concrete; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "concrete", {
        /**
         * `true` if all components of the collection are `concrete`.
         */
        get: function () { return this.combineFlags('concrete'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "paths", {
        /**
         * Get an array containing the path of all the components found in the collection.
         */
        get: function () {
            return this.collection.reduce(function (acc, item) {
                acc.push(item.path);
                return acc;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "length", {
        /**
         * Get the number of items in the collection.
         */
        get: function () {
            return this.collection.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FormComponentsCollection.prototype, "value", {
        /**
         * Combine all the values of the components of the collection into an array.
         */
        get: function () {
            var values = [];
            for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
                var child = _a[_i];
                values.push(child.value);
            }
            return values;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get a component of the collection.
     */
    FormComponentsCollection.prototype.get = function (index) {
        return this.collection.length > index ? this.collection[index] : null;
    };
    /**
     * Add a component to the collection.
     */
    FormComponentsCollection.prototype.append = function (component) {
        this.collection.push(component);
    };
    /**
     * Add a component to the beginning of the collection.
     */
    FormComponentsCollection.prototype.prepend = function (component) {
        this.collection.unshift(component);
    };
    /**
     * Insert a component at a specific index, moving all elements after it.
     */
    FormComponentsCollection.prototype.insert = function (index, component) {
        index = Math.min(index, this.collection.length);
        if (index < this.collection.length) {
            this.collection.splice(index, 0, component);
        }
        else {
            this.collection.push(component);
        }
    };
    /**
     * Remove a component from the collection.
     */
    FormComponentsCollection.prototype.remove = function (component) {
        var pos = this.collection.indexOf(component);
        if (pos > -1) {
            this.collection.splice(pos, 1);
        }
    };
    /**
     * Remove all components of the collection from their parent.
     */
    FormComponentsCollection.prototype.detach = function () {
        this.forEach(function (component) {
            if (component.parent !== null) {
                component.parent.remove(component);
            }
        });
    };
    /**
     * Iterate through the content of the collection.
     */
    FormComponentsCollection.prototype.forEach = function (cb) {
        for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
            var item = _a[_i];
            if (cb(item) === false) {
                break;
            }
        }
    };
    /**
     * Append all the children of another collection into this one.
     */
    FormComponentsCollection.prototype.concat = function (collection) {
        collection.forEach(proxy(this.append, this));
    };
    /**
     * Test if every item in the collection is `true` for a given flag.
     */
    FormComponentsCollection.prototype.combineFlags = function (name) {
        for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item[name]) {
                return false;
            }
        }
        return true;
    };
    /**
     * Call a function of each component in the collection.
     */
    FormComponentsCollection.prototype.callForEach = function (name) {
        var arguments$1 = arguments;

        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments$1[_i];
        }
        for (var _a = 0, _b = this.collection; _a < _b.length; _a++) {
            var item = _b[_a];
            var method = item[name];
            if (isType(method, isFunction)) {
                method.apply(item, args);
            }
        }
    };
    /**
     * Subscribe to an event for each item of the collection.
     */
    FormComponentsCollection.prototype.subscribeForEach = function (method, callback) {
        var unsubscribeFunctions = [];
        for (var _i = 0, _a = this.collection; _i < _a.length; _i++) {
            var child = _a[_i];
            var methodRef = child[method];
            unsubscribeFunctions.push(methodRef.apply(child, [callback]));
        }
        return function () {
            for (var _i = 0, unsubscribeFunctions_1 = unsubscribeFunctions; _i < unsubscribeFunctions_1.length; _i++) {
                var fn = unsubscribeFunctions_1[_i];
                fn();
            }
            unsubscribeFunctions = [];
        };
    };
    /**
     * Disable all components of the collection.
     */
    FormComponentsCollection.prototype.disable = function () {
        this.callForEach('disable');
        return this;
    };
    /**
     * Enable all components of the collection.
     */
    FormComponentsCollection.prototype.enable = function () {
        this.callForEach('enable');
        return this;
    };
    /**
     * Mark all the components of the collection as `concrete`.
     */
    FormComponentsCollection.prototype.markAsConcrete = function () {
        this.callForEach('markAsConcrete');
        return this;
    };
    /**
     * Mark all the components of the collection as `virtual`.
     */
    FormComponentsCollection.prototype.markAsVirtual = function () {
        this.callForEach('markAsVirtual');
        return this;
    };
    /**
     * Set the same value to all items of the collection.
     */
    FormComponentsCollection.prototype.setValue = function (value) {
        this.callForEach('setValue', value);
        return this;
    };
    /**
     * Set the validator to use to all items of the collection.
     */
    FormComponentsCollection.prototype.setValidator = function (validator) {
        this.callForEach('setValidator', validator);
        return this;
    };
    /**
     * Set the validation strategy to use to all items of the collection.
     */
    FormComponentsCollection.prototype.setValidationStrategy = function (strategy) {
        this.callForEach('setValidationStrategy', strategy);
        return this;
    };
    /**
     * Validate each item of the collection.
     */
    FormComponentsCollection.prototype.validate = function () {
        this.callForEach('validate');
        return this;
    };
    /**
     * Subscribe to the `FormEvents.StateChanged` form event of all components in the collection.
     */
    FormComponentsCollection.prototype.onStateChanged = function (callback) {
        return this.subscribeForEach('onStateChanged', callback);
    };
    /**
     * Subscribe to the `FormEvents.ValueChanged` form event of all components in the collection.
     */
    FormComponentsCollection.prototype.onValueChanged = function (callback) {
        return this.subscribeForEach('onValueChanged', callback);
    };
    return FormComponentsCollection;
}());

export { FormComponentsCollection };
