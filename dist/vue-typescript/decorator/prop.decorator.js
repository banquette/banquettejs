/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __assign } from '../_virtual/_tslib.js';
import { UsageException } from '@banquette/exception/usage.exception';
import { getObjectKeys } from '@banquette/utils-object/get-object-keys';
import { isNonEmptyString } from '@banquette/utils-string/is-non-empty-string';
import { isFunction } from '@banquette/utils-type/is-function';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

/**
 * Allow you to define that a property of a component's class should be declared as a Vue prop.
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (prototype, propertyKey) {
        if (!isNonEmptyString(propertyKey) || isFunction(prototype.constructor.prototype[propertyKey])) {
            throw new UsageException('You can only use @Prop() on properties.');
        }
        var data = getOrCreateComponentMetadata(prototype);
        if (!isUndefined(data.props[propertyKey])) {
            for (var _i = 0, _a = getObjectKeys(options); _i < _a.length; _i++) {
                var key = _a[_i];
                data.props[propertyKey][key] = options[key];
            }
        }
        else {
            data.props[propertyKey] = __assign(__assign({}, options), { propertyName: propertyKey });
        }
    };
}

export { Prop };
