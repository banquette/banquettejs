export const AlertEvents = {
    /**
     * Show an alert.
     */
    Show: Symbol('show-alert'),

    /**
     * Hide a specific alert.
     */
    Hide: Symbol('hide-alert'),

    /**
     * Hide all visible alerts.
     */
    HideAll: Symbol('hide-all-alerts')
}

/**
 * Possible positions from which alerts stack.
 */
export enum StackPosition {
    TopLeft = 'top-left',
    Top = 'top',
    TopRight = 'top-right',
    BottomRight = 'bottom-right',
    Bottom = 'bottom',
    BottomLeft = 'bottom-left'
}
