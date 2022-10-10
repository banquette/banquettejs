/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends, __decorate } from '../_virtual/_tslib.js';
import { Service } from '@banquette/dependency-injection/decorator/service.decorator';
import { UsageException } from '@banquette/exception/usage.exception';
import { WeakObjectMap } from '@banquette/utils-misc/weak-object-map';

var FormStorageService = /** @class */ (function (_super) {
    __extends(FormStorageService, _super);
    function FormStorageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FormStorageService.prototype.register = function (obj, alias) {
        if (this.has(alias)) {
            throw new UsageException("A form named \"".concat(alias, "\" is already registered in the storage."));
        }
        _super.prototype.register.call(this, obj, alias);
    };
    FormStorageService = __decorate([
        Service()
    ], FormStorageService);
    return FormStorageService;
}(WeakObjectMap));

export { FormStorageService };
