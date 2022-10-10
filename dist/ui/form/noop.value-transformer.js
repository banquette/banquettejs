/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
/**
 * Default transformer doing nothing.
 */
var NoopTransformer = {
    /**
     * Transform a value set by the view to the format expected by the form control.
     */
    viewToControl: function (value) {
        return value;
    },
    /**
     * Transform a value set by the form control to the format expected by the view.
     */
    controlToView: function (value) {
        return value;
    }
};

export { NoopTransformer };
