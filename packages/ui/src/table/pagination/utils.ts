import { isArray } from "@banquette/utils-type/is-array";
import { PaginatedServerResponseInterface } from "./paginated-server-response.interface";

/**
 * `PaginatedServerResponseInterface` type guard.
 */
export function isPaginatedServerResponseInterface(result: any): result is PaginatedServerResponseInterface {
    return isArray(result.items) && 'total' in result && 'itemsPerPage' in result && ('page' in result || 'pageId' in result);
}
