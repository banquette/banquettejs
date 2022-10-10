/*!
 * Banquette ObjectObserver v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { MutationType } from '../constant.js';
import { Mutation } from '../mutation.js';
import { ArrayObserver } from './array.observer.js';

var TypedArrayObserver = /** @class */ (function (_super) {
    __extends(TypedArrayObserver, _super);
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
                    _this.notify(new Mutation(MutationType.Update, [String(i)], clone[i], _this.target[i], _this.target));
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
        if (isUndefined(TypedArrayObserver.TypedArrayOverrides[key])) {
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
}(ArrayObserver));

export { TypedArrayObserver };
