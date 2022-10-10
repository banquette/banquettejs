/*!
 * Banquette VueTypescript v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isString = require('@banquette/utils-type/_cjs/dev/is-string');
var isUndefined = require('@banquette/utils-type/_cjs/dev/is-undefined');
var constants = require('../constants.js');
var generateVccopts = require('../generate-vccopts.js');
var getOrCreateComponentMetadata = require('../utils/get-or-create-component-metadata.js');
var vueBuilder = require('../vue-builder.js');

function Component(options) {
    return function (ctor) {
        var vccOpts = null;
        var data = getOrCreateComponentMetadata.getOrCreateComponentMetadata(ctor.prototype);
        if (isString.isString(options)) {
            options = { name: options };
        }
        else {
            options = options || {};
        }
        data.component = options;
        Object.defineProperty(ctor, constants.VUE_CLASS_COMPONENT_OPTIONS, {
            enumerable: true,
            configurable: true,
            get: function () {
                if (vccOpts === null) {
                    vccOpts = generateVccopts.generateVccOpts(ctor, data);
                }
                return vccOpts;
            }
        });
        if (!isUndefined.isUndefined(options.name)) {
            vueBuilder.VueBuilder.RegisterComponent(options.name, ctor, options.group || vueBuilder.VueBuilder.DEFAULT_GROUP);
        }
    };
}

exports.Component = Component;
