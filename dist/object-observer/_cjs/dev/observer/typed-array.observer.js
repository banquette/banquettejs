/*!
 * Banquette ObjectObserver v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constant = require('../constant.js');
var mutation = require('../mutation.js');
var array_observer = require('./array.observer.js');

var TypedArrayObserver = /** @class */ (function (_super) {
    _tslib.__extends(TypedArrayObserver, _super);
    function TypedArrayObserver() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @inheritDoc
         */
        _this.proxifiedSet = function (source, offset) {
            var sourceLength = source.length;
            var clone = _this.target.slice(0);
            offset = offset || 0;
            _this.target.set(source, offset);
            for (var i = offset; i < sourceLength + offset; i++) {
                if (clone[i] !== _this.target[i]) {
                    _this.notify(new mutation.Mutation(constant.MutationType.Update, [String(i)], clone[i], _this.target[i], _this.target));
                }
            }
            return true;
        };
        return _this;
    }
    /**
     * @inheritDoc
     */
    TypedArrayObserver.Supports = function (target) {
        return ArrayBuffer.isView(target);
    };
    /**
     * Get handler that overrides some methods of Array.prototype.
     */
    TypedArrayObserver.prototype.get = function (target, key) {
        if (isUndefined.isUndefined(TypedArrayObserver.TypedArrayOverrides[key])) {
            return target[key];
        }
        return this[TypedArrayObserver.TypedArrayOverrides[key]];
    };
    TypedArrayObserver.TypedArrayOverrides = {
        reverse: 'proxifiedReverse',
        sort: 'proxifiedSort',
        fill: 'proxifiedFill',
        copyWithin: 'proxifiedCopyWithin',
        set: 'proxifiedSet'
    };
    return TypedArrayObserver;
}(array_observer.ArrayObserver));

exports.TypedArrayObserver = TypedArrayObserver;
