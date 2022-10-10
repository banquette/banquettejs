import { NavigationItemInterface } from "./navigation-item.interface";
/**
 * Represent the state of the pagination as seen from the view.
 */
export interface PaginationStateInterface {
    /**
     * The current page number.
     */
    page: number;
    /**
     * The total number of items in the result set.
     */
    totalResultsCount: number;
    /**
     * The maximum number of results a page can contain for the current configuration.
     */
    totalResultsPerPage: number;
    /**
     * The total number of pages in the result set.
     */
    totalPagesCount: number;
    /**
     * True if the current page is the first one.
     */
    isFirstPage: boolean;
    /**
     * True if the current page is the last one.
     */
    isLastPage: boolean;
    /**
     * Index of the fist result of the current page in the whole result set (starting at 1).
     * For example:
     *
     * For 3 pages of results at 30 items per page, the value will be:
     *   - for page 1: 1
     *   - for page 2: 31
     *   - for page 3: 61
     */
    firstResultCount: number;
    /**
     * Index of the last result of the current page in the whole result set.
     * For example:
     *
     * For 3 pages of results at 30 items per page, the value will be:
     *   - for page 1: 30
     *   - for page 2: 60
     *   - for page 3: 90
     */
    lastResultCount: number;
    /**
     * Controls to navigate between pages.
     */
    navItems: NavigationItemInterface[];
}
