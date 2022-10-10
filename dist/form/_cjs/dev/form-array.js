/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('./_virtual/_tslib.js');
var usage_exception = require('@banquette/exception/_cjs/dev/usage.exception');
var getObjectKeys = require('@banquette/utils-object/_cjs/dev/get-object-keys');
var ensureInteger = require('@banquette/utils-type/_cjs/dev/ensure-integer');
var isNullOrUndefined = require('@banquette/utils-type/_cjs/dev/is-null-or-undefined');
var isNumeric = require('@banquette/utils-type/_cjs/dev/is-numeric');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var abstractFormGroup = require('./abstract-form-group.js');
var constant = require('./constant.js');
var componentAdded_formEvent = require('./event/component-added.form-event.js');
var componentRemoved_formEvent = require('./event/component-removed.form-event.js');
var valueChanged_formEvent = require('./event/value-changed.form-event.js');
var componentNotFound_exception = require('./exception/component-not-found.exception.js');

var FormArray = /** @class */ (function (_super) {
    _tslib.__extends(FormArray, _super);
    function FormArray(children, validator) {
        if (children === void 0) { children = []; }
        var _this = _super.call(this) || this;
        /**
         * A set of components stored as an array.
         */
        _this.children_ = [];
        _this.additionalPatternTags.push('array');
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            _this.append(child);
        }
        _this.setValidator(validator || null);
        return _this;
    }
    Object.defineProperty(FormArray.prototype, "children", {
        /**
         * Get all the children as an array.
         */
        get: function () {
            return this.children_.reduce(function (acc, item) {
                acc.push(item.decorated);
                return acc;
            }, []);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Append a form component to the end of the collection.
     *
     * Use the `set` method to replace an existing component.
     */
    FormArray.prototype.append = function (component) {
        var _this = this;
        this.removeByRef(component);
        this.updateCollection(function () {
            _this.children_.push(component.setParent(_this.buildParentComponentDecorator()));
            _this.children_[_this.children_.length - 1].propagateStatesToParent();
            var childValidator = _this.children_[_this.children_.length - 1].decorated.validator;
            if (childValidator !== null) {
                _this.updateContainerValidator(function (container) {
                    container.set(String(_this.children_.length - 1), childValidator);
                });
            }
        });
        this.dispatch(constant.FormEvents.ComponentAdded, function () {
            var index = _this.children_.length - 1;
            return new componentAdded_formEvent.ComponentAddedFormEvent(_this, _this.children_[index].decorated, index);
        });
    };
    /**
     * Add a form component to the beginning of the collection.
     *
     * Use the `set` method to replace an existing component.
     */
    FormArray.prototype.prepend = function (component) {
        var _this = this;
        this.removeByRef(component);
        this.updateCollection(function () {
            _this.children_.unshift(component.setParent(_this.buildParentComponentDecorator()));
            _this.children_[0].propagateStatesToParent();
            _this.updateValidator();
        });
        this.dispatch(constant.FormEvents.ComponentAdded, function () { return new componentAdded_formEvent.ComponentAddedFormEvent(_this, _this.children_[0].decorated, 0); });
    };
    /**
     * Insert a form component at a specific index, moving all elements after it.
     *
     * Use the `set` method to replace an existing component.
     */
    FormArray.prototype.insert = function (index, component) {
        var _this = this;
        var existingIndex = this.getIndexOf(component);
        if (existingIndex !== null) {
            if (existingIndex === index) {
                return;
            }
            this.remove(existingIndex);
        }
        this.updateCollection(function () {
            var child = component.setParent(_this.buildParentComponentDecorator());
            index = Math.min(index, _this.children_.length);
            if (index < _this.children_.length) {
                _this.children_.splice(index, 0, child);
            }
            else {
                _this.children_.push(child);
            }
            child.propagateStatesToParent();
            _this.updateValidator();
        });
        this.dispatch(constant.FormEvents.ComponentAdded, function () { return new componentAdded_formEvent.ComponentAddedFormEvent(_this, _this.children_[0].decorated, 0); });
    };
    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     *
     * @throws ComponentNotFoundException
     */
    FormArray.prototype.get = function (identifier) {
        if (!isNumeric.isNumeric(identifier)) {
            return this.getByPath(identifier);
        }
        identifier = ensureInteger.ensureInteger(identifier);
        if (!this.has(identifier)) {
            throw new componentNotFound_exception.ComponentNotFoundException(identifier, "No component named \"".concat(identifier, "\" is currently present in \"").concat(this.path, "\"."));
        }
        return this.children_[identifier].decorated;
    };
    /**
     * Get the index of a component in the array.
     */
    FormArray.prototype.getNameOf = function (component) {
        for (var i = 0; i < this.children_.length; ++i) {
            if (this.children_[i].decorated.id === component.id) {
                return i;
            }
        }
        return null;
    };
    /**
     * Replace an existing component.
     */
    FormArray.prototype.set = function (index, component) {
        var _this = this;
        if (index < this.children_.length) {
            if (this.children_[index].decorated.id === component.id) {
                return;
            }
            this.remove(index);
        }
        this.updateCollection(function () {
            var child = component.setParent(_this.buildParentComponentDecorator());
            if (index < _this.children_.length) {
                _this.children_[index] = child;
                _this.updateValidator();
            }
            else if (index === _this.children_.length) {
                _this.children_.push(child);
                var childValidator_1 = _this.children_[_this.children_.length - 1].decorated.validator;
                if (childValidator_1 !== null) {
                    _this.updateContainerValidator(function (container) {
                        container.set(String(_this.children_.length - 1), childValidator_1);
                    });
                }
            }
            else {
                throw new usage_exception.UsageException("There is no component at index \"".concat(index, "\" and index \"").concat(index, "\" is not the next contiguous identifier."));
            }
            child.propagateStatesToParent();
        });
        this.dispatch(constant.FormEvents.ComponentAdded, function () { return new componentAdded_formEvent.ComponentAddedFormEvent(_this, _this.children_[index].decorated, index); });
    };
    /**
     * Merge a group of the same type into the current one.
     */
    FormArray.prototype.merge = function (source) {
        var _this = this;
        source.forEachDecorated(function (child) {
            _this.append(child.decorated);
        });
    };
    /**
     * Remove a component from the collection.
     */
    FormArray.prototype.remove = function (index) {
        var _this = this;
        if (index >= this.children_.length) {
            return null;
        }
        var removed = this.children_[index];
        this.updateCollection(function () {
            removed.removeStatesFromParent();
            _this.children_.splice(index, 1);
            removed.unsetParent();
            _this.updateValidator();
        });
        this.dispatch(constant.FormEvents.ComponentRemoved, function () { return new componentRemoved_formEvent.ComponentRemovedFormEvent(_this, removed.decorated, index); });
        return removed.decorated;
    };
    /**
     * Remove all components from the collection.
     */
    FormArray.prototype.clear = function () {
        var _this = this;
        var children = [].concat(this.children_);
        this.updateCollection(function () {
            _this.children_ = [];
            _this.updateValidator();
        });
        var _loop_1 = function (i) {
            this_1.dispatch(constant.FormEvents.ComponentRemoved, function () { return new componentRemoved_formEvent.ComponentRemovedFormEvent(_this, children[i].decorated, i); });
        };
        var this_1 = this;
        for (var i = 0; i < children.length; ++i) {
            _loop_1(i);
        }
    };
    /**
     * Check whether there is a component with the given name in the collection.
     */
    FormArray.prototype.has = function (index) {
        return index < this.children_.length;
    };
    /**
     * Count the number of children.
     */
    FormArray.prototype.count = function () {
        return this.children_.length;
    };
    /**
     * Sets the value of the `FormArray`. It accepts an array that matches the internal array of controls.
     *
     * If a control present in the form array is missing from the input value (or set to undefined),
     * the value of the control will not be modified.
     *
     * If a value of the input doesn't match any control, it will be ignored.
     */
    FormArray.prototype.setValue = function (values) {
        for (var i = 0, c = Math.min(this.children_.length, values.length); i < c; ++i) {
            if (!isNullOrUndefined.isNullOrUndefined(values[i])) {
                this.children_[i].setValue(values[i]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(constant.CallContext.Parent)) {
            this.parent.updateValue();
        }
    };
    /**
     * Set the default value of child defined in the input object.
     */
    FormArray.prototype.setDefaultValue = function (values) {
        for (var i = 0, c = Math.min(this.children_.length, values.length); i < c; ++i) {
            if (!isNullOrUndefined.isNullOrUndefined(values[i])) {
                this.children_[i].setDefaultValue(values[i]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(constant.CallContext.Parent)) {
            this.parent.updateValue();
        }
    };
    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    FormArray.prototype.forEach = function (cb, filters) {
        if (isUndefined.isUndefined(filters)) {
            filters = this.foreachFilters[constant.FilterGroup.External];
        }
        // Copy the array to allow the callback to alter the collection without messing up the loop.
        var copy = _tslib.__spreadArray([], this.children_, true);
        var filtersKeys = getObjectKeys.getObjectKeys(filters);
        ext: for (var i = 0; i < copy.length; ++i) {
            for (var _i = 0, filtersKeys_1 = filtersKeys; _i < filtersKeys_1.length; _i++) {
                var state = filtersKeys_1[_i];
                if (copy[i].decorated[state] !== filters[state]) {
                    continue ext;
                }
            }
            if (cb(copy[i].decorated, i) === false) {
                break;
            }
        }
    };
    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    FormArray.prototype.forEachDecorated = function (cb) {
        // Copy the array to allow the callback to alter the collection without messing up the loop.
        var copy = _tslib.__spreadArray([], this.children_, true);
        for (var i = 0; i < copy.length; ++i) {
            if (cb(copy[i], i) === false) {
                break;
            }
        }
    };
    /**
     * Refresh the value from the children.
     */
    FormArray.prototype.updateValue = function () {
        this.doUpdateValue(null);
    };
    /**
     * Do the actual update of the value.
     */
    FormArray.prototype.doUpdateValue = function (oldValue) {
        var _this = this;
        if (oldValue === null) {
            oldValue = this.cloneValue();
        }
        this.value = [];
        this.forEach(function (child) {
            _this.value.push(child.value);
        }, this.foreachFilters[constant.FilterGroup.UpdateValue]);
        this.dispatch(constant.FormEvents.ValueChanged, function () { return new valueChanged_formEvent.ValueChangedFormEvent(_this, oldValue, _this.value); });
        if (this.parent !== null && !this.hasContext(constant.CallContext.Parent)) {
            this.parent.updateValue();
        }
        this.validateSelfIfStrategyMatches(constant.ValidationStrategy.OnChange);
    };
    /**
     * Wrap the modifications to the components collection to ensure
     * the value is correctly updated and events are triggered.
     */
    FormArray.prototype.updateCollection = function (updateCallback) {
        var oldValue = this.cloneValue();
        updateCallback();
        this.doUpdateValue(oldValue);
    };
    /**
     * Clone the current value.
     */
    FormArray.prototype.cloneValue = function () {
        return [].concat(this.value);
    };
    return FormArray;
}(abstractFormGroup.AbstractFormGroup));

exports.FormArray = FormArray;
