/*!
 * Banquette Ui v0.0.0 (CommonJS)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SelectedChoice = /** @class */ (function () {
    function SelectedChoice(label, identifier, rawValue) {
        /**
         * Unique id of the selected item.
         */
        this.id = ++SelectedChoice.MaxId;
        this.identifier = identifier;
        this.label = label;
        this.rawValue = rawValue;
    }
    SelectedChoice.MaxId = 0;
    return SelectedChoice;
}());

exports.SelectedChoice = SelectedChoice;
