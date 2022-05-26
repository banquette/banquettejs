import { Composable } from "@banquette/vue-typescript/decorator/composable.decorator";
import { Expose } from "@banquette/vue-typescript/decorator/expose.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Watch } from "@banquette/vue-typescript/decorator/watch.decorator";
import { Vue } from "@banquette/vue-typescript/vue";

@Composable()
export class AbstractProgressComponent extends Vue {
    /**
     * Current progression value.
     * The percent or progression will depend on the min and max values (given by `progressMin` and `progressMax`).
     */
    @Prop({
        type: [Number, String],
        default: null,
        transform: function(this: AbstractProgressComponent, v: any) {
            if (v === null) {
                return null;
            }
            v = parseFloat(v);
            return Math.max(this.progressMin, Math.min(this.progressMax, v));
        }
    }) public progress!: number|null;

    /**
     * If `progress` is <= to this value, the percent of progression will be 0.
     */
    @Prop({type: [Number, String], default: 0, transform: (v) => parseFloat(v)}) public progressMin!: number;

    /**
     * If `progress` is >= to this value, the percent of progression will be 100.
     */
    @Prop({type: [Number, String], default: 100, transform: (v) => parseFloat(v)}) public progressMax!: number;

    /**
     * If `true` the progress text is visible.
     */
    @Prop({type: Boolean, default: true}) public showProgressText!: boolean;

    /**
     * Progress text (animated).
     */
    @Expose() animatedProgressText: number|null = 0;
    private progressTimeout: number|null = null;

    @Expose() public isIndeterminate(): boolean {
        return this.progress === null;
    }

    @Expose() public progressPercent(): number|null {
        if (this.progress === null) {
            return null;
        }
        return (this.progress - this.progressMin) * 100 / (this.progressMax - this.progressMin);
    }

    @Watch('progress')
    public onProgressChange(newValue: number): void {
        if (newValue === null) {
            this.animatedProgressText = null;
            return ;
        }
        if (this.progressTimeout !== null) {
            window.cancelAnimationFrame(this.progressTimeout);
        }
        let t = 0;
        let duration = 300;
        let start = this.animatedProgressText || 0;
        let startTime: number|null = null;
        const next = () => {
            this.progressTimeout = window.requestAnimationFrame((timestamp: DOMHighResTimeStamp) => {
                const progressPercent = this.progressPercent();
                if (progressPercent === null) {
                    return ;
                }
                if (!startTime) {
                    startTime = timestamp;
                }
                t = timestamp - startTime;
                this.animatedProgressText = Math.round((((progressPercent - start) * (t * (1 / duration)))) + start);
                if (t < duration) {
                    next();
                } else {
                    this.animatedProgressText = Math.round(progressPercent);
                }
            });
        };
        next();
    }
}
