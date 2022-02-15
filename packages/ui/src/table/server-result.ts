import { FilteringServerResponseInterface } from "./filtering/filtering-server-response.interface";
import { OrderingServerResponseInterface } from "./ordering/ordering-server-response.interface";
import { PaginatedServerResponseInterface } from "./pagination/paginated-server-response.interface";

export class ServerResult<T = unknown> {
    private static MaxId: number = 0;

    /**
     * Unique identifier of the result.
     */
    public id: number = ++ServerResult.MaxId;

    /**
     * Array of items to show.
     */
    public items: T[] = [];

    /**
     * If defined, the pagination is considered done on the server.
     */
    public pagination?: PaginatedServerResponseInterface|null;

    /**
     * If defined, the filtering is considered done on the server.
     */
    public filtering?: FilteringServerResponseInterface|null;

    /**
     * If defined, the ordering is considered done on the server.
     */
    public ordering?: OrderingServerResponseInterface|null;
}
