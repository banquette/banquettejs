export interface I18nInterface {
    /**
     * Text of the popover.
     * An empty string will disable the popover.
     */
    popover: string;
    /**
     * The text to show in the dropdown for each title.
     * The string "{level}" will be replaced by the level of the heading.
     */
    headingTitle: string;
    /**
     * Text of the reset button.
     */
    resetButton: string;
}
