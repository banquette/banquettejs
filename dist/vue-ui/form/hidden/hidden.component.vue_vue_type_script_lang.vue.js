/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { HeadlessControlViewModel } from '@banquette/ui/form/headless-control.view-model';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { AbstractVueFormComponent } from '../abstract-vue-form.component.js';

var FormHiddenComponent = /** @class */ (function (_super) {
    __extends(FormHiddenComponent, _super);
    function FormHiddenComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FormHiddenComponent.prototype.setupViewModel = function () {
        return new HeadlessControlViewModel(this.proxy);
    };
    FormHiddenComponent = __decorate([
        Component({
            name: 'bt-form-hidden',
            template: false
        })
    ], FormHiddenComponent);
    return FormHiddenComponent;
}(AbstractVueFormComponent));

export { FormHiddenComponent as default };
