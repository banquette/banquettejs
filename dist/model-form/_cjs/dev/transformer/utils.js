/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var contants = require('../contants.js');

/**
 * Test if a transformer is a form transformer specialization.
 */
function isFormTransformer(transformer) {
    return !isUndefined.isUndefined(transformer.type) && contants.FormRelatedTransformers.indexOf(transformer.type) > -1;
}

exports.isFormTransformer = isFormTransformer;
