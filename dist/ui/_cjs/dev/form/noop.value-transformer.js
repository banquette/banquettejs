/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.NoopTransformer = NoopTransformer;
