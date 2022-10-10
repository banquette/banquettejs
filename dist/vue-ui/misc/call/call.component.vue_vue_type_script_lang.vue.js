/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Vue } from '@banquette/vue-typescript/vue';

var CallComponent = /** @class */ (function (_super) {
    __extends(CallComponent, _super);
    function CallComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Vue lifecycle.
     */
    CallComponent.prototype.mounted = function () {
        this.$emit('call');
    };
    CallComponent = __decorate([
        Component({
            name: 'bt-call',
            template: false,
            emits: ['call']
        })
    ], CallComponent);
    return CallComponent;
}(Vue));

export { CallComponent as default };
