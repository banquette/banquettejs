/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from './_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { ltrim } from '@banquette/utils-string/format/ltrim';
import { trim } from '@banquette/utils-string/format/trim';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { AbstractFormGroup } from './abstract-form-group.js';
import { FormEvents, CallContext, FilterGroup, ValidationStrategy } from './constant.js';
import { ComponentAddedFormEvent } from './event/component-added.form-event.js';
import { ComponentRemovedFormEvent } from './event/component-removed.form-event.js';
import { ValueChangedFormEvent } from './event/value-changed.form-event.js';
import { ComponentNotFoundException } from './exception/component-not-found.exception.js';

var FormObject = /** @class */ (function (_super) {
    __extends(FormObject, _super);
    function FormObject(children, validator) {
        if (children === void 0) { children = {}; }
        var _this = _super.call(this) || this;
        /**
         * A set of components stored as a key/value pair.
         */
        _this.children_ = {};
        _this.additionalPatternTags.push('object');
        for (var _i = 0, _a = Object.keys(children); _i < _a.length; _i++) {
            var identifier = _a[_i];
            _this.set(identifier, children[identifier]);
        }
        _this.setValidator(validator || null);
        return _this;
    }
    Object.defineProperty(FormObject.prototype, "children", {
        /**
         * Get all the children as a plain object.
         */
        get: function () {
            var children = {};
            for (var _i = 0, _a = Object.keys(this.children_); _i < _a.length; _i++) {
                var name_1 = _a[_i];
                children[name_1] = this.children_[name_1].decorated;
            }
            return children;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get a component by name.
     * Becomes an alias of `getByPath` if a path is given.
     *
     * @throws ComponentNotFoundException
     */
    FormObject.prototype.get = function (identifier) {
        if (identifier.indexOf('/') > -1 || identifier.indexOf(':') > -1) {
            return this.getByPath(identifier);
        }
        if (!this.has(identifier)) {
            throw new ComponentNotFoundException(identifier, "No component named \"".concat(identifier, "\" is currently present in \"").concat(this.path, "\"."));
        }
        return this.children_[identifier].decorated;
    };
    /**
     * Get the name of a component in the group.
     */
    FormObject.prototype.getNameOf = function (component) {
        for (var _i = 0, _a = Object.keys(this.children_); _i < _a.length; _i++) {
            var name_2 = _a[_i];
            if (this.children_[name_2].decorated.id === component.id) {
                return name_2;
            }
        }
        return null;
    };
    /**
     * Replace an existing component.
     *
     * @throws UsageException If the identifier is invalid
     */
    FormObject.prototype.set = function (identifier, component) {
        var _this = this;
        if (identifier.indexOf('/') > -1) {
            return this.setByPath(identifier, component);
        }
        identifier = FormObject.ValidateIdentifier(identifier);
        if (!isUndefined(this.children_[identifier])) {
            if (this.children_[identifier].decorated.id === component.id) {
                return;
            }
            this.children_[identifier].unsetParent();
        }
        this.updateCollection(function () {
            _this.children_[identifier] = component.setParent(_this.buildParentComponentDecorator());
            _this.children_[identifier].propagateStatesToParent();
            var childValidator = _this.children_[identifier].decorated.validator;
            _this.updateContainerValidator(function (container) {
                if (childValidator !== null) {
                    container.set(identifier, childValidator);
                }
                else if (container.has(identifier)) {
                    container.remove(identifier);
                }
            });
        });
        this.dispatch(FormEvents.ComponentAdded, function () { return new ComponentAddedFormEvent(_this, _this.children_[identifier].decorated, identifier); });
    };
    /**
     * Set a component deep into the form tree, creating missing containers if necessary.
     */
    FormObject.prototype.setByPath = function (path, component) {
        var parts = ltrim(path, '/').split('/');
        if (parts.length === 1) {
            return this.set(parts[0], component);
        }
        var container = this;
        do {
            if (!container.isGroup()) {
                throw new UsageException("A component was found at \"".concat(container.path, "\", but is not a container."));
            }
            var next = parts.splice(0, 1)[0];
            if (parts.length > 0) {
                if (!container.has(next)) {
                    container.set(next, new FormObject());
                }
                container = container.get(next);
            }
            else {
                container.set(next, component);
            }
        } while (parts.length > 0);
    };
    /**
     * Merge a group of the same type into the current one.
     */
    FormObject.prototype.merge = function (source) {
        var _this = this;
        source.forEachDecorated(function (child) {
            _this.set(child.decorated.name, child.decorated);
        });
    };
    /**
     * Remove a component from the collection.
     */
    FormObject.prototype.remove = function (identifier) {
        var _this = this;
        if (isUndefined(this.children_[identifier])) {
            return null;
        }
        var removed = this.children_[identifier];
        this.updateCollection(function () {
            removed.removeStatesFromParent();
            delete _this.children_[identifier];
            removed.unsetParent();
            _this.updateContainerValidator(function (container) {
                if (container.has(identifier)) {
                    container.remove(identifier);
                }
            });
        });
        this.dispatch(FormEvents.ComponentRemoved, function () { return new ComponentRemovedFormEvent(_this, removed.decorated, identifier); });
        return removed.decorated;
    };
    /**
     * Remove all components from the collection.
     */
    FormObject.prototype.clear = function () {
        var _this = this;
        var components = Object.assign({}, this.children_);
        this.updateCollection(function () {
            _this.children_ = {};
            _this.updateValidator();
        });
        var _loop_1 = function (name_3) {
            this_1.dispatch(FormEvents.ComponentRemoved, function () { return new ComponentRemovedFormEvent(_this, components[name_3].decorated, name_3); });
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(components); _i < _a.length; _i++) {
            var name_3 = _a[_i];
            _loop_1(name_3);
        }
    };
    /**
     * Check whether there is a component with the given name in the collection.
     */
    FormObject.prototype.has = function (identifier) {
        return !isUndefined(this.children_[identifier]);
    };
    /**
     * Count the number of children.
     */
    FormObject.prototype.count = function () {
        return Object.keys(this.children_).length;
    };
    /**
     * Sets the value of the `FormObject`. It accepts an object that matches
     * the structure of the group, with control names as keys.
     *
     * If a control present in the form group is missing from the input value,
     * the value of the control will not be modified.
     *
     * If a value of the input doesn't match any control, it will be ignored.
     *
     * @usageNotes
     * ```
     * const form = new FormObject({
     *   first: new FormControl(),
     *   last: new FormControl()
     * });
     *
     * console.log(form.value);   // {first: null, last: null}
     *
     * form.setValue({last: 'Drew'});
     *
     * console.log(form.value);   // {first: null, last: 'Drew'}
     * ```
     */
    FormObject.prototype.setValue = function (values) {
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var name_4 = _a[_i];
            if (!isUndefined(this.children_[name_4])) {
                this.children_[name_4].setValue(values[name_4]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
    };
    /**
     * Set the default value of child defined in the input object.
     */
    FormObject.prototype.setDefaultValue = function (values) {
        for (var _i = 0, _a = Object.keys(values); _i < _a.length; _i++) {
            var name_5 = _a[_i];
            if (!isUndefined(this.children_[name_5])) {
                this.children_[name_5].setDefaultValue(values[name_5]);
            }
        }
        this.updateValue();
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
    };
    /**
     * Call a function for each child.
     * If the callback returns `false`, the loop is stopped.
     */
    FormObject.prototype.forEach = function (cb, filters) {
        if (isUndefined(filters)) {
            filters = this.foreachFilters[FilterGroup.External];
        }
        var filtersKeys = getObjectKeys(filters);
        ext: for (var _i = 0, _a = Object.keys(this.children_); _i < _a.length; _i++) {
            var name_6 = _a[_i];
            for (var _b = 0, filtersKeys_1 = filtersKeys; _b < filtersKeys_1.length; _b++) {
                var state = filtersKeys_1[_b];
                if (this.children_[name_6].decorated[state] !== filters[state]) {
                    continue ext;
                }
            }
            if (cb(this.children_[name_6].decorated, name_6) === false) {
                break;
            }
        }
    };
    /**
     * A protected version of forEach that iterates over the whole collection and returns
     * the decorator instead of the real instance of the component like the public one.
     */
    FormObject.prototype.forEachDecorated = function (cb) {
        for (var _i = 0, _a = Object.keys(this.children_); _i < _a.length; _i++) {
            var name_7 = _a[_i];
            if (cb(this.children_[name_7], name_7) === false) {
                break;
            }
        }
    };
    /**
     * Refresh the value from the children.
     */
    FormObject.prototype.updateValue = function () {
        this.doUpdateValue(null);
    };
    /**
     * Do the actual update of the value.
     */
    FormObject.prototype.doUpdateValue = function (oldValue) {
        var _this = this;
        if (oldValue === null) {
            oldValue = this.cloneValue();
        }
        this.value = {};
        this.forEach(function (child, name) {
            _this.value[name] = child.value;
        }, this.foreachFilters[FilterGroup.UpdateValue]);
        if (this.parent !== null && !this.hasContext(CallContext.Parent)) {
            this.parent.updateValue();
        }
        this.dispatch(FormEvents.ValueChanged, function () { return new ValueChangedFormEvent(_this, oldValue, _this.value); });
        this.validateSelfIfStrategyMatches(ValidationStrategy.OnChange);
    };
    /**
     * Wrap the modifications to the collection to ensure
     * the value is correctly updated and events are triggered.
     */
    FormObject.prototype.updateCollection = function (updateCallback) {
        var oldValue = this.cloneValue();
        updateCallback();
        this.doUpdateValue(oldValue);
    };
    /**
     * Clone the current value.
     */
    FormObject.prototype.cloneValue = function () {
        return Object.assign({}, this.value);
    };
    /**
     * Throws an exception if the identifier is invalid.
     *
     * @return the cleaned up identifier
     *
     * @throws UsageException
     */
    FormObject.ValidateIdentifier = function (identifier) {
        identifier = trim(identifier);
        if (!identifier) {
            throw new UsageException('You cannot add a child with an empty identifier to a form object.');
        }
        return identifier;
    };
    return FormObject;
}(AbstractFormGroup));

export { FormObject };
