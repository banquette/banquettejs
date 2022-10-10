import { Vue } from "@banquette/vue-typescript/vue";
export declare class AbstractProgressComponent extends Vue {
    /**
     * Current progression value.
     * The percent or progression will depend on the min and max values (given by `progressMin` and `progressMax`).
     */
    progress: number | null;
    /**
     * If `progress` is <= to this value, the percent of progression will be 0.
     */
    progressMin: number;
    /**
     * If `progress` is >= to this value, the percent of progression will be 100.
     */
    progressMax: number;
    /**
     * If `true` the progress text is visible.
     */
    showProgressText: boolean;
    /**
     * Progress text (animated).
     */
    animatedProgressText: number | null;
    private progressTimeout;
    isIndeterminate(): boolean;
    progressPercent(): number | null;
    onProgressChange(newValue: number): void;
}
