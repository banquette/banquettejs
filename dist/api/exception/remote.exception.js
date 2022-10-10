/*!
 * Banquette Api v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { __extends } from '../_virtual/_tslib.js';
import { SystemException } from '@banquette/exception/system.exception';
import { slugify } from '@banquette/utils-string/format/slugify';

/**
 * Generic exception thrown when something wrong happens with the http request.
 * This is normally generated automatically by the remote composable if your response matches `RemoteExceptionInterface`.
 *
 * You can also create it yourself from a http hook if you prefer.
 */
var RemoteException = /** @class */ (function (_super) {
    __extends(RemoteException, _super);
    function RemoteException(slug, message, previous, extra) {
        if (slug === void 0) { slug = 'remote'; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.slug = slug;
        _this.slug = slugify(slug);
        return _this;
    }
    return RemoteException;
}(SystemException));

export { RemoteException };
