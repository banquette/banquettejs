import { slugify } from "@banquette/utils-string/format/slugify";
import { Primitive, Writeable } from "@banquette/utils-type/types";
import { ChoiceOrigin } from "./constant";

/**
 * The view representation of a choice.
 */
export class Choice {
    /**
     * The text visible to the user.
     */
    private _label!: string;
    public get label(): string { return this._label }
    public set label(label: string) {
        this._label = label;
        (this as Writeable<Choice>).labelSlug = slugify(label);
    }

    /**
     * Slugified label, used for local search.
     */
    public readonly labelSlug!: string;

    /**
     * Optional group in which to put the choice.
     */
    public group: string|null = null;

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
    public origin: string = ChoiceOrigin.Default;

    /**
     * If true, the label can contain HTML.
     * Default should be false.
     */
    public allowHtml: boolean = false;

    /**
     * `true` if the choice should appear as selected.
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
     * If `false`, the choice should not be displayed, even if present in the list of choices.
     */
    public visible: boolean = true;

    /**
     * `true` if the Choice instance has been created externally outside of the view model.
     */
    public external: boolean = true;

    /**
     * The raw value to use in the form.
     */
    public value: any;

    /**
     * The raw value of the choice, as is.
     */
    public originalValue: any;

    public constructor(identifier: Primitive, label: string, value: any, group: string|null, origin: string, originalValue: any) {
        this.identifier = identifier;
        this.label = label;
        this.value = value;
        this.group = group;
        this.origin = origin;
        this.originalValue = originalValue;
    }
}
