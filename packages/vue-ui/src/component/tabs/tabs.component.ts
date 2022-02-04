import { getElementOffset } from "@banquette/utils-dom/get-element-offset";
import { proxy } from "@banquette/utils-misc/proxy";
import { throttle } from "@banquette/utils-misc/throttle";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { FocusChangedEvent } from "./event/focus-changed.event";
import { TabCreatedEvent } from "./event/tab-created.event";
import { TabRemovedEvent } from "./event/tab-removed.event";
import { TeleportTabDirective } from "./teleport-tab.directive";
import TabComponent from "./tab/tab.component";
import './tab/tab.component.vue';

@Themeable({
    vars: {
        background: 'esdvjfdh',
        borderRadius: 'p3w063z4',

        toggles: {
            background: 'jf5rwvh',
            borderRadius: 'hsyr96ig',
            fontSize: 'q7qdbfru',

            item: {
                color: 'zmwss3q7',
                fontWeight: 'jqr8f43x',
                background: 'cz5v28qa',
                borderRadius: 'ldqru6dd',
                padding: 'daxrcke0'
            },

            current: {
                color: 'f1prnpa2',
                background: 'o2ogv08f',
                fontWeight: 'o9oak59zh'
            },

            disabled: {
                color: 'n307jz7h',
                background: 's5g6ke0i',
                fontWeight: 'ihvazk93'
            },

            indicator: {
                color: 'n2xy70i0',
                height: 'amdsk74u'
            }
        },

        content: {
            padding: 'no3tawbl',
            background: 's786b50s'
        }
    }
})
@Component({
    name: 'bt-tabs',
    components: [TabComponent],
    directives: [TeleportTabDirective],
    emits: ['tabCreated', 'tabRemoved', 'focusChanged']
})
export default class TabsComponent extends Vue {
    /**
     * If `true` the content of non-focused tabs is only hidden visually.
     * If `false`, the content of non-focused tabs is destroyed when the tab is not focused.
     */
    @Prop({type: Boolean, default: true}) public preRender!: boolean;

    /**
     * Id of the tab to focus.
     * If not defined, the first tab is selected at first, then the one the use selects using the toggles.
     */
    @Prop({type: String, default: null}) public focused!: string;

    @Expose() public toggleElements: any[] = [];

    private tabs: TabComponent[] = [];
    private focusedTab: TabComponent|null = null;
    private observer: MutationObserver|null = null;

    /**
     * Vue lifecycle method.
     */
    public mounted(): void {
        this.observeDOMMutations();
    }

    /**
     * Vue lifecycle method.
     */
    public beforeUnmount(): void {
        if (this.observer !== null) {
            this.observer.disconnect();
            this.observer = null;
        }
    }

    /**
     * Called by child tabs to register themselves.
     */
    public register(tab: TabComponent): void {
        const domIdx = this.getTabToggleDomIndex(tab.$el);
        this.tabs.splice(domIdx, 0, tab);
        // Always focus the first tab so we have something in case the id provided by the user doesn't match any tab.
        if (this.tabs.length === 1 || this.focusedTab === null || (this.focused !== null && tab.id === this.focused)) {
            this.focus(tab);
        }
        this.$forceUpdate();
        this.$emit('tabCreated', new TabCreatedEvent(tab));
    }

    /**
     * Called by child tabs to unregister themselves.
     */
    public unregister(tab: TabComponent): void {
        const pos = this.tabs.indexOf(tab);
        if (pos > -1) {
            this.tabs.splice(pos, 1);
            if (this.tabs.length > 0 && this.focusedTab === tab) {
                let i;
                // Cycle tabs from the tab replacing the deleted one until we come back to it from the beginning.
                for (i = 0; i < this.tabs.length; ++i) {
                    const idx = (i + pos) % this.tabs.length;
                    if (!this.tabs[idx].disabled && !this.tabs[idx].fake) {
                        this.focus(this.tabs[idx]);
                        break ;
                    }
                }
                if (i >= this.tabs.length) {
                    this.focusedTab = null;
                    this.changeFocusIndicatorVisibility(false);
                }
            }
            this.$emit('tabRemoved', new TabRemovedEvent(tab));
        }
    }

    /**
     * Focus a tab.
     */
    public focus(tab: TabComponent): void {
        for (const candidate of this.tabs) {
            if (candidate === tab && !candidate.focused) {
                if (candidate.disabled || candidate.fake) {
                    return ;
                }
                if (this.focusedTab !== null) {
                    this.focusedTab.onUnFocus();
                    this.$emit('focusChanged', new FocusChangedEvent(this.focusedTab, false));
                }
                this.focusedTab = tab;
                this.$nextTick(proxy(this.updateFocusIndicator, this));
                candidate.onFocus();
                this.$emit('focusChanged', new FocusChangedEvent(tab, true));
            }
        }
        if (this.focusedTab !== tab && !tab.disabled) {
            this.changeFocusIndicatorVisibility(false);
            this.focusedTab = null;
        } else if (this.focusedTab !== null) {
            this.changeFocusIndicatorVisibility(true);
        }
    }

    /**
     * Export the `tabs` array to the view without giving a direct access
     * to prevent Vue to proxify the objects.
     */
    @Expose() public getTabs(): TabComponent[] {
        return this.tabs;
    }

    @Watch('focused')
    public onFocusedChange(newValue: string|null) {
        for (const candidate of this.tabs) {
            if (candidate.id === newValue) {
                this.focus(candidate);
                break ;
            }
        }
    }

    /**
     * Show/hide the floating focus indicator.
     */
    private changeFocusIndicatorVisibility(visible: boolean): void {
        if (this.$refs.indicator) {
            this.$refs.indicator.style.display = visible ? 'block' : 'none';
        }
    }

    /**
     * Update the position of the floating focus indicator.
     */
    private updateFocusIndicator(): void {
        if (!this.$refs.indicator || !this.focusedTab || !this.focusedTab.$refs.toggle) {
            return ;
        }
        const offset = getElementOffset(this.focusedTab.$refs.toggle, false);
        this.$refs.indicator.style.left = `${offset.left}px`;
        this.$refs.indicator.style.width = `${this.focusedTab.$refs.toggle.offsetWidth}px`;
    }

    /**
     * Observe changes to the `<bt-tab>` container to maintain the ordering sync.
     */
    private observeDOMMutations(): void {
        this.observer = new MutationObserver(throttle(() => {
            // Sort the tabs by DOM index
            this.tabs = this.tabs.sort((a: TabComponent, b: TabComponent) => {
                return this.getTabToggleDomIndex(a.$el) - this.getTabToggleDomIndex(b.$el);
            });
            // Force update the view
            this.$forceUpdate();

            // If a tab is focused, wait a cycle for the render to update and update the focus indicator.
            if (this.focusedTab !== null) {
                this.$nextTick(() => {
                    this.updateFocusIndicator();
                });
            }
        }, 100));
        this.observer.observe(this.$refs.content, {
            childList: true,
            attributes: false,
            subtree: true
        });
    }

    /**
     * Find the index of the root element of a `<bt-tab>` in the DOM.
     */
    private getTabToggleDomIndex(target: Element): number {
        let idx: number = 0;
        if (target.parentNode) {
            for (const node of Object.values(target.parentNode.childNodes)) {
                if (node === target) {
                    return idx;
                }
                if (node.nodeType === Node.ELEMENT_NODE && node instanceof HTMLElement && node.classList.contains('bt-tab')) {
                    ++idx;
                }
            }
        }
        return idx;
    }
}
