/*!
 * Banquette Model v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Exception thrown when the alias of a model cannot be found.
 */
var ModelAliasNotFoundException = /** @class */ (function (_super) {
    __extends(ModelAliasNotFoundException, _super);
    function ModelAliasNotFoundException(alias, message, previous, extra) {
        var _this = _super.call(this, message, previous, extra) || this;
        _this.alias = alias;
        _this.slug = 'model-alias-not-found';
        return _this;
    }
    return ModelAliasNotFoundException;
}(SystemException));

export { ModelAliasNotFoundException };
