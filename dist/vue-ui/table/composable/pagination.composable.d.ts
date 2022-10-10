import { PaginationStrategy, PaginationPosition } from "@banquette/ui/table/pagination/constant";
import { PaginationModule } from "@banquette/ui/table/pagination/pagination.module";
import { Primitive } from "@banquette/utils-type/types";
export declare class PaginationComposable {
    /**
     * @see PaginationModule
     */
    enabled: boolean;
    page: number;
    pageId: Primitive;
    itemsPerPage: number;
    allowedItemsPerPage: number[];
    allowFirstPage: boolean;
    allowLastPage: boolean;
    allowPageInput: boolean;
    strategy: PaginationStrategy;
    position: PaginationPosition;
    summary: boolean;
    delta: number;
    remote: boolean | 'auto';
    /**
     * The actual module instance.
     */
    module: PaginationModule;
    protected syncPaginationConfigurationProps(): void;
}
