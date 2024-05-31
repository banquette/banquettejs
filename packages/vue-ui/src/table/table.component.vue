<style src="./table.component.css" scoped></style>
<template src="./table.component.html" ></template>
<script lang="ts">
import { Injector } from "@banquette/dependency-injection";
import { UsageException } from "@banquette/exception";
import { AbstractFormComponent, FormObject } from "@banquette/form";
import { TableEvents, TableViewModel } from "@banquette/ui";
import { throttle } from "@banquette/utils-misc";
import { ltrim } from "@banquette/utils-string";
import { ensureArray, isNullOrUndefined, isObject, isUndefined, Primitive } from "@banquette/utils-type";
import { IMaterialReport } from "@banquette/vue-material-icons";
import { Component, Computed, Expose, Import, Prop, Watch, ImmediateStrategy, anyToTsInst, Vue } from "@banquette/vue-typescript";
import { PropType } from "vue";
import BtForm from "../form/form/form.component.vue";
import { TeleportDirective } from "../misc";
import { RemoteComposable } from "../misc/remote/remote.composable";
import { BtProgressCircular } from "../progress/progress-circular";
import BtColumn from "./column/column.component.vue";
import { FilteringComposable } from "./composable/filtering.composable";
import { OrderingComposable } from "./composable/ordering.composable";
import { PaginationComposable } from "./composable/pagination.composable";
import BtFilter from "./filter/filter.component.vue";
import BtPagination from "./pagination/pagination.component.vue";

@Component({
    name: 'bt-table',
    components: [BtColumn, BtPagination, BtFilter, BtForm, IMaterialReport, BtProgressCircular],
    directives: [TeleportDirective]
})
export default class BtTable extends Vue {
    /**
     * Manually provided set of items.
     */
    @Prop({default: null, transform: (input: any) => ensureArray(input)}) public items!: any[]|null;

    @Prop({type: Object as PropType<Record<string, string>>, default: {}}) public filtersNames!: Record<string, string>;
    @Prop({type: Object as PropType<Record<string, Primitive>>, default: {}}) public filters!: Record<string, Primitive>;


    /**
     * @see ListViewModel
     */
    @Prop({type: String as PropType<string|null>, default: null}) public id!: string|null;
    @Prop({type: Boolean, default: true}) public syncUrl!: boolean;
    @Prop({type: Boolean, default: true}) public saveState!: boolean;

    /**
     * Composables.
     */
    @Import(PaginationComposable) public pagination!: PaginationComposable;
    @Import(FilteringComposable) public filtering!: FilteringComposable;
    @Import(OrderingComposable) public order!: OrderingComposable;
    @Import(RemoteComposable, false) public remote!: RemoteComposable;

    /**
     * A map between columns ids and BtFilter instances.
     */
    @Expose() public filtersMap: Record<string, any /* BtFilter */> = {};

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
        this.pagination.module = this.vm.pagination;
        this.filtering.module = this.vm.filtering;
        this.order.module = this.vm.ordering;
        this.remote.module = this.vm.remote;
    }

    /**
     * Vue lifecycle method.
     */
    public mounted(): void {
        // It's important to only fetch on mounted to let the columns register.
        // And we let a tick pass to let time for the watchers to trigger.
        this.$nextTick(() => {
            setTimeout(() => {
                this.filteringForm = this.watchFilteringForm();
                if (!Object.keys(this.filters).length) {
                    this.vm.fetch();
                }
            });
            this.$forceUpdateComputed();
        });
        this.vm.localDispatcher.subscribe(TableEvents.UpdateView, throttle(() => {
            this.$forceUpdate();
        }, 50));
    }

    /**
     * Vue lifecycle hook.
     */
    public beforeUnmount(): void {
        this.vm.dispose();
        (this as any).vm = undefined;
    }

    /**
     * Register a BtFilter instance, so it can be rendered by the table.
     */
    public addFilter(columnId: string, filter: any /* BtFilter */): void {
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
        const formComponent = anyToTsInst(this.$refs.form);
        if (!formComponent) {
            throw new UsageException('Failed to bind filtering form.');
        }
        const form = formComponent.vm.form;
        const computeChangesAndFetch = () => {
            const map: any = {};
            for (const key of Object.keys(this.filters)) {
                map[key] = this.filters[key];
            }
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
                if (!isNullOrUndefined(component.value) && component.value !== '') {
                    container[lastKey] = component.value;
                } else if (!isUndefined(container[lastKey])) {
                    delete container[lastKey];
                }
            });
            for (const key of Object.keys(map)) {
                const aliases = ensureArray(this.filtersNames[key]);
                if (aliases.length) {
                    const value = map[key];
                    delete map[key];
                    for (const alias of aliases) {
                        map[alias] = value;
                    }
                }
            }
            this.vm.filtering.setFilters(map);
        };
        form.setDefaultValue(this.filters);
        form.reset();
        form.onValueChanged(computeChangesAndFetch);
        computeChangesAndFetch();
        return form;
    }
}
</script>
