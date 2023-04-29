import { EventDispatcher, UnsubscribeFunction } from "@banquette/event";
import { ExceptionFactory, UsageException } from "@banquette/exception";
import { HttpResponse } from "@banquette/http";
import { debounce } from "@banquette/utils-misc";
import { replaceStringVariables } from "@banquette/utils-string";
import { ensureArray, ensureBoolean, ensureString, isArray, isFunction, isObject, isPrimitive, isScalar, isUndefined, Primitive, AnyObject } from "@banquette/utils-type";
import { HeadlessInterface } from "../headless.interface";
import { RemoteModule } from "../misc/remote/remote.module";
import { NodePropResolver, HeadlessTreeViewModelEvents, NodeRemoteFetchStatus } from "./constant";
import { NodeRemovedEventArg } from "./event/node-removed.event-arg";
import { HeadlessTreeViewDataInterface } from "./headless-tree-view-data.interface";
import { Node } from "./node";

/**
 * The view model logic behind a generic tree.
 */
export class HeadlessTreeViewModel<ViewDataType extends HeadlessTreeViewDataInterface = HeadlessTreeViewDataInterface> implements HeadlessInterface<ViewDataType> {
    /**
     * @inheritDoc
     */
    public readonly viewData: ViewDataType;

    /**
     * Defines how to resolve the items' labels, identifiers, children, disabled and expanded status.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    public nodesIdentifier  : NodePropResolver<Primitive> = null;
    public nodesLabel       : NodePropResolver<string> = null;
    public nodesChildren    : NodePropResolver<any> = null;
    public nodesDisabled    : NodePropResolver<boolean> = null;
    public nodesExpanded    : NodePropResolver<boolean> = null;

    /**
     * Modules.
     */
    public remote: RemoteModule;

    /**
     * If defined, make the ajax request contextualized per node.
     * A new request will be done for each opened node.
     */
    public remoteNodeUrlParam!: string|null;

    protected unsubscribeFunctions: UnsubscribeFunction[] = [];
    private focusedIdentifier: any;
    private noChoiceAvailable: boolean = true;
    private searchBufferSlug: string = '';

    /**
     * Mapping between a raw object from the outside and its corresponding Node instance.
     */
    private rawNodes = new WeakMap<AnyObject, Node>();
    private eventDispatcher: EventDispatcher = new EventDispatcher();

    public constructor() {
        this.remote = new RemoteModule();
        this.remote.updateConfiguration({allowMultiple: true});
        this.viewData = {
            // The root is set to `null` until `setViewData` to give time to the component to configure the view model.
            root: null as any
        } as ViewDataType;
    }

    /**
     * Cleanup before the view model is destroyed.
     */
    public dispose(): void {
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
    }

    /**
     * @inheritDoc
     */
    public setViewData(viewData: ViewDataType): void {
        (this as any /* Writeable<HeadlessTreeViewModel> */).viewData = viewData;
        if (!this.viewData.root) {
            this.viewData.root = this.createNode({}, null);
        }
    }

    /**
     * Fetch remote nodes if the configuration allows for it.
     * The resulting node will replace all nodes registered.
     *
     * If a node is given as parameter, the request will be contextualized for it and
     * the result will replace its children.
     */
    public fetchRemoteNodes = debounce((() => {
        // Responses of running requests, indexed by node id.
        let running: Record<number, HttpResponse<any>> = {};
        return (nodeOrId: Node|number|null = null) => {
            if (!this.remote.isApplicable) {
                return ;
            }
            const params: Record<string, string> = {};
            if (nodeOrId !== null) {
                if (!(nodeOrId instanceof Node)) {
                    const nodeSearchResult = this.getNodeById(nodeOrId);
                    if (nodeSearchResult === null) {
                        throw new UsageException(`No node has been found for id "${nodeOrId}".`);
                    }
                    nodeOrId = nodeSearchResult;
                }
                if (this.remoteNodeUrlParam === null) {
                    throw new UsageException(
                        'Cannot fetch contextualized nodes because no node url parameter has been defined. ' +
                        'Please set a value to "remoteNodeUrlParam".'
                    );
                }
                if (!nodeOrId.identifier) {
                    throw new UsageException(
                        `Your node "${nodeOrId.label}" must have a unique identifier ` +
                        `if you want to fetch remote children for it.`
                    );
                }
                params[this.remoteNodeUrlParam] = String(nodeOrId.identifier);
            }
            const targetNode: Node = nodeOrId ? nodeOrId : this.viewData.root;

            // Cancel running request.
            if (!isUndefined(running[targetNode.id])) {
                running[targetNode.id].request.cancel();
            }

            // The start a new one.
            targetNode.remoteFetchError = null;
            targetNode.remotePending = true;
            targetNode.remoteFetchStatus = NodeRemoteFetchStatus.Pending;
            running[targetNode.id] = this.remote.send(null, params);
            running[targetNode.id].promise.then((response) => {
                this.setNodes(ensureArray(response.result), targetNode);
                targetNode.remoteFetchStatus = NodeRemoteFetchStatus.Idle;
                targetNode.fetched = true;
            }).catch((reason: any) => {
                if (reason instanceof HttpResponse) {
                    if (reason.isCanceled) {
                        return;
                    }
                    reason = reason.error;
                }
                targetNode.remoteFetchError = ExceptionFactory.EnsureException(reason, 'Unknown error.').message;
                targetNode.remoteFetchStatus = NodeRemoteFetchStatus.Failed;
            }).finally(() => {
                targetNode.remotePending = false;
                delete running[targetNode.id];
            });
        };
    })(), 0, false);

