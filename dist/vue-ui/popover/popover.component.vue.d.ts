import { Primitive } from "@banquette/utils-type/types";
import { Vue } from "@banquette/vue-typescript/vue";
import { PopoverComposable } from "./popover.composable";
export default class PopoverComponent extends Vue {
    /**
     * Popover composable.
     */
    popoverComposable: PopoverComposable;
    /**
     * If `false` the popover will use not use the <Transition> component for its transitions.
     * If a `string` is given, it will be used as the name of the transition to apply.
     * `undefined` will use the default transition.
     */
    transition: string | false | undefined;
    /**
     * If `true` the dropdown content is always rendered, even when hidden.
     */
    renderHidden: boolean;
    get teleportTarget(): any;
    get styles(): Record<string, Primitive>;
    shouldRender: boolean;
    isVisible: boolean;
    private highestZIndex;
    /**
     * Vue lifecycle.
     */
    beforeMount(): void;
    /**
     * Vue lifecycle.
     */
    mounted(): void;
    /**
     * Vue lifecycle.
     */
    updated(): void;
    onEnter(): void;
    /**
     * @inheritDoc
     */
    hasNonEmptySlot(name: string): boolean;
    onAfterLeave(): void;
    onVisibilityChange(newValue: any): void;
    /**
     * Test if the floating element should be teleported in the body to be displayed properly.
     */
    private shouldTeleportToBody;
    /**
     * Try to determine the best z-index based on parent elements z-indexes.
     */
    private findHighestZIndex;
}
