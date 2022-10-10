/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../../_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { VarHolder } from '@banquette/utils-misc/var-holder';

var TiptapConfigurationService = /** @class */ (function (_super) {
    __extends(TiptapConfigurationService, _super);
    function TiptapConfigurationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TiptapConfigurationService = __decorate([
        Service()
    ], TiptapConfigurationService);
    return TiptapConfigurationService;
}(VarHolder));

export { TiptapConfigurationService };
