import { OrderingDirection } from "@banquette/ui/table/ordering/constant";
import { OrderingModule } from "@banquette/ui/table/ordering/ordering.module";
export declare class OrderingComposable {
    /**
     * @see OrderingModule
     */
    name: string | null;
    direction: OrderingDirection | null;
    remote: boolean | 'auto';
    /**
     * The actual module instance.
     */
    module: OrderingModule;
    protected syncPaginationConfigurationProps(): void;
}
