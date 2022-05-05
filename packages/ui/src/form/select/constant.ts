
export const ChoiceOrigin = {
    /**
     * The default origin, meaning the choice has been added manually with no custom origin specified.
     */
    Default: 'default',

    /**
     * For choices coming from the remote composable.
     */
    Remote: 'remote'
};

export const ChoicesEvents = {
    /**
     * Trigger when a choice gained focus.
     */
    ChoiceFocused: Symbol('choice-focused')
};

export enum ChoicesRemoteFetchStatus {
    /**
     * No request is running.
     */
    Idle = 'idle',

    /**
     * A remote fetch is running.
     */
    Pending = 'pending',

    /**
     * A remote fetch has failed.
     */
    Failed = 'failed',

    /**
     * The minimum search length has not been reached.
     */
    WaitingSearch = 'waiting-search'
}

/**
 * Different strategies to search on the set of choices.
 */
export enum SearchType {
    /**
     * The search is disabled.
     */
    None = 'none',

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

export type ChoicesPropResolver<T> = ((choice: any) => T)|string|null;
export type SearchParamName = ((params: Record<string, string>) => void) | string | string[];