    /**
     * Synchronize an input tree with the one in use.
     */
    public synchronize(data: AnyObject[], parent: Node|null = null): void {
        if (parent === null) {
            parent = this.viewData.root;
        }
        for (const item of data) {
            const node = this.normalizeNode(item, parent);
            if (node !== null) {
                const children = this.extractNodeChildren(item);
                if (children.length) {
                    this.synchronize(children, node);
                }
                let found = false;
                for (const child of parent.children) {
                    if (child.id === node.id) {
                        found = true;
                        break ;
                    }
                }
                if (found) {
                    continue;
                }
                parent.children.push(node);
                parent.childrenVisibleCount++;
            }
        }
    }

    /**
     * Replace the children of a node from a raw input.
     * If no parent is given, the root node is used.
     */
    public setNodes(data: AnyObject[], parent: Node|null = null): void {
        if (parent === null) {
            parent = this.viewData.root;
        }
        parent.children = [];
        parent.childrenVisibleCount = 0;
        this.synchronize(data, parent);
    }

    /**
     * Try to normalize a raw value into a Node.
     */
    public normalizeNode(item: any, parent: Node|null): Node|null {
        if (item instanceof Node) {
            return item;
        }
        const instance = this.createNode(item, parent);
        instance.identifier = this.extractNodeIdentifier(item);
        instance.label = this.extractNodeLabel(item);
        instance.disabled = this.extractNodeDisabledState(item);

        const userExpanded = this.extractNodeExpandedState(item);
        if (userExpanded !== null) {
            instance.expanded = userExpanded;
        }
        if (isObject(item)) {
            this.rawNodes.set(item, instance);
        }
        return instance;
    }

    /**
     * Show node's children.
     */
    public expandNode(nodeOrId: Node|number): void {
        this.changeNodeChildrenVisibility(nodeOrId, true);
    }

    /**
     * Hide node's children.
     */
    public collapseNode(nodeOrId: Node|number): void {
        this.changeNodeChildrenVisibility(nodeOrId, false);
    }

    /**
     * Toggle node's children.
     */
    public toggleNode(nodeOrId: Node|number): void {
        this.changeNodeChildrenVisibility(nodeOrId, 'inverse');
    }

    /**
     * Remove a node by reference or id.
     */
    public removeNode(nodeOrId: Node|number): boolean {
        const targetId = nodeOrId instanceof Node ? nodeOrId.id : nodeOrId;
        const search = (parent: Node): boolean => {
            for (let i = 0; i < parent.children.length; ++i) {
                if (parent.children[i].id === targetId) {
                    const removed = parent.children[i];
                    parent.children.splice(i, 1);
                    parent.childrenVisibleCount = parent.children.length;
                    this.eventDispatcher.dispatch(HeadlessTreeViewModelEvents.NodeRemoved, new NodeRemovedEventArg(removed));
                    return true;
                }
                if (search(parent.children[i])) {
                    return true;
                }
            }
            return false;
        }
        return search(this.viewData.root);
    }

    /**
     * Be notified when a node is removed.
     */
    public onNodeRemoved(cb: (event: NodeRemovedEventArg) => void): UnsubscribeFunction {
        return this.eventDispatcher.subscribe(HeadlessTreeViewModelEvents.NodeRemoved, cb);
    }

