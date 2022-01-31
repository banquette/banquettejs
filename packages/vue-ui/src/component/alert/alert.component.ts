import { ensureNumber } from "@banquette/utils-type/ensure-number";
import { isString } from "@banquette/utils-type/is-string";
import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { ThemeVar } from "@banquette/vue-typescript/decorator/theme-var.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { Watch, ImmediateStrategy } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";
import ButtonComponent from "../button/button.component";
import ProgressHorizontalComponent from "../progress-horizontal/progress-horizontal.component";

@Themeable({
    vars: {
        padding: 'nbhs2z7c',
        borderRadius: 'wx0vo20z',
        spacing: 'dmxsy58d',
        background: 'ni39d4qg',
        color: 'g1fn6ajn',
        fontSize: 'hbg78pnf',
        fontWeight: 'l0twpelz',

        title: {
            fontWeight: 'x6oydw56',
            fontSize: 'm2pih5zj'
        },

        animation: {
            fadeDuration: 'ngrmdl3g'
        },

        progressOffset: {
            translateY: 'Siw2gbbg'
        }
    }
})
@Component({
    name: 'bt-alert',
    components: [ButtonComponent, ProgressHorizontalComponent],
})
export default class AlertComponent extends Vue {
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
    @Prop({type: Number, default: null, validate: (v: any) => parseInt(v, 10)}) public ttl!: number|null;

    /**
     * If `true` the end-user can close the alert by themselves.
     */
    @Prop({type: Boolean, default: false}) public closable!: boolean;

    /**
     * `true` if the minimized view should be visible.
     */
    @Expose() public minimized: boolean = false;

    /**
     * Number of milliseconds the alert has left before it is destroyed.
     * Only defined if `ttl` has a value.
     */
    @Expose() public timeLeft: number|null = null;

    /**
     * Fade animation controls.
     */
    @Expose() public fadingIn: boolean = true;
    @Expose() public fadingOut: boolean = false;

    /**
     * Bridge to the `fadeDuration` css variables so timeouts can be timed properly.
     */
    @ThemeVar({
        name: 'animation.fadeDuration',
        defaultValue: '0.5s',
        validate: function(this: AlertComponent, v) { return this.parseStringDuration(v) }
    }) public fadeDuration!: number;

    /**
     * Internals.
     */
    private ttlStartTime: number|null = null;
    private ttlTimeoutId: number|null = null;
    private isUnmounted: boolean = false;

    public mounted(): void {
        window.setTimeout(() => {
            this.fadingIn = false;
        }, this.fadeDuration);
    }

    /**
     * Vue lifecycle.
     */
    public unmounted(): void {
        this.isUnmounted = true;
    }

    @Expose() public hasSlot(name: string): boolean {
        return super.hasSlot(name);
    }

    /**
     * Compress the alert in a smaller version.
     */
    @Expose() public minimize(): void {
        if (this.hasSlot('minimized')) {
            this.minimized = true;
        } else {
            console.warn('You must defined a minimized version of the alert by giving a content to the "minimized" slot.');
        }
    }

    /**
     * Get the alert back to its normal state.
     */
    @Expose() public maximize(): void {
        this.minimized = false;
    }

    /**
     * Remove the alert.
     */
    @Expose() public destroy(): void {
        if (this.fadingOut) {
            return ;
        }
        this.fadingOut = true;
        window.setTimeout(() => {
            this.$emit('destroy');
            this.$nextTick(() => {
                if (!this.isUnmounted) {
                    console.warn(
                        `You should consider putting your alert in a component listening to the "destroy" event if you intend to remove it. ` +
                        `Vue3 doesn't offer a clean way for a component to remove itself, ` +
                        `the DOM has been cleared but the component's instance remains in memory.`
                    );
                    this.$el.parentNode.removeChild(this.$el);
                }
            });
            this.fadingOut = false;
        }, this.fadeDuration);
    }

    @Watch('ttl', {immediate: ImmediateStrategy.NextTick})
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
            this.ttlTimeoutId = null;
            if (this.ttl !== null && this.ttlStartTime !== null) {
                this.timeLeft = Math.max(0, this.ttl - ((new Date()).getTime() - this.ttlStartTime));
            } else {
                this.timeLeft = null;
            }
            if (this.timeLeft) {
                this.updateTimeLeft();
            } else if (this.timeLeft === 0) {
                this.destroy();
            }
        });
    }

    /**
     * Parse a css duration into a number of milliseconds.
     */
    private parseStringDuration(input: any): number {
        if (isString(input)) {
            let asNum = parseFloat(input);
            if (input.match(/[^m]s\s*$/)) {
                asNum *= 1000;
            }
            return asNum;
        }
        return ensureNumber(input);
    }
}
