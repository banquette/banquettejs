import { TableViewModel } from "@banquette/ui/table/table-view-model";
import { Primitive } from "@banquette/utils-type/types";
import { Vue } from "@banquette/vue-typescript/vue";
import { RemoteComposable } from "../misc/remote/remote.composable";
import { FilteringComposable } from "./composable/filtering.composable";
import { OrderingComposable } from "./composable/ordering.composable";
import { PaginationComposable } from "./composable/pagination.composable";
import type FilterComponent from "./filter/filter.component";
export default class TableComponent extends Vue {
    /**
     * Manually provided set of items.
     */
    items: any[] | null;
    filtersNames: Record<string, string>;
    filters: Record<string, Primitive>;
    /**
     * @see ListViewModel
     */
    id: string | null;
    syncUrl: boolean;
    saveState: boolean;
    /**
     * Composables.
     */
    pagination: PaginationComposable;
    filtering: FilteringComposable;
    order: OrderingComposable;
    remote: RemoteComposable;
    /**
     * A map between columns ids and FilterComponent instances.
     */
    filtersMap: Record<string, FilterComponent>;
    /**
     * Returns `true` if at least one filter is found for the visible columns.
     */
    get hasActiveFilters(): boolean;
    get filterFormReady(): boolean;
    /**
     * The view model the view will use.
     */
    vm: TableViewModel;
    /**
     * The form used by the filters.
     */
    private filteringForm;
    /**
     * Vue lifecycle method.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle method.
     */
    mounted(): void;
    /**
     * Register a FilterComponent instance so it can be rendered by the table.
     */
    addFilter(columnId: string, filter: FilterComponent): void;
    /**
     * @inheritDoc
     */
    hasSlot(name: string): boolean;
    /**
     * Watch props.
     */
    private syncConfigurationProps;
    private onItemsChange;
    /**
     * Watch changes on the filters form components.
     */
    private watchFilteringForm;
}
