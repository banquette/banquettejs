/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../../../_virtual/_tslib.js';
import { Component } from '@banquette/vue-typescript/decorator/component.decorator';
import { Themeable } from '@banquette/vue-typescript/decorator/themeable.decorator';
import { BindThemeDirective } from '@banquette/vue-typescript/theme/bind-theme.directive';
import '../../../checkbox/checkbox.component.vue.js';
import '../../../file/file.component.vue.js';
import '../../../form/form.component.vue.js';
import '../../../select/component/select.component.vue.js';
import '../../../select/component/choice/choice.component.vue.js';
import '../../../select/component/group/group.component.vue.js';
import '../../../text/text.component.vue.js';
import '../../../tree/tree.component.vue.js';
import '../../../validator/validator.component.js';
import '../../../validator/ajax-validator.component.vue.js';
import '../../../validator/and-validator.component.vue.js';
import '../../../validator/choice-validator.component.vue.js';
import '../../../validator/compose-validator.component.vue.js';
import '../../../validator/email-validator.component.vue.js';
import '../../../validator/empty-validator.component.vue.js';
import '../../../validator/equal-validator.component.vue.js';
import '../../../validator/foreach-validator.component.vue.js';
import '../../../validator/if-validator.component.vue.js';
import '../../../validator/invalid-validator.component.vue.js';
import '../../../validator/is-type-validator.component.vue.js';
import '../../../validator/max-validator.component.vue.js';
import '../../../validator/min-validator.component.vue.js';
import '../../../validator/not-empty-validator.component.vue.js';
import '../../../validator/not-equal-validator.component.vue.js';
import '../../../validator/or-validator.component.vue.js';
import '../../../validator/pattern-validator.component.vue.js';
import '../../../validator/phone-validator.component.vue.js';
import '../../../validator/same-as-validator.component.vue.js';
import '../../../validator/url-validator.component.vue.js';
import '../../../validator/container-validator.component.js';
import '../../tiptap.component.vue.js';
import '../../tiptap-configuration.service.js';
import '@banquette/utils-type/is-array';
import '@banquette/utils-type/is-object';
import { registerModuleToolbarAlias } from '../../utils.js';
import '../bold/bold.component.vue.js';
import '../../../constant.js';
import '../../../form-control.proxy.js';
import '../../../form-storage.service.js';
import { AbstractTiptapModule } from '../abstract-tiptap-module.js';
import { ThemeConfiguration } from './theme-configuration.js';

registerModuleToolbarAlias('separator', '|');
var SeparatorComponent = /** @class */ (function (_super) {
    __extends(SeparatorComponent, _super);
    function SeparatorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeparatorComponent = __decorate([
        Themeable(ThemeConfiguration),
        Component({
            name: 'bt-form-tiptap-separator',
            directives: [BindThemeDirective]
        })
    ], SeparatorComponent);
    return SeparatorComponent;
}(AbstractTiptapModule));

export { SeparatorComponent as default };
