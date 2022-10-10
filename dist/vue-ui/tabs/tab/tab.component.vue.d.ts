import { Vue } from "@banquette/vue-typescript/vue";
export default class TabComponent extends Vue {
    /**
     * A unique identifier for the tab.
     * Used to focus the tab from the outside.
     */
    id: string;
    /**
     * The content to show on the toggle button of the tab.
     * Can be overridden via the `title` slot.
     */
    title: string;
    /**
     * If `true`, the tab is non focusable.
     */
    disabled: boolean;
    /**
     * If `true` the tab will not be focusable.
     * Only the selector will appear and be clickable.
     */
    fake: boolean;
    get preRender(): boolean;
    focused: boolean;
    /**
     * A reference on the parent component instance.
     *
     * NOTE:
     * There is no @Ref() here because Vue would proxify all properties of the parent component if we add it, and we don't want that.
     * Instead, note the use of $forceUpdateComputed() to update the `preRender` computed after `mounted` has been called.
     */
    private parent;
    /**
     * Vue lifecycle method.
     */
    mounted(): void;
    /**
     * Vue lifecycle method.
     */
    beforeUnmount(): void;
    /**
     * Focus the tab, making its content visible.
     */
    focus(): void;
    /**
     * Called when the focus is given to the tab.
     */
    onFocus(): void;
    /**
     * Called when the focus is dropped from the tab.
     */
    onUnFocus(): void;
}
