/*!
 * Banquette VueDomModule v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('./_virtual/_tslib.js');
var abstract_domModule = require('@banquette/dom-modules/_cjs/dev/abstract.dom-module');
var domModule_decorator = require('@banquette/dom-modules/_cjs/dev/decorator/dom-module.decorator');
var vueBuilder = require('@banquette/vue-typescript/_cjs/dev/vue-builder');

/** @class */ ((function (_super) {
    _tslib.__extends(Vue, _super);
    function Vue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    Vue.prototype.getDefaultOptionName = function () {
        return 'group';
    };
    /**
     * @inheritDoc
     */
    Vue.prototype.bind = function () {
        vueBuilder.VueBuilder.CreateAppAndMount(this.element, this.getOption('group', '*'), {
            compilerOptions: {
                delimiters: this.getOption('delimiters', ['${', '}'])
            }
        });
    };
    Vue = _tslib.__decorate([
        domModule_decorator.DomModule('vue')
    ], Vue);
    return Vue;
})(abstract_domModule.AbstractDomModule));
