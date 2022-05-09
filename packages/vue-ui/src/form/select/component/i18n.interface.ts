
export interface I18nInterface {
    /**
     * Text to show when the dropdown is opened but no choices are available for selection
     * and no search has been made.
     */
    empty: string;

    /**
     * Text to show when the dropdown is opened but no choices are available
     * from the result of a search.
     */
    noResults: string;

    /**
     * Text to show when a search string is defined by shorter than the minimum length.
     * Available variables: minLength.
     */
    searchMinLength: string;
}
