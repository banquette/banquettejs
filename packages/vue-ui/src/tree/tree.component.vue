<style src="./tree.component.css" scoped></style>
<script lang="ts">
import { UnsubscribeFunction } from "@banquette/event";
import { HttpMethod } from "@banquette/http";
import { NodePropResolver, NodeRemovedEventArg, HeadlessTreeViewDataInterface, HeadlessTreeViewModel, Node } from "@banquette/ui";
import { ensureInEnum } from "@banquette/utils-array";
import { isServer } from "@banquette/utils-misc";
import { isArray, isObject, Primitive, AnyObject } from "@banquette/utils-type";
import { IMaterialArrowDropDown, IMaterialHelp } from "@banquette/vue-material-icons";
import { Component, Expose, Prop, Render, Themeable, Watch, ImmediateStrategy, BindThemeDirective, Vue } from "@banquette/vue-typescript";
import { h, resolveDirective, withDirectives, renderSlot, VNode, toRaw, resolveComponent, Directive } from "vue";
import { BtProgressCircular } from "../progress/progress-circular";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-tree',
    components: [BtProgressCircular, IMaterialArrowDropDown, IMaterialHelp],
    directives: [BindThemeDirective],
    emits: ['update:data'],
})
export default class BtTree extends Vue {
    /**
     * Local data to display in the tree.
     */
    @Prop({type: Array, default: null}) public data!: AnyObject[]|null;

    /**
     * Defines how to resolve the nodes' labels, identifiers, children and disabled status.
     * Can be:
     *   - the name of the property to use when the input is an object.
     *   - a function that takes the raw input and returns the value to use.
     */
    @Prop({type: [String, Function], default: null}) public nodesIdentifier!: NodePropResolver<Primitive>;
    @Prop({type: [String, Function], default: 'label'}) public nodesLabel!: NodePropResolver<string>;
    @Prop({type: [String, Function], default: 'children'}) public nodesChildren!: NodePropResolver<any>;
    @Prop({type: [String, Function], default: 'disabled'}) public nodesDisabled!: NodePropResolver<boolean>;

    /**
     * Remote related props.
     */
    @Prop({name: 'remoteModel', type: String, default: null}) public model!: string|null;
    @Prop({name: 'remoteUrl', type: String, default: null}) public url!: string|null;
    @Prop({name: 'remoteEndpoint', type: String, default: null}) public endpoint!: string|null;
    @Prop({name: 'remoteMethod', type: String, default: HttpMethod.GET, transform: (value) => ensureInEnum(value, HttpMethod, HttpMethod.GET)}) public method!: HttpMethod;
    @Prop({name: 'remoteUrlParams', type: Object, default: {}}) public urlParams!: Record<string, Primitive>;
    @Prop({name: 'remoteHeaders', type: Object, default: {}}) public headers!: Record<string, Primitive>;

    /**
     * If defined, make the ajax request contextualized per node.
     * A new request will be done for each opened node.
     */
    @Prop({name: 'remoteNodeUrlParam', type: String, default: null}) public nodeUrlParam!: string|null;

    /**
     * Show the root node if `true`.
     */
    @Prop({type: Boolean, default: false}) public showRoot!: boolean;

    /**
     * The amount to indent to apply for each level.
     */
    @Prop({type: Number, default: 18}) public indent!: number;

    @Expose() public v!: HeadlessTreeViewDataInterface;

    /**
     * Holds the logic unrelated to the VueJS implementation.
     */
    private vm!: HeadlessTreeViewModel;
    private unsubscribeFunctions: UnsubscribeFunction[] = [];

    /**
     * Vue lifecycle.
     */
    public beforeMount(): void {
        this.vm = new HeadlessTreeViewModel();
        this.v = this.vm.viewData;

        // So the proxy is used by the headless view model.
        this.vm.setViewData(this.v);
        this.vm.fetchRemoteNodes();

        this.unsubscribeFunctions.push(this.vm.onNodeRemoved((event: NodeRemovedEventArg) => {
            this.removeFromModelValue(toRaw(event.node.originalValue));
        }));
    }

    /**
     * Vue lifecycle.
     */
    public beforeUnmount(): void {
        for (const fn of this.unsubscribeFunctions) {
            fn();
        }
        this.unsubscribeFunctions = [];
    }

