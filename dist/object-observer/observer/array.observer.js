/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { isArray } from '@banquette/utils-type/is-array';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { MutationType } from '../constant.js';
import { Mutation } from '../mutation.js';
import { extractObserver } from '../utils.js';
import { AbstractObserver } from './abstract.observer.js';

var ArrayObserver = /** @class */ (function (_super) {
    __extends(ArrayObserver, _super);
    function ArrayObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * `Array.pop()` override.
         */
        _this.proxifiedPop = function () {
            if (!_this.proxy.length) {
                return undefined;
            }
            var removedItem = _this.target.pop();
            _this.detachValue(removedItem);
            _this.notify(new Mutation(MutationType.Delete, [String(_this.proxy.length)], removedItem, undefined, _this.target));
            return removedItem;
        };
        /**
         * `Array.shift()` override.
         */
        _this.proxifiedShift = function () {
            if (!_this.proxy.length) {
                return undefined;
            }
            var removedItem = _this.target.shift();
            _this.detachValue(removedItem);
            _this.notify(new Mutation(MutationType.Delete, ['0'], removedItem, undefined, _this.target));
            return removedItem;
        };
        /**
         * `Array.unshift()` override.
         */
        _this.proxifiedUnshift = function () {
            var arguments$1 = arguments;

            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments$1[_i];
            }
            for (var i = 0; i < args.length; ++i) {
                args[i] = _this.observeProperty(String(i), args[i]);
            }
            var unshiftResult = Reflect.apply(_this.target.unshift, _this.target, args);
            for (var i = 0; i < args.length; ++i) {
                _this.notify(new Mutation(MutationType.Insert, [String(i)], undefined, args[i], _this.target));
            }
            return unshiftResult;
        };
        /**
         * `Array.reverse()` override.
         */
        _this.proxifiedReverse = function () {
            if (_this.target.length > 0) {
                _this.target.reverse();
                _this.reassignNames();
                _this.notify(new Mutation(MutationType.Reverse, [], undefined, _this.proxy, _this.target));
            }
            return _this.proxy;
        };
        /**
         * `Array.sort()` override.
         */
        _this.proxifiedSort = function (compareFn) {
            if (_this.target.length > 0) {
                _this.target.sort(compareFn);
                _this.reassignNames();
                _this.notify(new Mutation(MutationType.Sort, [], undefined, _this.proxy, _this.target));
            }
            return _this.proxy;
        };
        /**
         * `Array.fill()` override.
         */
        _this.proxifiedFill = function (value, start, end) {
            var clone = _this.target.slice(0);
            _this.target.fill(value, start, end);
            for (var i = 0; i < _this.target.length; ++i) {
                _this.target[i] = _this.observeProperty(String(i), _this.target[i]);
                if (clone[i] !== _this.target[i]) {
                    _this.notify(new Mutation(MutationType.Update, [String(i)], clone[i], _this.target[i], _this.target));
                }
            }
            return _this.proxy;
        };
        /**
         * `Array.splice()` override.
         */
        _this.proxifiedSplice = function (start, deleteCount) {
            var arguments$1 = arguments;

            var newItems = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                newItems[_i - 2] = arguments$1[_i];
            }
            var positiveStart = start < 0 ? Math.max(0, _this.target.length + start) : start;
            var spliceResult = _this.target.splice.apply(_this.target, [start].concat(deleteCount ? [deleteCount] : [], newItems));
            for (var i = 0; i < spliceResult.length; ++i) {
                _this.detachValue(spliceResult[i]);
                _this.notify(new Mutation(MutationType.Delete, [String(positiveStart + i)], spliceResult[i], undefined, _this.target));
            }
            for (var i = 0; i < newItems.length; ++i) {
                _this.target[positiveStart + i] = _this.observeProperty(String(i), newItems[i]);
                _this.notify(new Mutation(MutationType.Insert, [String(positiveStart + i)], undefined, _this.target[positiveStart + i], _this.target));
            }
            _this.reassignNames();
            return spliceResult;
        };
        /**
         * `Array.copyWithin()` override.
         */
        _this.proxifiedCopyWithin = function (targetStart, copyStart, copyEnd) {
            if (copyStart === void 0) { copyStart = 0; }
            if (copyEnd === void 0) { copyEnd = _this.target.length; }
            var positiveTargetStart = targetStart < 0 ? Math.max(0, _this.target.length + targetStart) : targetStart;
            var positiveCopyStart = targetStart < 0 ? Math.max(0, _this.target.length + targetStart) : targetStart;
            var positiveCopyEnd = copyEnd < 0 ? Math.max(0, _this.target.length + copyEnd) : copyEnd;
            var clone = _this.target.slice(0);
            _this.target.copyWithin(targetStart, copyStart, copyEnd);
            for (var i = positiveTargetStart, l = positiveCopyEnd - positiveCopyStart; i < l; ++i) {
                if (clone[i] !== _this.target[i]) {
                    _this.notify(new Mutation(MutationType.Update, [String(i)], clone[i], _this.target[i], _this.target));
                }
            }
            return _this.target;
        };
        return _this;
    }
    /**
     * @inheritDoc
     */
    ArrayObserver.Supports = function (target) {
        return isArray(target);
    };
    /**
     * @inheritDoc
     */
    ArrayObserver.prototype.observe = function (target) {
        for (var i = 0; i < target.length; ++i) {
            target[i] = this.observeProperty(String(i), target[i]);
        }
    };
    /**
     * Get handler that overrides some methods of Array.prototype.
     */
    ArrayObserver.prototype.get = function (target, key) {
        if (isUndefined(ArrayObserver.ArrayOverrides[key])) {
            return target[key];
        }
        return this[ArrayObserver.ArrayOverrides[key]];
    };
    /**
     * Update the name of each item of the array to ensure it corresponds to its index.
     */
    ArrayObserver.prototype.reassignNames = function () {
        for (var i = 0; i < this.target.length; i++) {
            var observer = extractObserver(this.target[i]);
            if (observer !== null) {
                observer.updateName(String(i), this);
            }
        }
    };
    ArrayObserver.ArrayOverrides = {
        pop: 'proxifiedPop',
        shift: 'proxifiedShift',
        unshift: 'proxifiedUnshift',
        reverse: 'proxifiedReverse',
        sort: 'proxifiedSort',
        splice: 'proxifiedSplice',
        fill: 'proxifiedFill',
        copyWithin: 'proxifiedCopyWithin',
    };
    return ArrayObserver;
}(AbstractObserver));

export { ArrayObserver };
