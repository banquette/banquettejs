/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { trim } from '@banquette/utils-string/format/trim';
import { ensureArray } from '@banquette/utils-type/ensure-array';
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';

/**
 * Convert a variant selector into a string identifier.
 */
function normalizeVariantSelector(selectors) {
    var output = { identifier: '', candidates: [] };
    selectors = ensureArray(selectors);
    for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var selector = selectors_1[_i];
        output.identifier += (output.identifier !== '' ? '|' : '');
        if (isString(selector)) {
            selector = { variant: selector };
        }
        var normalizedSelector = { variants: [], props: null, attrs: null, parents: [] };
        // Variant
        if (!isUndefined(selector.variant)) {
            normalizedSelector.variants = selector.variant.split(' ').map(function (i) { return trim(i); }).filter(function (i) { return i.length > 0; }).sort();
            if (normalizedSelector.variants.length > 0) {
                output.identifier += '#_v:s:' + normalizedSelector.variants.join(' ');
            }
        }
        // Props
        if (!isUndefined(selector.props)) {
            var keys = Object.keys(selector.props).sort();
            if (normalizedSelector.props === null) {
                normalizedSelector.props = {};
            }
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var key = keys_1[_a];
                var value = trim(String(selector.props[key]));
                if (key === 'variant') {
                    value = value.split(' ').map(function (i) { return trim(i); }).sort().join(' ');
                }
                normalizedSelector.props[key] = selector.props[key];
                output.identifier += '#' + key + ':' + String(typeof (selector.props[key]))[0] + ':' + value;
            }
        }
        // Attrs
        if (!isUndefined(selector.attrs)) {
            var keys = Object.keys(selector.attrs).sort();
            if (normalizedSelector.attrs === null) {
                normalizedSelector.attrs = {};
            }
            for (var _b = 0, keys_2 = keys; _b < keys_2.length; _b++) {
                var key = keys_2[_b];
                var value = trim(String(selector.attrs[key]));
                normalizedSelector.attrs[key] = selector.attrs[key];
                output.identifier += '#_a:' + key + ':' + String(typeof (selector.attrs[key])) + ':' + value;
            }
        }
        // Parent
        if (!isUndefined(selector.parent)) {
            var parents = ensureArray(selector.parent);
            for (var _c = 0, parents_1 = parents; _c < parents_1.length; _c++) {
                var parent_1 = parents_1[_c];
                if (isString(parent_1)) {
                    parent_1 = { name: parent_1 };
                }
                var normalizedParent = normalizeVariantSelector(parent_1);
                var candidateSelector = normalizedParent.candidates[0];
                candidateSelector.name = parent_1.name;
                normalizedSelector.parents.push(candidateSelector);
                output.identifier += '#_p:' + candidateSelector.name + ':' + normalizedParent.identifier;
            }
        }
        output.candidates.push(normalizedSelector);
    }
    return output;
}

export { normalizeVariantSelector };
