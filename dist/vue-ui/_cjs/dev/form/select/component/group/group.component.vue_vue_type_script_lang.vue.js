/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../../../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var expose_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/expose.decorator');
var prop_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/prop.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var GroupComponent = /** @class */ (function (_super) {
    _tslib.__extends(GroupComponent, _super);
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
    _tslib.__decorate([
        prop_decorator.Prop({ type: String, default: null }),
        _tslib.__metadata("design:type", Object)
    ], GroupComponent.prototype, "label", void 0);
    _tslib.__decorate([
        expose_decorator.Expose(),
        _tslib.__metadata("design:type", Array)
    ], GroupComponent.prototype, "visibleChoices", void 0);
    GroupComponent = _tslib.__decorate([
        component_decorator.Component('bt-form-select-group')
    ], GroupComponent);
    return GroupComponent;
}(vue.Vue));

module.exports = GroupComponent;
