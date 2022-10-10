import { Primitive, AnyObject } from "@banquette/utils-type/types";
import { NodeRemoteFetchStatus } from "./constant";
/**
 * The view representation of an item of the tree.
 */
export declare class Node {
    readonly parent: Node | null;
    private static MaxId;
    readonly id: number;
    /**
     * The text visible to the user.
     */
    private _label;
    get label(): string;
    set label(label: string);
    /**
     * Slugified label, used for local search.
     */
    readonly labelSlug: string | null;
    /**
     * The value used to check for equality with other items.
     */
    identifier: Primitive | undefined;
    /**
     * If true, the label can contain HTML.
     * Default should be false.
     */
    allowHtml: boolean;
    /**
     * `true` if the item is focused by the user (e.g. moving through items with the keyboard).
     */
    focused: boolean;
    /**
     * `true` if the item is non-selectable by the user.
     */
    disabled: boolean;
    /**
     * `true` if the children of the node are visible.
     */
    expanded: boolean;
    /**
     * If `false`, the item should not be displayed, even if present in the list of items.
     */
    visible: boolean;
    /**
     * If `false` the children of the item have not been fetched yet.
     */
    fetched: boolean;
    /**
     * Number of non-filtered children.
     * It has no link with `childrenVisible`.
     */
    childrenVisibleCount: number;
    /**
     * Status of the remote fetching of children.
     */
    remoteFetchStatus: NodeRemoteFetchStatus;
    remotePending: boolean;
    /**
     * Contains the error message given by the remote module in case a remote fetch has failed.
     */
    remoteFetchError: string | null;
    /**
     * List of child nodes.
     */
    children: Node[];
    /**
     * The raw value the Node instance has been created from.
     */
    readonly originalValue: AnyObject;
    constructor(originalValue: AnyObject, parent?: Node | null);
}
