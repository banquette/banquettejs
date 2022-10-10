/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var isObject = require('@banquette/utils-type/_cjs/dev/is-object');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var abstract_observer = require('./abstract.observer.js');

var ObjectObserver = /** @class */ (function (_super) {
    _tslib.__extends(ObjectObserver, _super);
    function ObjectObserver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ObjectObserver.Supports = function (target) {
        return isObject.isObject(target) && !(target instanceof Date);
    };
    /**
     * @inheritDoc
     */
    ObjectObserver.prototype.observe = function (target) {
        for (var _i = 0, _a = Object.keys(target); _i < _a.length; _i++) {
            var key = _a[_i];
            var descriptor = Object.getOwnPropertyDescriptor(target, key);
            // Test for readonly properties.
            if (isUndefined.isUndefined(descriptor) || descriptor.writable || !isUndefined.isUndefined(descriptor.set)) {
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
}(abstract_observer.AbstractObserver));

exports.ObjectObserver = ObjectObserver;
