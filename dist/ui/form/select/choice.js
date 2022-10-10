/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { slugify } from '@banquette/utils-string/format/slugify';
import { ChoiceOrigin } from './constant.js';

/**
 * The view representation of a choice.
 */
var Choice = /** @class */ (function () {
    function Choice(identifier, label, value, group, origin, originalValue) {
        /**
         * Optional group in which to put the choice.
         */
        this.group = null;
        /**
         * Define what part of the app is responsible for this choice.
         *
         * This is useful when the choices can come from multiple sources at the same time (remote and local for example).
         * By grouping all the remote choices together in a "remote" origin, they can be updated without touching to the other choices.
         */
        this.origin = ChoiceOrigin.Default;
        /**
         * If true, the label can contain HTML.
         * Default should be false.
         */
        this.allowHtml = false;
        /**
         * `true` if the choice should appear as selected.
         */
        this.selected = false;
        /**
         * `true` if the choice is focused by the user (e.g. moving through choices with the keyboard).
         */
        this.focused = false;
        /**
         * `true` if the choice is non-selectable by the user.
         */
        this.disabled = false;
        /**
         * If `false`, the choice should not be displayed, even if present in the list of choices.
         */
        this.visible = true;
        /**
         * `true` if the Choice instance has been created externally outside of the view model.
         */
        this.external = true;
        /**
         * `true` if the Choice instance has been just been created.
         */
        this.new = true;
        this.identifier = identifier;
        this.label = label;
        this.value = value;
        this.group = group;
        this.origin = origin;
        this.originalValue = originalValue;
    }
    Object.defineProperty(Choice.prototype, "label", {
        get: function () { return this._label; },
        set: function (label) {
            this._label = label;
            this.labelSlug = slugify(label);
        },
        enumerable: false,
        configurable: true
    });
    return Choice;
}());

export { Choice };
