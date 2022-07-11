
export interface I18nInterface {
    /**
     * Name of the font when no custom font is defined.
     */
    defaultFont: string;

    /**
     * Text of the popover.
     * An empty string will disable the popover.
     */
    popover: string;

    /**
     * Text to show in the popover that is visible for missing fonts.
     */
    missingPopover: string;
}
