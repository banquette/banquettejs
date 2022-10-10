import { UnsubscribeFunction } from "@banquette/event/type";
import { Primitive, AnyObject } from "@banquette/utils-type/types";
import { HeadlessInterface } from "../headless.interface";
import { RemoteModule } from "../misc/remote/remote.module";
import { NodePropResolver } from "./constant";
import { NodeRemovedEventArg } from "./event/node-removed.event-arg";
import { HeadlessTreeViewDataInterface } from "./headless-tree-view-data.interface";
import { Node } from "./node";
/**
 * The view model logic behind a generic tree.
 */
export declare class HeadlessTreeViewModel<ViewDataType extends HeadlessTreeViewDataInterface = HeadlessTreeViewDataInterface> implements HeadlessInterface<ViewDataType> {
    /**
     * @inheritDoc
     */
    readonly viewData: ViewDataType;
    /**
     * Defines how to resolve the items' labels, identifiers, children, disabled and expanded status.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    nodesIdentifier: NodePropResolver<Primitive>;
    nodesLabel: NodePropResolver<string>;
    nodesChildren: NodePropResolver<any>;
    nodesDisabled: NodePropResolver<boolean>;
    nodesExpanded: NodePropResolver<boolean>;
    /**
     * Modules.
     */
    remote: RemoteModule;
    /**
     * If defined, make the ajax request contextualized per node.
     * A new request will be done for each opened node.
     */
    remoteNodeUrlParam: string | null;
    protected unsubscribeFunctions: UnsubscribeFunction[];
    private focusedIdentifier;
    private noChoiceAvailable;
    private searchBufferSlug;
    /**
     * Mapping between a raw object from the outside and its corresponding Node instance.
     */
    private rawNodes;
    private eventDispatcher;
    constructor();
    /**
     * Cleanup before the view model is destroyed.
     */
    dispose(): void;
    /**
     * @inheritDoc
     */
    setViewData(viewData: ViewDataType): void;
    /**
     * Fetch remote nodes if the configuration allows for it.
     * The resulting node will replace all nodes registered.
     *
     * If a node is given as parameter, the request will be contextualized for it and
     * the result will replace its children.
     */
    fetchRemoteNodes: import("@banquette/utils-type/types").GenericCallback<any, any>;
    /**
     * Synchronize an input tree with the one in use.
     */
    synchronize(data: AnyObject[], parent?: Node | null): void;
    /**
     * Replace the children of a node from a raw input.
     * If no parent is given, the root node is used.
     */
    setNodes(data: AnyObject[], parent?: Node | null): void;
    /**
     * Try to normalize a raw value into a Node.
     */
    normalizeNode(item: any, parent: Node | null): Node | null;
    /**
     * Show node's children.
     */
    expandNode(nodeOrId: Node | number): void;
    /**
     * Hide node's children.
     */
    collapseNode(nodeOrId: Node | number): void;
    /**
     * Toggle node's children.
     */
    toggleNode(nodeOrId: Node | number): void;
    /**
     * Remove a node by reference or id.
     */
    removeNode(nodeOrId: Node | number): boolean;
    /**
     * Be notified when a node is removed.
     */
    onNodeRemoved(cb: (event: NodeRemovedEventArg) => void): UnsubscribeFunction;
    /**
     * Update the visibility of the children of a node.
     */
    private changeNodeChildrenVisibility;
    /**
     * Try to resolve the label of a node.
     */
    private extractNodeLabel;
    /**
     * Try to extract the children data from a raw input.
     */
    private extractNodeChildren;
    /**
     * Try to resolve the disabled state of a node.
     */
    private extractNodeDisabledState;
    /**
     * Try to resolve the expanded state of a node.
     */
    private extractNodeExpandedState;
    /**
     * Try to resolve the identifier of a node.
     */
    private extractNodeIdentifier;
    /**
     * Recycle or create a node, based on a raw input.
     */
    private createNode;
    /**
     * Try to get a reference on a Node by its internal id.
     * The id is used to be resilient to proxified objects.
     */
    private getNodeById;
}
