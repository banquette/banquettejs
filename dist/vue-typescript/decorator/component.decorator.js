/*!
 * Banquette VueTypescript v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isString } from '@banquette/utils-type/is-string';
import { isUndefined } from '@banquette/utils-type/is-undefined';
import { VUE_CLASS_COMPONENT_OPTIONS } from '../constants.js';
import { generateVccOpts } from '../generate-vccopts.js';
import { getOrCreateComponentMetadata } from '../utils/get-or-create-component-metadata.js';
import { VueBuilder } from '../vue-builder.js';

function Component(options) {
    return function (ctor) {
        var vccOpts = null;
        var data = getOrCreateComponentMetadata(ctor.prototype);
        if (isString(options)) {
            options = { name: options };
        }
        else {
            options = options || {};
        }
        data.component = options;
        Object.defineProperty(ctor, VUE_CLASS_COMPONENT_OPTIONS, {
            enumerable: true,
            configurable: true,
            get: function () {
                if (vccOpts === null) {
                    vccOpts = generateVccOpts(ctor, data);
                }
                return vccOpts;
            }
        });
        if (!isUndefined(options.name)) {
            VueBuilder.RegisterComponent(options.name, ctor, options.group || VueBuilder.DEFAULT_GROUP);
        }
    };
}

export { Component };
