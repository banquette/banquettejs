/*!
 * Banquette VueUi v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
var AlertEvents = {
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
};
/**
 * Possible positions from which alerts stack.
 */
var StackPosition;
(function (StackPosition) {
    StackPosition["TopLeft"] = "top-left";
    StackPosition["Top"] = "top";
    StackPosition["TopRight"] = "top-right";
    StackPosition["BottomRight"] = "bottom-right";
    StackPosition["Bottom"] = "bottom";
    StackPosition["BottomLeft"] = "bottom-left";
})(StackPosition || (StackPosition = {}));

export { AlertEvents, StackPosition };
