import { OrderingStatus } from "./ordering/constant";

export interface ColumnInterface {
    /**
     * Unique id of the column. Used to reference the column internally, the name will never be visible to the user.
     * Must be defined to use filtering.
     */
    readonly id: string;

    /**
     * Text to display in the template for the column.
     */
    readonly title: string;

    /**
     * Name of the field to add to the order by clause of the api if the user
     * ask to sort on this column.
     *
     * If null, the ordering will not be available for the column.
     */
    readonly orderingName: string|null;

    /**
     * Current status of the ordering for the column.
     */
    readonly orderingStatus: OrderingStatus;

    /**
     * Is the column visible?
     */
    readonly visible: boolean;

    /**
     * Define if the column can be hidden by the user.
     */
    readonly hideable: boolean;
}

/**
 * Limited version of ColumnInterface only containing initialization attributes.
 */
export type ColumnOptions = Partial<Omit<ColumnInterface, 'id'> & {id: string|null}>;