    /**
     * Update the visibility of the children of a node.
     */
    private changeNodeChildrenVisibility(nodeOrId: Node|number, targetVisibility: boolean|'inverse'): void {
        const node = nodeOrId instanceof Node ? nodeOrId : this.getNodeById(nodeOrId);
        if (!node || node.disabled) {
            return ;
        }
        node.expanded = targetVisibility === true || (targetVisibility === 'inverse' && !node.expanded);
        if (node.expanded && this.remoteNodeUrlParam && !node.fetched) {
            this.fetchRemoteNodes(node);
        }
    }

    /**
     * Try to resolve the label of a node.
     */
    private extractNodeLabel(item: any): string {
        if (isFunction(this.nodesLabel)) {
            const label = this.nodesLabel(item);
            if (!isScalar(label)) {
                console.warn(`The "nodesLabel" function must return a scalar value, for:`, item);
            }
            return String(label);
        }
        if (isScalar(item)) {
            return String(item);
        }
        const defaultLabel = '(unknown label)';
        if (isArray(item)) {
            return item.length > 0 ? item[0] : defaultLabel;
        }
        if (!isObject(item)) {
            return defaultLabel;
        }
        if (this.nodesLabel !== null) {
            if (!isUndefined(item[this.nodesLabel])) {
                return ensureString(item[this.nodesLabel]);
            }
            // Check if the user didn't give both the property and the expression.
            // In such a case it could mean "use the property if available, otherwise the expression.".
            if (this.nodesLabel.indexOf('{') > -1) {
                // TODO: make the start and end chars configurable.
                return replaceStringVariables(this.nodesLabel, item, '{', '}');
            }
        }
        console.warn('Please define how to resolve the label using the "nodesLabel" attribute, for:', item);
        return defaultLabel;
    }

    /**
     * Try to extract the children data from a raw input.
     */
    private extractNodeChildren(item: any): any[] {
        if (isFunction(this.nodesChildren)) {
            return ensureArray(this.nodesChildren(item));
        }
        if (isArray(item)) {
            return item.slice(1);
        }
        if (!isObject(item) || !this.nodesChildren) {
            return [];
        }
        return ensureArray(item[this.nodesChildren]);
    }

    /**
     * Try to resolve the disabled state of a node.
     */
    private extractNodeDisabledState(item: any): boolean {
        if (isFunction(this.nodesDisabled)) {
            return ensureBoolean(this.nodesDisabled(item));
        }
        if (!isObject(item) || !this.nodesDisabled) {
            return false;
        }
        return !!item[this.nodesDisabled];
    }

    /**
     * Try to resolve the expanded state of a node.
     */
    private extractNodeExpandedState(item: any): boolean|null {
        if (isFunction(this.nodesExpanded)) {
            return ensureBoolean(this.nodesExpanded(item));
        }
        if (!isObject(item) || !this.nodesExpanded) {
            return null;
        }
        return !!item[this.nodesExpanded];
    }

    /**
     * Try to resolve the identifier of a node.
     */
    private extractNodeIdentifier(item: any): Primitive|undefined {
        if (isFunction(this.nodesIdentifier)) {
            const value = this.nodesIdentifier(item);
            if (isPrimitive(value)) {
                return value;
            }
        }
        if (isScalar(item)) {
            return item;
        }
        if (!isObject(item)) {
            console.warn(`Unsupported node of type "${typeof(item)}".`);
            return undefined;
        }
        if (this.nodesIdentifier !== null && !isFunction(this.nodesIdentifier)) {
            if (!isUndefined(item[this.nodesIdentifier])) {
                return item[this.nodesIdentifier];
            }
            console.warn(`Identifier property "${this.nodesIdentifier}" not found, for:`, item);
        }
        return undefined;
    }

    /**
     * Recycle or create a node, based on a raw input.
     */
    private createNode(rawSource: any, parent: Node|null): Node {
        const existing = this.rawNodes.get(rawSource);
        if (!isUndefined(existing)) {
            const node = this.getNodeById(existing.id);
            if (node !== null) {
                return node;
            }
        }
        const node = new Node(rawSource, parent);
        node.fetched = !this.remote.isApplicable || this.remoteNodeUrlParam === null;
        return node;
    }

    /**
     * Try to get a reference on a Node by its internal id.
     * The id is used to be resilient to proxified objects.
     */
    private getNodeById(id: number, parent: Node|null = null): Node|null {
        if (!parent) {
            parent = this.viewData.root;
        }
        for (const candidate of parent.children) {
            if (candidate.id === id) {
                return candidate;
            }
            const childMatch = this.getNodeById(id, candidate);
            if (childMatch) {
                return childMatch;
            }
        }
        return null;
    }
}
