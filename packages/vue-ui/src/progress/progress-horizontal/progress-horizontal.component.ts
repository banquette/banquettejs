import { Component } from "@banquette/vue-typescript/decorator/component.decorator";
import { Computed } from "@banquette/vue-typescript/decorator/computed.decorator";
import { Themeable } from "@banquette/vue-typescript/decorator/themeable.decorator";
import { PopoverDirective, PopoverComponent } from "../../popover";
import { AbstractProgressComponent } from "../abstract-progress.component";
import { ThemeConfiguration } from "./theme-configuration";

@Themeable(ThemeConfiguration)
@Component({
    name: 'bt-progress-horizontal',
    components: [PopoverComponent],
    directives: [PopoverDirective]
})
export default class ProgressHorizontalComponent extends AbstractProgressComponent {
    @Computed() public get width(): string {
        const p = this.progressPercent();
        return p !== null ? `${p}%` : '100%';
    }
}
