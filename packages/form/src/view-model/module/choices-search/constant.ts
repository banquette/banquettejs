/**
 * Different strategies to search on the set of choices.
 */
export enum SearchType {
    /**
     * No search input should be visible.
     *
     * If the user starts typing, the text will be added to a temporary buffer that reset after a short time of inactivity.
     *
     * Results are not filtered, the first match is simply highlighted and scrolled to.
     *
     * This search mode is intended for small sets of items.
     */
    Implicit = 'implicit',

    /**
     * A search input should be visible at all time.
     *
     * When the user enters something in it, results are filtered so only matching results remain visible in the dropdown.
     *
     * This search mode is intended for moderate sets of items.
     */
    Local = 'local',

    /**
     * A search input should be visible at all time.
     *
     * No results are visible in the dropdown until the user searches something.
     * At which point a request is made to fetch the corresponding choices.
     *
     * This search mode is intended for large sets of items.
     *
     * A remote endpoint must be configured to use this search type.
     */
    Remote = 'remote'
}

export const ChoicesSearchEvents = {
    /**
     * Triggered when a new search is ready to be consumed.
     */
    SearchChanged: Symbol('search-changed'),

    /**
     * Triggered when the search wants to focus or unfocus an item.
     */
    FocusChanged: Symbol('focus-changed')
};
