/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { arrayIntersect } from '@banquette/utils-array/array-intersect';
import { isFunction } from '@banquette/utils-type/is-function';
import { maybeResolveTsInst } from '../../utils/converters.js';
import { getOrCreateComponentMetadata } from '../../utils/get-or-create-component-metadata.js';
import { isDecoratedComponentConstructor } from '../../utils/guards.js';
import { VariantWildcard } from '../constant.js';
import { splitVariantString } from './split-variant-string.js';

function matchVariantSelector(selector, expectedVariants, actualVariants, expectedProps, expectedAttrs, componentInst) {
    // Variant
    if (expectedVariants.length > 0) {
        if (arrayIntersect(expectedVariants, actualVariants).length !== expectedVariants.length) {
            return false;
        }
    }
    // Props
    if (expectedProps !== null) {
        for (var _i = 0, _a = Object.keys(expectedProps); _i < _a.length; _i++) {
            var key = _a[_i];
            var candidate = expectedProps[key];
            if (isFunction(candidate)) {
                if (!candidate(componentInst[key])) {
                    return false;
                }
            }
            else if (expectedProps[key] !== componentInst[key]) {
                return false;
            }
        }
    }
    // Attrs
    if (expectedAttrs !== null && componentInst.$el) {
        var $el = componentInst.$el;
        for (var _b = 0, _c = Object.keys(expectedAttrs); _b < _c.length; _b++) {
            var key = _c[_b];
            var candidate = expectedAttrs[key];
            var attrValue = $el.getAttribute(key);
            if (isFunction(candidate)) {
                if (!candidate(attrValue)) {
                    return false;
                }
            }
            else if (expectedAttrs[key] !== attrValue) {
                return false;
            }
        }
    }
    // Parent
    if (selector.parents.length > 0) {
        for (var _d = 0, _e = selector.parents; _d < _e.length; _d++) {
            var parentSelectorCandidate = _e[_d];
            var $parent = componentInst.$resolvedParent;
            while ($parent) {
                var $parentInst = maybeResolveTsInst($parent);
                if ($parentInst.constructor && $parentInst.constructor.prototype && isDecoratedComponentConstructor($parentInst.constructor)) {
                    var decoratorsData = getOrCreateComponentMetadata($parentInst.constructor.prototype);
                    // Check parent name
                    if (parentSelectorCandidate.name === decoratorsData.component.name) {
                        var parentCandidateVariants = parentSelectorCandidate.variants.filter(function (i) { return i !== VariantWildcard; });
                        var parentExpectedVariants = decoratorsData.themeable !== null ?
                            splitVariantString($parentInst[decoratorsData.themeable.prop] || '') :
                            [];
                        if (matchVariantSelector(parentSelectorCandidate, parentCandidateVariants, parentExpectedVariants, parentSelectorCandidate.props, parentSelectorCandidate.attrs, $parentInst)) {
                            return true;
                        }
                    }
                }
                $parent = $parent.$parent;
            }
        }
        return false;
    }
    return true;
}
function matchVariant(variant, expectedVariants, componentInst) {
    for (var _i = 0, _a = variant.selector.candidates; _i < _a.length; _i++) {
        var selectorCandidate = _a[_i];
        var candidateVariants = selectorCandidate.variants.filter(function (i) { return i !== VariantWildcard; });
        if (matchVariantSelector(selectorCandidate, candidateVariants, expectedVariants, selectorCandidate.props, selectorCandidate.attrs, componentInst)) {
            return true;
        }
    }
    return false;
}

export { matchVariant };
