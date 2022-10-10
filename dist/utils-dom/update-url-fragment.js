/*!
 * Banquette UtilsDom v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { parseUrlFragment } from './parse-url-fragment.js';

/**
 * Update the fragment of the url with a key/value pair object.
 * Existing elements are overridden.
 */
function updateUrlFragment(obj) {
    var fragment = [];
    obj = Object.assign({}, parseUrlFragment(), obj);
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        fragment.push(key + '=' + obj[key]);
    }
    window.location.hash = fragment.join('&');
}

export { updateUrlFragment };
