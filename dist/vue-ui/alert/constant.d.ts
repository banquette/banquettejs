export declare const AlertEvents: {
    /**
     * Show an alert.
     */
    Show: symbol;
    /**
     * Hide a specific alert.
     */
    Hide: symbol;
    /**
     * Hide all visible alerts.
     */
    HideAll: symbol;
};
/**
 * Possible positions from which alerts stack.
 */
export declare enum StackPosition {
    TopLeft = "top-left",
    Top = "top",
    TopRight = "top-right",
    BottomRight = "bottom-right",
    Bottom = "bottom",
    BottomLeft = "bottom-left"
}
