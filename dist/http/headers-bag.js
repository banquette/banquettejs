/*!
 * Banquette Http v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { HttpHeadersExceptionsMap } from './constants.js';

var HeadersBag = /** @class */ (function () {
    function HeadersBag() {
        this.bag = {};
    }
    /**
     * Get all headers.
     */
    HeadersBag.prototype.all = function () {
        return Object.assign({}, this.bag);
    };
    /**
     * Get a header by name.
     */
    HeadersBag.prototype.get = function (name, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        name = this.normalizeName(name);
        return this.bag[name] || defaultValue;
    };
    /**
     * Test if header is defined.
     */
    HeadersBag.prototype.has = function (name) {
        return this.get(name) !== null;
    };
    /**
     * Set a header.
     */
    HeadersBag.prototype.set = function (name, value) {
        name = this.normalizeName(name);
        this.bag[name] = String(value);
    };
    /**
     * Remove all headers.
     */
    HeadersBag.prototype.empty = function () {
        this.bag = {};
    };
    /**
     * Create a HeadersBag instance from an object literal.
     */
    HeadersBag.FromMap = function (map) {
        var bag = new HeadersBag();
        for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
            var key = _a[_i];
            bag.set(key, map[key]);
        }
        return bag;
    };
    /**
     * Normalize the name of a header.
     */
    HeadersBag.prototype.normalizeName = function (raw) {
        var lowercase = raw.toLowerCase();
        if (!isUndefined(HttpHeadersExceptionsMap[lowercase])) {
            return HttpHeadersExceptionsMap[lowercase];
        }
        return lowercase
            .replace(/\s+/g, '-')
            .split('-')
            .map(function (text) { return text[0].toUpperCase() + text.substr(1).toLowerCase(); })
            .join('-');
    };
    return HeadersBag;
}());

export { HeadersBag };
