export interface ItemInterface {
    /**
     * The actual item.
     */
    item: any;

    /**
     * If `true`, show the `detail` slot (if used by the user).
     */
    detailsVisible: boolean;

    /**
     * Inverse the state of `detailsVisible`.
     */
    toggleDetails: () => void;
}
