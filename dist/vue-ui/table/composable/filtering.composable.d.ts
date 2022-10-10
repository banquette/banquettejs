import { FilteringModule } from "@banquette/ui/table/filtering/filtering.module";
import { Primitive } from "@banquette/utils-type/types";
export declare class FilteringComposable {
    /**
     * @see FilteringModule
     */
    filters: Record<string, Primitive>;
    remote: boolean | 'auto';
    /**
     * The actual module instance.
     */
    module: FilteringModule;
    protected syncPaginationConfigurationProps(): void;
}
