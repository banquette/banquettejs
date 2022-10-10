import { HttpMethod } from "@banquette/http/constants";
import { NodePropResolver } from "@banquette/ui/tree/constant";
import { HeadlessTreeViewDataInterface } from "@banquette/ui/tree/headless-tree-view-data.interface";
import { Primitive, AnyObject } from "@banquette/utils-type/types";
import { Vue } from "@banquette/vue-typescript/vue";
import { VNode } from "vue";
export default class TreeComponent extends Vue {
    /**
     * Local data to display in the tree.
     */
    data: AnyObject[] | null;
    /**
     * Defines how to resolve the nodes' labels, identifiers, children and disabled status.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    nodesIdentifier: NodePropResolver<Primitive>;
    nodesLabel: NodePropResolver<string>;
    nodesChildren: NodePropResolver<any>;
    nodesDisabled: NodePropResolver<boolean>;
    /**
     * Remote related props.
     */
    model: string | null;
    url: string | null;
    endpoint: string | null;
    method: HttpMethod;
    urlParams: Record<string, Primitive>;
    headers: Record<string, Primitive>;
    /**
     * If defined, make the ajax request contextualized per node.
     * A new request will be done for each opened node.
     */
    nodeUrlParam: string | null;
    /**
     * Show the root node if `true`.
     */
    showRoot: boolean;
    /**
     * The amount to indent to apply for each level.
     */
    indent: number;
    v: HeadlessTreeViewDataInterface;
    /**
     * Holds the logic unrelated to the VueJS implementation.
     */
    private vm;
    private unsubscribeFunctions;
    /**
     * Vue lifecycle.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle.
     */
    beforeUnmount(): void;
    /**
     * Remove a value form the external data source.
     */
    private removeFromModelValue;
    private onBasePropsChange;
    private assignLocalData;
    private syncRemoteConfigurationProps;
    render(context: any): VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    private renderNode;
}
