import { Choice } from "@banquette/ui/form/select/choice";
import { Vue } from "@banquette/vue-typescript/vue";
export default class ChoiceComponent extends Vue {
    /**
     * These props are only used when the prop `choice` is not set
     * (meaning the `bt-form-select-choice` has been created outside the `bt-form-select`).
     */
    value: any;
    label: string | null;
    disabled?: boolean;
    selected?: boolean;
    /**
     * Only used when the component is created from the `form-select` component directly.
     */
    internalChoice: Choice | null;
    /**
     * If created in a slot, contains the position of the slot relative to the internal list of choices.
     */
    position: string | null;
    /**
     * The actual `Choice` item this component is responsible for.
     */
    choice: Choice | null;
    private parent;
    private parentGroup;
    /**
     * Vue lifecycle hook.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle hook.
     */
    unmounted(): void;
    /**
     * Toggle the selection of the choice.
     */
    select(): void;
    deselect(): void;
    remove(): void;
    /**
     * Try to get a label to use in the selection resume for the current item.
     */
    private resolveLabel;
    private onInternalChoiceChange;
    private onFocusChange;
    private onVisibilityChange;
    private onChoicePropsChange;
    /**
     * Scroll the choice into the view.
     */
    private scrollIntoView;
}
