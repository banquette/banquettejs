import { Primitive } from "@banquette/utils-type/types";
export interface FiltersInterface {
    [key: string]: Primitive | FiltersInterface;
}
