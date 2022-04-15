import { IconClose } from "@banquette/vue-material-icons/icon-close";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Ref } from "@banquette/vue-typescript/decorator/ref.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import { ButtonComponent } from "../../../button";
import { ProgressHorizontalComponent } from "../../../progress/progress-horizontal";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-alert',
    components: [ButtonComponent, ProgressHorizontalComponent, IconClose],
    emits: ['update:modelValue', 'close'],
})
export default class AlertComponent extends Vue {
    // "v-model" recipient
    @Prop({type: Boolean, default: false}) public modelValue!: boolean;

    /**
     * An optional title to show above the content.
     * You can also override the "title" slot.
     */
    @Prop({type: String, default: null}) public title!: string|null;

    /**
     * The name of the icon component to show.
     */
    @Prop({type: String, default: null}) public icon!: string|null;

    /**
     * Time to live.
     * If > 0, defines the number of milliseconds the alert will stay alive.
     */
    @Prop({type: Number, default: null, validate: (v: any) => parseInt(String(v), 10)}) public ttl!: number|null;

    /**
     * If `true` the end-user can close the alert by themselves.
     */
    @Prop({type: Boolean, default: false}) public closable!: boolean;

    /**
     * Bi-directional binding for the visibility so the dialog can be closed
     * both from the inside and outside of the component.
     */
    @Computed()
    public get visible(): boolean {
        return this.modelValue || this.internalVisible;
    }
    public set visible(value: boolean) {
        this.$emit('update:modelValue', value);
    }

    /**
     * Number of milliseconds the alert has left before it is destroyed.
     * Only defined if `ttl` has a value.
     */
    @Expose() public timeLeft: number|null = null;

    /**
     * Internals.
     */
    @Ref() private internalVisible: boolean = true;
    private ttlStartTime: number|null = null;
    private ttlTimeoutId: number|null = null;

    @Expose() public hasSlot(name: string): boolean {
        return super.hasSlot(name);
    }

    /**
     * Remove the alert.
     */
    @Expose() public close(): void {
        this.visible = false;
        this.internalVisible = false;
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

    /**
     * Animate the ttl.
     */
    private updateTimeLeft(): void {
        if (this.ttlTimeoutId !== null) {
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
