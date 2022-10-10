/*!
 * Banquette Form v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var configuration_service = require('@banquette/config/_cjs/dev/config/configuration.service');
var injector = require('@banquette/dependency-injection/_cjs/dev/injector');
var isNonEmptyString = require('@banquette/utils-string/_cjs/dev/is-non-empty-string');
var isArray = require('@banquette/utils-type/_cjs/dev/is-array');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var config = require('./config.js');
var formArray = require('./form-array.js');
var formControl = require('./form-control.js');
var formObject = require('./form-object.js');

/**
 * Offer an easier way to create a form manually.
 */
var FormFactory = /** @class */ (function () {
    function FormFactory() {
    }
    FormFactory.Create = function (input, validator) {
        ++FormFactory.InnerCount;
        try {
            if (isObject.isObject(input)) {
                if (input instanceof formControl.FormControl) {
                    if (!isUndefined.isUndefined(validator)) {
                        input.setValidator(validator);
                    }
                    return input;
                }
                var component = isArray.isArray(input) ? new formArray.FormArray([], validator) : new formObject.FormObject({}, validator);
                for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var resolvedKey = FormFactory.ResolveKey(key);
                    var child = FormFactory.Create(resolvedKey.extended ? input[key][0] : input[key], resolvedKey.extended ? input[key][1] : undefined);
                    if (component instanceof formArray.FormArray) {
                        component.append(child);
                    }
                    else {
                        component.set(resolvedKey.key, child);
                    }
                }
                return component;
            }
            return new formControl.FormControl(input, validator);
        }
        finally {
            // Little hack to know when we are out of the recursion so we can clear the configuration cache.
            // This is to avoid calling the injector multiple times for a single creation
            // while still reacting to changes in the configuration.
            --FormFactory.InnerCount;
            if (FormFactory.InnerCount === 0) {
                FormFactory.Configuration = null;
            }
        }
    };
    /**
     * Test if a key is an extended name.
     * Meaning the value corresponding to the key is a couple value/validator instead of a normal value.
     */
    FormFactory.ResolveKey = function (key) {
        if (FormFactory.Configuration === null) {
            FormFactory.Configuration = injector.Injector.Get(configuration_service.ConfigurationService).get(config.FormConfigurationSymbol);
        }
        var extended = false;
        var prefix = FormFactory.Configuration.factory.extendedNamePrefix;
        var suffix = FormFactory.Configuration.factory.extendedNameSuffix;
        if (isNonEmptyString.isNonEmptyString(prefix) || isNonEmptyString.isNonEmptyString(suffix)) {
            if (prefix && key.substring(0, prefix.length) === prefix) {
                key = key.substring(prefix.length);
                extended = true;
            }
            if (suffix && key.substring(key.length - suffix.length) === suffix) {
                key = key.substring(0, key.length - suffix.length);
                extended = true;
            }
        }
        return { key: key, extended: extended };
    };
    FormFactory.Configuration = null;
    FormFactory.InnerCount = 0;
    return FormFactory;
}());

exports.FormFactory = FormFactory;
