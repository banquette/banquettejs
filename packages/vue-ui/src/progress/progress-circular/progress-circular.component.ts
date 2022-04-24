import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Prop } from "@banquette/vue-typescript/decorator/prop.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { AbstractProgressComponent } from "../abstract-progress.component";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component('bt-progress-circular')
export default class ProgressCircularComponent extends AbstractProgressComponent {
    /**
     * Width of the stroke.
     */
    @Prop({type: Number, default: 3.5, transform: (v: any) => parseFloat(v)}) public strokeWidth!: number;

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