    /**
     * Remove a value form the external data source.
     */
    private removeFromModelValue(raw: AnyObject, parents: any|null = null): void {
        if (parents === null) {
            parents = this.data;
        }
        for (const key of Object.keys(parents)) {
            if (toRaw(parents[key]) === raw && isArray(parents)) {
                parents.splice(parseInt(key, 10), 1);
                this.$emit('update:data', this.data);
                return ;
            }
            if (isObject(parents[key])) {
                this.removeFromModelValue(raw, parents[key]);
            }
        }
    }

    @Watch(['nodesIdentifier', 'nodesLabel', 'nodesChildren', 'nodesDisabled', 'nodeUrlParam'], {immediate: ImmediateStrategy.BeforeMount})
    private onBasePropsChange(): void {
        this.vm.nodesIdentifier = this.nodesIdentifier;
        this.vm.nodesLabel = this.nodesLabel;
        this.vm.nodesChildren = this.nodesChildren;
        this.vm.nodesDisabled = this.nodesDisabled;
        this.vm.remoteNodeUrlParam = this.nodeUrlParam;
    }

    @Watch('data', {immediate: ImmediateStrategy.BeforeMount, deep: true})
    private assignLocalData(): void {
        if (this.data !== null) {
            this.vm.synchronize(this.data);
        }
    }

    @Watch(['model','url', 'endpoint','method', 'urlParams', 'headers'], {immediate: ImmediateStrategy.BeforeMount})
    private syncRemoteConfigurationProps(): void {
        this.vm.remote.updateConfiguration({
            model: this.model,
            url: this.url,
            method: this.method,
            endpoint: this.endpoint,
            urlParams: this.urlParams,
            headers: this.headers
        });
    }

    @Render()
    public render(context: any): any {
        if (isServer()) {
            this.beforeMount();
        }
        const theme = resolveDirective("bt-bind-theme") as any;
        const childNodes: VNode[] = [];
        if (this.showRoot) {
            childNodes.push(this.renderNode(context, this.v.root, 'node'));
        } else {
            for (const node of this.v.root.children) {
                childNodes.push(this.renderNode(context, node));
            }
        }
        return withDirectives(
            h('div', {class: 'bt-tree'},  childNodes),
            [[theme]]
        );
    }

    private renderNode(context: any, node: Node, slotName: string = 'node', level = 0): VNode {
        const that = this;
        const collapsableDirective = resolveDirective("bt-collapsable") as Directive;
        const titleNodes = [
            renderSlot(context.$slots, slotName, {
                node: node,
                toggle: () => this.vm.toggleNode(node),
                expand: () => this.vm.expandNode(node),
                collapse: () => this.vm.collapseNode(node),
                remove: () => this.vm.removeNode(node)
            }, () => {
                return [node.label || '(missing label)'];
            })
        ];
        let leftAddon: any;
        if (node.remotePending) {
            leftAddon = h(resolveComponent("bt-progress-circular"));
        } else if (node.fetched) {
            leftAddon = h(resolveComponent('i-material-arrow-drop-down'), {crop: true, width: '0.80em'});
        } else {
            leftAddon = h('div', {class: 'unknown-text'}, '?');
        }
        titleNodes.unshift(h('div', {class: 'addon'}, leftAddon));
        const title = h('div', {
            class: 'title',
            style: {paddingLeft: (that.indent * level) + 'px'},
            onClick: (event: Event) => {
                event.stopPropagation();
                this.vm.toggleNode(node)
            }
        }, titleNodes);

        const childNodes: VNode[] = [];
        for (const child of node.children) {
            childNodes.push(this.renderNode(context, child, 'node', level + 1));
        }
        let content = withDirectives(
            h('div', {class: 'items-wrapper'}, childNodes),
            [[collapsableDirective, {opened: node.expanded}]]
        );
        return h('div', {
            class: 'bt-tree-item',
            'data-is-expanded': node.expanded ? '' : null,
            'data-is-empty': node.fetched && !node.childrenVisibleCount ? '' : null,
            'data-is-disabled': node.disabled ? '' : null
        },[title, content]);
    }
}
</script>
