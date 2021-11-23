import { Primitive } from "@banquette/utils-type/types";

/**
 * The view representation of a choice.
 */
export interface ChoiceInterface {
    /**
     * The text visible to the user.
     */
    label: string;

    /**
     * The value used to check for equality with other choices.
     */
    identifier: Primitive;

    /**
     * If true, the label can contain HTML.
     * Default should be false.
     */
    allowHtml: boolean;

    /**
     * `true` if the choice part of the control's value.
     */
    selected: boolean;

    /**
     * `true` if the choice is focused by the user (e.g. moving through choices with the keyboard).
     */
    focused: boolean;

    /**
     * `true` if the choice is non-selectable by the user.
     */
    disabled: boolean;

    /**
     * The raw value of the choice, as given by the outside.
     */
    rawValue: any;
}
