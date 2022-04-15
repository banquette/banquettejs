import { Primitive } from "@banquette/utils-type/types";

export class SelectedChoice {
    private static MaxId: number = 0;

    /**
     * Unique id of the selected item.
     */
    public readonly id: number = ++SelectedChoice.MaxId;

    /**
     * The text visible to the user.
     */
    public label: string;

    /**
     * The value used to check for equality with other choices.
     */
    public identifier: Primitive;

    /**
     * The raw value to use in the form.
     */
    public rawValue: any;

    public constructor(label: string, identifier: Primitive, rawValue: any) {
        this.identifier = identifier;
        this.label = label;
        this.rawValue = rawValue;
    }
}
