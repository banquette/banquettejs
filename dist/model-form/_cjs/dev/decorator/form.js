/*!
 * Banquette ModelForm v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@banquette/model/_cjs/dev/decorator/utils');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var contants = require('../contants.js');
var formControl = require('../transformer/form-control.js');
var form = require('../transformer/root/form.js');

function Form(transformer) {
    if (transformer === void 0) { transformer = formControl.FormControl(); }
    if (isUndefined.isUndefined(transformer.type) || contants.FormRelatedTransformers.indexOf(transformer.type) < 0) {
        transformer = formControl.FormControl(transformer);
    }
    return utils.createTransformableDecorator(form.FormTransformerSymbol, transformer);
}

exports.Form = Form;
