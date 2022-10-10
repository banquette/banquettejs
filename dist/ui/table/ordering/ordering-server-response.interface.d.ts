import { OrderingDirection } from "./constant";
/**
 * The data structure expected from the server to define the real ordering rule in use.
 */
export interface OrderingServerResponseInterface {
    /**
     * Name of the column to order by.
     */
    column?: string;
    /**
     * The direction of ordering.
     */
    direction?: OrderingDirection;
}
