import { PaginationStrategy, PaginationPosition } from "@banquette/ui";
import { PaginationModule } from "@banquette/ui";
import { Primitive } from "@banquette/utils-type";
import { Composable } from "@banquette/vue-typescript";
import { Prop } from "@banquette/vue-typescript";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript";

@Composable()
export class PaginationComposable {
    /**
     * @see PaginationModule
     */
    @Prop({type: Boolean, default: true}) public enabled!: boolean;
    @Prop({type: Number, default: 1}) public page!: number;
    @Prop({default: null}) public pageId!: Primitive;
    @Prop({type: Number, default: 20}) public itemsPerPage!: number;
    @Prop({type: Array, default: [10, 20, 30, 50, 100]}) public allowedItemsPerPage!: number[];
    @Prop({type: Boolean, default: true}) public allowFirstPage!: boolean;
    @Prop({type: Boolean, default: true}) public allowLastPage!: boolean;
    @Prop({type: Boolean, default: true}) public allowPageInput!: boolean;
    @Prop({type: String, default: PaginationStrategy.Offset}) public strategy!: PaginationStrategy;
    @Prop({type: String, default: PaginationPosition.Top}) public position!: PaginationPosition;
    @Prop({type: Boolean, default: true}) public summary!: boolean;
    @Prop({type: Number, default: 3}) public delta!: number;
    @Prop({type: [Boolean, String], default: 'auto'}) public remote!: boolean|'auto';

    /**
     * The actual module instance.
     */
    public module!: PaginationModule;

    @Watch([
        'page',
        'pageId',
        'itemsPerPage',
        'allowedItemsPerPage',
        'allowFirstPage',
        'allowLastPage',
        'allowPageInput',
        'enabled',
        'strategy',
        'position',
        'summary',
        'delta',
        'remote'
    ], {immediate: ImmediateStrategy.NextTick})
    protected syncPaginationConfigurationProps(): void {
        this.module.page = this.page;
        this.module.pageId = this.pageId;
        this.module.allowedItemsPerPage = this.allowedItemsPerPage;
        this.module.itemsPerPage = this.itemsPerPage;
        this.module.allowFirstPage = this.allowFirstPage;
        this.module.allowLastPage = this.allowLastPage;
        this.module.allowPageInput = this.allowPageInput;
        this.module.enabled = this.enabled;
        this.module.strategy = this.strategy;
        this.module.position = this.position;
        this.module.summary = this.summary;
        this.module.delta = this.delta;
        this.module.remote = this.remote;
    }
}
