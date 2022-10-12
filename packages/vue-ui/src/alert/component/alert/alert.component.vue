<style src="./alert.component.css" scoped></style>
<template src="./alert.component.html" ></template>
<script lang="ts">
import { isServer } from "@banquette/utils-misc/is-server";
import { IconMaterialClose } from "@banquette/vue-material-icons/close";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { BindThemeDirective } from "@banquette/vue-typescript/theme/bind-theme.directive";
import { Vue } from "@banquette/vue-typescript/vue";
import { ButtonComponent } from "../../../button";
import { IconComponent } from "../../../icon";
import { ProgressHorizontalComponent } from "../../../progress/progress-horizontal";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-alert',
    components: [IconComponent, ButtonComponent, ProgressHorizontalComponent, IconMaterialClose],
    directives: [BindThemeDirective],
    emits: ['update:visible', 'close'],
})
export default class AlertComponent extends Vue {
    /**
     * An optional title to show above the content.
     * You can also override the "title" slot.
     */
    @Prop({type: String, default: null}) public title!: string|null;

    /**
     * The name of the icon to show, or `null` to show none.
     */
    @Prop({type: String, default: null}) public icon!: string|null;

    /**
     * The name of set of icon to get the icon from.
     */
    @Prop({type: String, default: 'material'}) public iconSet!: string;

    /**
     * Time to live.
     * If > 0, defines the number of milliseconds the alert will stay alive.
     */
    @Prop({type: Number, default: null, transform: (v: any) => parseInt(String(v), 10) || null}) public ttl!: number|null;

    /**
     * If `true` the end-user can close the alert by themselves.
     */
    @Prop({type: Boolean, default: false}) public closable!: boolean;

    /**
     * If `true`, evaluate the HTML code present in the message and title.
     */
    @Prop({type: Boolean, default: false}) public allowHtml!: boolean;

    /**
     * Name of the transition to apply when an alert is shown / hidden.
     * If `false`, disable the transition.
     */
    @Prop({type: [String, Boolean], default: undefined}) public transition!: string|false|undefined;

    /**
     * Bi-directional visibility control.
     */
    @Prop({type: Boolean, default: null}) public visible!: boolean|null;

    /**
     * Bidirectional binding for the visibility so the dialog can be closed
     * both from the inside and outside the component.
     */
    @Computed()
    public get isVisible(): boolean {
        return this.visible === true || this.internalVisible;
    }
    public set isVisible(value: boolean) {
        this.$emit('update:visible', value);
    }

    /**
     * Number of milliseconds the alert has left before it is destroyed.
     * Only defined if `ttl` has a value.
     */
    @Expose() public timeLeft: number|null = null;

    /**
     * Internals.
     */
    @Ref() private internalVisible: boolean = false;
    private ttlStartTime: number|null = null;
    private ttlTimeoutId: number|null = null;

    @Expose() public hasSlot(name: string): boolean {
        return super.hasSlot(name);
    }

    /**
     * Vue lifecycle.
     */
    public mounted(): void {
        // `internalVisible` to true only after the first render
        // so the opening transition works.
        this.internalVisible = true;
    }

    /**
     * Show the alert.
     */
    @Expose() public show(): void {
        this.isVisible = true;
        this.internalVisible = true;
        this.$forceUpdateComputed();
    }

    /**
     * Hide the alert.
     */
    @Expose() public close(): void {
        this.isVisible = false;
        this.internalVisible = false;
        this.$forceUpdateComputed();
    }

    @Expose() public onAfterLeave(): void {
        this.$emit('close');
    }

    @Watch('ttl', {immediate: ImmediateStrategy.BeforeMount})
    public onTTLChange(newValue: number|null) {
        if (newValue === null) {
            this.timeLeft = null;
            return ;
        }
        this.ttlStartTime = (new Date()).getTime();
        this.timeLeft = newValue;
        this.updateTimeLeft();
    }

    @Watch('visible', {immediate: false})
    private onVisibilityChange(newValue: boolean): void {
        if (newValue) {
            this.show();
        } else {
            this.close();
        }
    }

    /**
     * Animate the ttl.
     */
    private updateTimeLeft(): void {
        if (this.ttlTimeoutId !== null || isServer()) {
            return ;
        }
        this.ttlTimeoutId = window.requestAnimationFrame(() => {
            const ttl = this.ttl;
            this.ttlTimeoutId = null;
            if (ttl !== null && this.ttlStartTime !== null) {
                this.timeLeft = Math.max(0, ttl - ((new Date()).getTime() - this.ttlStartTime));
            } else {
                this.timeLeft = null;
            }
            if (this.timeLeft) {
                this.updateTimeLeft();
            } else if (this.timeLeft === 0) {
                this.close();
            }
        });
    }
}
</script>
