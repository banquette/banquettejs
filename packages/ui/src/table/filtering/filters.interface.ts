import { Primitive } from "@banquette/utils-type";

export interface FiltersInterface {
    [key: string]: Primitive|FiltersInterface;
}
