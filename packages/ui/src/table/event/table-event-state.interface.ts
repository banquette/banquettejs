import { HttpMethod } from "@banquette/http/constants";
import { ModelExtendedIdentifier } from "@banquette/model/type";
import { Primitive } from "@banquette/utils-type/types";
import { OrderingDirection } from "../ordering/constant";
import { PaginationStrategy } from "../pagination/constant";

/**
 * An object describing relevant states to expose to the events.
 */
export interface TableEventStateInterface {
    remote: {
        url: string|null;
        urlParams: Record<string, Primitive>;
        model: ModelExtendedIdentifier | null;
        endpoint: string | null;
        method: HttpMethod;
    },
    pagination: {
        enabled: boolean;
        page: number;
        pageId: Primitive;
        itemsPerPage: number;
        strategy: PaginationStrategy;
    },
    filters: Record<string, Primitive>,
    ordering: {
        columnName: string|null;
        direction: OrderingDirection|null;
    }
}
