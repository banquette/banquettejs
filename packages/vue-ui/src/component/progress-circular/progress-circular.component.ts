import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { AbstractProgressComponent } from "../../composable/abstract-progress.component";

@Themeable({
    vars: {
        fill: 'l28ys2ii',
        stroke: 'g1n433fu',
        size: 'qcpx3dwi',
        fontSize: 'xwhylest'
    }
})
@Component('bt-progress-circular')
export default class ProgressCircularComponent extends AbstractProgressComponent {
    /**
     * Width of the stroke.
     */
    @Prop({type: Number, default: 3.5, validate: (v: any) => parseFloat(v)}) public strokeWidth!: number;

    @Computed() public get viewBox(): string {
        return `0 0 ${32 + this.strokeWidth} ${32 + this.strokeWidth}`;
    }

    @Computed() public get d(): string {
        return `M ${15.9155 + this.strokeWidth / 2} ${this.strokeWidth / 2} a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831`;
    }

    @Computed() public get strokeDasharray(): string {
        return this.progressPercent() !== null ? `${this.progressPercent()}, 100` : '';
    }
}
