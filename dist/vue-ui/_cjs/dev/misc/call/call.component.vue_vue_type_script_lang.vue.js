/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

var _tslib = require('../../_virtual/_tslib.js');
var component_decorator = require('@banquette/vue-typescript/_cjs/dev/decorator/component.decorator');
var vue = require('@banquette/vue-typescript/_cjs/dev/vue');

var CallComponent = /** @class */ (function (_super) {
    _tslib.__extends(CallComponent, _super);
    function CallComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Vue lifecycle.
     */
    CallComponent.prototype.mounted = function () {
        this.$emit('call');
    };
    CallComponent = _tslib.__decorate([
        component_decorator.Component({
            name: 'bt-call',
            template: false,
            emits: ['call']
        })
    ], CallComponent);
    return CallComponent;
}(vue.Vue));

module.exports = CallComponent;
