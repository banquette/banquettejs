/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';

/**
 * Thrown whenever a fetch fails for another reason than a cancellation.
 */
var FetchFailedException = /** @class */ (function (_super) {
    __extends(FetchFailedException, _super);
    function FetchFailedException() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slug = 'fetch-failed';
        return _this;
    }
    return FetchFailedException;
}(SystemException));

export { FetchFailedException };
