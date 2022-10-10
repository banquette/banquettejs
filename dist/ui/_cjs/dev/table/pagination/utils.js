/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isArray = require('@banquette/utils-type/_cjs/dev/is-array');

/**
 * `PaginatedServerResponseInterface` type guard.
 */
function isPaginatedServerResponseInterface(result) {
    return isArray.isArray(result.items) && 'total' in result && 'itemsPerPage' in result && ('page' in result || 'pageId' in result);
}

exports.isPaginatedServerResponseInterface = isPaginatedServerResponseInterface;
