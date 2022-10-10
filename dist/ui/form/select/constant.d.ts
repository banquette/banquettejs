export declare const ChoiceOrigin: {
    /**
     * The default origin, meaning the choice has been added manually with no custom origin specified.
     */
    Default: string;
    /**
     * For choices coming from the remote composable.
     */
    Remote: string;
    /**
     * For choices created by the end-user.
     */
    User: string;
};
export declare const ChoicesEvents: {
    /**
     * Trigger when a choice gained focus.
     */
    ChoiceFocused: symbol;
};
export declare enum ChoicesRemoteFetchStatus {
    /**
     * No request is running.
     */
    Idle = "idle",
    /**
     * A remote fetch is running.
     */
    Pending = "pending",
    /**
     * A remote fetch has failed.
     */
    Failed = "failed",
    /**
     * The minimum search length has not been reached.
     */
    WaitingSearch = "waiting-search"
}
/**
 * Different strategies to search on the set of choices.
 */
export declare enum SearchType {
    /**
     * The search is disabled.
     */
    None = "none",
    /**
     * A search input should be visible at all time.
     *
     * When the user enters something in it, results are filtered so only matching results remain visible in the dropdown.
     *
     * This search mode is intended for moderate sets of items.
     */
    Local = "local",
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
    Remote = "remote"
}
export declare type ChoicesPropResolver<T> = ((choice: any) => T) | string | null;
export declare type SearchParamName = ((params: Record<string, string>) => void) | string | string[];
