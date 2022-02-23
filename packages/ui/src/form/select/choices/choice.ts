import { Primitive } from "@banquette/utils-type/types";
import { ChoiceOrigin } from "./constant";

/**
 * The view representation of a choice.
 */
export class Choice {
    /**
     * The text visible to the user.
     */
    public label: string;

    /**
     * The value used to check for equality with other choices.
     */
    public identifier: Primitive;

    /**
     * Define what part of the app is responsible of this choice.
     *
     * This is useful when the choices can come from multiple sources at the same time (remote and local for example).
     * By grouping all the remote choices together in a "remote" origin, they can be updated without touching to the other choices.
     */
    public origin: symbol = ChoiceOrigin.Default;

    /**
     * If true, the label can contain HTML.
     * Default should be false.
     */
    public allowHtml: boolean = false;

    /**
     * `true` if the choice part of the control's value.
     */
    public selected: boolean = false;

    /**
     * `true` if the choice is focused by the user (e.g. moving through choices with the keyboard).
     */
    public focused: boolean = false;

    /**
     * `true` if the choice is non-selectable by the user.
     */
    public disabled: boolean = false;

    /**
     * `false` to hide the choice to the end-user while keeping it in the list of available choices.
     */
    public visible: boolean = true;

    /**
     * `true` if the Choice instance has been created externally.
     */
    public external: boolean = true;

    /**
     * If `true` the item will remain selected even if it disappear from the array of available choices.
     * Even if frozen the item can still be deselected manually.
     */
    public selectionFrozen: boolean = false;

    /**
     * If `true`, the choice is not part of the list of available choices anymore.
     */
    public ghost: boolean = false;

    /**
     * The raw value to use in the form.
     */
    public value: any;

    /**
     * The raw value of the choice, as is.
     */
    public originalValue: any;

    public constructor(label: string, value: any, identifier: Primitive, origin: symbol, originalValue: any) {
        this.identifier = identifier;
        this.label = label;
        this.value = value;
        this.origin = origin;
        this.originalValue = originalValue;
    }
}
