import { Primitive } from "@banquette/utils-type/types";
export declare class SelectedChoice {
    private static MaxId;
    /**
     * Unique id of the selected item.
     */
    readonly id: number;
    /**
     * The text visible to the user.
     */
    label: string;
    /**
     * The value used to check for equality with other choices.
     */
    identifier: Primitive;
    /**
     * The raw value to use in the form.
     */
    rawValue: any;
    constructor(label: string, identifier: Primitive, rawValue: any);
}
