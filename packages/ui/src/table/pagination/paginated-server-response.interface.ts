import { Primitive } from "@banquette/utils-type/types";

/**
 * The data structure expected from the server for a paginated collection.
 */
export interface PaginatedServerResponseInterface {
    /**
     * The current page number (starting at 1).
     * Only required if the pagination strategy is `PaginationStrategy.Offset`.
     */
    page?: number;

    /**
     * The current page id.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    pageId?: Primitive;

    /**
     * The number of items visible for this page.
     */
    itemsPerPage?: number;

    /**
     * The total number of items available (sum of all pages).
     */
    total: number;

    /**
     * Defines the id to ask for the get the previous page.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    previousPageId?: Primitive;

    /**
     * Defines the id to ask for the get the next page.
     * Only required if the pagination strategy is `PaginationStrategy.Id`.
     */
    nextPageId?: Primitive;

    /**
     * Items visible in the current page.
     */
    items: any[];
}
