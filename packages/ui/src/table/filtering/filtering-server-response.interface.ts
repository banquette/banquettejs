import { Primitive } from "@banquette/utils-type";

/**
 * The data structure expected from the server to define the real filter in use.
 */
export interface FilteringServerResponseInterface {
    [key: string]: Primitive;
}
