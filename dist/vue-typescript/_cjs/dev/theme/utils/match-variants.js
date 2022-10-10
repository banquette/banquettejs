/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var arrayIntersect = require('@banquette/utils-array/_cjs/dev/array-intersect');
var isFunction = require('@banquette/utils-type/_cjs/dev/is-function');
var converters = require('../../utils/converters.js');
var getOrCreateComponentMetadata = require('../../utils/get-or-create-component-metadata.js');
var guards = require('../../utils/guards.js');
var constant = require('../constant.js');
var splitVariantString = require('./split-variant-string.js');

function matchVariantSelector(selector, expectedVariants, actualVariants, expectedProps, expectedAttrs, componentInst) {
    // Variant
    if (expectedVariants.length > 0) {
        if (arrayIntersect.arrayIntersect(expectedVariants, actualVariants).length !== expectedVariants.length) {
            return false;
        }
    }
    // Props
    if (expectedProps !== null) {
        for (var _i = 0, _a = Object.keys(expectedProps); _i < _a.length; _i++) {
            var key = _a[_i];
            var candidate = expectedProps[key];
            if (isFunction.isFunction(candidate)) {
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
            if (isFunction.isFunction(candidate)) {
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
                var $parentInst = converters.maybeResolveTsInst($parent);
                if ($parentInst.constructor && $parentInst.constructor.prototype && guards.isDecoratedComponentConstructor($parentInst.constructor)) {
                    var decoratorsData = getOrCreateComponentMetadata.getOrCreateComponentMetadata($parentInst.constructor.prototype);
                    // Check parent name
                    if (parentSelectorCandidate.name === decoratorsData.component.name) {
                        var parentCandidateVariants = parentSelectorCandidate.variants.filter(function (i) { return i !== constant.VariantWildcard; });
                        var parentExpectedVariants = decoratorsData.themeable !== null ?
                            splitVariantString.splitVariantString($parentInst[decoratorsData.themeable.prop] || '') :
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
        var candidateVariants = selectorCandidate.variants.filter(function (i) { return i !== constant.VariantWildcard; });
        if (matchVariantSelector(selectorCandidate, candidateVariants, expectedVariants, selectorCandidate.props, selectorCandidate.attrs, componentInst)) {
            return true;
        }
    }
    return false;
}

exports.matchVariant = matchVariant;
