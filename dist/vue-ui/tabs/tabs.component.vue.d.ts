import { Vue } from "@banquette/vue-typescript/vue";
import { TabComponent as TabComponentValue } from "./tab";
declare type TabComponent = InstanceType<typeof TabComponentValue>;
export default class TabsComponent extends Vue {
    /**
     * Type of positioning.
     */
    direction: string;
    /**
     * If `true` the content of non-focused tabs is only hidden visually.
     * If `false`, the content of non-focused tabs is destroyed when the tab is not focused.
     */
    preRender: boolean;
    /**
     * Bidirectional binding holding the id of the tab currently focused.
     * If not defined, the first tab is focused at first, then the one the user selects using the toggles.
     */
    focused: string;
    toggleElements: any[];
    hasFocusedTab: boolean;
    private indicatorEl;
    private tabs;
    private observer;
    private focusedTab;
    private focusedTabResizeUnsubscribe;
    /**
     * Vue lifecycle method.
     */
    mounted(): void;
    /**
     * Vue lifecycle method.
     */
    beforeUnmount(): void;
    /**
     * Called by child tabs to register themselves.
     */
    register(tab: TabComponent): void;
    /**
     * Called by child tabs to unregister themselves.
     */
    unregister(tab: TabComponent): void;
    /**
     * Focus a tab.
     */
    focus(tab: TabComponent): void;
    /**
     * Export the `tabs` array to the view without giving direct access
     * to prevent Vue from proxifing the objects.
     */
    getTabs(): TabComponent[];
    onFocusedChange(newValue: string | null): void;
    onDirectionChange(): void;
    private setFocusedTab;
    /**
     * Show/hide the floating focus indicator.
     */
    private changeFocusIndicatorVisibility;
    /**
     * Update the position of the floating focus indicator.
     */
    private updateFocusIndicator;
    /**
     * Observe changes to the `<bt-tab>` container to maintain the ordering sync.
     */
    private observeDOMMutations;
    /**
     * Find the index of the root element of a `<bt-tab>` in the DOM.
     */
    private getTabToggleDomIndex;
}
export {};
