import { Injector } from "@banquette/dependency-injection/injector";
import { TableEvents } from "@banquette/ui/table/constant";
import { TableViewModel } from "@banquette/ui/table/table-view-model";
import { throttle } from "@banquette/utils-misc/throttle";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { IconReport } from "@banquette/vue-material-icons/icon-report";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { RemoteComposable } from "../misc/composable/remote.composable";
import { ProgressCircularComponent } from "../progress/progress-circular";
import ColumnComponent from "./column/column.component.vue";
import { FilteringComposable } from "./composable/filtering.composable";
import { OrderingComposable } from "./composable/ordering.composable";
import { PaginationComposable } from "./composable/pagination.composable";
import PaginationComponent from "./pagination/pagination.component.vue";

@Component({
    name: 'bt-table',
    components: [ColumnComponent, PaginationComponent, IconReport, ProgressCircularComponent]
})
export default class TableComponent extends Vue {
    /**
     * Manually provided set of items.
     */
    @Prop({default: null, validate: (input: any) => ensureArray(input)}) public items!: any[]|null;

    /**
     * @see ListViewModel
     */
    @Prop({type: String, default: null}) public id!: string|null;
    @Prop({type: Boolean, default: true}) public syncUrl!: boolean;
    @Prop({type: Boolean, default: true}) public saveState!: boolean;

    /**
     * Composables.
     */
    @Import(PaginationComposable, 'pagination') public paginationComposable!: PaginationComposable;
    @Import(FilteringComposable, false) public filteringComposable!: FilteringComposable;
    @Import(OrderingComposable, 'ordering') public orderingComposable!: OrderingComposable;
    @Import(RemoteComposable, false) public remoteComposable!: RemoteComposable;

    /**
     * The view model the view will use.
     */
    @Expose() public vm!: TableViewModel;

    /**
     * Vue lifecycle method.
     */
    public beforeMount(): void {
        this.vm = Injector.Get(TableViewModel);
        this.paginationComposable.module = this.vm.pagination;
        this.filteringComposable.module = this.vm.filtering;
        this.orderingComposable.module = this.vm.ordering;
        this.remoteComposable.module = this.vm.remote;
    }

    /**
     * Vue lifecycle method.
     */
    public mounted(): void {
        // It's important to only fetch on mounted to let the columns register.
        // And we let a tick pass to let time for the watchers to trigger.
        this.$nextTick(() => {
            this.vm.fetch();
        });
        this.vm.localDispatcher.subscribe(TableEvents.UpdateView, throttle(() => {
            this.$forceUpdate();
        }, 50));
    }

    /**
     * @inheritDoc
     */
    @Expose() public hasSlot(name: string): boolean {
        return super.hasSlot(name);
    }

    /**
     * Watch props.
     */
    @Watch(['id', 'syncUrl', 'saveState'], {immediate: ImmediateStrategy.NextTick})
    protected syncConfigurationProps(): void {
        this.vm.id = this.id;
        this.vm.syncUrl = this.syncUrl;
        this.vm.saveState = this.saveState;
    }

    @Watch('items', {immediate: ImmediateStrategy.Mounted})
    protected onItemsChange(newValue: any[]): void {
        this.vm.items = newValue;
    }
}
