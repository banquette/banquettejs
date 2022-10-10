export interface I18nInterface {
    /**
     * Text of the popover.
     * An empty string will disable the popover.
     */
    popover: string;
    /**
     * Text to show for characters.
     *
     * Available variables:
     *   - {current}: the current number of characters
     *   - {limit}: the maximum number of characters
     */
    charactersText: string;
    /**
     * Text to show for words.
     *
     * Available variables:
     *   - {count}: the current number of words
     */
    wordsText: string;
}
