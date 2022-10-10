/*!
 * Banquette VueDomModule v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from './_virtual/_tslib.js';
import { AbstractDomModule } from '@banquette/dom-modules/abstract.dom-module';
import { DomModule } from '@banquette/dom-modules/decorator/dom-module.decorator';
import { VueBuilder } from '@banquette/vue-typescript/vue-builder';

/** @class */ ((function (_super) {
    __extends(Vue, _super);
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
        VueBuilder.CreateAppAndMount(this.element, this.getOption('group', '*'), {
            compilerOptions: {
                delimiters: this.getOption('delimiters', ['${', '}'])
            }
        });
    };
    Vue = __decorate([
        DomModule('vue')
    ], Vue);
    return Vue;
})(AbstractDomModule));
