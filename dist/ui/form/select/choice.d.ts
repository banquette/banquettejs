import { Primitive } from "@banquette/utils-type/types";
/**
 * The view representation of a choice.
 */
export declare class Choice {
    /**
     * The text visible to the user.
     */
    private _label;
    get label(): string;
    set label(label: string);
    /**
     * Slugified label, used for local search.
     */
    readonly labelSlug: string;
    /**
     * Optional group in which to put the choice.
     */
    group: string | null;
    /**
     * The value used to check for equality with other choices.
     */
    identifier: Primitive;
    /**
     * Define what part of the app is responsible for this choice.
     *
     * This is useful when the choices can come from multiple sources at the same time (remote and local for example).
     * By grouping all the remote choices together in a "remote" origin, they can be updated without touching to the other choices.
     */
    origin: string;
    /**
     * If true, the label can contain HTML.
     * Default should be false.
     */
    allowHtml: boolean;
    /**
     * `true` if the choice should appear as selected.
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
     * If `false`, the choice should not be displayed, even if present in the list of choices.
     */
    visible: boolean;
    /**
     * `true` if the Choice instance has been created externally outside of the view model.
     */
    external: boolean;
    /**
     * `true` if the Choice instance has been just been created.
     */
    new: boolean;
    /**
     * The raw value to use in the form.
     */
    value: any;
    /**
     * The raw value of the choice, as is.
     */
    originalValue: any;
    constructor(identifier: Primitive, label: string, value: any, group: string | null, origin: string, originalValue: any);
}
