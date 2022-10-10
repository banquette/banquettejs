/*!
 * Banquette Form v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { ConfigurationService } from '@banquette/config/config/configuration.service';
import { Injector } from '@banquette/dependency-injection/injector';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isArray } from '@banquette/utils-type/is-array';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { FormConfigurationSymbol } from './config.js';
import { FormArray } from './form-array.js';
import { FormControl } from './form-control.js';
import { FormObject } from './form-object.js';

/**
 * Offer an easier way to create a form manually.
 */
var FormFactory = /** @class */ (function () {
    function FormFactory() {
    }
    FormFactory.Create = function (input, validator) {
        ++FormFactory.InnerCount;
        try {
            if (isObject(input)) {
                if (input instanceof FormControl) {
                    if (!isUndefined(validator)) {
                        input.setValidator(validator);
                    }
                    return input;
                }
                var component = isArray(input) ? new FormArray([], validator) : new FormObject({}, validator);
                for (var _i = 0, _a = Object.keys(input); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var resolvedKey = FormFactory.ResolveKey(key);
                    var child = FormFactory.Create(resolvedKey.extended ? input[key][0] : input[key], resolvedKey.extended ? input[key][1] : undefined);
                    if (component instanceof FormArray) {
                        component.append(child);
                    }
                    else {
                        component.set(resolvedKey.key, child);
                    }
                }
                return component;
            }
            return new FormControl(input, validator);
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
            FormFactory.Configuration = Injector.Get(ConfigurationService).get(FormConfigurationSymbol);
        }
        var extended = false;
        var prefix = FormFactory.Configuration.factory.extendedNamePrefix;
        var suffix = FormFactory.Configuration.factory.extendedNameSuffix;
        if (isNonEmptyString(prefix) || isNonEmptyString(suffix)) {
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

export { FormFactory };
