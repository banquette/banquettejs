import { DirectiveBinding } from "vue";
import { Vue } from "../vue";
export declare class BindThemeDirective extends Vue {
    /**
     * The Typescript class instance of the component.
     */
    private instance;
    /**
     * The global object that holds all the metadata of the component.
     */
    private metadata;
    /**
     * A ref on `metadata.themeable` to avoid having to check if it's not null on every use.
     */
    private configuration;
    /**
     * Array of themes to notify when the component mutates.
     */
    private trackingThemes;
    /**
     * Sorted list of active variants UIDs, joined as a string for quick comparison.
     */
    private activeVariantsAttributesStr;
    /**
     * Centralize the unsubscribe functions of all subscribed events.
     */
    private globalUnsubscribeFns;
    private computeChangesUnsubscribeFns;
    /**
     * Vue lifecycle.
     */
    created(el: Element, bindings: DirectiveBinding): void;
    beforeMount(el: Element): void;
    /**
     * Vue lifecycle.
     */
    beforeUpdate(el: Element): void;
    /**
     * Vue lifecycle.
     */
    updated(): void;
    /**
     * Vue lifecycle.
     */
    unmounted(): void;
    /**
     * Rematch all themes and variants for the component.
     */
    private computeChanges;
    /**
     * Force the update of everything in the current instance.
     */
    private forceUpdate;
    /**
     * Schedule a force update for the next tick while ensuring only one is made.
     */
    private scheduleForceUpdate;
}
