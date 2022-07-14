<style src="./tree.component.css" scoped></style>
<script lang="ts">
import { UnsubscribeFunction } from "@banquette/event/type";
import { HttpMethod } from "@banquette/http/constants";
import { NodePropResolver } from "@banquette/ui/tree/constant";
import { NodeRemovedEventArg } from "@banquette/ui/tree/event/node-removed.event-arg";
import { HeadlessTreeViewDataInterface } from "@banquette/ui/tree/headless-tree-view-data.interface";
import { HeadlessTreeViewModel } from "@banquette/ui/tree/headless-tree.view-model";
import { Node } from '@banquette/ui/tree/node';
import { ensureInEnum } from "@banquette/utils-array/ensure-in-enum";
import { isArray } from "@banquette/utils-type/is-array";
import { isObject } from "@banquette/utils-type/is-object";
import { Primitive, AnyObject } from "@banquette/utils-type/types";
import { IconMaterialArrowDropDown } from "@banquette/vue-material-icons/arrow-drop-down";
import { IconMaterialHelp } from "@banquette/vue-material-icons/help";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Render } from "@banquette/vue-typescript/decorator/render.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import {
    h,
    resolveDirective,
    withDirectives,
    renderSlot,
    VNode,
    SetupContext,
    toRaw,
    resolveComponent,
    ComponentPublicInstance
} from "vue";
import { CollapsableComponent } from "../collapsable";
import { ProgressCircularComponent } from "../progress/progress-circular";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-tree',
    components: [ProgressCircularComponent, IconMaterialArrowDropDown, IconMaterialHelp],
    directives: [BindThemeDirective],
    emits: ['update:modelValue'],
})
export default class TreeComponent extends Vue {
    // "v-model" recipient
    @Prop({type: Array, default: null}) public modelValue!: AnyObject[]|null;

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
            this.removeFromModelValue(toRaw(event.node.rawValue));
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
            parents = this.modelValue;
        }
        for (const key of Object.keys(parents)) {
            if (toRaw(parents[key]) === raw && isArray(parents)) {
                parents.splice(parseInt(key, 10), 1);
                this.$emit('update:modelValue', this.modelValue);
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

    @Watch('modelValue', {immediate: ImmediateStrategy.BeforeMount, deep: true})
    private assignLocalData(): void {
        if (this.modelValue !== null) {
            this.vm.synchronize(this.modelValue);
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
    public render(component: ComponentPublicInstance, context: SetupContext) {
        const theme = resolveDirective("bt-bind-theme") as any;
        const childNodes: VNode[] = [];
        if (this.showRoot) {
            childNodes.push(this.renderNode(context, this.v.root, 'root'));
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

    private renderNode(context: SetupContext, node: Node, slotName: string = 'node', level = 0): VNode {
        const that = this;
        const collapsable = h(CollapsableComponent, {
            modelValue: !node.expanded,
            'onUpdate:modelValue': (value: any) => {
                node.expanded = !value;
            }
        }, {
            title: () => {
                const titleNodes = [
                    renderSlot(context.slots, slotName, {
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
                    leftAddon = h(resolveComponent('i-material-arrow-drop-down'), {crop: true, width: '0.85em'});
                } else {
                    leftAddon = h('div', {class: 'unknown-text'}, '?');
                }
                titleNodes.unshift(h('div', {class: 'addon'}, leftAddon));
                return h('div', {
                    class: 'title',
                    style: {paddingLeft: (that.indent * level) + 'px'},
                    onClick: () => {
                        this.vm.toggleNode(node)
                    }
                }, titleNodes);
            },
            default: () => {
                const childNodes: VNode[] = [];
                for (const child of node.children) {
                    childNodes.push(this.renderNode(context, child, 'node', level + 1));
                }
                return h('div', {class: 'items-wrapper'}, childNodes);
            }
        });
        return h('div', {
            class: 'bt-tree-item',
            'data-expanded': node.expanded ? '' : null,
            'data-empty': node.fetched && !node.childrenVisibleCount ? '' : null
        }, [
            collapsable
        ]);
    }
}
</script>
