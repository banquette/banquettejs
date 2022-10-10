/*!
 * Banquette Http v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var request_exception = require('./request.exception.js');

/**
 * Special kind of RequestException thrown when the response returns a status 401 or 403.
 */
var AuthenticationException = /** @class */ (function (_super) {
    _tslib.__extends(AuthenticationException, _super);
    function AuthenticationException() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthenticationException;
}(request_exception.RequestException));

exports.AuthenticationException = AuthenticationException;
