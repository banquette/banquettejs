import { FilteringServerResponseInterface } from "./filtering/filtering-server-response.interface";
import { OrderingServerResponseInterface } from "./ordering/ordering-server-response.interface";
import { PaginatedServerResponseInterface } from "./pagination/paginated-server-response.interface";

let MaxId: number = 0;

export class ServerResult<T = unknown> {
    /**
     * Unique identifier of the result.
     */
    public id: number = ++MaxId;

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
