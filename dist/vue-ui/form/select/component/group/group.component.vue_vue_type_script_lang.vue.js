/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate, __metadata } from '../../../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Expose } from '@banquette/vue-typescript/decorator/expose.decorator';
import { Prop } from '@banquette/vue-typescript/decorator/prop.decorator';
import { Vue } from '@banquette/vue-typescript/vue';

var GroupComponent = /** @class */ (function (_super) {
    __extends(GroupComponent, _super);
    function GroupComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visibleChoices = [];
        return _this;
    }
    GroupComponent.prototype.updateChoice = function (choice) {
        for (var i = 0; i < this.visibleChoices.length; ++i) {
            if (this.visibleChoices[i].identifier === choice.identifier) {
                if (choice.visible) {
                    return;
                }
                this.visibleChoices.splice(i, 1);
                return;
            }
        }
        if (choice.visible) {
            this.visibleChoices.push(choice);
        }
    };
    __decorate([
        Prop({ type: String, default: null }),
        __metadata("design:type", Object)
    ], GroupComponent.prototype, "label", void 0);
    __decorate([
        Expose(),
        __metadata("design:type", Array)
    ], GroupComponent.prototype, "visibleChoices", void 0);
    GroupComponent = __decorate([
        Component('bt-form-select-group')
    ], GroupComponent);
    return GroupComponent;
}(Vue));

export { GroupComponent as default };
