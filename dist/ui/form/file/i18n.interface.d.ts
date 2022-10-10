export interface I18nInterface {
    /**
     * Text to show as file name when no file name is available.
     */
    noName: string;
    /**
     * The type of the file is not allowed.
     */
    invalidType: string;
    /**
     * The size of a file exceeds the individual file size limit.
     */
    individualSizeExceeded: string;
    /**
     * The sum of the sizes of all added files exceeds the total limit.
     */
    totalSizeExceeded: string;
    /**
     * Generic error when no other error describe what happened.
     */
    unknownError: string;
}
