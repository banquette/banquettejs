/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { flattenObject } from '@banquette/utils-object/flatten-object';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';

function Themeable(options) {
    if (options === void 0) { options = {}; }
    return function (ctor) {
        var _a, _b;
        var data = getOrCreateComponentMetadata(ctor.prototype);
        var flattenedSelectors = flattenObject(((_a = options.css) === null || _a === void 0 ? void 0 : _a.selectors) || {});
        data.themeable = {
            componentName: data.component.name,
            prop: options.prop || 'variant',
            css: {
                vars: flattenObject(((_b = options.css) === null || _b === void 0 ? void 0 : _b.vars) || {}),
                selectors: { static: {}, dynamic: [] }
            }
        };
        for (var _i = 0, _c = Object.keys(flattenedSelectors); _i < _c.length; _i++) {
            var key = _c[_i];
            if (key.indexOf('(') > -1) {
                data.themeable.css.selectors.dynamic.push({
                    pattern: new RegExp(key, 'g'),
                    selector: flattenedSelectors[key]
                });
            }
            else {
                data.themeable.css.selectors.static[key] = flattenedSelectors[key];
            }
        }
    };
}

export { Themeable };
