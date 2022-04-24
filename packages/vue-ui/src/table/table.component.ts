import { Injector } from "@banquette/dependency-injection/injector";
import { UsageException } from "@banquette/exception/usage.exception";
import { AbstractFormComponent } from "@banquette/form/abstract-form-component";
import { FormObject } from "@banquette/form/form-object";
import { TableEvents } from "@banquette/ui/table/constant";
import { TableViewModel } from "@banquette/ui/table/table-view-model";
import { throttle } from "@banquette/utils-misc/throttle";
import { ltrim } from "@banquette/utils-string/format/ltrim";
import { ensureArray } from "@banquette/utils-type/ensure-array";
import { isObject } from "@banquette/utils-type/is-object";
import { isUndefined } from "@banquette/utils-type/is-undefined";
import { IconReport } from "@banquette/vue-material-icons/icon-report";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Import } from "@banquette/vue-typescript/decorator/import.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import FormComponent from "../form/form/component/form.component.vue";
import { RemoteComposable } from "../misc/remote/remote.composable";
import { TeleportDirective } from "../misc/teleport.directive";
import { ProgressCircularComponent } from "../progress/progress-circular";
import ColumnComponent from "./column/column.component.vue";
import { FilteringComposable } from "./composable/filtering.composable";
import { OrderingComposable } from "./composable/ordering.composable";
import { PaginationComposable } from "./composable/pagination.composable";
import FilterComponent from "./filter/filter.component.vue";
import PaginationComponent from "./pagination/pagination.component.vue";

@Component({
    name: 'bt-table',
    components: [ColumnComponent, FilterComponent, PaginationComponent, TeleportDirective, FormComponent, IconReport, ProgressCircularComponent]
})
export default class TableComponent extends Vue {
    /**
     * Manually provided set of items.
     */
    @Prop({default: null, transform: (input: any) => ensureArray(input)}) public items!: any[]|null;

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
    @Import(FilteringComposable, {remote: 'filtering:remote', filters: 'filters'}) public filteringComposable!: FilteringComposable;
    @Import(OrderingComposable, 'ordering') public orderingComposable!: OrderingComposable;
    @Import(RemoteComposable, false) public remoteComposable!: RemoteComposable;

    /**
     * A map between columns ids and FilterComponent instances.
     */
    @Expose() public filtersMap: Record<string, any /* FilterComponent */> = {};

    /**
     * Returns `true` if at least one filter is found for the visible columns.
     */
    @Computed() public get hasActiveFilters(): boolean {
        if (isUndefined(this.vm) || !this.filterFormReady) {
            return false;
        }
        for (const column of this.vm.visibleColumns) {
            if (!isUndefined(this.filtersMap[column.id])) {
                return true;
            }
        }
        return false;
    }

    @Computed() public get filterFormReady(): boolean {
        return isObject(this.$refs) && !isUndefined(this.$refs.form);
    }

    /**
     * The view model the view will use.
     */
    @Expose() public vm!: TableViewModel;

    /**
     * The form used by the filters.
     */
    private filteringForm!: FormObject;
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
            this.$nextTick(() => {
                this.filteringForm = this.watchFilteringForm();
            });
            this.vm.fetch();
            this.$forceUpdateComputed();
        });
        this.vm.localDispatcher.subscribe(TableEvents.UpdateView, throttle(() => {
            this.$forceUpdate();
        }, 50));
    }

    /**
     * Register a FilterComponent instance so it can be rendered by the table.
     */
    public addFilter(columnId: string, filter: any /* FilterComponent */): void {
        this.filtersMap[columnId] = filter;
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
    private syncConfigurationProps(): void {
        this.vm.id = this.id;
        this.vm.syncUrl = this.syncUrl;
        this.vm.saveState = this.saveState;
    }

    @Watch('items', {immediate: ImmediateStrategy.Mounted})
    private onItemsChange(newValue: any[]): void {
        this.vm.items = newValue;
    }

    /**
     * Watch changes on the filters form components.
     */
    private watchFilteringForm(): FormObject {
        if (!this.$refs.form || !this.$refs.form.form) {
            throw new UsageException('Failed to bind filtering form.');
        }
        const form = this.$refs.form.form;
        form.setDefaultValue(this.vm.filtering.getActiveFilters());
        form.reset();
        form.onValueChanged(() => {
            const map: any = {};
            form.getByPattern('**:control:valid').forEach((component: AbstractFormComponent) => {
                const parts = ltrim(component.path, '/').split('/');
                const lastKey = parts.pop();
                if (!lastKey || !component.valid) {
                    return ;
                }
                let container: any = map;
                for (let i = 0; i < parts.length; ++i) {
                    if (!isObject(container[parts[i]])) {
                        container[parts[i]] = {};
                    }
                    container = container[parts[i]];
                }
                container[lastKey] = component.value;
            });
            this.vm.filtering.updateFilters(map);
        });
        return form;
    }
}
