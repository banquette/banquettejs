/*!
 * Banquette VueUi v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Wrap a SelectedChoice to add a `visible` flag.
 */
var WrappedSelectedChoice = /** @class */ (function () {
    function WrappedSelectedChoice(choice, visible) {
        this.choice = choice;
        this.visible = visible;
    }
    return WrappedSelectedChoice;
}());

exports.WrappedSelectedChoice = WrappedSelectedChoice;
