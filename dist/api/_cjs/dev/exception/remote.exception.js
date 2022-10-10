/*!
 * Banquette Api v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var system_exception = require('@banquette/exception/_cjs/dev/system.exception');
var slugify = require('@banquette/utils-string/_cjs/dev/format/slugify');

/**
 * Generic exception thrown when something wrong happens with the http request.
 * This is normally generated automatically by the remote composable if your response matches `RemoteExceptionInterface`.
 *
 * You can also create it yourself from a http hook if you prefer.
 */
var RemoteException = /** @class */ (function (_super) {
    _tslib.__extends(RemoteException, _super);
    function RemoteException(slug, message, previous, extra) {
        if (slug === void 0) { slug = 'remote'; }
        var _this = _super.call(this, message, previous, extra) || this;
        _this.slug = slug;
        _this.slug = slugify.slugify(slug);
        return _this;
    }
    return RemoteException;
}(system_exception.SystemException));

exports.RemoteException = RemoteException;
