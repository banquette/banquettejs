import { slugify } from "@banquette/utils-string";
import { Primitive, AnyObject } from "@banquette/utils-type";
import { NodeRemoteFetchStatus } from "./constant";

let MaxId = 0;

/**
 * The view representation of an item of the tree.
 */
export class Node {
    public readonly id: number = ++MaxId;

    /**
     * The text visible to the user.
     */
    private _label: string = '/';
    public get label(): string { return this._label }
    public set label(label: string) {
        this._label = label;
        (this as any /* Writeable<Node> */).labelSlug = label !== '/' ? slugify(label) : null;
    }

    /**
     * Slugified label, used for local search.
     */
    public readonly labelSlug: string|null = null;

    /**
     * The value used to check for equality with other items.
     */
    public identifier: Primitive|undefined;

    /**
     * If true, the label can contain HTML.
     * Default should be false.
     */
    public allowHtml: boolean = false;

    /**
     * `true` if the item is focused by the user (e.g. moving through items with the keyboard).
     */
    public focused: boolean = false;

    /**
     * `true` if the item is non-selectable by the user.
     */
    public disabled: boolean = false;

    /**
     * `true` if the children of the node are visible.
     */
    public expanded: boolean = false;

    /**
     * If `false`, the item should not be displayed, even if present in the list of items.
     */
    public visible: boolean = true;

    /**
     * If `false` the children of the item have not been fetched yet.
     */
    public fetched: boolean = false;

    /**
     * Number of non-filtered children.
     * It has no link with `childrenVisible`.
     */
    public childrenVisibleCount: number = 0;

    /**
     * Status of the remote fetching of children.
     */
    public remoteFetchStatus: NodeRemoteFetchStatus = NodeRemoteFetchStatus.Idle;
    public remotePending: boolean = false;

    /**
     * Contains the error message given by the remote module in case a remote fetch has failed.
     */
    public remoteFetchError: string|null = null;

    /**
     * List of child nodes.
     */
    public children: Node[] = [];

    /**
     * The raw value the Node instance has been created from.
     */
    public readonly originalValue: AnyObject;

    public constructor(originalValue: AnyObject, public readonly parent: Node|null = null) {
        this.originalValue = originalValue;
    }
}
