/**
 * A base interface all headless components must implement.
 */
export interface HeadlessInterface<ViewDataType> {
    /**
     * The object holding all view data for the module.
     */
    readonly viewData: ViewDataType;
    /**
     * Re-assign the view data object to use.
     * Useful if you have proxified the original view data object.
     *
     * Why a `setViewData()` method instead of making `viewData` writeable?
     * Because the object may contain the view data of other modules, that have to be reassigned too.
     */
    setViewData(viewData: ViewDataType): void;
}
