/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { isObject } from '@banquette/utils-type/is-object';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { AbstractObserver } from './abstract.observer.js';

var ObjectObserver = /** @class */ (function (_super) {
    __extends(ObjectObserver, _super);
    function ObjectObserver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ObjectObserver.Supports = function (target) {
        return isObject(target) && !(target instanceof Date);
    };
    /**
     * @inheritDoc
     */
    ObjectObserver.prototype.observe = function (target) {
        for (var _i = 0, _a = Object.keys(target); _i < _a.length; _i++) {
            var key = _a[_i];
            var descriptor = Object.getOwnPropertyDescriptor(target, key);
            // Test for readonly properties.
            if (isUndefined(descriptor) || descriptor.writable || !isUndefined(descriptor.set)) {
                try {
                    target[key] = this.observeProperty(key, target[key]);
                }
                catch (e) {
                    // If the property fails to assign, we may have a setter that throws an exception.
                    // In such a case, there is not much we can do, simply ignore the error and accept
                    // the fact that this property will not be observed.
                }
            }
        }
    };
    return ObjectObserver;
}(AbstractObserver));

export { ObjectObserver };
