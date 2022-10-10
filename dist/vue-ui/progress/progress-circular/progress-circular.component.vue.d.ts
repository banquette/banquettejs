import { AbstractProgressComponent } from "../abstract-progress.component";
export default class ProgressCircularComponent extends AbstractProgressComponent {
    /**
     * Width of the stroke.
     */
    strokeWidth: number;
    get viewBox(): string;
    get d(): string;
    get strokeDasharray(): string;
}
