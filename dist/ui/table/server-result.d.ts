import { FilteringServerResponseInterface } from "./filtering/filtering-server-response.interface";
import { OrderingServerResponseInterface } from "./ordering/ordering-server-response.interface";
import { PaginatedServerResponseInterface } from "./pagination/paginated-server-response.interface";
export declare class ServerResult<T = unknown> {
    private static MaxId;
    /**
     * Unique identifier of the result.
     */
    id: number;
    /**
     * Array of items to show.
     */
    items: T[];
    /**
     * If defined, the pagination is considered done on the server.
     */
    pagination?: PaginatedServerResponseInterface | null;
    /**
     * If defined, the filtering is considered done on the server.
     */
    filtering?: FilteringServerResponseInterface | null;
    /**
     * If defined, the ordering is considered done on the server.
     */
    ordering?: OrderingServerResponseInterface | null;
}
