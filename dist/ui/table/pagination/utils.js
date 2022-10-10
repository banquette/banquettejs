/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { isArray } from '@banquette/utils-type/is-array';

/**
 * `PaginatedServerResponseInterface` type guard.
 */
function isPaginatedServerResponseInterface(result) {
    return isArray(result.items) && 'total' in result && 'itemsPerPage' in result && ('page' in result || 'pageId' in result);
}

export { isPaginatedServerResponseInterface };
