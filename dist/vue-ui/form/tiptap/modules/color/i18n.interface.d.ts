export interface I18nInterface {
    /**
     * Title of the text color column.
     */
    textColorTitle: string;
    /**
     * Text color reset button text.
     */
    textColorReset: string;
    /**
     * Title of the background color column.
     */
    backgroundColorTitle: string;
    /**
     * Background color reset button text.
     */
    backgroundColorReset: string;
    /**
     * Title to show when no colors are available.
     */
    emptyTitle: string;
    /**
     * Text of the popover.
     * An empty string will disable the popover.
     */
    popover: string;
}
