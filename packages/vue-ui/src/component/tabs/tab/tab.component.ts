import { UsageException } from "@banquette/exception/usage.exception";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Vue } from "@banquette/vue-typescript/vue";

@Component('bt-tab')
export default class TabComponent extends Vue {
    /**
     * A unique identifier for the tab.
     * Used to focus the tab from the outside.
     */
    @Prop({type: String, default: null}) public id!: string;

    /**
     * The content to show on the toggle button of the tab.
     * Can be overridden via the `title` slot.
     */
    @Prop({type: String, default: null}) public title!: string;

    /**
     * If `true`, the tab is non focusable.
     */
    @Prop({type: Boolean, default: false}) public disabled!: boolean;

    /**
     * If `true` the tab will not be focusable.
     * Only the selector will appear and be clickable.
     */
    @Prop({type: Boolean, default: false}) public fake!: boolean;

    @Computed() public get preRender(): boolean {
        return this.parent && this.parent.preRender;
    }
    @Expose() public focused: boolean = false;

    /**
     * A reference on the parent component instance.
     *
     * NOTE:
     * There is no @Ref() here of Vue will proxify all properties of the parent, including "tabs" and we don't want that.
     * Instead note the use of $forceUpdateComputed() to update the `preRender` computed after `mounted` has been called.
     */
    private parent!: any;

    /**
     * Vue lifecycle method.
     */
    public mounted(): void {
        if (this.getComponentName(this.$parent) !== 'bt-tabs') {
            throw new UsageException('A "<bt-tab>" must always be placed inside a <bt-tabs></bt-tabs> component.');
        }
        this.parent = this.$parent;
        this.parent.register(this);
        this.$forceUpdateComputed();
    }

    /**
     * Vue lifecycle method.
     */
    public beforeUnmount(): void {
        this.parent.unregister(this);
    }

    /**
     * Focus the tab, making its content visible.
     */
    @Expose() public focus(): void {
        this.parent.focus(this);
    }

    /**
     * Called when the focus is given to the tab.
     */
    public onFocus(): void {
        this.focused = true;
    }

    /**
     * Called when the focus is dropped from the tab.
     */
    public onUnFocus(): void {
        this.focused = false;
    }
}
