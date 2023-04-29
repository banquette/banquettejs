<style src="./tabs.component.css" scoped></style>
<template src="./tabs.component.html" ></template>
<script lang="ts">
import { enumToArray } from "@banquette/utils-array";
import { getElementOffset } from "@banquette/utils-dom";
import { throttle } from "@banquette/utils-misc";
import { VoidCallback } from "@banquette/utils-type";
import { Component, Expose, Prop, TemplateRef, Themeable, Watch, BindThemeDirective, Vue } from "@banquette/vue-typescript";
import { useResizeObserver } from "@vueuse/core";
import { TeleportDirective } from "../misc";
import { BtTab as BtTabValue } from "./tab";
import { TabsDirection } from "./tab/constant";
import { ThemeConfiguration } from "./theme-configuration";

type BtTab = InstanceType<typeof BtTabValue>;

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-tabs',
    components: [BtTabValue],
    directives: [TeleportDirective, BindThemeDirective],
    emits: ['update:focused']
})
export default class BtTabs extends Vue {
    /**
     * Type of positioning.
     */
    @Prop({type: String, default: TabsDirection.Top, transform: (value: any) => {
            return enumToArray(TabsDirection).indexOf(value) > -1 ? value : TabsDirection.Top;
        }}) public direction!: string;

    /**
     * If `true` the content of non-focused tabs is only hidden visually.
     * If `false`, the content of non-focused tabs is destroyed when the tab is not focused.
     */
    @Prop({type: Boolean, default: true}) public preRender!: boolean;

    /**
     * Bidirectional binding holding the id of the tab currently focused.
     * If not defined, the first tab is focused at first, then the one the user selects using the toggles.
     */
    @Prop({type: String, default: null}) public focused!: string;

    @Expose() public toggleElements: any[] = [];
    @Expose() public hasFocusedTab: boolean = false;

    @TemplateRef('indicator') private indicatorEl!: HTMLElement;

    private tabs: BtTab[] = [];
    private observer: MutationObserver|null = null;
    private focusedTab: BtTab|null = null;
    private focusedTabResizeUnsubscribe: VoidCallback|null = null;

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
        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }
        if (this.focusedTabResizeUnsubscribe) {
            this.focusedTabResizeUnsubscribe();
            this.focusedTabResizeUnsubscribe = null;
        }
    }

    /**
     * Called by child tabs to register themselves.
     */
    public register(tab: BtTab): void {
        const domIdx = this.getTabToggleDomIndex(tab.$el);
        this.tabs.splice(domIdx, 0, tab);
        // Always focus the first tab, so we have something in case the id provided by the user doesn't match any tab.
        if (this.tabs.length === 1 || this.focusedTab === null || tab.id === this.focused) {
            this.focus(tab);
        }
        this.$forceUpdate();
    }

    /**
     * Called by child tabs to unregister themselves.
     */
    public unregister(tab: BtTab): void {
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
                    this.setFocusedTab(null);
                    this.changeFocusIndicatorVisibility(false);
                }
            }
            this.$forceUpdate();
        }
    }

    /**
     * Focus a tab.
     */
    public focus(tab: BtTab): void {
        for (const candidate of this.tabs) {
            if (candidate === tab && !candidate.focused) {
                if (candidate.disabled || candidate.fake) {
                    return ;
                }
                if (this.focusedTab !== null) {
                    this.focusedTab.onUnFocus();
                }
                this.setFocusedTab(tab);
                this.$nextTick(() => {
                    this.updateFocusIndicator();
                });
                candidate.onFocus();
                this.$emit('update:focused', candidate.id);
            }
        }
        if (this.focusedTab !== tab && !tab.disabled) {
            this.changeFocusIndicatorVisibility(false);
            this.setFocusedTab(null);
        } else if (this.focusedTab !== null) {
            this.changeFocusIndicatorVisibility(true);
        }
    }

    /**
     * Export the `tabs` array to the view without giving direct access
     * to prevent Vue from proxying the objects.
     */
    @Expose() public getTabs(): BtTab[] {
        return this.tabs;
    }

    @Watch('focused')
    public onFocusedChange(newValue: string|null): void {
        for (const candidate of this.tabs) {
            if (candidate.id === newValue) {
                this.focus(candidate);
                break ;
            }
        }
    }

    @Watch('direction')
    public onDirectionChange(): void {
        this.indicatorEl.removeAttribute('style');
        this.updateFocusIndicator();
        // Wait the end of the transition.
        setTimeout(() => {
            this.updateFocusIndicator();
        }, 300);
    }


    private setFocusedTab(tab: any): void {
        if (this.focusedTabResizeUnsubscribe) {
            this.focusedTabResizeUnsubscribe();
            this.focusedTabResizeUnsubscribe = null;
        }
        this.focusedTab = tab;
        this.hasFocusedTab = this.focusedTab !== null;
        if (this.focusedTab && this.focusedTab.$refs.toggle) {
            this.focusedTabResizeUnsubscribe = useResizeObserver(this.focusedTab.$refs.toggle, () => {
                this.updateFocusIndicator();
            }).stop;
        }
    }

    /**
     * Show/hide the floating focus indicator.
     */
    private changeFocusIndicatorVisibility(visible: boolean): void {
        if (this.indicatorEl) {
            this.indicatorEl.style.display = visible ? 'block' : 'none';
        }
    }

    /**
     * Update the position of the floating focus indicator.
     */
    private updateFocusIndicator(): void {
        if (!this.indicatorEl || !this.focusedTab || !this.focusedTab.$refs.toggle) {
            return ;
        }
        const offset = getElementOffset(this.focusedTab.$refs.toggle, false);
        const style = getComputedStyle(this.focusedTab.$refs.toggle);

        // In case the direction changed.
        if (this.direction === TabsDirection.Top) {
            const paddingLeft = parseFloat(style.paddingLeft);
            const paddingRight = parseFloat(style.paddingRight);
            this.indicatorEl.style.left = `${Math.round(offset.left + paddingLeft)}px`;
            this.indicatorEl.style.width = `${Math.round(this.focusedTab.$refs.toggle.offsetWidth - (paddingLeft + paddingRight))}px`;
        } else if (this.direction === TabsDirection.Left || this.direction === TabsDirection.Right) {
            const paddingTop = parseFloat(style.paddingTop);
            const paddingBottom = parseFloat(style.paddingBottom);
            this.indicatorEl.style.top = `${Math.round(offset.top + paddingTop)}px`;
            this.indicatorEl.style.height = `${Math.round(this.focusedTab.$refs.toggle.offsetHeight - (paddingTop + paddingBottom))}px`;
        }
    }

    /**
     * Observe changes to the `<bt-tab>` container to maintain the ordering sync.
     */
    private observeDOMMutations(): void {
        this.observer = new MutationObserver(throttle(() => {
            // Sort the tabs by DOM index
            this.tabs = this.tabs.sort((a: BtTab, b: BtTab) => {
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
            subtree: false
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
</script>
