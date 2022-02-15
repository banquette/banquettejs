import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { AbstractProgressComponent } from "../abstract-progress.component";

@Themeable({
    vars: {
        height: 'xomrxf6z',
        background: 'uqkcll89',
        borderRadius: 'foxjm433',
        value: {
            background: 'xphbg2yf'
        },
        animation: {
            determinateTransitionSpeed: 'flk3iwhc',
            indeterminateTransitionSpeed: 'qk1nmbdw'
        }
    }
})
@Component('bt-progress-horizontal')
export default class ProgressHorizontalComponent extends AbstractProgressComponent {
    @Computed() public get width(): string {
        const p = this.progressPercent();
        return p !== null ? `${p}%` : '100%';
    }
}
