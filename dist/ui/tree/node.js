/*!
 * Banquette Ui v0.0.0 (ESM)
 * (c) 2022-2022 Julien Pinto
 * Released under Apache License, Version 2.0
 */
import { slugify } from '@banquette/utils-string/format/slugify';
import { NodeRemoteFetchStatus } from './constant.js';

/**
 * The view representation of an item of the tree.
 */
var Node = /** @class */ (function () {
    function Node(originalValue, parent) {
        if (parent === void 0) { parent = null; }
        this.parent = parent;
        this.id = ++Node.MaxId;
        /**
         * The text visible to the user.
         */
        this._label = '/';
        /**
         * Slugified label, used for local search.
         */
        this.labelSlug = null;
        /**
         * If true, the label can contain HTML.
         * Default should be false.
         */
        this.allowHtml = false;
        /**
         * `true` if the item is focused by the user (e.g. moving through items with the keyboard).
         */
        this.focused = false;
        /**
         * `true` if the item is non-selectable by the user.
         */
        this.disabled = false;
        /**
         * `true` if the children of the node are visible.
         */
        this.expanded = false;
        /**
         * If `false`, the item should not be displayed, even if present in the list of items.
         */
        this.visible = true;
        /**
         * If `false` the children of the item have not been fetched yet.
         */
        this.fetched = false;
        /**
         * Number of non-filtered children.
         * It has no link with `childrenVisible`.
         */
        this.childrenVisibleCount = 0;
        /**
         * Status of the remote fetching of children.
         */
        this.remoteFetchStatus = NodeRemoteFetchStatus.Idle;
        this.remotePending = false;
        /**
         * Contains the error message given by the remote module in case a remote fetch has failed.
         */
        this.remoteFetchError = null;
        /**
         * List of child nodes.
         */
        this.children = [];
        this.originalValue = originalValue;
    }
    Object.defineProperty(Node.prototype, "label", {
        get: function () { return this._label; },
        set: function (label) {
            this._label = label;
            this.labelSlug = label !== '/' ? slugify(label) : null;
        },
        enumerable: false,
        configurable: true
    });
    Node.MaxId = 0;
    return Node;
}());

export { Node };
